import React, { useState } from 'react';
import { Shield, Eye, AlertTriangle, CheckCircle, Activity, Database, Server, Smartphone, Cloud, Zap, Lock, Monitor, GitBranch, RefreshCw, FileText, Settings, Network, Key } from 'lucide-react';

const EnhancedFHIRArchitecture = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedLayer, setSelectedLayer] = useState(null);
  const [showTopicsFlow, setShowTopicsFlow] = useState(false);

  // Enhanced brand-accurate logo components
  const BrandLogo = ({ type, size = 24 }) => {
    const logos = {
      apigee: (
        <div className="flex items-center justify-center" style={{ width: size, height: size }}>
          <div className="w-full h-full rounded-sm flex items-center justify-center text-white font-bold text-xs" 
               style={{ backgroundColor: '#4285f4', fontSize: size * 0.4 }}>
            API
          </div>
        </div>
      ),
      redpanda: (
        <div className="flex items-center justify-center" style={{ width: size, height: size }}>
          <div className="w-full h-full rounded flex items-center justify-center text-white font-bold"
               style={{ backgroundColor: '#e55c3c', fontSize: size * 0.3 }}>
            🐼
          </div>
        </div>
      ),
      oracle: (
        <div className="flex items-center justify-center" style={{ width: size, height: size }}>
          <div className="w-full h-full rounded flex items-center justify-center text-white font-bold text-xs"
               style={{ backgroundColor: '#f80000', fontSize: size * 0.3 }}>
            ORACLE
          </div>
        </div>
      ),
      minio: (
        <div className="flex items-center justify-center" style={{ width: size, height: size }}>
          <div className="w-full h-full rounded flex items-center justify-center text-white font-bold text-xs"
               style={{ backgroundColor: '#c73e1d', fontSize: size * 0.35 }}>
            S3
          </div>
        </div>
      ),
      mssql: (
        <div className="flex items-center justify-center" style={{ width: size, height: size }}>
          <div className="w-full h-full rounded flex items-center justify-center text-white font-bold text-xs"
               style={{ backgroundColor: '#00bcf2', fontSize: size * 0.35 }}>
            SQL
          </div>
        </div>
      ),
      redis: (
        <div className="flex items-center justify-center" style={{ width: size, height: size }}>
          <div className="w-full h-full rounded flex items-center justify-center text-white font-bold text-xs"
               style={{ backgroundColor: '#dc382d', fontSize: size * 0.3 }}>
            REDIS
          </div>
        </div>
      ),
      keycloak: (
        <div className="flex items-center justify-center" style={{ width: size, height: size }}>
          <div className="w-full h-full rounded flex items-center justify-center text-white font-bold text-xs"
               style={{ backgroundColor: '#1e3a8a', fontSize: size * 0.25 }}>
            🔐KC
          </div>
        </div>
      ),
      fhir: (
        <div className="flex items-center justify-center" style={{ width: size, height: size }}>
          <div className="w-full h-full rounded flex items-center justify-center text-white font-bold text-xs"
               style={{ backgroundColor: '#007acc', fontSize: size * 0.35 }}>
            FHIR
          </div>
        </div>
      ),
      hapi: (
        <div className="flex items-center justify-center" style={{ width: size, height: size }}>
          <div className="w-full h-full rounded flex items-center justify-center text-white font-bold text-xs"
               style={{ backgroundColor: '#007acc', fontSize: size * 0.3 }}>
            HAPI
          </div>
        </div>
      )
    };

    return logos[type] || null;
  };

  const componentDetails = {
    // External Systems (unchanged)
    'his': {
      name: 'Hospital Information Systems',
      description: 'Comprehensive healthcare information systems managing patient care, administrative processes, and clinical workflows across healthcare institutions.',
      technologies: ['HL7v2', 'Epic', 'Cerner', 'Oracle Health', 'Allscripts'],
      responsibilities: ['Patient registration and demographics', 'Clinical documentation', 'Order management', 'Laboratory results', 'Pharmacy integration'],
      dataFormats: ['HL7v2 ADT', 'HL7v2 ORM', 'HL7v2 ORU', 'Custom APIs'],
      integration: 'Primary source of clinical and administrative data',
      logo: null
    },
    'raqeem': {
      name: 'Raqeem System',
      description: 'Saudi national digital health platform managing healthcare services, provider registrations, and regulatory compliance.',
      technologies: ['Custom Platform', 'Oracle Database', 'SOA Architecture'],
      responsibilities: ['Healthcare provider registration', 'Service authorization', 'Regulatory compliance', 'Quality metrics'],
      dataFormats: ['Custom XML', 'RESTful APIs', 'SOAP Services'],
      integration: 'Provider validation and authorization data',
      logo: <BrandLogo type="oracle" size={24} />
    },
    'mawed': {
      name: 'Mawed Appointment System',
      description: 'Unified appointment scheduling platform coordinating healthcare service bookings across multiple providers and specialties.',
      technologies: ['Microservices', 'React Frontend', 'Node.js Backend', 'PostgreSQL'],
      responsibilities: ['Appointment scheduling', 'Provider calendar management', 'Patient notifications', 'Availability tracking'],
      dataFormats: ['RESTful JSON APIs', 'Real-time WebSockets'],
      integration: 'Appointment and scheduling information',
      logo: null
    },
    'eynti': {
      name: 'عينتي (Eynti) System',
      description: 'Electronic health record system focused on clinical documentation and patient care coordination in Saudi healthcare facilities.',
      technologies: ['Custom EHR Platform', 'HL7v2', 'CDA Documents'],
      responsibilities: ['Clinical documentation', 'Patient care plans', 'Medical history', 'Treatment protocols'],
      dataFormats: ['HL7v2', 'CDA R2', 'PDF Documents'],
      integration: 'Clinical documentation and care coordination',
      logo: null
    },
    'others': {
      name: 'Other Healthcare Systems',
      description: 'Various specialized healthcare systems including laboratory, radiology, pharmacy, and telemedicine platforms.',
      technologies: ['DICOM', 'LIS Systems', 'RIS Systems', 'Pharmacy Management'],
      responsibilities: ['Specialized clinical services', 'Diagnostic imaging', 'Laboratory results', 'Prescription management'],
      dataFormats: ['DICOM', 'HL7v2', 'Proprietary Formats'],
      integration: 'Specialized healthcare data and services',
      logo: null
    },

    // NPHIES Layer (Original components)
    'uc1': {
      name: 'Use Case 1 (HL7v2)',
      description: 'Handles HL7v2 message processing for administrative and clinical data exchange including ADT, ORM, and ORU messages.',
      technologies: ['HL7v2 Parser', 'MIRTH Connect', 'Custom Processing Engine'],
      responsibilities: ['ADT message processing', 'Order management', 'Result reporting', 'Patient demographics'],
      dataFormats: ['HL7v2 ADT^A01-A60', 'HL7v2 ORM^O01', 'HL7v2 ORU^R01'],
      integration: 'Core HL7v2 message processing pipeline',
      topics: ['Produces to: nphies.uc1.adt.events, nphies.uc1.orm.events, nphies.uc1.oru.events'],
      logo: null
    },
    'uc2': {
      name: 'Use Case 2 (CDA)',
      description: 'Processes Clinical Document Architecture documents for structured clinical documentation and care summaries.',
      technologies: ['CDA Parser', 'XSL Transformations', 'Document Repository'],
      responsibilities: ['Clinical document processing', 'Care summaries', 'Discharge summaries', 'Referral documents'],
      dataFormats: ['CDA R2', 'HL7 CCD', 'C32 Documents'],
      integration: 'Clinical document processing and storage',
      topics: ['Produces to: nphies.uc2.cda.events, nphies.uc2.document.events'],
      logo: null
    },
    'uc3': {
      name: 'Use Case 3',
      description: 'Specialized use case handling specific healthcare data exchange requirements including radiology and laboratory integration.',
      technologies: ['Custom Adapters', 'DICOM Gateway', 'LIS Integration'],
      responsibilities: ['Radiology integration', 'Laboratory data', 'Imaging metadata', 'Result distribution'],
      dataFormats: ['DICOM', 'HL7v2 ORU', 'Custom XML'],
      integration: 'Specialized clinical data processing',
      topics: ['Produces to: nphies.uc3.lab.events, nphies.uc3.radiology.events'],
      logo: null
    },
    'uc4': {
      name: 'Use Case 4',
      description: 'Handles insurance verification, claims processing, and financial data integration for healthcare administrative processes.',
      technologies: ['Claims Processing Engine', 'Insurance APIs', 'Financial Systems'],
      responsibilities: ['Insurance verification', 'Claims processing', 'Financial reporting', 'Coverage validation'],
      dataFormats: ['X12 EDI', 'Custom APIs', 'JSON'],
      integration: 'Insurance and financial data processing',
      topics: ['Produces to: nphies.uc4.claims.events, nphies.uc4.insurance.events'],
      logo: null
    },
    'ucn': {
      name: 'Use Case N',
      description: 'Extensible framework for additional use cases and future healthcare data exchange requirements.',
      technologies: ['Plugin Architecture', 'Configurable Processors', 'Rule Engine'],
      responsibilities: ['Future use cases', 'Custom integrations', 'Pilot programs', 'Specialized workflows'],
      dataFormats: ['Configurable', 'Multiple Standards Support'],
      integration: 'Flexible integration framework',
      topics: ['Produces to: nphies.ucn.*.events (configurable topics)'],
      logo: null
    },
    've': {
      name: 'Validation Engine',
      description: 'Validates incoming healthcare data against defined schemas, business rules, and data quality standards.',
      technologies: ['Schema Validators', 'Business Rules Engine', 'Data Quality Framework'],
      responsibilities: ['Data format validation', 'Business rule enforcement', 'Quality assurance', 'Error reporting'],
      dataFormats: ['All supported formats', 'Custom validation rules'],
      integration: 'Central validation point for all incoming data',
      logo: null
    },
    'ie': {
      name: 'Integration Engine',
      description: 'Orchestrates data transformation, routing, and processing across different healthcare systems and protocols.',
      technologies: ['ESB', 'Message Router', 'Transformation Engine', 'Workflow Manager'],
      responsibilities: ['Message routing', 'Protocol transformation', 'Workflow orchestration', 'System integration'],
      dataFormats: ['Multiple format support', 'Protocol bridging'],
      integration: 'Central integration hub',
      logo: null
    },
    'sp': {
      name: 'Streaming Producer',
      description: 'Publishes validated healthcare data as events to the streaming platform for real-time processing and distribution.',
      technologies: ['Redpanda Producer', 'Event Sourcing', 'Avro Serialization'],
      responsibilities: ['Event publishing', 'Topic management', 'Message ordering', 'Delivery guarantees'],
      dataFormats: ['Avro schemas', 'JSON events', 'Message metadata'],
      integration: 'NPHIES layer event publisher to streaming platform',
      topics: ['Publishes validated events from all use cases to their respective topics'],
      logo: <BrandLogo type="redpanda" size={20} />
    },
    'rdb': {
      name: 'Raw Data Database',
      description: 'Oracle database storing unprocessed healthcare data from various sources for audit purposes and reprocessing capabilities.',
      technologies: ['Oracle Database 19c', 'RAC Clustering', 'Data Guard'],
      responsibilities: ['Raw data storage', 'Audit trails', 'Data lineage', 'Reprocessing support'],
      dataFormats: ['Original formats preserved', 'Metadata enriched'],
      integration: 'Data persistence and audit layer',
      logo: <BrandLogo type="oracle" size={20} />
    },

    // Integration Layer (Enhanced, removed data lineage tracker)
    'ehs': {
      name: 'Error Handling Service',
      description: 'Comprehensive error management system providing retry mechanisms, dead letter queues, and failure notifications across all integration points.',
      technologies: ['Redpanda Dead Letter Queues', 'Circuit Breakers', 'Exponential Backoff', 'Alert Manager'],
      responsibilities: ['Error classification', 'Retry logic', 'Circuit breaker patterns', 'Alerting and notifications'],
      dataFormats: ['Error metadata', 'Failed message preservation', 'Retry metrics'],
      integration: 'Cross-cutting error management across all services',
      logo: null
    },
    'se': {
      name: 'Streaming Engine (Redpanda)',
      description: 'High-performance Kafka-compatible streaming platform enabling real-time data processing and distribution.',
      technologies: ['Redpanda Cluster', 'Schema Registry', 'Kafka Connect', 'Stream Processing'],
      responsibilities: ['Event streaming', 'Topic management', 'Consumer coordination', 'Message persistence'],
      dataFormats: ['Avro', 'JSON', 'Schema evolution', 'Compressed messages'],
      integration: 'Real-time data distribution backbone',
      topics: [
        'NPHIES topics: nphies.uc1.*, nphies.uc2.*, etc.',
        'FHIR topics: fhir.patient.*, fhir.encounter.*, etc.',
        'Error topics: errors.*, dlq.*'
      ],
      logo: <BrandLogo type="redpanda" size={24} />
    },
    'apigee': {
      name: 'APIGEE Gateway',
      description: 'Enterprise API management platform providing secure, monitored, and governed access to healthcare APIs.',
      technologies: ['Google APIGEE Edge', 'OAuth 2.0', 'Rate Limiting', 'API Analytics', 'Developer Portal'],
      responsibilities: ['API gateway', 'Authentication proxy', 'Rate limiting', 'API monitoring', 'Developer onboarding'],
      dataFormats: ['RESTful APIs', 'GraphQL', 'FHIR R4', 'OAuth tokens'],
      integration: 'Secure API access layer and authentication proxy',
      logo: <BrandLogo type="apigee" size={24} />
    },
    'ns': {
      name: 'Notification Service',
      description: 'Multi-channel notification system delivering alerts, updates, and messages to healthcare stakeholders.',
      technologies: ['Message Queues', 'WebSockets', 'Push Notifications', 'Email/SMS Gateway'],
      responsibilities: ['Real-time notifications', 'Multi-channel delivery', 'Notification templates', 'Delivery tracking'],
      dataFormats: ['Notification payloads', 'Template data', 'Delivery receipts'],
      integration: 'Communication and alerting system',
      logo: null
    },
    'rc': {
      name: 'Redis Cache',
      description: 'High-performance in-memory caching system optimizing data access patterns and reducing latency.',
      technologies: ['Redis Cluster', 'Redis Sentinel', 'Lua Scripting', 'Memory Optimization'],
      responsibilities: ['API response caching', 'Session management', 'Rate limiting counters', 'Cache invalidation'],
      dataFormats: ['Serialized JSON', 'Binary data', 'Cache keys', 'TTL metadata'],
      integration: 'Performance optimization layer',
      logo: <BrandLogo type="redis" size={24} />
    },
    'sds': {
      name: 'Storage & Document Service',
      description: 'MinIO S3-compatible object storage for clinical documents, images, and large healthcare data files.',
      technologies: ['MinIO Cluster', 'S3 API', 'Encryption at Rest', 'Lifecycle Management'],
      responsibilities: ['Document storage', 'File management', 'Secure access', 'Backup and archival'],
      dataFormats: ['PDF documents', 'DICOM images', 'Binary files', 'Metadata objects'],
      integration: 'Scalable document and file storage system',
      logo: <BrandLogo type="minio" size={24} />
    },

    // FHIR Server Layer (Enhanced with authentication)
    'auth': {
      name: 'Authentication Service (Keycloak + SMART)',
      description: 'Comprehensive authentication and authorization service combining Keycloak identity management with SMART on FHIR standards.',
      technologies: ['Keycloak 22+', 'SMART on FHIR', 'OAuth 2.0', 'OpenID Connect', 'SAML 2.0'],
      responsibilities: ['User authentication', 'SMART scopes management', 'Token validation', 'SSO integration', 'Fine-grained authorization'],
      dataFormats: ['JWT tokens', 'SMART scopes', 'User claims', 'Authorization decisions'],
      integration: 'Centralized authentication for all FHIR and API access',
      logo: <BrandLogo type="keycloak" size={24} />
    },
    'ffc': {
      name: 'FHIR Format Converter',
      description: 'Advanced conversion service transforming legacy healthcare formats into FHIR R4 resources.',
      technologies: ['HAPI FHIR', 'Mapping Languages', 'Transformation Engine', 'FHIR Validators'],
      responsibilities: ['HL7v2 to FHIR conversion', 'CDA to FHIR transformation', 'Mapping rule management', 'Conversion validation'],
      dataFormats: ['Input: HL7v2, CDA', 'Output: FHIR R4 Resources'],
      integration: 'Critical transformation layer enabling FHIR standardization',
      topics: [
        'Consumes from: nphies.uc1.*, nphies.uc2.*',
        'Produces to: fhir.patient.created, fhir.encounter.updated'
      ],
      logo: <BrandLogo type="fhir" size={24} />
    },
    'fcv': {
      name: 'FHIR Conformance Validator',
      description: 'Validates all FHIR resources against FHIR R4 specifications and implementation guides.',
      technologies: ['HAPI FHIR Validator', 'StructureDefinition', 'Implementation Guides', 'Terminology Services'],
      responsibilities: ['FHIR structure validation', 'Profile conformance', 'Terminology validation', 'Error reporting'],
      dataFormats: ['FHIR R4 Resources', 'Validation reports', 'Conformance outcomes'],
      integration: 'Quality gate ensuring FHIR compliance',
      logo: <BrandLogo type="fhir" size={24} />
    },
    'sc': {
      name: 'Streaming Consumer',
      description: 'Consumes healthcare events from Redpanda and processes them for FHIR resource creation.',
      technologies: ['Kafka Consumers', 'Avro Deserializers', 'Stream Processing', 'Event Handlers'],
      responsibilities: ['Event consumption', 'FHIR resource creation', 'Batch processing', 'Error handling'],
      dataFormats: ['Streaming events', 'FHIR Resources', 'Processing metadata'],
      integration: 'Bridge between streaming platform and FHIR processing',
      topics: [
        'Consumes from: nphies.uc1.*, nphies.uc2.*, nphies.uc3.*, nphies.uc4.*'
      ],
      logo: <BrandLogo type="redpanda" size={20} />
    },
    'fs': {
      name: 'FHIR Server (4.0.1)',
      description: 'Production-grade HAPI FHIR server providing full CRUD operations and search capabilities.',
      technologies: ['HAPI FHIR Server', 'PostgreSQL', 'Elasticsearch', 'JPA/Hibernate'],
      responsibilities: ['FHIR resource management', 'RESTful API', 'Search and query', 'Transaction support'],
      dataFormats: ['FHIR R4 Resources', 'Bundle transactions', 'Search parameters'],
      integration: 'Core FHIR data persistence and API layer',
      topics: [
        'Produces notifications to: fhir.notifications.patient, fhir.notifications.encounter'
      ],
      logo: <BrandLogo type="hapi" size={24} />
    },
    'bv': {
      name: 'Business Validation',
      description: 'Enforces healthcare-specific business rules and clinical validation logic.',
      technologies: ['Drools Rules Engine', 'Clinical Decision Support', 'Validation Framework'],
      responsibilities: ['Clinical rule validation', 'Business logic enforcement', 'Data integrity checks', 'Constraint validation'],
      dataFormats: ['FHIR Resources', 'Validation outcomes', 'Business rules'],
      integration: 'Clinical and business logic validation layer',
      logo: null
    },
    'rac': {
      name: 'Resource Access Controller',
      description: 'Fine-grained access control system managing permissions at the FHIR resource level.',
      technologies: ['SMART on FHIR', 'RBAC Engine', 'Policy Engine', 'Access Control Lists'],
      responsibilities: ['Resource-level authorization', 'SMART scopes enforcement', 'Access logging', 'Permission management'],
      dataFormats: ['Access tokens', 'Permission policies', 'Access logs'],
      integration: 'Security and authorization layer for FHIR resources',
      logo: null
    },
    'ts': {
      name: 'Terminology Service',
      description: 'Manages medical terminologies and code systems for consistent healthcare vocabulary.',
      technologies: ['HAPI FHIR Terminology', 'SNOMED CT', 'ICD-10', 'LOINC', 'ValueSet expansion'],
      responsibilities: ['Terminology management', 'Code validation', 'Concept mapping', 'ValueSet operations'],
      dataFormats: ['CodeSystem', 'ValueSet', 'ConceptMap', 'Terminology responses'],
      integration: 'Medical terminology standardization and validation',
      logo: null
    },
    'rv': {
      name: 'Retrieve Validation',
      description: 'Validates data retrieval operations ensuring appropriate access controls.',
      technologies: ['Query Validators', 'Access Checkers', 'Data Filters', 'Audit Loggers'],
      responsibilities: ['Query validation', 'Access verification', 'Data filtering', 'Response validation'],
      dataFormats: ['FHIR Queries', 'Search parameters', 'Filtered responses'],
      integration: 'Query validation and security layer',
      logo: null
    },
    'dc': {
      name: 'Data Cleansing',
      description: 'Processes and cleans healthcare data ensuring quality and standardization.',
      technologies: ['Data Quality Tools', 'ETL Processes', 'Cleansing Rules', 'Quality Metrics'],
      responsibilities: ['Data standardization', 'Quality improvement', 'Duplicate detection', 'Data enrichment'],
      dataFormats: ['Raw FHIR Resources', 'Cleansed FHIR Resources', 'Quality reports'],
      integration: 'Data quality assurance and improvement layer',
      logo: null
    },
    'red': {
      name: 'Redis (FHIR Cache)',
      description: 'Specialized Redis implementation for caching FHIR resources and improving query performance.',
      technologies: ['Redis Cluster', 'FHIR-specific caching', 'Cache warming', 'TTL management'],
      responsibilities: ['FHIR resource caching', 'Query result caching', 'Performance optimization', 'Cache invalidation'],
      dataFormats: ['Cached FHIR Resources', 'Query results', 'Cache metadata'],
      integration: 'FHIR-optimized caching layer',
      logo: <BrandLogo type="redis" size={24} />
    },
    'cddb': {
      name: 'Cleansed Data Database',
      description: 'Microsoft SQL Server optimized for storing high-quality, processed FHIR resources.',
      technologies: ['SQL Server 2022', 'FHIR-optimized schema', 'Columnstore indexes', 'Always On AG'],
      responsibilities: ['Clean data storage', 'Optimized queries', 'Data integrity', 'Performance optimization'],
      dataFormats: ['Validated FHIR Resources', 'Optimized structures', 'Index metadata'],
      integration: 'Primary storage for production-ready FHIR data',
      logo: <BrandLogo type="mssql" size={24} />
    },

    // Sehhaty Layer (Enhanced)
    'dss': {
      name: 'Offline Sync Service',
      description: 'Manages offline data synchronization and conflict resolution for mobile healthcare applications.',
      technologies: ['CouchDB', 'Conflict Resolution Engine', 'Delta Sync', 'Offline Storage'],
      responsibilities: ['Offline/online synchronization', 'Conflict resolution', 'Mobile data persistence', 'Connection state management'],
      dataFormats: ['FHIR Resources', 'Sync deltas', 'Conflict markers', 'Revision metadata'],
      integration: 'Enables robust offline functionality for mobile healthcare apps',
      logo: null
    },
    'mob': {
      name: 'Mobile (FHIR Compliant)',
      description: 'Patient-facing mobile application with FHIR integration and real-time notifications.',
      technologies: ['React Native', 'FHIR Client SDK', 'Push Notifications', 'Biometric Auth'],
      responsibilities: ['Patient interface', 'Health record access', 'Appointment management', 'Real-time notifications'],
      dataFormats: ['FHIR Resources', 'Notification events', 'UI Data Models', 'Offline cache'],
      integration: 'Primary patient channel - receives notifications and pulls FHIR data',
      topics: [
        'Subscribes to: fhir.notifications.patient.{patientId}'
      ],
      logo: null
    },
    'be': {
      name: 'Backend (FHIR Compliant)',
      description: 'Healthcare provider backend system with FHIR workflows and event processing.',
      technologies: ['Spring Boot', 'FHIR APIs', 'Workflow Engine', 'Event Processing'],
      responsibilities: ['Provider workflows', 'Clinical tools', 'Administrative functions', 'Event processing'],
      dataFormats: ['FHIR Resources', 'Workflow definitions', 'Event notifications', 'Provider data'],
      integration: 'Provider-facing system processing streaming events and querying FHIR',
      topics: [
        'Subscribes to: fhir.notifications.encounter.*, fhir.notifications.organization.*'
      ],
      logo: null
    },
    'fcli': {
      name: 'FHIR Client (HAPI)',
      description: 'HAPI FHIR client providing standardized access patterns and authentication.',
      technologies: ['HAPI FHIR Client', 'OAuth 2.0 Client', 'Connection pooling', 'Retry logic'],
      responsibilities: ['FHIR API client', 'Authentication management', 'Resource operations', 'Event-driven pulling'],
      dataFormats: ['FHIR Resources', 'API Requests/Responses', 'OAuth tokens'],
      integration: 'Standard FHIR client that pulls resources based on streaming notifications',
      logo: <BrandLogo type="hapi" size={24} />
    },
    'stc': {
      name: 'Streaming Consumers',
      description: 'Event consumers processing FHIR notifications and triggering resource pulls.',
      technologies: ['Redpanda Consumers', 'Event Handlers', 'Message Queues', 'Dead Letter Handling'],
      responsibilities: ['Event notification processing', 'Resource ID extraction', 'Pull trigger management', 'Error handling'],
      dataFormats: ['Event notifications', 'Resource references', 'Processing metadata'],
      integration: 'Receives notifications with resource IDs, triggers FHIR client to pull full resources',
      topics: [
        'Consumes from: fhir.notifications.*'
      ],
      logo: <BrandLogo type="redpanda" size={20} />
    }
  };

  const layers = [
    {
      id: 'external',
      name: 'External Systems Layer',
      color: 'bg-blue-50 border-blue-200',
      description: 'Healthcare institutions and systems providing clinical and administrative data',
      details: 'External healthcare systems that generate clinical and administrative data. These systems trigger the data flow by sending information to NPHIES through various protocols.'
    },
    {
      id: 'nphies',
      name: 'NPHIES Layer (Unchanged)',
      color: 'bg-green-50 border-green-200',
      description: 'National platform processing healthcare use cases - unchanged for minimal integration',
      details: 'NPHIES processes use cases and publishes events to specific topics (nphies.uc1.*, nphies.uc2.*, etc.) when data is validated and processed.'
    },
    {
      id: 'integration',
      name: 'Enhanced Integration Layer',
      color: 'bg-yellow-50 border-yellow-200',
      description: 'Redpanda-based event streaming with comprehensive error handling',
      details: 'Redpanda provides the streaming backbone with topics for different data flows. Error handling ensures reliability across all streaming operations.'
    },
    {
      id: 'fhir',
      name: 'Enhanced FHIR Server Layer',
      color: 'bg-red-50 border-red-200',
      description: 'FHIR processing with Keycloak+SMART authentication and format conversion',
      details: 'Converts legacy formats to FHIR, validates compliance, and publishes notifications to FHIR topics (fhir.patient.*, fhir.encounter.*, etc.) for consumers.'
    },
    {
      id: 'sehhaty',
      name: 'Enhanced Sehhaty Layer',
      color: 'bg-purple-50 border-purple-200',
      description: 'Event-driven applications with notification+pull pattern and offline sync',
      details: 'Applications subscribe to FHIR notification topics, then pull complete resources via FHIR APIs. Offline sync ensures mobile functionality without connectivity.'
    }
  ];

  const streamingFlow = [
    {
      stage: 'External → NPHIES',
      description: 'External systems send data to NPHIES use cases via various protocols',
      notInScope: true
    },
    {
      stage: 'NPHIES → Streaming',
      topic: 'nphies.uc1.adt.events, nphies.uc2.cda.events, nphies.uc3.lab.events, nphies.uc4.claims.events',
      description: 'NPHIES publishes validated data to use case-specific topics',
      producer: 'NPHIES Streaming Producer',
      consumer: 'FHIR Format Converter'
    },
    {
      stage: 'FHIR Processing',
      topic: 'fhir.patient.created, fhir.encounter.updated, fhir.observation.created',
      description: 'FHIR layer publishes lightweight notifications with resource IDs',
      producer: 'FHIR Server',
      consumer: 'Sehhaty Streaming Consumers'
    },
    {
      stage: 'Sehhaty Pull',
      description: 'Sehhaty receives notification, pulls complete FHIR resource via API',
      flow: 'Notification → FHIR Client → GET /Patient/{id} → Display'
    }
  ];

  const Component = ({ id, name, icon: Icon, enhanced = false, status = 'healthy' }) => {
    const statusColors = {
      healthy: 'bg-green-500',
      warning: 'bg-yellow-500',
      error: 'bg-red-500'
    };

    const component = componentDetails[id];

    return (
      <div
        className={`
          relative p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105
          ${enhanced 
            ? 'bg-gradient-to-r from-orange-100 to-yellow-100 border-orange-300 shadow-md' 
            : 'bg-white border-gray-300'
          }
        `}
        onClick={() => setSelectedComponent(id)}
      >
        <div className="flex items-center justify-center mb-2">
          {component?.logo || <Icon size={enhanced ? 24 : 20} className={enhanced ? "text-orange-600" : "text-gray-600"} />}
        </div>
        <div className={`text-xs text-center font-medium ${enhanced ? 'text-orange-900' : 'text-gray-700'}`}>
          {name}
        </div>
        {enhanced && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">✓</span>
          </div>
        )}
        <div className={`absolute -top-1 -left-1 w-3 h-3 ${statusColors[status]} rounded-full`}></div>
      </div>
    );
  };

  const LayerHeader = ({ layer, isSelected, onClick }) => (
    <div
      className={`
        p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
        ${isSelected ? 'border-blue-500 bg-blue-100' : layer.color}
        hover:shadow-md
      `}
      onClick={() => onClick(layer.id)}
    >
      <h3 className="font-bold text-lg text-gray-800">{layer.name}</h3>
      <p className="text-sm text-gray-600 mt-1">{layer.description}</p>
      {isSelected && (
        <div className="mt-3 p-3 bg-white rounded border">
          <h4 className="font-semibold text-sm mb-2">Layer Details:</h4>
          <p className="text-xs text-gray-700">{layer.details}</p>
        </div>
      )}
    </div>
  );

  const ComponentDetailModal = ({ componentId }) => {
    const component = componentDetails[componentId];
    if (!component) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-96 overflow-y-auto">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              {component.logo && <div className="mr-3">{component.logo}</div>}
              <h2 className="text-xl font-bold text-gray-800">{component.name}</h2>
            </div>
            <button
              onClick={() => setSelectedComponent(null)}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
          
          <p className="text-gray-600 mb-4">{component.description}</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-gray-800 flex items-center">
                <Settings size={16} className="mr-2" />
                Technologies & Stack
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                {component.technologies.map((tech, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle size={12} className="text-green-500 mr-2 flex-shrink-0" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-semibold mb-3 mt-4 text-gray-800 flex items-center">
                <FileText size={16} className="mr-2" />
                Data Formats
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {Array.isArray(component.dataFormats) ? component.dataFormats.map((format, index) => (
                  <li key={index} className="flex items-center">
                    <Database size={12} className="text-blue-500 mr-2 flex-shrink-0" />
                    <span>{format}</span>
                  </li>
                )) : (
                  <li className="flex items-center">
                    <Database size={12} className="text-blue-500 mr-2 flex-shrink-0" />
                    <span>{component.dataFormats}</span>
                  </li>
                )}
              </ul>

              {component.topics && (
                <>
                  <h3 className="font-semibold mb-3 mt-4 text-gray-800 flex items-center">
                    <Activity size={16} className="mr-2" />
                    Streaming Topics
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {component.topics.map((topic, index) => (
                      <li key={index} className="flex items-center">
                        <GitBranch size={12} className="text-orange-500 mr-2 flex-shrink-0" />
                        <span className="font-mono text-xs">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-gray-800 flex items-center">
                <CheckCircle size={16} className="mr-2" />
                Key Responsibilities
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                {component.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle size={12} className="text-purple-500 mr-2 flex-shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-semibold mb-3 mt-4 text-gray-800 flex items-center">
                <Network size={16} className="mr-2" />
                Integration Role
              </h3>
              <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                {component.integration}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const TopicsFlowModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-6xl w-full max-h-96 overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold text-gray-800">Streaming Topics Flow</h2>
          <button
            onClick={() => setShowTopicsFlow(false)}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-4">
          {streamingFlow.map((flow, index) => (
            <div key={index} className={`p-4 rounded-lg border-2 ${flow.notInScope ? 'bg-gray-50 border-gray-300' : 'bg-blue-50 border-blue-200'}`}>
              <h3 className="font-semibold text-lg mb-2">{flow.stage}</h3>
              <p className="text-gray-700 mb-2">{flow.description}</p>
              
              {flow.notInScope && (
                <p className="text-red-600 text-sm font-medium">⚠️ Not in our implementation scope</p>
              )}
              
              {flow.topic && (
                <div className="bg-white p-3 rounded border mt-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-sm text-gray-800">Topics: </span>
                      <span className="font-mono text-xs text-blue-600">{flow.topic}</span>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <span><strong>Producer:</strong> {flow.producer}</span>
                    <span><strong>Consumer:</strong> {flow.consumer}</span>
                  </div>
                </div>
              )}
              
              {flow.flow && (
                <div className="bg-green-50 p-3 rounded border mt-2">
                  <span className="font-semibold text-sm text-gray-800">Flow: </span>
                  <span className="text-sm text-green-700">{flow.flow}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <h3 className="font-semibold text-lg mb-2">Why Different Topics?</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• <strong>Use case isolation:</strong> Each NPHIES use case publishes to its own topics</li>
            <li>• <strong>Resource-specific notifications:</strong> FHIR publishes to resource-type topics</li>
            <li>• <strong>Scalable consumption:</strong> Sehhaty can subscribe only to relevant topics</li>
            <li>• <strong>Error isolation:</strong> Issues with one topic don't affect others</li>
            <li>• <strong>Future expansion:</strong> Easy to add new topics for new use cases</li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full h-screen overflow-auto bg-gray-50 p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Enhanced FHIR Interoperability Architecture
        </h1>
        <p className="text-gray-600 mb-4">
          Event-Driven Architecture with Keycloak+SMART Authentication
        </p>
        <div className="flex justify-center space-x-6 text-sm mb-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-orange-300 rounded mr-2"></div>
            <span>Enhanced Components</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-white border-2 border-gray-300 rounded mr-2"></div>
            <span>Standard Components</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span>Healthy</span>
          </div>
        </div>
        <button
          onClick={() => setShowTopicsFlow(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Show Streaming Topics Flow
        </button>
      </header>

      <div className="space-y-6">
        {/* External Systems Layer */}
        <LayerHeader 
          layer={layers[0]} 
          isSelected={selectedLayer === 'external'}
          onClick={setSelectedLayer}
        />
        <div className="grid grid-cols-5 gap-4 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
          <Component id="his" name="HISs" icon={Server} status="healthy" />
          <Component id="raqeem" name="Raqeem" icon={Database} status="healthy" />
          <Component id="mawed" name="Mawed" icon={Cloud} status="healthy" />
          <Component id="eynti" name="عينتي" icon={Eye} status="healthy" />
          <Component id="others" name="Other Systems" icon={Server} status="warning" />
        </div>

        {/* NPHIES Layer */}
        <LayerHeader 
          layer={layers[1]} 
          isSelected={selectedLayer === 'nphies'}
          onClick={setSelectedLayer}
        />
        <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
          <div className="grid grid-cols-5 gap-4 mb-4">
            <Component id="uc1" name="UC1 (HL7v2)" icon={GitBranch} />
            <Component id="uc2" name="UC2 (CDA)" icon={GitBranch} />
            <Component id="uc3" name="UC3" icon={GitBranch} />
            <Component id="uc4" name="UC4" icon={GitBranch} />
            <Component id="ucn" name="UCn" icon={GitBranch} />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <Component id="ve" name="Validation Engine" icon={CheckCircle} />
            <Component id="ie" name="Integration Engine" icon={RefreshCw} />
            <Component id="sp" name="Streaming Producer" icon={Activity} />
            <Component id="rdb" name="Raw Data DB" icon={Database} />
          </div>
        </div>

        {/* Integration Layer */}
        <LayerHeader 
          layer={layers[2]} 
          isSelected={selectedLayer === 'integration'}
          onClick={setSelectedLayer}
        />
        <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
          <div className="grid grid-cols-6 gap-4">
            <Component id="ehs" name="Error Handling Service" icon={AlertTriangle} enhanced={true} />
            <Component id="se" name="Streaming Engine (Redpanda)" icon={Activity} />
            <Component id="apigee" name="APIGEE Gateway" icon={Shield} />
            <Component id="ns" name="Notification Service" icon={Monitor} />
            <Component id="rc" name="Redis Cache" icon={Zap} />
            <Component id="sds" name="Storage & Document Service" icon={FileText} />
          </div>
        </div>

        {/* FHIR Server Layer */}
        <LayerHeader 
          layer={layers[3]} 
          isSelected={selectedLayer === 'fhir'}
          onClick={setSelectedLayer}
        />
        <div className="p-4 bg-red-50 rounded-lg border-2 border-red-200">
          <div className="grid grid-cols-6 gap-4 mb-4">
            <Component id="auth" name="Auth Service (Keycloak + SMART)" icon={Key} enhanced={true} />
            <Component id="ffc" name="FHIR Format Converter" icon={RefreshCw} enhanced={true} />
            <Component id="fcv" name="FHIR Conformance Validator" icon={CheckCircle} enhanced={true} />
            <Component id="sc" name="Streaming Consumer" icon={Activity} />
            <Component id="fs" name="FHIR Server (4.0.1)" icon={Server} />
            <Component id="bv" name="Business Validation" icon={Zap} />
          </div>
          <div className="grid grid-cols-6 gap-4">
            <Component id="rac" name="Resource Access Controller" icon={Lock} enhanced={true} />
            <Component id="ts" name="Terminology Service" icon={Database} enhanced={true} />
            <Component id="rv" name="Retrieve Validation" icon={CheckCircle} />
            <Component id="dc" name="Data Cleansing" icon={RefreshCw} />
            <Component id="red" name="Redis" icon={Zap} />
            <Component id="cddb" name="Cleansed Data DB" icon={Database} />
          </div>
        </div>

        {/* Sehhaty Layer */}
        <LayerHeader 
          layer={layers[4]} 
          isSelected={selectedLayer === 'sehhaty'}
          onClick={setSelectedLayer}
        />
        <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
          <div className="grid grid-cols-5 gap-4">
            <Component id="dss" name="Offline Sync Service" icon={RefreshCw} enhanced={true} />
            <Component id="mob" name="Mobile (FHIR Compliant)" icon={Smartphone} />
            <Component id="be" name="Backend (FHIR Compliant)" icon={Server} />
            <Component id="fcli" name="FHIR Client (HAPI)" icon={Zap} />
            <Component id="stc" name="Streaming Consumers" icon={Activity} />
          </div>
        </div>
      </div>

      {/* Authentication & Authorization */}
      <div className="mt-8 p-4 bg-white rounded-lg border-2 border-blue-200">
        <h3 className="text-lg font-bold mb-4 text-gray-800 flex items-center">
          <Key className="mr-2" size={20} />
          Authentication & Authorization Architecture
        </h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-blue-600 mb-2">🔐 Keycloak Integration</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>Identity Provider:</strong> Centralized user authentication</li>
              <li>• <strong>SSO Support:</strong> Single sign-on across all applications</li>
              <li>• <strong>Federation:</strong> Integration with existing identity systems</li>
              <li>• <strong>Token Management:</strong> JWT tokens with custom claims</li>
              <li>• <strong>Role Management:</strong> Fine-grained role-based access</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-600 mb-2">🩺 SMART on FHIR</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>Standard Scopes:</strong> patient/*.read, user/*.*, openid</li>
              <li>• <strong>Launch Contexts:</strong> EHR, standalone, backend services</li>
              <li>• <strong>Resource Access:</strong> Patient compartment restrictions</li>
              <li>• <strong>Clinical Context:</strong> Patient, encounter, practitioner context</li>
              <li>• <strong>Compliance:</strong> FHIR R4 OAuth 2.0 implementation</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">
          <p className="text-sm text-green-700">
            <strong>Integration Benefit:</strong> Keycloak provides the identity management foundation, 
            while SMART on FHIR ensures healthcare-specific authorization patterns for clinical data access.
          </p>
        </div>
      </div>

      {/* Technology Stack Summary */}
      <div className="mt-8 p-4 bg-white rounded-lg border-2 border-gray-200">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Enterprise Technology Stack</h3>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Infrastructure</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <BrandLogo type="redpanda" size={20} />
                <span className="ml-2 text-sm">Redpanda (Kafka-compatible streaming)</span>
              </div>
              <div className="flex items-center">
                <BrandLogo type="apigee" size={20} />
                <span className="ml-2 text-sm">APIGEE (API management)</span>
              </div>
              <div className="flex items-center">
                <BrandLogo type="redis" size={20} />
                <span className="ml-2 text-sm">Redis (In-memory cache)</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Data Storage</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <BrandLogo type="oracle" size={20} />
                <span className="ml-2 text-sm">Oracle (Raw data storage)</span>
              </div>
              <div className="flex items-center">
                <BrandLogo type="mssql" size={20} />
                <span className="ml-2 text-sm">SQL Server (FHIR data)</span>
              </div>
              <div className="flex items-center">
                <BrandLogo type="minio" size={20} />
                <span className="ml-2 text-sm">MinIO (Object storage)</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Authentication & FHIR</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <BrandLogo type="keycloak" size={20} />
                <span className="ml-2 text-sm">Keycloak (Identity management)</span>
              </div>
              <div className="flex items-center">
                <BrandLogo type="fhir" size={20} />
                <span className="ml-2 text-sm">FHIR R4 (Healthcare standard)</span>
              </div>
              <div className="flex items-center">
                <BrandLogo type="hapi" size={20} />
                <span className="ml-2 text-sm">HAPI FHIR (Implementation)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Component Detail Modal */}
      {selectedComponent && (
        <ComponentDetailModal componentId={selectedComponent} />
      )}

      {/* Topics Flow Modal */}
      {showTopicsFlow && <TopicsFlowModal />}
    </div>
  );
};

export default EnhancedFHIRArchitecture;