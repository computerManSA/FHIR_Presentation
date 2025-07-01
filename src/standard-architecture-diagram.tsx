
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
  Users,
  Link,
  Plus,
  Minus,
} from "lucide-react";

const StandardArchitectureDiagram = () => {
  const [expandedComponents, setExpandedComponents] = useState({});
  const [selectedLayer, setSelectedLayer] = useState(null);

  const toggleComponent = (componentId) => {
    setExpandedComponents(prev => ({
      ...prev,
      [componentId]: !prev[componentId]
    }));
  };

  // Main architectural layers with their core components
  const architectureLayers = [
    {
      id: "external",
      name: "External Healthcare Systems",
      color: "bg-blue-100 border-blue-300",
      description: "Healthcare institutions and legacy systems",
      components: [
        {
          id: "his-systems",
          name: "HIS Systems",
          icon: Server,
          description: "Hospital Information Systems (NPHIES Compliant & Non-Compliant)",
          details: {
            responsibilities: [
              "Patient registration and demographics",
              "Clinical documentation",
              "Order management and laboratory results",
              "Legacy system integration"
            ],
            technologies: ["HL7v2", "NPHIES Standards", "Custom Protocols", "Epic", "Cerner"],
            dataFlow: "Feeds data to NPHIES (compliant) or directly to FHIR (non-compliant)"
          }
        },
        {
          id: "external-apps",
          name: "External Applications",
          icon: Cloud,
          description: "Raqeem, Mawed, Eynti and other healthcare systems",
          details: {
            responsibilities: [
              "Provider registration and authorization",
              "Appointment scheduling and management",
              "Clinical documentation and care coordination",
              "Specialized healthcare services"
            ],
            technologies: ["Oracle Database", "Microservices", "Custom EHR Platform", "DICOM"],
            dataFlow: "Provides specialized healthcare data and services"
          }
        }
      ]
    },
    {
      id: "nphies",
      name: "NPHIES Processing Layer",
      color: "bg-green-100 border-green-300",
      description: "One of the data sources feeding FHIR exchange layer",
      components: [
        {
          id: "use-cases",
          name: "Use Case Processors",
          icon: GitBranch,
          description: "UC1 (HL7v2), UC2 (CDA), UC3, UC4, UCn processors",
          details: {
            responsibilities: [
              "HL7v2 message processing (ADT, ORM, ORU)",
              "Clinical Document Architecture processing",
              "Specialized healthcare data exchange",
              "Insurance and claims processing"
            ],
            technologies: ["HL7v2 Parser", "CDA Parser", "MIRTH Connect", "Claims Processing Engine"],
            dataFlow: "Processes incoming healthcare data and feeds to FHIR exchange layer"
          }
        },
        {
          id: "nphies-engines",
          name: "Processing Engines",
          icon: RefreshCw,
          description: "Validation Engine, Integration Engine, and data processing",
          details: {
            responsibilities: [
              "Data format validation and business rule enforcement",
              "Message routing and protocol transformation",
              "Raw data storage and audit trails",
              "API provisioning for external access"
            ],
            technologies: ["Schema Validators", "ESB", "Oracle Database", "RESTful APIs"],
            dataFlow: "Validates, processes, and provides API access to healthcare data"
          }
        }
      ]
    },
    {
      id: "integration",
      name: "Integration & Streaming Layer",
      color: "bg-yellow-100 border-yellow-300",
      description: "Event streaming and API management infrastructure",
      components: [
        {
          id: "streaming-platform",
          name: "Redpanda Streaming",
          icon: Activity,
          description: "High-performance Kafka-compatible streaming platform",
          details: {
            responsibilities: [
              "Real-time event streaming and distribution",
              "Topic management and consumer coordination",
              "Message persistence and delivery guarantees",
              "Cross-system data synchronization"
            ],
            technologies: ["Redpanda Cluster", "Schema Registry", "Kafka Connect", "Stream Processing"],
            dataFlow: "Distributes healthcare events to all subscribers in real-time"
          }
        },
        {
          id: "api-management",
          name: "API Gateway & Cache",
          icon: Shield,
          description: "APIGEE Gateway, Redis Cache, and Error Handling",
          details: {
            responsibilities: [
              "Secure API access and authentication proxy",
              "High-performance caching and session management",
              "Comprehensive error management and retry logic",
              "API monitoring and developer onboarding"
            ],
            technologies: ["Google APIGEE Edge", "Redis Cluster", "Circuit Breakers", "OAuth 2.0"],
            dataFlow: "Manages secure API access and optimizes performance"
          }
        }
      ]
    },
    {
      id: "fhir",
      name: "FHIR Data Exchange Layer",
      color: "bg-red-100 border-red-300",
      description: "Central data exchange hub with JWT authentication",
      components: [
        {
          id: "fhir-core",
          name: "FHIR Server Core",
          icon: Database,
          description: "HAPI FHIR Server with JWT Authentication and Format Conversion",
          details: {
            responsibilities: [
              "FHIR R4 resource management and RESTful API",
              "System-based JWT authentication and authorization",
              "HL7v2/CDA to FHIR format conversion",
              "FHIR conformance validation and terminology services"
            ],
            technologies: ["HAPI FHIR Server", "PostgreSQL", "JWT Processing", "HAPI FHIR Validator"],
            dataFlow: "Central hub receiving data from multiple sources and distributing to all subscribers"
          }
        },
        {
          id: "fhir-processing",
          name: "Data Processing & Storage",
          icon: RefreshCw,
          description: "Business Validation, Data Cleansing, and Notification Services",
          details: {
            responsibilities: [
              "Clinical rule validation and business logic enforcement",
              "Data quality improvement and standardization",
              "Clean data storage in optimized SQL Server",
              "Real-time notification publishing to all subscribers"
            ],
            technologies: ["Drools Rules Engine", "SQL Server 2022", "Redpanda Producer", "Data Quality Tools"],
            dataFlow: "Processes, validates, cleanses data and notifies all subscribers including NPHIES"
          }
        }
      ]
    },
    {
      id: "consumers",
      name: "Healthcare Application Consumers",
      color: "bg-purple-100 border-purple-300",
      description: "Applications consuming FHIR data through various access patterns",
      components: [
        {
          id: "sehhaty-apps",
          name: "Sehhaty Applications",
          icon: Smartphone,
          description: "Mobile and Backend applications with event-driven architecture",
          details: {
            responsibilities: [
              "Patient interface and health record access",
              "Provider workflows and clinical tools",
              "Real-time notification processing",
              "Offline synchronization and conflict resolution"
            ],
            technologies: ["Native Mobile", "Spring Boot", "HAPI FHIR Client", "Redpanda Consumers"],
            dataFlow: "Subscribes to FHIR notifications and pulls complete resources via API"
          }
        },
        {
          id: "external-consumers",
          name: "External FHIR Consumers",
          icon: Monitor,
          description: "Anat, Doctor Apps, Research Platforms, and Analytics Tools",
          details: {
            responsibilities: [
              "Patient profile retrieval and clinical data access",
              "Research data extraction and analytics",
              "Clinical decision support and treatment planning",
              "Healthcare analytics and performance reporting"
            ],
            technologies: ["FHIR Client APIs", "JWT Authentication", "RESTful APIs", "BI Tools"],
            dataFlow: "Direct FHIR API access with system-based authentication"
          }
        }
      ]
    }
  ];

  const ComponentCard = ({ component, layerColor, isExpanded, onToggle }) => (
    <div className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 ${layerColor} hover:shadow-lg`}>
      <div className="flex items-center justify-between" onClick={() => onToggle(component.id)}>
        <div className="flex items-center">
          <component.icon className="text-gray-700 mr-3" size={24} />
          <div>
            <h4 className="font-semibold text-gray-800">{component.name}</h4>
            <p className="text-sm text-gray-600">{component.description}</p>
          </div>
        </div>
        <div className="text-gray-500">
          {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </div>
      
      {isExpanded && (
        <div className="mt-4 border-t pt-4 space-y-4">
          <div>
            <h5 className="font-medium text-gray-800 mb-2 flex items-center">
              <CheckCircle className="mr-2" size={16} />
              Key Responsibilities
            </h5>
            <ul className="text-sm text-gray-700 space-y-1">
              {component.details.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="font-medium text-gray-800 mb-2 flex items-center">
              <Settings className="mr-2" size={16} />
              Technologies
            </h5>
            <div className="flex flex-wrap gap-2">
              {component.details.technologies.map((tech, index) => (
                <span key={index} className="bg-white px-2 py-1 rounded text-xs border">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="font-medium text-gray-800 mb-2 flex items-center">
              <Network className="mr-2" size={16} />
              Data Flow Pattern
            </h5>
            <p className="text-sm text-gray-700 bg-white p-2 rounded border">
              {component.details.dataFlow}
            </p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full h-screen overflow-auto bg-gray-50 p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          FHIR Interoperability Architecture - Standard View
        </h1>
        <p className="text-gray-600 mb-4">
          Simplified architectural overview with expandable component details
        </p>
      </header>

      <div className="space-y-8">
        {architectureLayers.map((layer) => (
          <div key={layer.id} className="space-y-4">
            <div className={`p-4 rounded-lg border-2 ${layer.color}`}>
              <h2 className="text-xl font-bold text-gray-800 mb-2">{layer.name}</h2>
              <p className="text-gray-700">{layer.description}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {layer.components.map((component) => (
                <ComponentCard
                  key={component.id}
                  component={component}
                  layerColor={layer.color}
                  isExpanded={expandedComponents[component.id]}
                  onToggle={toggleComponent}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-white rounded-lg border-2 border-gray-200">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Architecture Highlights</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Database className="text-blue-600" size={24} />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Central Data Exchange</h4>
            <p className="text-sm text-gray-600">FHIR acts as the central hub receiving data from multiple sources and distributing to all subscribers</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Activity className="text-green-600" size={24} />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Event-Driven Architecture</h4>
            <p className="text-sm text-gray-600">Real-time data synchronization through Redpanda streaming platform</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Key className="text-purple-600" size={24} />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">System-Based Authentication</h4>
            <p className="text-sm text-gray-600">JWT-based authentication focused on system-to-system communication</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandardArchitectureDiagram;
