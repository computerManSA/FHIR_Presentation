
const express = require('express');
const cors = require('cors');
const { Kafka } = require('kafkajs');
const redis = require('redis');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const winston = require('winston');

// Configure logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'converter.log' })
  ]
});

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Environment variables
const FHIR_SERVER_URL = process.env.FHIR_SERVER_URL || 'http://localhost:8080/fhir';
const REDPANDA_BROKERS = process.env.REDPANDA_BROKERS || 'localhost:9092';
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';

// Initialize Redis client
const redisClient = redis.createClient({ url: REDIS_URL });
redisClient.connect().catch(console.error);

// Initialize Kafka
const kafka = new Kafka({
  clientId: 'fhir-converter',
  brokers: REDPANDA_BROKERS.split(',')
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'converter-group' });

// HL7v2 to FHIR conversion functions
function convertHL7v2Patient(hl7Message) {
  // Simplified HL7v2 ADT to FHIR Patient conversion
  const segments = hl7Message.split('\r');
  const pidSegment = segments.find(seg => seg.startsWith('PID'));
  
  if (!pidSegment) {
    throw new Error('No PID segment found in HL7v2 message');
  }
  
  const fields = pidSegment.split('|');
  
  return {
    resourceType: 'Patient',
    id: uuidv4(),
    identifier: [{
      system: 'http://moh.gov.sa/patient-id',
      value: fields[3] || 'unknown'
    }],
    name: [{
      family: fields[5]?.split('^')[0] || 'Unknown',
      given: [fields[5]?.split('^')[1] || 'Unknown']
    }],
    gender: mapGender(fields[8]),
    birthDate: formatDate(fields[7]),
    telecom: [{
      system: 'phone',
      value: fields[13] || '',
      use: 'home'
    }],
    address: [{
      line: [fields[11] || ''],
      city: fields[11]?.split('^')[2] || '',
      country: 'SA'
    }],
    meta: {
      lastUpdated: new Date().toISOString(),
      source: 'HL7v2-Converter',
      tag: [{
        system: 'http://moh.gov.sa/tags',
        code: 'converted',
        display: 'Converted from HL7v2'
      }]
    }
  };
}

function convertHL7v2Encounter(hl7Message) {
  const segments = hl7Message.split('\r');
  const pv1Segment = segments.find(seg => seg.startsWith('PV1'));
  const pidSegment = segments.find(seg => seg.startsWith('PID'));
  
  if (!pv1Segment || !pidSegment) {
    throw new Error('Required segments not found');
  }
  
  const pv1Fields = pv1Segment.split('|');
  const pidFields = pidSegment.split('|');
  
  return {
    resourceType: 'Encounter',
    id: uuidv4(),
    status: 'finished',
    class: {
      system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
      code: mapEncounterClass(pv1Fields[2]),
      display: mapEncounterClassDisplay(pv1Fields[2])
    },
    subject: {
      reference: `Patient/${pidFields[3]}`
    },
    period: {
      start: formatDateTime(pv1Fields[44]),
      end: formatDateTime(pv1Fields[45])
    },
    location: [{
      location: {
        reference: `Location/${pv1Fields[3]}`
      }
    }],
    meta: {
      lastUpdated: new Date().toISOString(),
      source: 'HL7v2-Converter'
    }
  };
}

// CDA to FHIR conversion (simplified)
function convertCDADocument(cdaXml) {
  // This is a simplified example - real CDA parsing would use XML parser
  return {
    resourceType: 'DocumentReference',
    id: uuidv4(),
    status: 'current',
    type: {
      coding: [{
        system: 'http://loinc.org',
        code: '34133-9',
        display: 'Summarization of Episode Note'
      }]
    },
    subject: {
      reference: 'Patient/example'
    },
    date: new Date().toISOString(),
    content: [{
      attachment: {
        contentType: 'application/xml',
        data: Buffer.from(cdaXml).toString('base64')
      }
    }],
    meta: {
      lastUpdated: new Date().toISOString(),
      source: 'CDA-Converter'
    }
  };
}

// Utility functions
function mapGender(hl7Gender) {
  const mapping = { 'M': 'male', 'F': 'female', 'O': 'other', 'U': 'unknown' };
  return mapping[hl7Gender] || 'unknown';
}

function mapEncounterClass(hl7Class) {
  const mapping = { 'I': 'IMP', 'O': 'AMB', 'E': 'EMER' };
  return mapping[hl7Class] || 'AMB';
}

