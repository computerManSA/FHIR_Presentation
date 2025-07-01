import React, { useState } from "react";
import {
  Shield,
  Eye,
  AlertTriangle,
  CheckCircle,
  Activity,
  Database,
  Server,
  Smartphone,
  Cloud,
  Zap,
  Lock,
  Monitor,
  GitBranch,
  RefreshCw,
  FileText,
  Settings,
  Network,
  Key,
  ArrowRight,
} from "lucide-react";

const EnhancedFHIRArchitecture = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedLayer, setSelectedLayer] = useState(null);
  const [expandedLayers, setExpandedLayers] = useState({
    external: true,
    nphies: true,
    integration: true,
    fhir: true,
    sehhaty: true,
    external_consumers: true,
  });

  // Function to toggle layer expansion
  const toggleLayer = (layerId) => {
    setExpandedLayers({
      ...expandedLayers,
      [layerId]: !expandedLayers[layerId],
    });
  };

  // Enhanced brand-accurate logo components
  const BrandLogo = ({ type, size = 24 }) => {
    const logos = {
      apigee: (
        <div
          className="flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          <div
            className="w-full h-full rounded-sm flex items-center justify-center text-white font-bold text-xs"
            style={{ backgroundColor: "#4285f4", fontSize: size * 0.4 }}
          >
            API
          </div>
        </div>
      ),
      redpanda: (
        <div
          className="flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          <div
            className="w-full h-full rounded flex items-center justify-center text-white font-bold"
            style={{ backgroundColor: "#e55c3c", fontSize: size * 0.3 }}
          >
            🐼
          </div>
        </div>
      ),
      oracle: (
        <div
          className="flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          <div
            className="w-full h-full rounded flex items-center justify-center text-white font-bold text-xs"
            style={{ backgroundColor: "#f80000", fontSize: size * 0.3 }}
          >
            ORACLE
          </div>
        </div>
      ),
      minio: (
        <div
          className="flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          <div
            className="w-full h-full rounded flex items-center justify-center text-white font-bold text-xs"
            style={{ backgroundColor: "#c73e1d", fontSize: size * 0.35 }}
          >
            S3
          </div>
        </div>
      ),
      mssql: (
        <div
          className="flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          <div
            className="w-full h-full rounded flex items-center justify-center text-white font-bold text-xs"
            style={{ backgroundColor: "#00bcf2", fontSize: size * 0.35 }}
          >
            SQL
          </div>
        </div>
      ),
      redis: (
        <div
          className="flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          <div
            className="w-full h-full rounded flex items-center justify-center text-white font-bold text-xs"
            style={{ backgroundColor: "#dc382d", fontSize: size * 0.3 }}
          >
            REDIS
          </div>
        </div>
      ),
      jwt: (
        <div
          className="flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          <div
            className="w-full h-full rounded flex items-center justify-center text-white font-bold text-xs"
            style={{ backgroundColor: "#000000", fontSize: size * 0.25 }}
          >
            JWT
          </div>
        </div>
      ),
      fhir: (
        <div
          className="flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          <div
            className="w-full h-full rounded flex items-center justify-center text-white font-bold text-xs"
            style={{ backgroundColor: "#007acc", fontSize: size * 0.35 }}
          >
            FHIR
          </div>
        </div>
      ),
      hapi: (
        <div
          className="flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          <div
            className="w-full h-full rounded flex items-center justify-center text-white font-bold text-xs"
            style={{ backgroundColor: "#007acc", fontSize: size * 0.3 }}
          >
            HAPI
          </div>
        </div>
      ),
    };

    return logos[type] || null;
  };

  const componentDetails = {
    // External Systems (unchanged)
    "his-compliant": {
      name: "HIS (NPHIES Compliant)",
      description:
        "NPHIES-compliant healthcare information systems that feed data through NPHIES before reaching FHIR data exchange layer.",
      technologies: ["HL7v2", "NPHIES Standards", "Epic", "Cerner"],
      responsibilities: [
        "Patient registration and demographics",
        "Clinical documentation compliant with NPHIES",
        "Order management",
        "Laboratory results",
        "Standardized data formats",
      ],
      dataFormats: ["HL7v2 ADT", "HL7v2 ORM", "HL7v2 ORU", "NPHIES APIs"],
      integration: "Feeds NPHIES, which then feeds FHIR exchange layer",
      logo: null,
    },
    "his-noncompliant": {
      name: "HIS (Non-NPHIES Compliant)",
      description:
        "Healthcare information systems that feed data directly to FHIR data exchange layer, bypassing NPHIES.",
      technologies: [
        "HL7v2",
        "Custom Protocols",
        "Legacy Systems",
        "Proprietary APIs",
      ],
      responsibilities: [
        "Patient registration and demographics",
        "Clinical documentation",
        "Order management",
        "Laboratory results",
        "Legacy system integration",
      ],
      dataFormats: ["HL7v2", "Custom XML", "REST APIs", "Proprietary formats"],
      integration: "Feeds FHIR exchange layer directly",
      logo: null,
    },
    raqeem: {
      name: "Raqeem System",
      description:
        "Saudi national digital health platform managing healthcare services, provider registrations, and regulatory compliance.",
      technologies: ["Custom Platform", "Oracle Database", "SOA Architecture"],
      responsibilities: [
        "Healthcare provider registration",
        "Service authorization",
        "Regulatory compliance",
        "Quality metrics",
      ],
      dataFormats: ["Custom XML", "RESTful APIs", "SOAP Services"],
      integration: "Provider validation and authorization data",
      logo: <BrandLogo type="oracle" size={24} />,
    },
    mawed: {
      name: "Mawed Appointment System",
      description:
        "Unified appointment scheduling platform coordinating healthcare service bookings across multiple providers and specialties.",
      technologies: [
        "Microservices",
        "React Frontend",
        "Node.js Backend",
        "PostgreSQL",
      ],
      responsibilities: [
        "Appointment scheduling",
        "Provider calendar management",
        "Patient notifications",
        "Availability tracking",
      ],
      dataFormats: ["RESTful JSON APIs", "Real-time WebSockets"],
      integration: "Appointment and scheduling information",
      logo: null,
    },
    eynti: {
      name: "عينتي (Eynti) System",
      description:
        "Electronic health record system focused on clinical documentation and patient care coordination in Saudi healthcare facilities.",
      technologies: ["Custom EHR Platform", "HL7v2", "CDA Documents"],
      responsibilities: [
        "Clinical documentation",
        "Patient care plans",
        "Medical history",
        "Treatment protocols",
      ],
      dataFormats: ["HL7v2", "CDA R2", "PDF Documents"],
      integration: "Clinical documentation and care coordination",
      logo: null,
    },
    others: {
      name: "Other Healthcare Systems",
      description:
        "Various specialized healthcare systems including laboratory, radiology, pharmacy, and telemedicine platforms.",
      technologies: [
        "DICOM",
        "LIS Systems",
        "RIS Systems",
        "Pharmacy Management",
      ],
      responsibilities: [
        "Specialized clinical services",
        "Diagnostic imaging",
        "Laboratory results",
        "Prescription management",
      ],
      dataFormats: ["DICOM", "HL7v2", "Proprietary Formats"],
      integration: "Specialized healthcare data and services",
      logo: null,
    },

    // NPHIES Layer (Original components)
    uc1: {
      name: "Use Case 1 (HL7v2)",
      description:
        "Handles HL7v2 message processing for administrative and clinical data exchange including ADT, ORM, and ORU messages.",
      technologies: [
        "HL7v2 Parser",
        "MIRTH Connect",
        "Custom Processing Engine",
      ],
      responsibilities: [
        "ADT message processing",
        "Order management",
        "Result reporting",
        "Patient demographics",
      ],
      dataFormats: ["HL7v2 ADT^A01-A60", "HL7v2 ORM^O01", "HL7v2 ORU^R01"],
      integration: "Core HL7v2 message processing pipeline",
      topics: [
        "Produces to: nphies.uc1.adt.events, nphies.uc1.orm.events, nphies.uc1.oru.events",
      ],
      logo: null,
    },
    uc2: {
      name: "Use Case 2 (CDA)",
      description:
        "Processes Clinical Document Architecture documents for structured clinical documentation and care summaries.",
      technologies: [
        "CDA Parser",
        "XSL Transformations",
        "Document Repository",
      ],
      responsibilities: [
        "Clinical document processing",
        "Care summaries",
        "Discharge summaries",
        "Referral documents",
      ],
      dataFormats: ["CDA R2", "HL7 CCD", "C32 Documents"],
      integration: "Clinical document processing and storage",
      topics: [
        "Produces to: nphies.uc2.cda.events, nphies.uc2.document.events",
      ],
      logo: null,
    },
    uc3: {
      name: "Use Case 3",
      description:
        "Specialized use case handling specific healthcare data exchange requirements including radiology and laboratory integration.",
      technologies: ["Custom Adapters", "DICOM Gateway", "LIS Integration"],
      responsibilities: [
        "Radiology integration",
        "Laboratory data",
        "Imaging metadata",
        "Result distribution",
      ],
      dataFormats: ["DICOM", "HL7v2 ORU", "Custom XML"],
      integration: "Specialized clinical data processing",
      topics: [
        "Produces to: nphies.uc3.lab.events, nphies.uc3.radiology.events",
      ],
      logo: null,
    },
    uc4: {
      name: "Use Case 4",
      description:
        "Handles insurance verification, claims processing, and financial data integration for healthcare administrative processes.",
      technologies: [
        "Claims Processing Engine",
        "Insurance APIs",
        "Financial Systems",
      ],
      responsibilities: [
        "Insurance verification",
        "Claims processing",
        "Financial reporting",
        "Coverage validation",
      ],
      dataFormats: ["X12 EDI", "Custom APIs", "JSON"],
      integration: "Insurance and financial data processing",
      topics: [
        "Produces to: nphies.uc4.claims.events, nphies.uc4.insurance.events",
      ],
      logo: null,
    },
    ucn: {
      name: "Use Case N",
      description:
        "Extensible framework for additional use cases and future healthcare data exchange requirements.",
      technologies: [
        "Plugin Architecture",
        "Configurable Processors",
        "Rule Engine",
      ],
      responsibilities: [
        "Future use cases",
        "Custom integrations",
        "Pilot programs",
        "Specialized workflows",
      ],
      dataFormats: ["Configurable", "Multiple Standards Support"],
      integration: "Flexible integration framework",
      topics: ["Produces to: nphies.ucn.*.events (configurable topics)"],
      logo: null,
    },
    ve: {
      name: "Validation Engine",
      description:
        "Validates incoming healthcare data against defined schemas, business rules, and data quality standards.",
      technologies: [
        "Schema Validators",
        "Business Rules Engine",
        "Data Quality Framework",
      ],
      responsibilities: [
        "Data format validation",
        "Business rule enforcement",
        "Quality assurance",
        "Error reporting",
      ],
      dataFormats: ["All supported formats", "Custom validation rules"],
      integration: "Central validation point for all incoming data",
      logo: null,
    },
    ie: {
      name: "Integration Engine",
      description:
        "Orchestrates data transformation, routing, and processing across different healthcare systems and protocols.",
      technologies: [
        "ESB",
        "Message Router",
        "Transformation Engine",
        "Workflow Manager",
      ],
      responsibilities: [
        "Message routing",
        "Protocol transformation",
        "Workflow orchestration",
        "System integration",
      ],
      dataFormats: ["Multiple format support", "Protocol bridging"],
      integration: "Central integration hub",
      logo: null,
    },
    sp: {
      name: "Streaming Producer",
      description:
        "Publishes validated healthcare data as events to the streaming platform for real-time processing and distribution.",
      technologies: ["Redpanda Producer"],
      responsibilities: [
        "Event publishing",
        "Topic management",
        "Message ordering",
        "Delivery guarantees",
      ],
      dataFormats: ["JSON events", "Message metadata"],
      integration: "NPHIES layer event publisher to streaming platform",
      topics: [
        "Publishes validated events from all use cases to their respective topics",
      ],
      logo: <BrandLogo type="redpanda" size={20} />,
    },
    rdb: {
      name: "Raw Data Database",
      description:
        "Oracle database storing unprocessed healthcare data from various sources for audit purposes and reprocessing capabilities.",
      technologies: ["Oracle Database 19c", "RAC Clustering", "Data Guard"],
      responsibilities: [
        "Raw data storage",
        "Audit trails",
        "Data lineage",
        "Reprocessing support",
      ],
      dataFormats: ["Original formats preserved", "Metadata enriched"],
      integration: "Data persistence and audit layer",
      logo: <BrandLogo type="oracle" size={20} />,
    },
    "api-provider": {
      name: "API Provider",
      description:
        "RESTful APIs exposing NPHIES data for integration with FHIR layer, supporting both full data and reference-based patterns.",
      technologies: ["RESTful APIs", "OpenAPI", "OAuth 2.0"],
      responsibilities: [
        "Resource exposure",
        "Data retrieval",
        "Query support",
        "Authentication",
      ],
      dataFormats: ["JSON", "XML", "Query parameters"],
      integration: "Direct data access for external systems like FHIR",
      topics: [
        "Receives requests from FHIR layer when using reference-based pattern",
      ],
      logo: null,
      enhanced: true,
    },

    // Integration Layer (Enhanced, removed notification service)
    ehs: {
      name: "Error Handling Service",
      description:
        "Comprehensive error management system providing retry mechanisms, dead letter queues, and failure notifications across all integration points.",
      technologies: [
        "Redpanda Dead Letter Queues",
        "Circuit Breakers",
        "Exponential Backoff",
        "Alert Manager",
      ],
      responsibilities: [
        "Error classification",
        "Retry logic",
        "Circuit breaker patterns",
        "Alerting and notifications",
      ],
      dataFormats: [
        "Error metadata",
        "Failed message preservation",
        "Retry metrics",
      ],
      integration: "Cross-cutting error management across all services",
      logo: null,
    },
    se: {
      name: "Streaming Engine (Redpanda)",
      description:
        "High-performance Kafka-compatible streaming platform enabling real-time data processing and distribution.",
      technologies: [
        "Redpanda Cluster",
        "Schema Registry",
        "Kafka Connect",
        "Stream Processing",
      ],
      responsibilities: [
        "Event streaming",
        "Topic management",
        "Consumer coordination",
        "Message persistence",
      ],
      dataFormats: ["JSON", "Schema evolution", "Compressed messages"],
      integration: "Real-time data distribution backbone",
      topics: [
        "NPHIES topics: nphies.uc1.*, nphies.uc2.*, etc.",
        "FHIR topics: fhir.patient.*, fhir.encounter.*, etc.",
        "Error topics: errors.*, dlq.*",
      ],
      logo: <BrandLogo type="redpanda" size={24} />,
    },
    apigee: {
      name: "APIGEE Gateway",
      description:
        "Enterprise API management platform providing secure, monitored, and governed access to healthcare APIs.",
      technologies: [
        "Google APIGEE Edge",
        "OAuth 2.0",
        "API Analytics",
        "Developer Portal",
      ],
      responsibilities: [
        "API gateway",
        "Authentication proxy",
        "API monitoring",
        "Developer onboarding",
      ],
      dataFormats: ["RESTful APIs", "GraphQL", "FHIR R4", "OAuth tokens"],
      integration: "Secure API access layer and authentication proxy",
      logo: <BrandLogo type="apigee" size={24} />,
    },
    rc: {
      name: "Redis Cache",
      description:
        "High-performance in-memory caching system optimizing data access patterns and reducing latency.",
      technologies: [
        "Redis Cluster",
        "Redis Sentinel",
        "Lua Scripting",
        "Memory Optimization",
      ],
      responsibilities: [
        "API response caching",
        "Session management",

        "Cache invalidation",
      ],
      dataFormats: [
        "Serialized JSON",
        "Binary data",
        "Cache keys",
        "TTL metadata",
      ],
      integration: "Performance optimization layer",
      logo: <BrandLogo type="redis" size={24} />,
    },
    sds: {
      name: "Storage & Document Service",
      description:
        "Object Storage S3-compatible object storage for clinical documents, images, and large healthcare data files.",
      technologies: [
        "Object Storage Cluster",
        "S3 API",
        "Encryption at Rest",
        "Lifecycle Management",
      ],
      responsibilities: [
        "Document storage",
        "File management",
        "Secure access",
        "Backup and archival",
      ],
      dataFormats: [
        "PDF documents",
        "DICOM images",
        "Binary files",
        "Metadata objects",
      ],
      integration: "Scalable document and file storage system",
      logo: <BrandLogo type="minio" size={24} />,
    },

    // FHIR Server Layer (Enhanced with authentication)
    auth: {
      name: "JWT Authentication Service",
      description:
        "System-based JWT authentication service providing secure API access without resource-level authorization complexity.",
      technologies: [
        "JWT Processing",
        "System Authentication",
        "API Key Management",
        "Token Validation",
      ],
      responsibilities: [
        "System authentication",
        "JWT token validation",
        "API access control",
        "Service-to-service communication",
      ],
      dataFormats: [
        "JWT tokens",
        "API keys",
        "System credentials",
        "Access tokens",
      ],
      integration: "System-based authentication for all FHIR and API access",
      logo: <BrandLogo type="jwt" size={24} />,
      enhanced: true,
    },
    ffc: {
      name: "FHIR Format Converter",
      description:
        "Advanced conversion service transforming legacy healthcare formats into FHIR R4 resources.",
      technologies: [
        "HAPI FHIR",
        "Mapping Languages",
        "Transformation Engine",
        "FHIR Validators",
      ],
      responsibilities: [
        "HL7v2 to FHIR conversion",
        "CDA to FHIR transformation",
        "Mapping rule management",
        "Conversion validation",
      ],
      dataFormats: ["Input: HL7v2, CDA", "Output: FHIR R4 Resources"],
      integration:
        "Critical transformation layer enabling FHIR standardization",
      topics: [
        "Consumes from: nphies.uc1.*, nphies.uc2.*",
        "Produces to: fhir.patient.created, fhir.encounter.updated",
      ],
      logo: <BrandLogo type="fhir" size={24} />,
      enhanced: true,
    },
    fcv: {
      name: "FHIR Conformance Validator",
      description:
        "Validates all FHIR resources against FHIR R4 specifications and implementation guides.",
      technologies: [
        "HAPI FHIR Validator",
        "StructureDefinition",
        "Implementation Guides",
        "Terminology Services",
      ],
      responsibilities: [
        "FHIR structure validation",
        "Profile conformance",
        "Terminology validation",
        "Error reporting",
      ],
      dataFormats: [
        "FHIR R4 Resources",
        "Validation reports",
        "Conformance outcomes",
      ],
      integration: "Quality gate ensuring FHIR compliance",
      logo: <BrandLogo type="fhir" size={24} />,
      enhanced: true,
    },
    sc: {
      name: "Streaming Consumer",
      description:
        "Consumes healthcare events from Redpanda and processes them for FHIR resource creation.",
      technologies: ["Kafka Consumers", "Stream Processing", "Event Handlers"],
      responsibilities: [
        "Event consumption",
        "FHIR resource creation",
        "Batch processing",
        "Error handling",
      ],
      dataFormats: [
        "Streaming events",
        "FHIR Resources",
        "Processing metadata",
      ],
      integration: "Bridge between streaming platform and FHIR processing",
      topics: [
        "Consumes from: nphies.uc1.*, nphies.uc2.*, nphies.uc3.*, nphies.uc4.*",
      ],
      logo: <BrandLogo type="redpanda" size={20} />,
      enhanced: true,
    },
    fs: {
      name: "FHIR Server (4.0.1)",
      description:
        "Production-grade HAPI FHIR server providing full CRUD operations and search capabilities.",
      technologies: [
        "HAPI FHIR Server",
        "PostgreSQL",
        "Elasticsearch",
        "JPA/Hibernate",
      ],
      responsibilities: [
        "FHIR resource management",
        "RESTful API",
        "Search and query",
        "Transaction support",
      ],
      dataFormats: [
        "FHIR R4 Resources",
        "Bundle transactions",
        "Search parameters",
      ],
      integration: "Core FHIR data persistence and API layer",
      topics: [
        "Produces notifications to: fhir.notifications.patient, fhir.notifications.encounter",
      ],
      logo: <BrandLogo type="hapi" size={24} />,
      enhanced: true,
    },
    bv: {
      name: "Business Validation",
      description:
        "Enforces healthcare-specific business rules and clinical validation logic.",
      technologies: [
        "Drools Rules Engine",
        "Clinical Decision Support",
        "Validation Framework",
      ],
      responsibilities: [
        "Clinical rule validation",
        "Business logic enforcement",
        "Data integrity checks",
        "Constraint validation",
      ],
      dataFormats: ["FHIR Resources", "Validation outcomes", "Business rules"],
      integration: "Clinical and business logic validation layer",
      logo: null,
      enhanced: true,
    },

    ts: {
      name: "Terminology Service",
      description:
        "Manages medical terminologies and code systems for consistent healthcare vocabulary.",
      technologies: [
        "HAPI FHIR Terminology",
        "SNOMED CT",
        "ICD-10",
        "LOINC",
        "ValueSet expansion",
      ],
      responsibilities: [
        "Terminology management",
        "Code validation",
        "Concept mapping",
        "ValueSet operations",
      ],
      dataFormats: [
        "CodeSystem",
        "ValueSet",
        "ConceptMap",
        "Terminology responses",
      ],
      integration: "Medical terminology standardization and validation",
      logo: null,
      enhanced: true,
    },
    dc: {
      name: "Data Cleansing",
      description:
        "Processes and cleans healthcare data ensuring quality and standardization.",
      technologies: [
        "Data Quality Tools",
        "ETL Processes",
        "Cleansing Rules",
        "Quality Metrics",
      ],
      responsibilities: [
        "Data standardization",
        "Quality improvement",
        "Duplicate detection",
        "Data enrichment",
      ],
      dataFormats: [
        "Raw FHIR Resources",
        "Cleansed FHIR Resources",
        "Quality reports",
      ],
      integration: "Data quality assurance and improvement layer",
      logo: null,
      enhanced: true,
    },
    cddb: {
      name: "Cleansed Data Database",
      description:
        "Microsoft SQL Server optimized for storing high-quality, processed FHIR resources.",
      technologies: [
        "SQL Server 2022",
        "FHIR-optimized schema",
        "Columnstore indexes",
        "Always On AG",
      ],
      responsibilities: [
        "Clean data storage",
        "Optimized queries",
        "Data integrity",
        "Performance optimization",
      ],
      dataFormats: [
        "Validated FHIR Resources",
        "Optimized structures",
        "Index metadata",
      ],
      integration: "Primary storage for production-ready FHIR data",
      logo: <BrandLogo type="mssql" size={24} />,
      enhanced: true,
    },
    "notification-producer": {
      name: "Notification Producer",
      description:
        "Publishes lightweight notifications about FHIR resource changes to streaming platform for subscribers.",
      technologies: [
        "Redpanda Producer",
        "Event Sourcing",
        "Change Data Capture",
        "FHIR Subscription",
      ],
      responsibilities: [
        "Change detection",
        "Resource reference extraction",
        "Notification formatting",
        "Event publishing to all subscribers",
      ],
      dataFormats: [
        "Resource references",
        "Change type",
        "Timestamps",
        "Minimal payload",
      ],
      integration:
        "Critical component for event-driven architecture, feeds all subscribers including NPHIES",
      topics: [
        "Produces to: fhir.notifications.patient.*, fhir.notifications.encounter.*, nphies.*, sehhaty.*",
      ],
      logo: <BrandLogo type="redpanda" size={20} />,
      enhanced: true,
    },
    "nphies-consumer": {
      name: "NPHIES Consumer",
      description:
        "Consumes FHIR events and feeds data back to NPHIES system, making NPHIES a subscriber to FHIR exchange layer.",
      technologies: [
        "Redpanda Consumer",
        "FHIR Client",
        "NPHIES API Integration",
        "Event Processing",
      ],
      responsibilities: [
        "Consume FHIR notifications",
        "Transform FHIR data to NPHIES format",
        "Feed data to NPHIES system",
        "Handle bidirectional data flow",
      ],
      dataFormats: [
        "FHIR Resources",
        "NPHIES format",
        "Event notifications",
        "Transformation metadata",
      ],
      integration:
        "Enables NPHIES to receive data from non-compliant HIS systems via FHIR",
      topics: [
        "Consumes from: fhir.notifications.*, Produces to: nphies.intake.*",
      ],
      logo: <BrandLogo type="redpanda" size={20} />,
      enhanced: true,
    },

    // External FHIR Consumers Layer
    anat: {
      name: "Anat System",
      description:
        "External healthcare platform where doctors can request patient profiles and clinical data through authenticated FHIR API access.",
      technologies: [
        "FHIR Client",
        "JWT Authentication",
        "RESTful APIs",
        "Clinical Dashboard",
      ],
      responsibilities: [
        "Patient profile retrieval",
        "Clinical data access",
        "Doctor authentication",
        "Secure API consumption",
      ],
      dataFormats: [
        "FHIR R4 Resources",
        "JWT tokens",
        "RESTful JSON",
        "Clinical summaries",
      ],
      integration:
        "Accesses FHIR APIs with JWT authentication for patient data retrieval",
      logo: null,
      enhanced: true,
    },
    "doctor-apps": {
      name: "Doctor Applications",
      description:
        "Mobile and web applications used by healthcare providers to access patient information through FHIR APIs.",
      technologies: [
        "Mobile SDKs",
        "Web Applications",
        "FHIR APIs",
        "Secure Authentication",
      ],
      responsibilities: [
        "Patient data access",
        "Clinical decision support",
        "Medical record viewing",
        "Treatment planning",
      ],
      dataFormats: [
        "FHIR Resources",
        "Authentication tokens",
        "Clinical data",
        "Patient summaries",
      ],
      integration: "Direct FHIR API access with system-based authentication",
      logo: null,
      enhanced: true,
    },
    "research-platforms": {
      name: "Research Platforms",
      description:
        "Academic and research institutions accessing de-identified healthcare data for medical research through FHIR APIs.",
      technologies: [
        "Research APIs",
        "Data Analytics",
        "FHIR Bulk Data",
        "Privacy Compliance",
      ],
      responsibilities: [
        "De-identified data access",
        "Research data extraction",
        "Statistical analysis",
        "Compliance monitoring",
      ],
      dataFormats: [
        "Anonymized FHIR data",
        "Bulk data exports",
        "Research datasets",
        "Statistical reports",
      ],
      integration:
        "Bulk FHIR data access with research-specific authentication",
      logo: null,
      enhanced: true,
    },
    "analytics-tools": {
      name: "Analytics Tools",
      description:
        "Business intelligence and healthcare analytics platforms that consume FHIR data for reporting and insights.",
      technologies: [
        "BI Tools",
        "Data Warehousing",
        "FHIR Analytics",
        "Reporting Engines",
      ],
      responsibilities: [
        "Healthcare analytics",
        "Performance reporting",
        "Quality metrics",
        "Operational insights",
      ],
      dataFormats: [
        "FHIR data streams",
        "Analytics models",
        "Report formats",
      ],
      integration: "Consumes FHIR data for analytics and reporting purposes",
      logo: null,
      enhanced: true,
    },

    // Sehhaty Layer (Enhanced)
    dss: {
      name: "Offline Sync Service",
      description:
        "Manages offline data synchronization and conflict resolution for mobile healthcare applications.",
      technologies: [
        "CouchDB",
        "Conflict Resolution Engine",
        "Delta Sync",
        "Offline Storage",
      ],
      responsibilities: [
        "Offline/online synchronization",
        "Conflict resolution",
        "Mobile data persistence",
        "Connection state management",
      ],
      dataFormats: [
        "FHIR Resources",
        "Sync deltas",
        "Conflict markers",
        "Revision metadata",
      ],
      integration:
        "Enables robust offline functionality for mobile healthcare apps",
      logo: null,
      enhanced: true,
    },
    mob: {
      name: "Mobile (FHIR Compliant)",
      description:
        "Patient-facing mobile application with FHIR integration and real-time notifications.",
      technologies: [
        "Native",
        "FHIR Native Client SDK",
        "Push Notifications",
        "Biometric Auth",
      ],
      responsibilities: [
        "Patient interface",
        "Health record access",
        "Appointment management",
        "Real-time notifications",
      ],
      dataFormats: [
        "FHIR Resources",
        "Notification events",
        "UI Data Models",
        "Offline cache",
      ],
      integration:
        "Primary patient channel - receives notifications and pulls FHIR data",
      topics: ["Subscribes to: fhir.notifications.patient.{patientId}"],
      logo: null,
      enhanced: true,
    },
    be: {
      name: "Backend (FHIR Compliant)",
      description:
        "Healthcare provider backend system with FHIR workflows and event processing.",
      technologies: [
        "Spring Boot",
        "FHIR APIs",
        "WorkflowEngine",
        "Event Processing",
      ],
      responsibilities: [
        "Provider workflows",
        "Clinical tools",
        "Administrative functions",
        "Event processing",
      ],
      dataFormats: [
        "FHIR Resources",
        "Workflow definitions",
        "Event notifications",
        "Provider data",
      ],
      integration:
        "Provider-facing system processing streaming events and querying FHIR",
      topics: [
        "Subscribes to: fhir.notifications.encounter.*, fhir.notifications.organization.*",
      ],
      logo: null,
      enhanced: true,
    },
    fcli: {
      name: "FHIR Client (HAPI)",
      description:
        "HAPI FHIR client providing standardized access patterns and authentication.",
      technologies: [
        "HAPI FHIR Client",
        "OAuth 2.0 Client",
        "Connection pooling",
        "Retry logic",
      ],
      responsibilities: [
        "FHIR API client",
        "Authentication management",
        "Resource operations",
        "Event-driven pulling",
      ],
      dataFormats: ["FHIR Resources", "API Requests/Responses", "OAuth tokens"],
      integration:
        "Standard FHIR client that pulls resources based on streaming notifications",
      logo: <BrandLogo type="hapi" size={24} />,
      enhanced: true,
    },
    stc: {
      name: "Streaming Consumers",
      description:
        "Event consumers processing FHIR notifications and triggering resource pulls.",
      technologies: [
        "Redpanda Consumers",
        "Event Handlers",
        "Message Queues",
        "Dead Letter Handling",
      ],
      responsibilities: [
        "Event notification processing",
        "Resource ID extraction",
        "Pull trigger management",
        "Error handling",
      ],
      dataFormats: [
        "Event notifications",
        "Resource references",
        "Processing metadata",
      ],
      integration:
        "Receives notifications with resource IDs, triggers FHIR client to pull full resources",
      topics: ["Consumes from: fhir.notifications.*"],
      logo: <BrandLogo type="redpanda" size={20} />,
      enhanced: true,
    },
  };

  const layers = [
    {
      id: "external",
      name: "External Systems Layer",
      color: "bg-blue-50 border-blue-200",
      description:
        "Healthcare institutions and systems providing clinical and administrative data",
      details:
        "External healthcare systems that generate clinical and administrative data. These systems trigger the data flow by sending information to NPHIES through various protocols.",
    },
    {
      id: "nphies",
      name: "NPHIES Layer (Data Source)",
      color: "bg-green-50 border-green-200",
      description:
        "One of the data sources feeding FHIR exchange layer, processing compliant HIS data",
      details:
        "NPHIES receives data from compliant HIS systems, processes use cases, and feeds standardized data to FHIR exchange layer. Also consumes FHIR events as a subscriber to receive data from non-compliant systems.",
    },
    {
      id: "integration",
      name: "Enhanced Integration Layer",
      color: "bg-yellow-50 border-yellow-200",
      description:
        "Redpanda-based event streaming with comprehensive error handling",
      details:
        "Redpanda provides the streaming backbone with topics for different data flows. Error handling ensures reliability across all streaming operations.",
    },
    {
      id: "fhir",
      name: "FHIR Data Exchange Layer",
      color: "bg-red-50 border-red-200",
      description:
        "Central data exchange hub with JWT authentication, receiving data from multiple sources and distributing to all subscribers",
      details:
        "FHIR acts as the central data exchange layer, receiving data from both NPHIES (compliant HIS) and directly from non-compliant HIS systems. Converts all data to FHIR format and distributes to all subscribers including NPHIES, Sehhaty, and other healthcare applications.",
    },
    {
      id: "sehhaty",
      name: "Enhanced Sehhaty Layer",
      color: "bg-purple-50 border-purple-200",
      description:
        "Event-driven applications with notification+pull pattern and offline sync",
      details:
        "Applications subscribe to FHIR notification topics, then pull complete resources via FHIR APIs. Offline sync ensures mobile functionality without connectivity.",
    },
    {
      id: "external_consumers",
      name: "External FHIR Consumers",
      color: "bg-indigo-50 border-indigo-200",
      description:
        "Third-party healthcare applications accessing patient data through authenticated FHIR APIs",
      details:
        "External systems like Anat where doctors can request patient profiles using FHIR APIs with JWT-based authentication. These systems access FHIR data on-demand rather than through event subscriptions.",
    },
  ];

  const streamingFlow = [
    {
      stage: "Healthcare Data Update",
      description:
        "User visits healthcare facility, health records updated in HIS systems",
      system: "External Systems",
    },
    {
      stage: "Multi-Path Data Routing",
      description:
        "Compliant HIS → NPHIES → FHIR Exchange; Non-compliant HIS → FHIR Exchange directly",
      system: "Integration",
      pattern:
        "FHIR becomes central data exchange hub receiving from multiple sources",
    },
    {
      stage: "FHIR Central Processing",
      description:
        "FHIR receives data from both NPHIES and direct HIS, standardizes to FHIR format",
      system: "FHIR",
      pattern: "Acts as central data exchange layer, not just a consumer",
    },
    {
      stage: "FHIR Event Distribution",
      description:
        "FHIR distributes standardized events to ALL subscribers via streaming",
      system: "FHIR",
      pattern:
        "Publishes to topics for NPHIES, Sehhaty, and other healthcare applications",
    },
    {
      stage: "Multi-Subscriber Consumption",
      description:
        "NPHIES, Sehhaty, and other systems consume FHIR events as subscribers",
      system: "All Subscribers",
      pattern: "NPHIES becomes a subscriber to FHIR for non-compliant HIS data",
    },
    {
      stage: "Bidirectional Data Flow",
      description:
        "NPHIES receives data from non-compliant systems via FHIR exchange layer",
      system: "NPHIES",
      pattern:
        "NPHIES Consumer processes FHIR events and feeds back to NPHIES system",
    },
    {
      stage: "Sehhaty Resource Retrieval",
      description:
        "Sehhaty applications pull complete resource data via FHIR APIs",
      system: "Sehhaty",
      pattern: "Pull triggered by notification with resource reference",
    },
    {
      stage: "Ecosystem Synchronization",
      description:
        "All healthcare systems stay synchronized through FHIR data exchange layer",
      system: "All Systems",
      pattern: "Eliminates data silos and ensures comprehensive data coverage",
    },
  ];

  // Modified Component to support enhanced components and disable interaction for some NPHIES components
  const Component = ({
    id,
    name,
    icon: Icon,
    enhanced = false,
    status = "healthy",
    disableInteraction = false,
  }) => {
    const statusColors = {
      healthy: "bg-green-500",
      warning: "bg-yellow-500",
      error: "bg-red-500",
    };

    const component = componentDetails[id];
    const isEnhanced = component?.enhanced || enhanced;

    return (
      <div
        className={`relative p-3 rounded-lg border-2 ${disableInteraction ? "" : "cursor-pointer hover:shadow-lg hover:scale-105"} transition-all duration-200 ${isEnhanced ? "bg-gradient-to-r from-orange-100 to-yellow-100 border-orange-300 shadow-md" : "bg-white border-gray-300"}`}
        onClick={() => (disableInteraction ? null : setSelectedComponent(id))}
      >
        <div className="flex items-center justify-center mb-2">
          {component?.logo || (
            <Icon
              size={isEnhanced ? 24 : 20}
              className={isEnhanced ? "text-orange-600" : "text-gray-600"}
            />
          )}
        </div>
        <div
          className={`text-xs text-center font-medium ${isEnhanced ? "text-orange-900" : "text-gray-700"}`}
        >
          {name}
        </div>
      </div>
    );
  };

  const LayerHeader = ({ layer, isExpanded, onToggle }) => (
    <div
      className={`
        p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
        ${layer.color}
        hover:shadow-md
      `}
      onClick={() => onToggle(layer.id)}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg text-gray-800">{layer.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{layer.description}</p>
        </div>
        <div className="text-gray-500">
          {isExpanded ? (
            <span className="text-xl">▼</span>
          ) : (
            <span className="text-xl">▶</span>
          )}
        </div>
      </div>
      {isExpanded && (
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
              <h2 className="text-xl font-bold text-gray-800">
                {component.name}
              </h2>
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
                    <CheckCircle
                      size={12}
                      className="text-green-500 mr-2 flex-shrink-0"
                    />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-semibold mb-3 mt-4 text-gray-800 flex items-center">
                <FileText size={16} className="mr-2" />
                Data Formats
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {Array.isArray(component.dataFormats) ? (
                  component.dataFormats.map((format, index) => (
                    <li key={index} className="flex items-center">
                      <Database
                        size={12}
                        className="text-blue-500 mr-2 flex-shrink-0"
                      />
                      <span>{format}</span>
                    </li>
                  ))
                ) : (
                  <li className="flex items-center">
                    <Database
                      size={12}
                      className="text-blue-500 mr-2 flex-shrink-0"
                    />
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
                        <GitBranch
                          size={12}
                          className="text-orange-500 mr-2 flex-shrink-0"
                        />
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
                    <CheckCircle
                      size={12}
                      className="text-purple-500 mr-2 flex-shrink-0"
                    />
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

  // Visual Data Flow Diagram component
  const DataFlowDiagram = () => (
    <div className="mt-8 p-6 bg-white rounded-lg border-2 border-blue-200">
      <h3 className="text-lg font-bold mb-4 text-gray-800">
        Event-Driven Data Flow Architecture
      </h3>

      <div className="relative overflow-x-auto">
        <div className="flex flex-col space-y-6">
          {streamingFlow.map((flow, index) => {
            const colors = {
              "External Systems": "blue",
              NPHIES: "green",
              Integration: "yellow",
              FHIR: "red",
              Sehhaty: "purple",
            };

            const color = colors[flow.system] || "gray";

            return (
              <React.Fragment key={index}>
                {index > 0 && (
                  <div className="flex justify-center">
                    <div className="text-gray-400 text-xs">↓</div>
                  </div>
                )}

                <div className="flex items-center">
                  <div className="w-1/6 text-center">
                    <div
                      className={`rounded-full h-16 w-16 bg-${color}-100 flex items-center justify-center mx-auto`}
                    >
                      {flow.system === "External Systems" && (
                        <Server className={`text-${color}-600`} size={32} />
                      )}
                      {flow.system === "NPHIES" && (
                        <GitBranch className={`text-${color}-600`} size={32} />
                      )}
                      {flow.system === "Integration" && (
                        <Activity className={`text-${color}-600`} size={32} />
                      )}
                      {flow.system === "FHIR" && (
                        <Database className={`text-${color}-600`} size={32} />
                      )}
                      {flow.system === "Sehhaty" && (
                        <Smartphone className={`text-${color}-600`} size={32} />
                      )}
                    </div>
                    <p className="text-sm font-medium mt-1">
                      {index + 1}. {flow.stage}
                    </p>
                  </div>
                  <div className="w-5/6 pl-4">
                    <div
                      className={`p-3 bg-${color}-50 rounded-lg border border-${color}-200`}
                    >
                      <p className="text-sm">{flow.description}</p>
                      {flow.pattern && (
                        <div
                          className={`mt-2 p-2 bg-${color}-100 rounded border border-${color}-200`}
                        >
                          <p className="text-xs text-gray-700 flex items-center">
                            <InfoIcon
                              size={12}
                              className="mr-2 flex-shrink-0"
                            />
                            {flow.pattern}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
        <p className="text-sm font-medium text-green-800">
          🔄 <strong>FHIR as Central Data Exchange Layer:</strong> FHIR now
          serves as the central data exchange hub, receiving data from multiple
          sources - both NPHIES-compliant HIS (via NPHIES) and non-compliant HIS
          (directly). FHIR then distributes standardized healthcare data to ALL
          subscribers including NPHIES, Sehhaty, and other healthcare
          applications. This eliminates NPHIES as a bottleneck and ensures
          comprehensive data coverage across the entire healthcare ecosystem
          while maintaining real-time synchronization through event-driven
          architecture.
        </p>
      </div>
    </div>
  );

  // Data Flow Arrow component
  const DataFlowArrow = ({ direction, label, color, style }) => (
    <div className={`flex items-center justify-center mt-2`}>
      {direction === "up" && (
        <ArrowRight
          className={`text-${color}-600 transform rotate-90 mr-2`}
          size={20}
        />
      )}
      {direction === "down" && (
        <ArrowRight
          className={`text-${color}-600 transform -rotate-90 mr-2`}
          size={20}
        />
      )}
      <span
        className={`text-sm text-${color}-700 italic ${style === "dashed" ? "border-b border-dashed" : ""}`}
      >
        {label}
      </span>
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
            {/* <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span>Healthy</span> */}
          </div>
        </div>
      </header>

      <div className="space-y-6">
        {/* External Systems Layer */}
        <LayerHeader
          layer={layers[0]}
          isExpanded={expandedLayers.external}
          onToggle={toggleLayer}
        />
        {expandedLayers.external && (
          <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
            <div className="grid grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">
                  NPHIES Compliant Systems
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  <Component
                    id="his-compliant"
                    name="HIS (NPHIES Compliant)"
                    icon={Server}
                    status=""
                    disableInteraction={true}
                  />
                </div>
                <div className="mt-2 text-xs text-blue-700 bg-blue-100 p-2 rounded">
                  → Feeds NPHIES → FHIR Exchange Layer
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">
                  Non-NPHIES Compliant Systems
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  <Component
                    id="his-noncompliant"
                    name="HIS (Non-Compliant)"
                    icon={Server}
                    status=""
                    disableInteraction={true}
                  />
                </div>
                <div className="mt-2 text-xs text-blue-700 bg-blue-100 p-2 rounded">
                  → Feeds FHIR Exchange Layer directly
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <Component
                id="nphies"
                name="NPHIES"
                icon={Server}
                status=""
                disableInteraction={true}
              />
              <Component
                id="raqeem"
                name="Raqeem"
                icon={Database}
                status=""
                disableInteraction={true}
              />
              <Component
                id="mawed"
                name="Mawed"
                icon={Cloud}
                status=""
                disableInteraction={true}
              />
              <Component
                id="eynti"
                name="عينتي"
                icon={Eye}
                status=""
                disableInteraction={true}
              />
              <Component
                id="others"
                name="Other Systems"
                icon={Server}
                status=""
                disableInteraction={true}
              />
            </div>
          </div>
        )}

        {/* NPHIES Layer */}
        <LayerHeader
          layer={layers[1]}
          isExpanded={expandedLayers.nphies}
          onToggle={toggleLayer}
        />
        {expandedLayers.nphies && (
          <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
            <div className="grid grid-cols-5 gap-4 mb-4">
              <Component
                id="uc1"
                name="UC1 (HL7v2)"
                icon={GitBranch}
                disableInteraction={true}
              />
              <Component
                id="uc2"
                name="UC2 (CDA)"
                icon={GitBranch}
                disableInteraction={true}
              />
              <Component
                id="uc3"
                name="UC3"
                icon={GitBranch}
                disableInteraction={true}
              />
              <Component
                id="uc4"
                name="UC4"
                icon={GitBranch}
                disableInteraction={true}
              />
              <Component
                id="ucn"
                name="UCn"
                icon={GitBranch}
                disableInteraction={true}
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <Component
                id="ve"
                name="Validation Engine"
                icon={CheckCircle}
                disableInteraction={true}
              />
              <Component
                id="ie"
                name="Integration Engine"
                icon={RefreshCw}
                disableInteraction={true}
              />
              <Component
                id="sp"
                name="Streaming Producer"
                icon={Activity}
                enhanced={true}
              />
              <Component
                id="api-provider"
                name="API Provider"
                icon={Server}
                enhanced={true}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 mt-4">
              <Component
                id="rdb"
                name="Raw Data DB"
                icon={Database}
                disableInteraction={true}
              />
            </div>
          </div>
        )}

        {/* Integration Layer */}
        <LayerHeader
          layer={layers[2]}
          isExpanded={expandedLayers.integration}
          onToggle={toggleLayer}
        />
        {expandedLayers.integration && (
          <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
            <div className="grid grid-cols-5 gap-4">
              <Component
                id="ehs"
                name="Error Handling Service"
                icon={AlertTriangle}
              />
              <Component
                id="se"
                name="Streaming Engine (Redpanda)"
                icon={Activity}
              />
              <Component id="apigee" name="APIGEE Gateway" icon={Shield} />
              <Component id="rc" name="Redis Cache" icon={Zap} />
            </div>
          </div>
        )}

        {/* FHIR Server Layer */}
        <LayerHeader
          layer={layers[3]}
          isExpanded={expandedLayers.fhir}
          onToggle={toggleLayer}
        />

        {expandedLayers.fhir && (
          <div className="p-4 bg-red-50 rounded-lg border-2 border-red-200">
            <div className="mb-4 p-3 bg-red-100 rounded-lg border border-red-300">
              <h4 className="font-semibold text-red-800 mb-2">
                🔄 Central Data Exchange Hub
              </h4>
              <p className="text-sm text-red-700">
                FHIR acts as the central data exchange layer, receiving data
                from multiple sources and distributing to all subscribers
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 mb-4">
              <Component
                id="auth"
                name="JWT Auth Service"
                icon={Key}
                enhanced={true}
              />
              <Component
                id="ffc"
                name="FHIR Format Converter"
                icon={RefreshCw}
                enhanced={true}
              />
              <Component
                id="sc"
                name="Streaming Consumer"
                icon={Activity}
                enhanced={true}
              />
              <Component
                id="fs"
                name="FHIR Server (4.0.1)"
                icon={Server}
                enhanced={true}
              />
              <Component
                id="notification-producer"
                name="Notification Producer"
                icon={Activity}
                enhanced={true}
              />
              <Component
                id="nphies-consumer"
                name="NPHIES Consumer"
                icon={Activity}
                enhanced={true}
              />
            </div>
            <div className="grid grid-cols-5 gap-4">
              <Component
                id="ts"
                name="Terminology Service"
                icon={Database}
                enhanced={true}
              />
              <Component
                id="bv"
                name="Business Validation"
                icon={CheckCircle}
                enhanced={true}
              />
              <Component
                id="dc"
                name="Data Cleansing"
                icon={RefreshCw}
                enhanced={true}
              />
              <Component
                id="cddb"
                name="Cleansed Data DB"
                icon={Database}
                enhanced={true}
              />
            </div>

            {/* Data Flow Direction Indicators */}
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="p-2 bg-white rounded border border-red-200">
                <div className="flex items-center justify-center">
                  <ArrowRight className="text-red-600 mr-2" size={16} />
                  <span className="text-xs text-red-700">
                    To All Subscribers
                  </span>
                </div>
              </div>
              <div className="p-2 bg-white rounded border border-red-200">
                <div className="flex items-center justify-center">
                  <ArrowRight
                    className="text-red-600 mr-2 transform rotate-180"
                    size={16}
                  />
                  <span className="text-xs text-red-700">
                    From Multiple Sources
                  </span>
                </div>
              </div>
              <div className="p-2 bg-white rounded border border-red-200">
                <div className="flex items-center justify-center">
                  <div className="text-red-600 mr-1">↕</div>
                  <span className="text-xs text-red-700">
                    NPHIES Bidirectional
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Data Flow Arrow: FHIR to NPHIES (Bidirectional) */}
        <DataFlowArrow
          direction="up"
          label="FHIR Events → NPHIES Consumer"
          color="green"
          style="dashed"
        />

        {/* Data Flow Arrow: FHIR to Sehhaty */}
        <DataFlowArrow
          direction="down"
          label="FHIR Notifications & API Access"
          color="purple"
          style="solid"
        />

        {/* Sehhaty Layer */}
        <LayerHeader
          layer={layers[4]}
          isExpanded={expandedLayers.sehhaty}
          onToggle={toggleLayer}
        />
        {expandedLayers.sehhaty && (
          <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
            <div className="grid grid-cols-5 gap-4">
              <Component
                id="dss"
                name="Offline Sync Service"
                icon={RefreshCw}
                enhanced={true}
              />
              <Component
                id="mob"
                name="Mobile (FHIR Compliant)"
                icon={Smartphone}
                enhanced={true}
              />
              <Component
                id="be"
                name="Backend (FHIR Compliant)"
                icon={Server}
                enhanced={true}
              />
              <Component
                id="fcli"
                name="FHIR Client (HAPI)"
                icon={Zap}
                enhanced={true}
              />
              <Component
                id="stc"
                name="Streaming Consumers"
                icon={Activity}
                enhanced={true}
              />
            </div>
          </div>
        )}

        {/* External FHIR Consumers Layer */}
        <LayerHeader
          layer={layers[5]}
          isExpanded={expandedLayers.external_consumers}
          onToggle={toggleLayer}
        />
        {expandedLayers.external_consumers && (
          <div className="p-4 bg-indigo-50 rounded-lg border-2 border-indigo-200">
            <div className="mb-4 p-3 bg-indigo-100 rounded-lg border border-indigo-300">
              <h4 className="font-semibold text-indigo-800 mb-2">
                🏥 External Healthcare Applications
              </h4>
              <p className="text-sm text-indigo-700">
                Third-party healthcare applications that consume FHIR data
                through authenticated API access
              </p>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <Component
                id="anat"
                name="Anat System"
                icon={Monitor}
                enhanced={true}
              />
              <Component
                id="doctor-apps"
                name="Doctor Applications"
                icon={Activity}
                enhanced={true}
              />
              <Component
                id="research-platforms"
                name="Research Platforms"
                icon={Database}
                enhanced={true}
              />
              <Component
                id="analytics-tools"
                name="Analytics Tools"
                icon={GitBranch}
                enhanced={true}
              />
            </div>
          </div>
        )}
      </div>

      {/* Data Flow Diagram */}
      <DataFlowDiagram />

      {/* Authentication & Authorization */}
      <div className="mt-8 p-4 bg-white rounded-lg border-2 border-blue-200">
        <h3 className="text-lg font-bold mb-4 text-gray-800 flex items-center">
          <Key className="mr-2" size={20} />
          System-Based Authentication Architecture
        </h3>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <h4 className="font-semibold text-blue-600 mb-2">
              🔐 JWT System Authentication
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>
                • <strong>System-Based:</strong> Authentication focused on
                system-to-system communication
              </li>
              <li>
                • <strong>JWT Tokens:</strong> Stateless authentication with
                signed tokens
              </li>
              <li>
                • <strong>API Key Management:</strong> Secure API key
                distribution and rotation
              </li>
              <li>
                • <strong>Service Authentication:</strong> Inter-service
                communication security
              </li>
              <li>
                • <strong>Token Validation:</strong> Centralized token
                verification and validation
              </li>            </ul>
          </div>
        </div>
        <div className="mt-4 p-3 bg-orange-50 rounded border border-orange-200">
          <p className="text-sm text-orange-700">
            <strong>Simplified Approach:</strong> Removed resource-level access
            control complexity. Authentication is now system-based rather than
            user/resource-based, focusing on secure API access between
            healthcare systems and the FHIR data exchange layer.
          </p>
        </div>
      </div>

      {/* Technology Stack Summary */}
      <div className="mt-8 p-4 bg-white rounded-lg border-2 border-gray-200">
        <h3 className="text-lg font-bold mb-4 text-gray-800">
          Enterprise Technology Stack
        </h3>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Infrastructure</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <BrandLogo type="redpanda" size={20} />
                <span className="ml-2 text-sm">
                  Redpanda (Kafka-compatible streaming)
                </span>
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
                <span className="ml-2 text-sm"> Object storage</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              Authentication & FHIR
            </h4>
            <div className="space-y-2">
              <div className="flex items-center">
                {/* <BrandLogo type="keycloak" size={20} />
                <span className="ml-2 text-sm">
                  Keycloak (Identity management)
                </span> */}
              </div>
              <div className="flex items-center">
                <BrandLogo type="fhir" size={20} />
                <span className="ml-2 text-sm">
                  FHIR R4 (Healthcare standard)
                </span>
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
    </div>
  );
};

// Fix for InfoIcon not defined
const InfoIcon = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  );
};

export default EnhancedFHIRArchitecture;