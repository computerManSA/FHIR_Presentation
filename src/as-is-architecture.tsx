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
  ArrowRight,
} from "lucide-react";

const AsIsArchitecture = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedLayer, setSelectedLayer] = useState(null);

  // Modified component details for the As-Is architecture
  const componentDetails = {
    // External Systems Layer (kept but interactions disabled)
    his: {
      name: "Hospital Information Systems",
      description:
        "Traditional healthcare information systems managing patient care and administrative processes with legacy interfaces.",
      technologies: ["HL7v2", "Custom Protocols"],
      responsibilities: [
        "Patient registration",
        "Clinical documentation",
        "Treatment records",
        "Laboratory results",
      ],
      dataFormats: [
        "HL7v2 ADT",
        "HL7v2 ORM",
        "HL7v2 ORU",
        "Proprietary formats",
      ],
      integration: "Legacy point-to-point connections",
      limitations: [
        "Limited real-time capabilities",
        "Custom integration required",
        "Data format inconsistencies",
      ],
    },
    eynti: {
      name: "عينتي (Eynti) System",
      description:
        "Electronic health record system with basic clinical documentation capabilities.",
      technologies: ["Custom EHR Platform", "HL7v2", "Basic APIs"],
      responsibilities: [
        "Clinical documentation",
        "Patient records",
        "Basic care coordination",
      ],
      dataFormats: ["HL7v2", "Custom XML", "PDF documents"],
      integration: "Direct API connections",
      limitations: [
        "Limited interoperability",
        "Manual data synchronization",
        "Closed ecosystem",
      ],
    },
    raqeem: {
      name: "Raqeem System",
      description:
        "Provider registration and authorization system with limited integration capabilities.",
      technologies: ["Legacy Database", "SOAP Services", "Custom APIs"],
      responsibilities: [
        "Provider registration",
        "Basic authorization",
        "Regulatory compliance",
      ],
      dataFormats: ["SOAP XML", "Custom formats"],
      integration: "Isolated system with manual processes",
      limitations: [
        "No real-time updates",
        "Manual verification processes",
        "Limited data sharing",
      ],
    },
    others: {
      name: "Other Systems",
      description:
        "Various healthcare systems with minimal integration and data sharing capabilities.",
      technologies: [
        "Multiple platforms",
        "Proprietary interfaces",
        "File-based exchange",
      ],
      responsibilities: ["Specialized services", "Isolated data management"],
      dataFormats: [
        "Various proprietary formats",
        "CSV files",
        "Manual reports",
      ],
      integration: "Ad-hoc connections",
      limitations: ["No standardization", "Manual processes", "Data silos"],
    },

    // NPHIES Layer (labeled as NAFEES in As-Is)
    uc1: {
      name: "Use Case 1",
      description:
        "Basic message processing with limited validation and transformation capabilities.",
      technologies: [
        "Legacy Message Processor",
        "Basic Validation",
        "File Processing",
      ],
      responsibilities: [
        "Message reception",
        "Basic format validation",
        "Simple routing",
      ],
      dataFormats: ["HL7v2", "Raw messages"],
      integration: "Simple message passing",
      limitations: [
        "No real-time processing",
        "Limited error handling",
        "Basic validation only",
      ],
    },
    ucn: {
      name: "Additional Use Cases",
      description:
        "Various use cases with minimal standardization and limited processing capabilities.",
      technologies: ["Custom Processors", "Manual Workflows"],
      responsibilities: [
        "Use case specific processing",
        "Manual interventions",
      ],
      dataFormats: ["Mixed formats"],
      integration: "Case-by-case implementation",
      limitations: [
        "Inconsistent processing",
        "Manual overhead",
        "No scalability",
      ],
    },
    validation: {
      name: "Validation Engine",
      description:
        "Basic validation with limited business rules and manual oversight required.",
      technologies: [
        "Simple Validators",
        "Manual Checks",
        "Basic Rules Engine",
      ],
      responsibilities: [
        "Format validation",
        "Basic business rules",
        "Error flagging",
      ],
      dataFormats: ["Source formats preserved"],
      integration: "Inline validation",
      limitations: [
        "Limited rule complexity",
        "Manual intervention required",
        "No automated remediation",
      ],
    },
    "nafees-db": {
      name: "NAFEES Database",
      description:
        "Basic data storage with limited query capabilities and no real-time access.",
      technologies: [
        "Traditional Database",
        "Batch Processing",
        "File Storage",
      ],
      responsibilities: [
        "Data persistence",
        "Basic reporting",
        "Historical storage",
      ],
      dataFormats: ["Raw data storage", "Unprocessed formats"],
      integration: "Batch data access",
      limitations: [
        "No real-time queries",
        "Limited analytics",
        "Data freshness issues",
      ],
    },

    // PPv1 Layer (Data Lake)
    "sp-validation": {
      name: "SPs & Business Validation",
      description:
        "Stored procedures and basic business validation with manual processes.",
      technologies: ["Stored Procedures", "Database Scripts", "Manual Checks"],
      responsibilities: [
        "Data validation",
        "Business rule enforcement",
        "Data transformation",
      ],
      dataFormats: ["Database formats"],
      integration: "Database-centric processing",
      limitations: [
        "Inflexible rules",
        "Performance bottlenecks",
        "Difficult maintenance",
      ],
    },
    "ppv1-db": {
      name: "PPv1 Database",
      description:
        "Data lake with basic storage capabilities but limited real-time access and analytics.",
      technologies: ["Data Lake", "Batch Processing", "Basic Querying"],
      responsibilities: ["Data storage", "Batch analytics", "Reporting"],
      dataFormats: ["Multiple formats", "Unstructured data"],
      integration: "ETL-based access",
      limitations: [
        "Data freshness issues",
        "Limited real-time capabilities",
        "Complex data retrieval",
      ],
    },

    // Sehhaty Layer
    "app-be": {
      name: "Application Backend",
      description:
        "Traditional backend with limited real-time capabilities and manual data synchronization.",
      technologies: [
        "Monolithic Architecture",
        "Traditional APIs",
        "Scheduled Jobs",
      ],
      responsibilities: [
        "Business logic",
        "Data orchestration",
        "User management",
      ],
      dataFormats: ["Application-specific formats"],
      integration: "Batch data synchronization",
      limitations: [
        "Data freshness issues",
        "Limited scalability",
        "Manual sync processes",
      ],
    },
    "mobile-app": {
      name: "Mobile Application",
      description:
        "Mobile app with offline capabilities but dependent on periodic data synchronization.",
      technologies: ["Native Mobile", "Local Storage", "Sync Mechanisms"],
      responsibilities: [
        "User interface",
        "Offline functionality",
        "Data presentation",
      ],
      dataFormats: ["JSON", "Local formats"],
      integration: "Periodic sync with backend",
      limitations: [
        "Data staleness",
        "Sync conflicts",
        "Limited real-time updates",
      ],
    },
    "user-db": {
      name: "User Database",
      description:
        "Traditional user database with basic functionality and limited integration.",
      technologies: [
        "Relational Database",
        "Basic Indexing",
        "Standard Queries",
      ],
      responsibilities: [
        "User data storage",
        "Session management",
        "Basic analytics",
      ],
      dataFormats: ["Normalized tables"],
      integration: "Direct database access",
      limitations: [
        "Limited analytics",
        "Basic reporting",
        "No real-time capabilities",
      ],
    },
  };

  const layers = [
    {
      id: "external",
      name: "External Systems Layer",
      color: "bg-blue-50 border-blue-200",
      description:
        "Legacy healthcare systems with limited integration capabilities",
      details:
        "External systems operate independently with point-to-point connections. Data exchange relies on batch processing and manual interventions.",
      issues: [
        "Data silos",
        "Manual processes",
        "Limited real-time capabilities",
      ],
    },
    {
      id: "nafees",
      name: "NAFEES System (Non-FHIR complied)",
      color: "bg-green-50 border-green-200",
      description:
        "Legacy processing system with basic validation and limited integration",
      details:
        "NAFEES processes healthcare data using traditional methods with limited real-time capabilities and minimal standardization.",
      issues: [
        "No FHIR compliance",
        "Limited scalability",
        "Manual validation processes",
      ],
    },
    {
      id: "ppv1",
      name: "PPv1 (Data lake)",
      color: "bg-yellow-50 border-yellow-200",
      description:
        "Basic data lake with ETL-based processing and limited real-time access",
      details:
        "PPv1 serves as a data lake with batch processing capabilities but suffers from data freshness issues and limited analytics.",
      issues: [
        "Data freshness problems",
        "ETL bottlenecks",
        "Limited real-time access",
      ],
    },
    {
      id: "sehhaty",
      name: "Sehhaty Platform",
      color: "bg-purple-50 border-purple-200",
      description: "Traditional platform with periodic synchronization",
      details:
        "Sehhaty provides healthcare services but relies on periodic data synchronization, leading to data staleness and user experience issues.",
      issues: [
        "Data staleness",
        "Synchronization delays",
        "Limited real-time updates",
      ],
    },
  ];

  const dataFlow = [
    {
      stage: "User Visits HIS",
      description:
        "User visits healthcare facility, initiating health record updates",
      issues: [
        "Multiple systems involved",
        "Manual data entry",
        "No standardized process",
      ],
    },
    {
      stage: "Treatment & Documentation",
      description:
        "Healthcare provider records treatment data in HIS/external systems",
      issues: [
        "Data captured in various formats",
        "Systems operate in silos",
        "Delayed processing",
      ],
    },
    {
      stage: "SMS Notification",
      description:
        "User receives SMS notification about updated health records",
      issues: [
        "Notification arrives before data is available",
        "Creates poor user experience",
        "No synchronization with data availability",
      ],
    },
    {
      stage: "External → NAFEES",
      description: "External systems push non-FHIR messages via APIs",
      issues: [
        "Multiple data formats",
        "Manual integration",
        "No real-time processing",
      ],
    },
    {
      stage: "ETL to PPv1",
      description: "Periodic ETL processes push data to data lake",
      issues: [
        "Data freshness problems",
        "Batch processing delays",
        "No real-time updates",
      ],
    },
    {
      stage: "User Checks Sehhaty",
      description: "User checks Sehhaty app but data is not yet available",
      issues: ["Data not synced yet", "ETL delays", "User frustration"],
    },
  ];

  // Modified Component to disable interactions for external systems
  const Component = ({
    id,
    name,
    icon: Icon,
    status = "warning",
    disableInteraction = false,
  }) => {
    const statusColors = {
      healthy: "",
      warning: "",
      error: "",
    };

    const component = componentDetails[id];

    return (
      <div
        className={`
          relative p-3 rounded-lg border-2 ${disableInteraction ? "" : "cursor-pointer hover:shadow-lg hover:scale-105"} 
          transition-all duration-200 
          bg-white border-gray-300 shadow-sm
        `}
        onClick={() => (disableInteraction ? null : setSelectedComponent(id))}
      >
        <div className="flex items-center justify-center mb-2">
          <Icon size={20} className="text-gray-600" />
        </div>
        <div className="text-xs text-center font-medium text-gray-700">
          {name}
        </div>
        <div
          className={`absolute -top-1 -left-1 w-3 h-3 ${statusColors[status]} rounded-full`}
        ></div>
        {/* {component?.limitations && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">!</span>
          </div>
        )} */}
      </div>
    );
  };

  // Modified LayerHeader to disable interactions for NPHIES layer
  const LayerHeader = ({
    layer,
    isSelected,
    onClick,
    disableInteraction = false,
  }) => (
    <div
      className={`
        p-4 rounded-lg border-2 ${disableInteraction ? "" : "cursor-pointer hover:shadow-md"} transition-all duration-200
        ${isSelected ? "border-red-500 bg-red-100" : layer.color}
      `}
      onClick={() => (disableInteraction ? null : onClick(layer.id))}
    >
      <h3 className="font-bold text-lg text-gray-800">{layer.name}</h3>
      <p className="text-sm text-gray-600 mt-1">{layer.description}</p>
      {isSelected && !disableInteraction && (
        <div className="mt-3 p-3 bg-white rounded border">
          <h4 className="font-semibold text-sm mb-2">Current Issues:</h4>
          <ul className="text-xs text-red-700 space-y-1">
            {layer.issues.map((issue, index) => (
              <li key={index} className="flex items-center">
                <AlertTriangle size={10} className="mr-2 flex-shrink-0" />
                {issue}
              </li>
            ))}
          </ul>
          <div className="mt-2">
            <h4 className="font-semibold text-sm mb-1">Details:</h4>
            <p className="text-xs text-gray-700">{layer.details}</p>
          </div>
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
            <h2 className="text-xl font-bold text-gray-800">
              {component.name}
            </h2>
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
                Current Technologies
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                {component.technologies.map((tech, index) => (
                  <li key={index} className="flex items-center">
                    <Database
                      size={12}
                      className="text-blue-500 mr-2 flex-shrink-0"
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
                      <FileText
                        size={12}
                        className="text-orange-500 mr-2 flex-shrink-0"
                      />
                      <span>{format}</span>
                    </li>
                  ))
                ) : (
                  <li className="flex items-center">
                    <FileText
                      size={12}
                      className="text-orange-500 mr-2 flex-shrink-0"
                    />
                    <span>{component.dataFormats}</span>
                  </li>
                )}
              </ul>

              <h3 className="font-semibold mb-3 mt-4 text-gray-800 flex items-center">
                <Network size={16} className="mr-2" />
                Integration Approach
              </h3>
              <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                {component.integration}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-gray-800 flex items-center">
                <CheckCircle size={16} className="mr-2" />
                Current Responsibilities
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                {component.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle
                      size={12}
                      className="text-green-500 mr-2 flex-shrink-0"
                    />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {component.limitations && (
                <>
                  <h3 className="font-semibold mb-3 mt-4 text-red-800 flex items-center">
                    <AlertTriangle size={16} className="mr-2" />
                    Current Limitations
                  </h3>
                  <ul className="text-sm text-red-600 space-y-2">
                    {component.limitations.map((limitation, index) => (
                      <li key={index} className="flex items-center">
                        <AlertTriangle
                          size={12}
                          className="text-red-500 mr-2 flex-shrink-0"
                        />
                        <span>{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const DataFlowModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-6xl w-full max-h-96 overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            Current Patient Journey & Data Flow Issues
          </h2>
          <button
            onClick={() => setSelectedComponent(null)}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="space-y-4">
          {dataFlow.map((flow, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border-2 bg-red-50 border-red-200"
            >
              <h3 className="font-semibold text-lg mb-2">{flow.stage}</h3>
              <p className="text-gray-700 mb-2">{flow.description}</p>

              <div className="bg-red-100 p-3 rounded border mt-2">
                <h4 className="font-semibold text-sm text-red-800 mb-2">
                  Current Issues:
                </h4>
                <ul className="text-sm text-red-700 space-y-1">
                  {flow.issues.map((issue, issueIndex) => (
                    <li key={issueIndex} className="flex items-center">
                      <AlertTriangle size={12} className="mr-2 flex-shrink-0" />
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
          <h3 className="font-semibold text-lg mb-2">
            Key Architecture Challenges
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-red-800 mb-2">
                Scalability Issues
              </h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Batch processing creates bottlenecks</li>
                <li>• No horizontal scaling capabilities</li>
                <li>• Database-centric approach limits throughput</li>
                <li>• Monolithic architecture restricts growth</li>
                <li>• Hard coupling between components</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-800 mb-2">
                Maintainability Issues
              </h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Multiple point-to-point integrations</li>
                <li>• Non-standardized data formats</li>
                <li>• Tightly coupled components</li>
                <li>• Heavy reliance on ETL processes</li>
                <li>• Manual intervention requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Visual Data Flow Diagram component
  const DataFlowDiagram = () => (
    <div className="mt-8 p-6 bg-white rounded-lg border-2 border-red-200">
      <h3 className="text-lg font-bold mb-4 text-gray-800">
        Patient Data Flow Journey
      </h3>

      <div className="relative overflow-x-auto">
        <div className="flex flex-col space-y-6">
          {/* Step 1: User at HIS */}
          <div className="flex items-center">
            <div className="w-1/6 text-center">
              <div className="rounded-full h-16 w-16 bg-blue-100 flex items-center justify-center mx-auto">
                <Server className="text-blue-600" size={32} />
              </div>
              <p className="text-sm font-medium mt-1">1. User Visit at HIS</p>
            </div>
            <div className="w-5/6 pl-4">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm">
                  User visits healthcare facility where their health data is
                  updated in HIS systems
                </p>
                <div className="mt-2 p-2 bg-red-50 rounded border border-red-200">
                  <p className="text-xs text-red-700 flex items-center">
                    <AlertTriangle size={12} className="mr-2 flex-shrink-0" />
                    Data captured in various non-standardized formats
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow down */}
          <div className="flex justify-center">
            <ArrowRight
              size={20}
              className="transform rotate-90 text-gray-400"
            />
          </div>

          {/* Step 2: SMS Notification */}
          <div className="flex items-center">
            <div className="w-1/6 text-center">
              <div className="rounded-full h-16 w-16 bg-yellow-100 flex items-center justify-center mx-auto">
                <Activity className="text-yellow-600" size={32} />
              </div>
              <p className="text-sm font-medium mt-1">2. SMS Notification</p>
            </div>
            <div className="w-5/6 pl-4">
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm">
                  User receives SMS notification that new health data is
                  available
                </p>
                <div className="mt-2 p-2 bg-red-50 rounded border border-red-200">
                  <p className="text-xs text-red-700 flex items-center">
                    <AlertTriangle size={12} className="mr-2 flex-shrink-0" />
                    SMS sent before data is actually available in Sehhaty
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Arrow down */}
          <div className="flex justify-center">
            <ArrowRight
              size={20}
              className="transform rotate-90 text-gray-400"
            />
          </div>
          {/* Step 5: User Checks Sehhaty */}
          <div className="flex items-center">
            <div className="w-1/6 text-center">
              <div className="rounded-full h-16 w-16 bg-red-100 flex items-center justify-center mx-auto">
                <Smartphone className="text-red-600" size={32} />
              </div>
              <p className="text-sm font-medium mt-1">3. User Checks Sehhaty</p>
            </div>
            <div className="w-5/6 pl-4">
              <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                <p className="text-sm">
                  User opens Sehhaty app to check new health data, but finds it
                  unavailable
                </p>
                <div className="mt-2 p-2 bg-red-50 rounded border border-red-200">
                  <p className="text-xs text-red-700 flex items-center">
                    <AlertTriangle size={12} className="mr-2 flex-shrink-0" />
                    Poor user experience due to data freshness issues and
                    processing delays
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow down */}
          <div className="flex justify-center">
            <ArrowRight
              size={20}
              className="transform rotate-90 text-gray-400"
            />
          </div>

          {/* Step 3: NAFEES/External Processing */}
          <div className="flex items-center">
            <div className="w-1/6 text-center">
              <div className="rounded-full h-16 w-16 bg-green-100 flex items-center justify-center mx-auto">
                <GitBranch className="text-green-600" size={32} />
              </div>
              <p className="text-sm font-medium mt-1">4. NAFEES Processing</p>
            </div>
            <div className="w-5/6 pl-4">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm">
                  External systems push non-FHIR messages to NAFEES for
                  processing
                </p>
                <div className="mt-2 p-2 bg-red-50 rounded border border-red-200">
                  <p className="text-xs text-red-700 flex items-center">
                    <AlertTriangle size={12} className="mr-2 flex-shrink-0" />
                    No real-time processing, batch-oriented approach
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow down */}
          <div className="flex justify-center">
            <ArrowRight
              size={20}
              className="transform rotate-90 text-gray-400"
            />
          </div>

          {/* Step 4: ETL to PPv1 */}
          <div className="flex items-center">
            <div className="w-1/6 text-center">
              <div className="rounded-full h-16 w-16 bg-purple-100 flex items-center justify-center mx-auto">
                <Database className="text-purple-600" size={32} />
              </div>
              <p className="text-sm font-medium mt-1">5. ETL to PPv1</p>
            </div>
            <div className="w-5/6 pl-4">
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-sm">
                  Periodic ETL processes push data from NAFEES to PPv1 data lake
                </p>
                <div className="mt-2 p-2 bg-red-50 rounded border border-red-200">
                  <p className="text-xs text-red-700 flex items-center">
                    <AlertTriangle size={12} className="mr-2 flex-shrink-0" />
                    Scheduled batch ETL creates significant data delays
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <p className="text-sm font-medium text-yellow-800">
          The current architecture creates a significant data freshness problem.
          Users are notified about new health data via SMS, but when they check
          the Sehhaty app, the data isn't available yet because of delays in ETL
          processing and batch-oriented data flows. This creates a frustrating
          user experience and undermines trust in the platform.
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-full h-screen overflow-auto bg-gray-50 p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Patient Profile (As-Is) Architecture
        </h1>
        <p className="text-gray-600 mb-4">
          Current Legacy Architecture with Limited Integration Capabilities
        </p>
      </header>

      <div className="space-y-6">
        {/* External Systems Layer - with disabled interaction */}
        <LayerHeader
          layer={layers[0]}
          isSelected={selectedLayer === "external"}
          onClick={setSelectedLayer}
          disableInteraction={true}
        />
        <div className="grid grid-cols-4 gap-4 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
          <Component
            id="his"
            name="HISs"
            icon={Server}
            status="warning"
            disableInteraction={true}
          />
          <Component
            id="eynti"
            name="عينتي"
            icon={Eye}
            status="warning"
            disableInteraction={true}
          />
          <Component
            id="raqeem"
            name="Raqeem"
            icon={Database}
            status="error"
            disableInteraction={true}
          />
          <Component
            id="others"
            name="Other Systems"
            icon={Server}
            status="error"
            disableInteraction={true}
          />
        </div>

        {/* NAFEES Layer - with disabled expandability */}
        <LayerHeader
          layer={layers[1]}
          isSelected={selectedLayer === "nafees"}
          onClick={setSelectedLayer}
          disableInteraction={true}
        />
        <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
          <div className="grid grid-cols-4 gap-4 mb-4">
            <Component
              id="uc1"
              name="UC1"
              icon={GitBranch}
              status="warning"
              disableInteraction={true}
            />
            <Component
              id="ucn"
              name="UCn"
              icon={GitBranch}
              status="warning"
              disableInteraction={true}
            />
            <Component
              id="validation"
              name="Validation"
              icon={CheckCircle}
              status="error"
              disableInteraction={true}
            />
            <Component
              id="nafees-db"
              name="NAFEES DB"
              icon={Database}
              status="warning"
              disableInteraction={true}
            />
          </div>
        </div>

        {/* PPv1 Layer */}
        <LayerHeader
          layer={layers[2]}
          isSelected={selectedLayer === "ppv1"}
          onClick={setSelectedLayer}
          disableInteraction={true}
        />
        <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
          <div className="grid grid-cols-2 gap-4">
            <Component
              id="sp-validation"
              name="SPs & Business Validation"
              icon={Zap}
              status="error"
              disableInteraction={true}
            />
            <Component
              id="ppv1-db"
              name="PPv1 DB"
              icon={Database}
              status="error"
              disableInteraction={true}
            />
          </div>
        </div>

        {/* Sehhaty Layer */}
        <LayerHeader
          layer={layers[3]}
          isSelected={selectedLayer === "sehhaty"}
          onClick={setSelectedLayer}
        />
        <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
          <div className="grid grid-cols-3 gap-4">
            <Component
              id="app-be"
              name="Application BE"
              icon={Server}
              status="warning"
              disableInteraction={true}
            />
            <Component
              id="mobile-app"
              name="Mobile App"
              icon={Smartphone}
              status="warning"
              disableInteraction={true}
            />
            <Component
              id="user-db"
              name="DB - Users"
              icon={Database}
              status="warning"
              disableInteraction={true}
            />
          </div>
        </div>
      </div>

      {/* Data Flow Diagram - added below Sehhaty box */}
      <DataFlowDiagram />

      {/* Key Issues Summary */}
      <div className="mt-8 p-4 bg-white rounded-lg border-2 border-red-200">
        <h3 className="text-lg font-bold mb-4 text-red-800 flex items-center">
          <AlertTriangle className="mr-2" size={20} />
          Critical Architecture Issues
        </h3>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-red-700 mb-2">Data Freshness</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• SMS notifications come before data</li>
              <li>• Periodic ETL processes cause delays</li>
              <li>• No real-time data processing</li>
              <li>• Poor synchronization between systems</li>
              <li>• Creates negative user experience</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-red-700 mb-2">Scalability</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Batch processing limits throughput</li>
              <li>• Database-centric architecture</li>
              <li>• No horizontal scaling capability</li>
              <li>• Hard coupling between components</li>
              <li>• Performance bottlenecks</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-red-700 mb-2">Maintainability</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Point-to-point integrations</li>
              <li>• Multiple data formats</li>
              <li>• Manual intervention requirements</li>
              <li>• ETL process complexity</li>
              <li>• No standardized interfaces</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Component Detail Modal */}
      {selectedComponent && selectedComponent !== "dataflow" && (
        <ComponentDetailModal componentId={selectedComponent} />
      )}

      {/* Data Flow Modal */}
      {selectedComponent === "dataflow" && <DataFlowModal />}
    </div>
  );
};

export default AsIsArchitecture;