function mapEncounterClassDisplay(hl7Class) {
  const mapping = { 'I': 'Inpatient', 'O': 'Outpatient', 'E': 'Emergency' };
  return mapping[hl7Class] || 'Ambulatory';
}

function formatDate(hl7Date) {
  if (!hl7Date) return null;
  const year = hl7Date.substring(0, 4);
  const month = hl7Date.substring(4, 6);
  const day = hl7Date.substring(6, 8);
  return `${year}-${month}-${day}`;
}

function formatDateTime(hl7DateTime) {
  if (!hl7DateTime) return null;
  const date = formatDate(hl7DateTime);
  const hour = hl7DateTime.substring(8, 10) || '00';
  const minute = hl7DateTime.substring(10, 12) || '00';
  return `${date}T${hour}:${minute}:00Z`;
}

// API Endpoints
app.post('/convert/hl7v2', async (req, res) => {
  try {
    const { message, messageType } = req.body;
    
    logger.info(`Converting HL7v2 message type: ${messageType}`);
    
    let fhirResource;
    
    switch (messageType) {
      case 'ADT':
        fhirResource = convertHL7v2Patient(message);
        break;
      case 'ORM':
        // Order message conversion would go here
        fhirResource = { resourceType: 'ServiceRequest', id: uuidv4() };
        break;
      case 'ORU':
        // Result message conversion would go here
        fhirResource = { resourceType: 'Observation', id: uuidv4() };
        break;
      default:
        throw new Error(`Unsupported message type: ${messageType}`);
    }
    
    // Store in FHIR server
    const response = await axios.post(`${FHIR_SERVER_URL}/${fhirResource.resourceType}`, fhirResource, {
      headers: { 'Content-Type': 'application/fhir+json' }
    });
    
    // Cache the conversion result
    await redisClient.setEx(`conversion:${fhirResource.id}`, 3600, JSON.stringify(fhirResource));
    
    // Publish notification event
    await producer.send({
      topic: 'fhir.notifications.patient',
      messages: [{
        key: fhirResource.id,
        value: JSON.stringify({
          resourceType: fhirResource.resourceType,
          resourceId: fhirResource.id,
          eventType: 'created',
          timestamp: new Date().toISOString(),
          source: 'converter-service'
        })
      }]
    });
    
    logger.info(`Successfully converted and stored ${fhirResource.resourceType}/${fhirResource.id}`);
    
    res.json({
      success: true,
      resourceType: fhirResource.resourceType,
      resourceId: fhirResource.id,
      fhirServerResponse: response.data
    });
    
  } catch (error) {
    logger.error('Conversion error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.post('/convert/cda', async (req, res) => {
  try {
    const { document } = req.body;
    
    logger.info('Converting CDA document');
    
    const fhirResource = convertCDADocument(document);
    
    const response = await axios.post(`${FHIR_SERVER_URL}/DocumentReference`, fhirResource, {
      headers: { 'Content-Type': 'application/fhir+json' }
    });
    
    await redisClient.setEx(`conversion:${fhirResource.id}`, 3600, JSON.stringify(fhirResource));
    
    await producer.send({
      topic: 'fhir.notifications.document',
      messages: [{
        key: fhirResource.id,
        value: JSON.stringify({
          resourceType: fhirResource.resourceType,
          resourceId: fhirResource.id,
          eventType: 'created',
          timestamp: new Date().toISOString(),
          source: 'converter-service'
        })
      }]
    });
    
    logger.info(`Successfully converted and stored DocumentReference/${fhirResource.id}`);
    
    res.json({
      success: true,
      resourceType: fhirResource.resourceType,
      resourceId: fhirResource.id,
      fhirServerResponse: response.data
    });
    
  } catch (error) {
    logger.error('CDA conversion error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'fhir-converter' });
});

app.get('/metrics', async (req, res) => {
  try {
    const cacheKeys = await redisClient.keys('conversion:*');
    res.json({
      totalConversions: cacheKeys.length,
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage()
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Initialize Kafka connections
async function initializeKafka() {
  try {
    await producer.connect();
    logger.info('Kafka producer connected');
  } catch (error) {
    logger.error('Failed to connect to Kafka:', error);
  }
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', async () => {
  await initializeKafka();
  logger.info(`FHIR Converter Service running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  await producer.disconnect();
  await redisClient.quit();
  process.exit(0);
});
