const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept']
}));
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    service: 'fhir-converter',
    timestamp: new Date().toISOString(),
    environment: 'replit'
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    service: 'FHIR Converter Service',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      convert: '/convert/hl7v2'
    }
  });
});

// HL7v2 to FHIR conversion endpoint
app.post('/convert/hl7v2', (req, res) => {
  try {
    const { messageType, message } = req.body;

    console.log(`Converting ${messageType} message:`, message?.substring(0, 100) + '...');

    // Mock conversion logic for demo - simulates real FHIR conversion
    const fhirResource = {
      resourceType: 'Patient',
      id: 'example-patient-' + Date.now(),
      identifier: [{
        system: 'http://moh.sa/patient-id',
        value: 'PID123456'
      }],
      name: [{
        family: 'Al-Rashid',
        given: ['Ahmed', 'Mohammed']
      }],
      gender: 'male',
      birthDate: '1985-03-15',
      address: [{
        city: 'Riyadh',
        country: 'SA'
      }],
      telecom: [{
        system: 'phone',
        value: '+966501234567'
      }],
      meta: {
        source: 'converted-from-hl7v2',
        profile: ['http://moh.sa/fhir/StructureDefinition/moh-patient'],
        lastUpdated: new Date().toISOString()
      }
    };

    // Simulate notification event
    const notificationEvent = {
      eventType: 'patient.created',
      resourceType: 'Patient',
      resourceId: fhirResource.id,
      timestamp: new Date().toISOString(),
      source: 'fhir-converter'
    };

    console.log('✅ Conversion successful, patient resource created');

    res.json({
      success: true,
      originalMessage: { messageType, message: message?.substring(0, 100) + '...' },
      fhirResource,
      notificationEvent,
      conversionTimestamp: new Date().toISOString(),
      processingTime: Math.random() * 100 + 50 // Mock processing time
    });
  } catch (error) {
    console.error('❌ Conversion error:', error);
    res.status(500).json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// CDA to FHIR conversion endpoint (bonus)
app.post('/convert/cda', (req, res) => {
  try {
    const { document } = req.body;

    console.log('Converting CDA document...');

    const fhirBundle = {
      resourceType: 'Bundle',
      id: 'cda-conversion-' + Date.now(),
      type: 'document',
      timestamp: new Date().toISOString(),
      entry: [{
        resource: {
          resourceType: 'Composition',
          id: 'example-composition',
          status: 'final',
          type: {
            coding: [{
              system: 'http://loinc.org',
              code: '34133-9',
              display: 'Summary of episode note'
            }]
          },
          subject: {
            reference: 'Patient/example-patient'
          },
          date: new Date().toISOString()
        }
      }]
    };

    res.json({
      success: true,
      fhirBundle,
      conversionTimestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`🔄 FHIR Converter Service running on http://0.0.0.0:${port}`);
  console.log(`🌐 Health check: http://0.0.0.0:${port}/health`);
  console.log(`📡 Conversion endpoint: http://0.0.0.0:${port}/convert/hl7v2`);
});