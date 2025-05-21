import React, { useState } from "react";
import {
  Server,
  Database,
  ArrowRight,
  Clock,
  CheckCircle,
  AlertTriangle,
  Users,
  Shield,
  Zap,
  Layers,
  Code,
  FileText,
  Cloud,
  Activity,
  Upload,
  Search,
  PlayCircle,
  Smartphone,
  Lock,
  ChevronDown,
  ChevronUp,
  GitBranch,
  BarChart,
  Monitor,
  Calendar,
  Timeline,
} from "lucide-react";

const PocScopePage = () => {
  const [expandedSections, setExpandedSections] = useState({
    infrastructure: true,
    nphies: false,
    integration: false,
    fhir: false,
    sehhaty: false,
    security: false,
    testing: false,
  });
  const [showDependencyGraph, setShowDependencyGraph] = useState(false);
  const [expandedTask, setExpandedTask] = useState(null);

  // Toggle section expansion
  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  // POC Context
  const pocContext = {
    objective:
      "Validate the enhanced FHIR interoperability architecture in the testing environment with a full cycle flow from NPHIES to Sehhaty frontend, demonstrating improved performance, enhanced data freshness, and secure access patterns.",
    scope:
      "The POC will implement a subset of key FHIR resources (Patient, Encounter, Observation) with the complete event-driven flow using real-time notifications and the SMART-on-FHIR authentication framework.",
    constraints: [
      "Limited to testing environment only",
      "Using sample/synthetic data",
      "Focused on key workflow patterns (not all possible use cases)",
      "Utilizing available infrastructure with minimal new hardware procurement",
      "Timeboxed to 8 weeks for completion",
    ],
    success: [
      "End-to-end flow demonstrated from NPHIES to Sehhaty frontend",
      "Real-time data updates visible in Sehhaty application",
      "SMART-on-FHIR authentication successfully implemented",
      "Performance metrics showing improved data freshness (seconds vs. hours)",
      "Event streaming architecture validated with proper error handling",
      "All teams able to articulate required changes for full production implementation",
    ],
  };

  // POC Team Structure
  const pocTeam = {
    core: [
      {
        role: "POC Technical Lead",
        skills: "FHIR expertise, solution architecture, healthcare integration",
        allocation: "100%",
      },
      {
        role: "Project Manager",
        skills: "Healthcare IT project management, stakeholder coordination",
        allocation: "50%",
      },
      {
        role: "Clinical SME",
        skills: "Healthcare workflows, clinical data mapping",
        allocation: "25%",
      },
    ],
    technical: [
      {
        role: "NPHIES Integration Engineer",
        skills: "HL7v2, CDA, NPHIES system knowledge",
        allocation: "50%",
      },
      {
        role: "FHIR Developer",
        skills: "HAPI FHIR, Java, data modeling",
        allocation: "100%",
      },
      {
        role: "Streaming Platform Engineer",
        skills: "Kafka/Redpanda, event streaming",
        allocation: "75%",
      },
      {
        role: "Sehhaty App Developer",
        skills: "React Native, FHIR client development",
        allocation: "75%",
      },
      {
        role: "Security Engineer",
        skills: "Keycloak, OAuth 2.0, SMART on FHIR",
        allocation: "50%",
      },
      {
        role: "DevOps Engineer",
        skills: "Kubernetes, CI/CD, infrastructure automation",
        allocation: "50%",
      },
    ],
    stakeholders: [
      {
        role: "NPHIES Representative",
        responsibility: "Ensure NPHIES integration approach meets requirements",
      },
      {
        role: "Sehhaty Product Owner",
        responsibility: "Validate frontend functionality and user experience",
      },
      {
        role: "IT Security Officer",
        responsibility: "Review and approve security architecture",
      },
      {
        role: "Technical Architecture Board",
        responsibility: "Architecture review and approval",
      },
    ],
  };

  // POC Implementation Tasks
  const pocTasks = {
    infrastructure: [
      {
        id: "infra-1",
        name: "Provision Kubernetes environment for POC",
        team: "DevOps",
        effort: "3 days",
        dependencies: [],
        steps: [
          "Request and allocate resources in test environment",
          "Configure Kubernetes cluster with namespaces for each component",
          "Set up CI/CD pipeline for deployment",
          "Establish monitoring and logging infrastructure",
          "Document environment configuration and access procedures",
        ],
        risks: [
          {
            issue: "Resource constraints in test environment",
            mitigation: "Pre-allocate resources with IT infrastructure team",
          },
        ],
        artifacts: [
          "Environment documentation",
          "Cluster configuration",
          "Access procedures",
        ],
        parallelWith: [],
      },
      {
        id: "infra-2",
        name: "Deploy Redpanda streaming platform",
        team: "Streaming Engineer",
        effort: "2 days",
        dependencies: ["infra-1"],
        steps: [
          "Deploy Redpanda operator to Kubernetes",
          "Configure 3-node Redpanda cluster",
          "Set up Schema Registry",
          "Configure topics for NPHIES, FHIR notifications",
          "Implement monitoring and alerting",
          "Validate basic functionality with test messages",
        ],
        risks: [
          {
            issue: "Complex configuration in Kubernetes",
            mitigation: "Use Redpanda operator for simplified deployment",
          },
          {
            issue: "Performance tuning required",
            mitigation: "Use recommended configuration for test environment",
          },
        ],
        artifacts: [
          "Redpanda configuration",
          "Topic structure documentation",
          "Test results",
        ],
        parallelWith: ["infra-3", "infra-4"],
      },
      {
        id: "infra-3",
        name: "Deploy PostgreSQL database for FHIR server",
        team: "DevOps",
        effort: "1 day",
        dependencies: ["infra-1"],
        steps: [
          "Deploy PostgreSQL instance to Kubernetes",
          "Configure storage and resources",
          "Set up backup process (for POC data protection)",
          "Create database schema for HAPI FHIR",
          "Configure access credentials",
        ],
        risks: [
          {
            issue: "Data persistence in test environment",
            mitigation: "Configure persistent volumes and backup",
          },
        ],
        artifacts: ["Database configuration", "Connection information"],
        parallelWith: ["infra-2", "infra-4"],
      },
      {
        id: "infra-4",
        name: "Deploy Keycloak for authentication",
        team: "Security Engineer",
        effort: "2 days",
        dependencies: ["infra-1"],
        steps: [
          "Deploy Keycloak to Kubernetes cluster",
          "Configure Keycloak realms and clients",
          "Set up initial users and roles",
          "Configure token settings",
          "Implement SMART on FHIR profiles",
          "Set up test users for different access patterns",
        ],
        risks: [
          {
            issue: "Complex SMART on FHIR configuration",
            mitigation:
              "Use established open-source implementations as reference",
          },
        ],
        artifacts: [
          "Keycloak configuration",
          "SMART on FHIR profiles",
          "Test user credentials",
        ],
        parallelWith: ["infra-2", "infra-3"],
      },
      {
        id: "infra-5",
        name: "Configure network access and security",
        team: "DevOps & Security Engineer",
        effort: "1 day",
        dependencies: ["infra-1", "infra-2", "infra-3", "infra-4"],
        steps: [
          "Configure network policies in Kubernetes",
          "Set up service mesh (if required)",
          "Implement TLS for all services",
          "Configure firewall rules for external access",
          "Document security configuration",
        ],
        risks: [
          {
            issue: "Complex network configuration",
            mitigation: "Start with permissive rules and tighten gradually",
          },
        ],
        artifacts: ["Network configuration", "Security documentation"],
        parallelWith: [],
      },
    ],
    nphies: [
      {
        id: "nphies-1",
        name: "Create NPHIES simulator for POC",
        team: "NPHIES Integration Engineer",
        effort: "3 days",
        dependencies: ["infra-1"],
        steps: [
          "Develop simulator for NPHIES event generation",
          "Implement sample HL7v2 and CDA message templates",
          "Configure event frequency and patterns",
          "Set up control interface for triggering specific events",
          "Document simulator functionality for test team",
        ],
        risks: [
          {
            issue: "Accuracy of simulated data patterns",
            mitigation: "Review with NPHIES team for authenticity",
          },
        ],
        artifacts: [
          "NPHIES simulator",
          "Message templates",
          "Control interface documentation",
        ],
        parallelWith: ["infra-2", "infra-3", "infra-4"],
      },
      {
        id: "nphies-2",
        name: "Configure Streaming Producer for NPHIES events",
        team: "NPHIES Integration Engineer & Streaming Engineer",
        effort: "2 days",
        dependencies: ["infra-2", "nphies-1"],
        steps: [
          "Develop streaming producer for NPHIES events",
          "Configure Avro schema definitions",
          "Implement message conversion logic",
          "Configure topic publishing patterns",
          "Implement exactly-once semantics",
          "Test with simulated NPHIES events",
        ],
        risks: [
          {
            issue: "Complex event mapping logic",
            mitigation: "Start with simple message types, expand gradually",
          },
        ],
        artifacts: [
          "Streaming producer code",
          "Schema definitions",
          "Message mapping documentation",
        ],
        parallelWith: [],
      },
      {
        id: "nphies-3",
        name: "Create sample data set for POC",
        team: "Clinical SME & NPHIES Integration Engineer",
        effort: "3 days",
        dependencies: [],
        steps: [
          "Define patient cohort for POC scenarios",
          "Create synthetic HL7v2 ADT messages",
          "Create synthetic CDA documents",
          "Define clinical encounter scenarios",
          "Create observation and result messages",
          "Document data relationships and expected outcomes",
        ],
        risks: [
          {
            issue: "Realism of synthetic data",
            mitigation: "Review with clinical SMEs for accuracy",
          },
        ],
        artifacts: [
          "Synthetic data set",
          "Clinical scenario documentation",
          "Expected outcomes",
        ],
        parallelWith: ["infra-1", "infra-2", "infra-3", "infra-4", "nphies-1"],
      },
    ],
    integration: [
      {
        id: "int-1",
        name: "Implement conversion service (HL7v2 to FHIR)",
        team: "FHIR Developer",
        effort: "4 days",
        dependencies: ["infra-1", "infra-2"],
        steps: [
          "Develop conversion service for HL7v2 messages",
          "Implement mapping logic for Patient resource",
          "Implement mapping logic for Encounter resource",
          "Implement mapping logic for Observation resource",
          "Configure error handling and validation",
          "Develop unit tests for each mapping scenario",
        ],
        risks: [
          {
            issue: "Complex mapping logic",
            mitigation:
              "Start with core fields, expand to full mapping iteratively",
          },
          {
            issue: "Error handling complexity",
            mitigation: "Implement robust logging and monitoring",
          },
        ],
        artifacts: [
          "Conversion service code",
          "Mapping documentation",
          "Unit tests",
        ],
        parallelWith: ["int-2"],
      },
      {
        id: "int-2",
        name: "Implement conversion service (CDA to FHIR)",
        team: "FHIR Developer",
        effort: "4 days",
        dependencies: ["infra-1", "infra-2"],
        steps: [
          "Develop conversion service for CDA documents",
          "Implement mapping logic for clinical documents",
          "Configure template-based transformation",
          "Implement extraction of discrete data elements",
          "Configure error handling and validation",
          "Develop unit tests for each document type",
        ],
        risks: [
          {
            issue: "Complexity of CDA structure",
            mitigation: "Use established FHIR mapping tools where available",
          },
        ],
        artifacts: [
          "Conversion service code",
          "Mapping documentation",
          "Unit tests",
        ],
        parallelWith: ["int-1"],
      },
      {
        id: "int-3",
        name: "Implement streaming consumer for integration layer",
        team: "Streaming Engineer",
        effort: "3 days",
        dependencies: ["infra-2", "nphies-2"],
        steps: [
          "Develop streaming consumer for NPHIES topics",
          "Implement message deserialization",
          "Configure consumer groups and partition assignment",
          "Implement error handling and dead letter queue",
          "Set up metrics and monitoring",
          "Configure exactly-once semantics",
        ],
        risks: [
          {
            issue: "Complex error handling scenarios",
            mitigation: "Implement comprehensive logging and retry strategy",
          },
        ],
        artifacts: [
          "Consumer code",
          "Configuration documentation",
          "Monitoring dashboard",
        ],
        parallelWith: [],
      },
      {
        id: "int-4",
        name: "Develop format validation service",
        team: "FHIR Developer",
        effort: "2 days",
        dependencies: ["int-1", "int-2"],
        steps: [
          "Implement FHIR resource validation service",
          "Configure validation against FHIR R4 base profiles",
          "Implement custom validation rules for Saudi profiles",
          "Configure error handling and reporting",
          "Set up validation metrics and monitoring",
        ],
        risks: [
          {
            issue: "Custom validation complexity",
            mitigation:
              "Start with standard FHIR validation, add custom rules incrementally",
          },
        ],
        artifacts: [
          "Validation service code",
          "Validation rules documentation",
          "Testing evidence",
        ],
        parallelWith: [],
      },
    ],
    fhir: [
      {
        id: "fhir-1",
        name: "Deploy and configure HAPI FHIR server",
        team: "FHIR Developer",
        effort: "3 days",
        dependencies: ["infra-3", "infra-4"],
        steps: [
          "Deploy HAPI FHIR server to Kubernetes",
          "Configure PostgreSQL database connection",
          "Set up FHIR resource profiles",
          "Configure search parameters",
          "Implement SMART on FHIR authorization",
          "Connect to Keycloak for authentication",
          "Configure logging and monitoring",
        ],
        risks: [
          {
            issue: "SMART on FHIR integration complexity",
            mitigation: "Incremental testing with each configuration step",
          },
        ],
        artifacts: [
          "HAPI FHIR configuration",
          "Resource profiles",
          "Connection documentation",
        ],
        parallelWith: ["int-1", "int-2"],
      },
      {
        id: "fhir-2",
        name: "Implement FHIR resource storage service",
        team: "FHIR Developer",
        effort: "2 days",
        dependencies: ["fhir-1", "int-4"],
        steps: [
          "Develop service to store validated FHIR resources",
          "Implement transaction support for related resources",
          "Configure resource versioning",
          "Implement conflict detection and resolution",
          "Set up performance monitoring",
        ],
        risks: [
          {
            issue: "Transaction consistency",
            mitigation:
              "Implement comprehensive test suite for different scenarios",
          },
        ],
        artifacts: [
          "Storage service code",
          "Transaction patterns documentation",
          "Performance metrics",
        ],
        parallelWith: [],
      },
      {
        id: "fhir-3",
        name: "Implement FHIR notification service",
        team: "FHIR Developer & Streaming Engineer",
        effort: "3 days",
        dependencies: ["fhir-2", "infra-2"],
        steps: [
          "Develop notification service for FHIR resource changes",
          "Configure streaming producer for notifications",
          "Implement lightweight event payload (not full resources)",
          "Set up topic structure for different resource types",
          "Configure SMART context in notification payload",
          "Implement filtering based on resource criticality",
        ],
        risks: [
          {
            issue: "Notification volumes",
            mitigation: "Implement throttling and batching where appropriate",
          },
        ],
        artifacts: [
          "Notification service code",
          "Topic structure documentation",
          "Payload format specification",
        ],
        parallelWith: [],
      },
      {
        id: "fhir-4",
        name: "Configure FHIR API access patterns",
        team: "FHIR Developer & Security Engineer",
        effort: "2 days",
        dependencies: ["fhir-1", "infra-4"],
        steps: [
          "Define SMART on FHIR scopes for different access patterns",
          "Configure resource-level permissions",
          "Implement compartment-based access restrictions",
          "Configure patient-specific access controls",
          "Set up audit logging for all API access",
          "Develop test suite for access control validation",
        ],
        risks: [
          {
            issue: "Complex access control requirements",
            mitigation: "Start with simple patterns, refine iteratively",
          },
        ],
        artifacts: [
          "Access control configuration",
          "Scope definitions",
          "Test results",
        ],
        parallelWith: ["fhir-3"],
      },
    ],
    sehhaty: [
      {
        id: "sehhaty-1",
        name: "Develop FHIR client SDK",
        team: "Sehhaty App Developer",
        effort: "3 days",
        dependencies: ["fhir-1", "fhir-4"],
        steps: [
          "Develop FHIR client SDK for mobile application",
          "Implement authentication flow using SMART on FHIR",
          "Configure resource-specific API methods",
          "Implement error handling and retry logic",
          "Develop caching strategy",
          "Create documentation for consumption patterns",
        ],
        risks: [
          {
            issue: "OAuth flow complexity on mobile",
            mitigation: "Use established OAuth libraries with SMART extensions",
          },
        ],
        artifacts: [
          "FHIR client SDK",
          "Integration documentation",
          "Authentication flow diagram",
        ],
        parallelWith: [],
      },
      {
        id: "sehhaty-2",
        name: "Implement notification consumer",
        team: "Sehhaty App Developer & Streaming Engineer",
        effort: "3 days",
        dependencies: ["fhir-3", "infra-2", "sehhaty-1"],
        steps: [
          "Develop notification consumer service",
          "Configure subscription to FHIR notification topics",
          "Implement message handling logic",
          "Set up filtering based on patient context",
          "Implement push notification capability",
          "Configure exactly-once processing",
        ],
        risks: [
          {
            issue: "Mobile network reliability",
            mitigation: "Implement robust reconnection and catch-up logic",
          },
        ],
        artifacts: [
          "Notification consumer code",
          "Processing logic documentation",
          "Testing evidence",
        ],
        parallelWith: [],
      },
      {
        id: "sehhaty-3",
        name: "Enhance Sehhaty mobile app for FHIR integration",
        team: "Sehhaty App Developer",
        effort: "5 days",
        dependencies: ["sehhaty-1", "sehhaty-2"],
        steps: [
          "Implement SMART on FHIR authentication in mobile app",
          "Integrate FHIR client SDK",
          "Develop patient resource display components",
          "Implement real-time update using notification+pull pattern",
          "Create observation visualization components",
          "Implement offline capability with synchronization",
        ],
        risks: [
          {
            issue: "UX complexity with real-time updates",
            mitigation:
              "Focus on seamless update experience without disruption",
          },
        ],
        artifacts: [
          "Enhanced mobile application",
          "UI component documentation",
          "Usage flows",
        ],
        parallelWith: [],
      },
      {
        id: "sehhaty-4",
        name: "Create demonstration workflow",
        team: "Sehhaty App Developer & Clinical SME",
        effort: "2 days",
        dependencies: ["sehhaty-3"],
        steps: [
          "Define end-to-end demonstration scenario",
          "Create patient journey with specific clinical events",
          "Document expected application behavior",
          "Set up demonstration environment with synthetic data",
          "Create script for showcasing capabilities",
          "Prepare comparison with legacy architecture",
        ],
        risks: [
          {
            issue: "Complexity of demonstration",
            mitigation:
              "Focus on key improvements rather than full functionality",
          },
        ],
        artifacts: [
          "Demonstration script",
          "Comparison metrics",
          "Presentation materials",
        ],
        parallelWith: [],
      },
    ],
    security: [
      {
        id: "sec-1",
        name: "Implement SMART on FHIR capability statement",
        team: "Security Engineer & FHIR Developer",
        effort: "2 days",
        dependencies: ["infra-4", "fhir-1"],
        steps: [
          "Define SMART on FHIR conformance statement",
          "Configure FHIR server metadata to expose auth endpoints",
          "Implement scope definition and documentation",
          "Configure launch context requirements",
          "Set up well-known configuration endpoint",
          "Test with SMART on FHIR app launcher",
        ],
        risks: [
          {
            issue: "Standards compliance complexity",
            mitigation: "Validate against SMART on FHIR test suite",
          },
        ],
        artifacts: [
          "Conformance statement",
          "Configuration documentation",
          "Test results",
        ],
        parallelWith: ["fhir-2", "fhir-3", "fhir-4"],
      },
      {
        id: "sec-2",
        name: "Implement token introspection and validation",
        team: "Security Engineer",
        effort: "2 days",
        dependencies: ["infra-4", "sec-1"],
        steps: [
          "Implement JWT validation service",
          "Configure signature verification",
          "Set up token introspection endpoints",
          "Implement role-based access control",
          "Configure scope validation logic",
          "Set up token revocation handling",
        ],
        risks: [
          {
            issue: "Token validation complexity",
            mitigation: "Use established libraries with security reviews",
          },
        ],
        artifacts: [
          "Token validation service",
          "Security configuration",
          "Testing evidence",
        ],
        parallelWith: [],
      },
      {
        id: "sec-3",
        name: "Configure network security and HTTPS",
        team: "DevOps & Security Engineer",
        effort: "1 day",
        dependencies: ["infra-5"],
        steps: [
          "Configure TLS for all services",
          "Set up certificate management",
          "Implement network policies in Kubernetes",
          "Configure API gateway security",
          "Set up security headers and CORS",
          "Implement rate limiting for APIs",
        ],
        risks: [
          {
            issue: "Certificate management",
            mitigation: "Use cert-manager for automated handling",
          },
        ],
        artifacts: [
          "Security configuration",
          "Certificate management documentation",
          "Network policies",
        ],
        parallelWith: ["sec-1", "sec-2"],
      },
      {
        id: "sec-4",
        name: "Implement audit logging",
        team: "Security Engineer",
        effort: "2 days",
        dependencies: ["fhir-1", "sehhaty-1"],
        steps: [
          "Implement comprehensive audit logging",
          "Configure FHIR AuditEvent resource creation",
          "Set up centralized log collection",
          "Implement security event monitoring",
          "Configure alerting for suspicious activities",
          "Create audit log visualization",
        ],
        risks: [
          {
            issue: "Log volume management",
            mitigation: "Implement log rotation and retention policies",
          },
        ],
        artifacts: [
          "Audit logging configuration",
          "Monitoring dashboard",
          "Alert configuration",
        ],
        parallelWith: [],
      },
    ],
    testing: [
      {
        id: "test-1",
        name: "Develop end-to-end test scenarios",
        team: "Clinical SME & FHIR Developer",
        effort: "3 days",
        dependencies: [],
        steps: [
          "Define comprehensive test scenarios",
          "Document expected data flow and outputs",
          "Create test data for each scenario",
          "Define performance measurement points",
          "Create comparison metrics for legacy vs. new architecture",
          "Document test execution procedures",
        ],
        risks: [
          {
            issue: "Scenario complexity",
            mitigation: "Start with simple flows, add complexity iteratively",
          },
        ],
        artifacts: [
          "Test scenarios",
          "Expected results",
          "Test data",
          "Execution procedures",
        ],
        parallelWith: ["infra-1", "infra-2", "infra-3", "infra-4", "nphies-1"],
      },
      {
        id: "test-2",
        name: "Implement automated testing framework",
        team: "DevOps & FHIR Developer",
        effort: "3 days",
        dependencies: ["infra-1"],
        steps: [
          "Set up test automation framework",
          "Implement test cases for NPHIES message flow",
          "Create tests for FHIR API functionality",
          "Configure integration tests for streaming components",
          "Set up performance measurement tools",
          "Implement security testing automation",
        ],
        risks: [
          {
            issue: "Test environment stability",
            mitigation: "Implement test isolation and cleanup routines",
          },
        ],
        artifacts: [
          "Test automation code",
          "CI/CD pipeline configuration",
          "Test reports",
        ],
        parallelWith: ["int-1", "int-2", "int-3", "fhir-1"],
      },
      {
        id: "test-3",
        name: "Conduct performance testing",
        team: "DevOps & Streaming Engineer",
        effort: "2 days",
        dependencies: ["sehhaty-3", "fhir-3", "int-4"],
        steps: [
          "Configure load testing environment",
          "Implement performance test scenarios",
          "Set up measurement points throughout system",
          "Create baseline performance metrics",
          "Execute load and stress tests",
          "Analyze results and document findings",
        ],
        risks: [
          {
            issue: "Test environment limitations",
            mitigation: "Scale test scenarios appropriately for environment",
          },
        ],
        artifacts: [
          "Performance test results",
          "Analysis report",
          "Optimization recommendations",
        ],
        parallelWith: [],
      },
      {
        id: "test-4",
        name: "Conduct security testing",
        team: "Security Engineer",
        effort: "2 days",
        dependencies: ["sec-2", "sec-3", "sec-4"],
        steps: [
          "Perform security assessment of architecture",
          "Test authentication and authorization mechanisms",
          "Validate token security and handling",
          "Verify TLS implementation and certificate validation",
          "Check for common API vulnerabilities",
          "Validate audit logging effectiveness",
        ],
        risks: [
          {
            issue: "Comprehensive security coverage",
            mitigation: "Use established security testing methodology",
          },
        ],
        artifacts: [
          "Security test results",
          "Vulnerability assessment",
          "Remediation recommendations",
        ],
        parallelWith: ["test-3"],
      },
      {
        id: "test-5",
        name: "Execute end-to-end POC demonstration",
        team: "All Teams",
        effort: "2 days",
        dependencies: ["sehhaty-4", "test-3", "test-4"],
        steps: [
          "Set up demonstration environment",
          "Execute test scenarios with all components",
          "Document full cycle flow and data movement",
          "Measure and record performance metrics",
          "Demonstrate comparison with legacy architecture",
          "Document observations and findings",
        ],
        risks: [
          {
            issue: "Component integration issues",
            mitigation: "Incremental testing leading up to full demonstration",
          },
        ],
        artifacts: [
          "Demonstration results",
          "Performance metrics",
          "Comparison analysis",
          "POC findings document",
        ],
        parallelWith: [],
      },
    ],
  };

  // Function to render task cards
  const TaskCard = ({ task, index, expanded, toggleExpanded }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow mb-4">
      <div
        className="p-4 cursor-pointer"
        onClick={() => toggleExpanded(task.id)}
      >
        <div className="flex justify-between items-start">
          <div className="flex items-start">
            <div className="mr-3 mt-1">
              <Server className="text-blue-500" size={18} />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">{task.name}</h4>
              <div className="flex items-center mt-1 text-sm text-gray-500">
                <Users size={14} className="mr-1" />
                <span>{task.team}</span>
                <span className="mx-2">•</span>
                <Clock size={14} className="mr-1" />
                <span>{task.effort}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            {task.dependencies.length > 0 && (
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 mr-2">
                {task.dependencies.length} Dependencies
              </span>
            )}
            {expanded ? (
              <ChevronUp className="text-gray-400" size={16} />
            ) : (
              <ChevronDown className="text-gray-400" size={16} />
            )}
          </div>
        </div>
      </div>

      {expanded && (
        <div className="px-4 pb-4 border-t border-gray-100 mt-2 pt-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="text-sm font-medium text-gray-700 mb-2">
                Implementation Steps
              </h5>
              <ul className="space-y-2">
                {task.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <CheckCircle
                      size={14}
                      className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-600">{step}</span>
                  </li>
                ))}
              </ul>

              {task.dependencies.length > 0 && (
                <div className="mt-4">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">
                    Dependencies
                  </h5>
                  <ul className="space-y-1">
                    {task.dependencies.map((dep, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <ArrowRight
                          size={14}
                          className="text-yellow-500 mr-2 flex-shrink-0"
                        />
                        <span className="text-gray-600">Depends on: {dep}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {task.risks.length > 0 && (
                <div className="mt-4">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">
                    Risks & Mitigation
                  </h5>
                  <ul className="space-y-2">
                    {task.risks.map((risk, idx) => (
                      <li
                        key={idx}
                        className="text-sm bg-red-50 p-2 rounded border border-red-100"
                      >
                        <div className="font-medium text-red-700">
                          {risk.issue}
                        </div>
                        <div className="text-gray-600 mt-1">
                          Mitigation: {risk.mitigation}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {task.parallelWith && task.parallelWith.length > 0 && (
                <div className="mt-4">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">
                    Parallel Execution
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {task.parallelWith.map((ptask, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded"
                      >
                        {ptask}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              <h5 className="text-sm font-medium text-gray-700 mb-2">
                Deliverables
              </h5>
              <ul className="space-y-1">
                {task.artifacts.map((artifact, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <FileText
                      size={14}
                      className="text-blue-500 mr-2 flex-shrink-0"
                    />
                    <span className="text-gray-600">{artifact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Build dependency graph data for visualization
  const buildDependencyData = () => {
    const allTasks = [
      ...pocTasks.infrastructure,
      ...pocTasks.nphies,
      ...pocTasks.integration,
      ...pocTasks.fhir,
      ...pocTasks.sehhaty,
      ...pocTasks.security,
      ...pocTasks.testing,
    ];

    // Build nodes
    const nodes = allTasks.map((task) => ({
      id: task.id,
      name: task.name,
      team: task.team,
      effort: task.effort,
      category: task.id.split("-")[0],
    }));

    // Build links/edges
    const links = [];
    allTasks.forEach((task) => {
      task.dependencies.forEach((depId) => {
        links.push({
          source: depId,
          target: task.id,
        });
      });
    });

    return { nodes, links };
  };

  // Simplified Gantt chart data
  const buildGanttData = () => {
    const categories = [
      "infrastructure",
      "nphies",
      "integration",
      "fhir",
      "sehhaty",
      "security",
      "testing",
    ];
    const data = categories.map((category) => ({
      category: category.charAt(0).toUpperCase() + category.slice(1),
      tasks: pocTasks[category].map((task) => ({
        id: task.id,
        name: task.name,
        dependencies: task.dependencies,
        effort: parseInt(task.effort.split(" ")[0]),
        team: task.team,
      })),
    }));

    return data;
  };

  // Timeline based on dependencies
  const timelineData = [
    {
      week: "Week 1",
      tasks: ["infra-1", "nphies-1", "nphies-3", "test-1"],
    },
    {
      week: "Week 2",
      tasks: [
        "infra-2",
        "infra-3",
        "infra-4",
        "infra-5",
        "nphies-2",
        "int-1",
        "int-2",
        "test-2",
      ],
    },
    {
      week: "Week 3",
      tasks: ["int-3", "int-4", "fhir-1", "sec-1", "sec-3"],
    },
    {
      week: "Week 4",
      tasks: ["fhir-2", "fhir-3", "fhir-4", "sec-2", "sec-4"],
    },
    {
      week: "Week 5",
      tasks: ["sehhaty-1", "sehhaty-2"],
    },
    {
      week: "Week 6",
      tasks: ["sehhaty-3"],
    },
    {
      week: "Week 7",
      tasks: ["sehhaty-4", "test-3", "test-4"],
    },
    {
      week: "Week 8",
      tasks: ["test-5"],
    },
  ];

  // Component for timeline visualization
  const Timeline = () => (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <Calendar className="mr-2" size={20} />
        POC Implementation Timeline
      </h2>

      <div className="relative pb-12">
        {/* Vertical timeline line */}
        <div className="absolute h-full w-0.5 bg-blue-200 left-24 top-0"></div>

        {/* Timeline entries */}
        {timelineData.map((period, index) => (
          <div key={index} className="relative mb-10">
            {/* Week marker */}
            <div className="absolute left-24 -ml-3 mt-1">
              <div className="h-6 w-6 rounded-full bg-blue-500 border-4 border-white shadow"></div>
            </div>

            <div className="flex">
              {/* Week label */}
              <div className="flex-none w-24 pt-1 pr-4 text-right">
                <div className="font-medium text-blue-600">{period.week}</div>
              </div>

              {/* Tasks for this week */}
              <div className="flex-grow pl-8">
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-3">
                    Key Activities
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {period.tasks.map((taskId) => {
                      // Find the task from all tasks
                      let task;
                      Object.keys(pocTasks).forEach((category) => {
                        const found = pocTasks[category].find(
                          (t) => t.id === taskId,
                        );
                        if (found) task = found;
                      });

                      if (!task) return null;

                      return (
                        <div
                          key={taskId}
                          className="px-3 py-1 bg-blue-50 text-blue-800 text-sm rounded border border-blue-200 cursor-pointer hover:bg-blue-100"
                          onClick={() =>
                            setExpandedTask(
                              expandedTask === taskId ? null : taskId,
                            )
                          }
                        >
                          {task.name}
                          <div className="text-xs text-gray-500 mt-1">
                            {task.team}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {index < timelineData.length - 1 && (
                    <div className="text-sm text-gray-600">
                      <ArrowRight className="inline mr-1" size={14} />
                      Next: {timelineData[index + 1].week}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Critical path visualization
  const CriticalPath = () => (
    <div className="mt-8 bg-white p-4 rounded-lg shadow-sm border border-red-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <AlertTriangle className="mr-2 text-red-500" size={20} />
        Critical Path
      </h2>

      <p className="text-gray-600 mb-4">
        The following sequence represents the critical path of tasks that must
        be completed sequentially. Any delay in these tasks will directly impact
        the POC completion timeline.
      </p>

      <div className="overflow-x-auto">
        <div className="flex items-center min-w-max py-4">
          {/* Infrastructure setup */}
          <div className="flex-none px-4 py-2 bg-blue-100 text-blue-800 rounded-lg border border-blue-200">
            <div className="font-medium">Infrastructure Setup</div>
            <div className="text-xs mt-1">Week 1</div>
          </div>

          <ArrowRight className="mx-4 text-gray-400" />

          {/* NPHIES & Integration */}
          <div className="flex-none px-4 py-2 bg-green-100 text-green-800 rounded-lg border border-green-200">
            <div className="font-medium">NPHIES Integration</div>
            <div className="text-xs mt-1">Week 2</div>
          </div>

          <ArrowRight className="mx-4 text-gray-400" />

          {/* FHIR Server Setup */}
          <div className="flex-none px-4 py-2 bg-red-100 text-red-800 rounded-lg border border-red-200">
            <div className="font-medium">FHIR Server & Auth</div>
            <div className="text-xs mt-1">Weeks 3-4</div>
          </div>

          <ArrowRight className="mx-4 text-gray-400" />

          {/* Sehhaty Integration */}
          <div className="flex-none px-4 py-2 bg-purple-100 text-purple-800 rounded-lg border border-purple-200">
            <div className="font-medium">Sehhaty Integration</div>
            <div className="text-xs mt-1">Weeks 5-6</div>
          </div>

          <ArrowRight className="mx-4 text-gray-400" />

          {/* Testing & Demo */}
          <div className="flex-none px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg border border-yellow-200">
            <div className="font-medium">Testing & Demo</div>
            <div className="text-xs mt-1">Weeks 7-8</div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-red-50 rounded border border-red-100">
        <h4 className="font-medium text-red-800 mb-2">Critical Dependencies</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <AlertTriangle
              size={14}
              className="text-red-500 mr-2 mt-0.5 flex-shrink-0"
            />
            <div>
              <span className="font-medium">
                Infrastructure → NPHIES Integration:
              </span>
              <span className="text-gray-600 ml-1">
                Kubernetes and Redpanda must be operational before NPHIES
                streaming can begin
              </span>
            </div>
          </li>
          <li className="flex items-start">
            <AlertTriangle
              size={14}
              className="text-red-500 mr-2 mt-0.5 flex-shrink-0"
            />
            <div>
              <span className="font-medium">Integration → FHIR Server:</span>
              <span className="text-gray-600 ml-1">
                Conversion services must be working before FHIR resources can be
                created
              </span>
            </div>
          </li>
          <li className="flex items-start">
            <AlertTriangle
              size={14}
              className="text-red-500 mr-2 mt-0.5 flex-shrink-0"
            />
            <div>
              <span className="font-medium">
                FHIR Server → Sehhaty Integration:
              </span>
              <span className="text-gray-600 ml-1">
                Authentication and notification services must be operational for
                mobile integration
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          FHIR POC Implementation Plan
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A comprehensive plan for implementing the FHIR interoperability
          architecture proof-of-concept in the test environment.
        </p>

        {/* POC Context */}
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            POC Objectives & Scope
          </h2>

          <div className="mb-4">
            <h3 className="font-medium text-gray-800 mb-2">
              Primary Objective
            </h3>
            <p className="text-gray-600">{pocContext.objective}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-medium text-gray-800 mb-2">Scope Definition</h3>
            <p className="text-gray-600">{pocContext.scope}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Constraints</h3>
              <ul className="space-y-1">
                {pocContext.constraints.map((constraint, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <AlertTriangle
                      size={16}
                      className="text-yellow-500 mr-2 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-600">{constraint}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-2">
                Success Criteria
              </h3>
              <ul className="space-y-1">
                {pocContext.success.map((criterion, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <CheckCircle
                      size={16}
                      className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-600">{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* POC Team */}
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Users className="mr-2" size={20} />
            POC Team Structure
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Technical Team</h3>
              <div className="space-y-2">
                {pocTeam.technical.map((member, index) => (
                  <div
                    key={index}
                    className="bg-green-50 p-3 rounded border border-green-100"
                  >
                    <div className="font-medium text-green-800">
                      {member.role}
                    </div>
                    <div className="flex justify-between mt-1">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Skills:</span>{" "}
                        {member.skills}
                      </div>
                      <div className="text-sm font-medium text-green-600">
                        {member.allocation}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-medium text-gray-800 mb-3">Key Stakeholders</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {pocTeam.stakeholders.map((stakeholder, index) => (
                <div
                  key={index}
                  className="bg-purple-50 p-3 rounded border border-purple-100"
                >
                  <div className="font-medium text-purple-800">
                    {stakeholder.role}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {stakeholder.responsibility}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Visualization */}
        <Timeline />

        {/* Critical Path */}
        <CriticalPath />

        {/* Infrastructure Tasks */}
        <div className="mt-8">
          <div
            className="bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-200 mb-4 cursor-pointer"
            onClick={() => toggleSection("infrastructure")}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <Server className="mr-2 text-blue-500" size={20} />
                Infrastructure Implementation Tasks
              </h2>
              {expandedSections.infrastructure ? (
                <ChevronUp className="text-gray-400" />
              ) : (
                <ChevronDown className="text-gray-400" />
              )}
            </div>
          </div>

          {expandedSections.infrastructure && (
            <div className="space-y-3">
              {pocTasks.infrastructure.map((task, index) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  index={index}
                  expanded={expandedTask === task.id}
                  toggleExpanded={setExpandedTask}
                />
              ))}
            </div>
          )}
        </div>

        {/* NPHIES Tasks */}
        <div className="mt-8">
          <div
            className="bg-yellow-50 p-4 rounded-lg shadow-sm border border-yellow-200 mb-4 cursor-pointer"
            onClick={() => toggleSection("nphies")}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <Database className="mr-2 text-yellow-500" size={20} />
                NPHIES Integration Tasks
              </h2>
              {expandedSections.nphies ? (
                <ChevronUp className="text-gray-400" />
              ) : (
                <ChevronDown className="text-gray-400" />
              )}
            </div>
          </div>

          {expandedSections.nphies && (
            <div className="space-y-3">
              {pocTasks.nphies.map((task, index) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  index={index}
                  expanded={expandedTask === task.id}
                  toggleExpanded={setExpandedTask}
                />
              ))}
            </div>
          )}
        </div>

        {/* Integration Tasks */}
        <div className="mt-8">
          <div
            className="bg-green-50 p-4 rounded-lg shadow-sm border border-green-200 mb-4 cursor-pointer"
            onClick={() => toggleSection("integration")}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <GitBranch className="mr-2 text-green-500" size={20} />
                Integration Layer Tasks
              </h2>
              {expandedSections.integration ? (
                <ChevronUp className="text-gray-400" />
              ) : (
                <ChevronDown className="text-gray-400" />
              )}
            </div>
          </div>

          {expandedSections.integration && (
            <div className="space-y-3">
              {pocTasks.integration.map((task, index) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  index={index}
                  expanded={expandedTask === task.id}
                  toggleExpanded={setExpandedTask}
                />
              ))}
            </div>
          )}
        </div>

        {/* FHIR Server Tasks */}
        <div className="mt-8">
          <div
            className="bg-red-50 p-4 rounded-lg shadow-sm border border-red-200 mb-4 cursor-pointer"
            onClick={() => toggleSection("fhir")}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <Layers className="mr-2 text-red-500" size={20} />
                FHIR Server Implementation Tasks
              </h2>
              {expandedSections.fhir ? (
                <ChevronUp className="text-gray-400" />
              ) : (
                <ChevronDown className="text-gray-400" />
              )}
            </div>
          </div>

          {expandedSections.fhir && (
            <div className="space-y-3">
              {pocTasks.fhir.map((task, index) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  index={index}
                  expanded={expandedTask === task.id}
                  toggleExpanded={setExpandedTask}
                />
              ))}
            </div>
          )}
        </div>

        {/* Sehhaty Integration Tasks */}
        <div className="mt-8">
          <div
            className="bg-purple-50 p-4 rounded-lg shadow-sm border border-purple-200 mb-4 cursor-pointer"
            onClick={() => toggleSection("sehhaty")}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <Smartphone className="mr-2 text-purple-500" size={20} />
                Sehhaty Integration Tasks
              </h2>
              {expandedSections.sehhaty ? (
                <ChevronUp className="text-gray-400" />
              ) : (
                <ChevronDown className="text-gray-400" />
              )}
            </div>
          </div>

          {expandedSections.sehhaty && (
            <div className="space-y-3">
              {pocTasks.sehhaty.map((task, index) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  index={index}
                  expanded={expandedTask === task.id}
                  toggleExpanded={setExpandedTask}
                />
              ))}
            </div>
          )}
        </div>

        {/* Security Tasks */}
        <div className="mt-8">
          <div
            className="bg-indigo-50 p-4 rounded-lg shadow-sm border border-indigo-200 mb-4 cursor-pointer"
            onClick={() => toggleSection("security")}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <Shield className="mr-2 text-indigo-500" size={20} />
                Security Implementation Tasks
              </h2>
              {expandedSections.security ? (
                <ChevronUp className="text-gray-400" />
              ) : (
                <ChevronDown className="text-gray-400" />
              )}
            </div>
          </div>

          {expandedSections.security && (
            <div className="space-y-3">
              {pocTasks.security.map((task, index) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  index={index}
                  expanded={expandedTask === task.id}
                  toggleExpanded={setExpandedTask}
                />
              ))}
            </div>
          )}
        </div>

        {/* Testing Tasks */}
        <div className="mt-8">
          <div
            className="bg-orange-50 p-4 rounded-lg shadow-sm border border-orange-200 mb-4 cursor-pointer"
            onClick={() => toggleSection("testing")}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <PlayCircle className="mr-2 text-orange-500" size={20} />
                Testing & Validation Tasks
              </h2>
              {expandedSections.testing ? (
                <ChevronUp className="text-gray-400" />
              ) : (
                <ChevronDown className="text-gray-400" />
              )}
            </div>
          </div>

          {expandedSections.testing && (
            <div className="space-y-3">
              {pocTasks.testing.map((task, index) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  index={index}
                  expanded={expandedTask === task.id}
                  toggleExpanded={setExpandedTask}
                />
              ))}
            </div>
          )}
        </div>

        {/* POC Expected Outcomes */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <BarChart className="mr-2" size={20} />
            Expected POC Outcomes & Metrics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
              <h3 className="font-medium text-blue-800 mb-3">
                Performance Improvements
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Zap
                    size={14}
                    className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <span className="font-medium">Data Freshness:</span>
                    <span className="text-gray-600 ml-1">
                      Reduce from hours to seconds
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap
                    size={14}
                    className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <span className="font-medium">API Response Time:</span>
                    <span className="text-gray-600 ml-1">
                      Less than 200ms for 95th percentile
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap
                    size={14}
                    className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <span className="font-medium">Throughput:</span>
                    <span className="text-gray-600 ml-1">
                      Support for 50+ TPS in testing environment
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
              <h3 className="font-medium text-blue-800 mb-3">
                Technical Validation
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle
                    size={14}
                    className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <span className="font-medium">
                      Event-Driven Architecture:
                    </span>
                    <span className="text-gray-600 ml-1">
                      Demonstrate full streaming pipeline
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={14}
                    className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <span className="font-medium">FHIR Compliance:</span>
                    <span className="text-gray-600 ml-1">
                      Validate FHIR R4 resource structure and operations
                    </span>
                  </div>
                </li>

                <li className="flex items-start">
                  <CheckCircle
                    size={14}
                    className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <span className="font-medium">Security Architecture:</span>
                    <span className="text-gray-600 ml-1">
                      Verify SMART on FHIR authentication framework
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
              <h3 className="font-medium text-blue-800 mb-3">Business Value</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Monitor
                    size={14}
                    className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <span className="font-medium">User Experience:</span>
                    <span className="text-gray-600 ml-1">
                      Demonstrate real-time updates in Sehhaty app
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Monitor
                    size={14}
                    className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <span className="font-medium">Data Quality:</span>
                    <span className="text-gray-600 ml-1">
                      Improved data standardization with FHIR
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Monitor
                    size={14}
                    className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <span className="font-medium">Future Readiness:</span>
                    <span className="text-gray-600 ml-1">
                      Standards-based architecture for sustainable growth
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white rounded-lg border border-blue-100">
            <h3 className="font-medium text-blue-800 mb-3">
              POC Delivery Documentation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  Technical Documentation
                </h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center">
                    <FileText
                      size={14}
                      className="text-gray-500 mr-2 flex-shrink-0"
                    />
                    <span className="text-gray-600">
                      Detailed architecture documentation
                    </span>
                  </li>
                  <li className="flex items-center">
                    <FileText
                      size={14}
                      className="text-gray-500 mr-2 flex-shrink-0"
                    />
                    <span className="text-gray-600">
                      Component integration guide
                    </span>
                  </li>
                  <li className="flex items-center">
                    <FileText
                      size={14}
                      className="text-gray-500 mr-2 flex-shrink-0"
                    />
                    <span className="text-gray-600">
                      API documentation with examples
                    </span>
                  </li>
                  <li className="flex items-center">
                    <FileText
                      size={14}
                      className="text-gray-500 mr-2 flex-shrink-0"
                    />
                    <span className="text-gray-600">
                      Security implementation guide
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  POC Results
                </h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center">
                    <FileText
                      size={14}
                      className="text-gray-500 mr-2 flex-shrink-0"
                    />
                    <span className="text-gray-600">
                      Performance test results and analysis
                    </span>
                  </li>
                  <li className="flex items-center">
                    <FileText
                      size={14}
                      className="text-gray-500 mr-2 flex-shrink-0"
                    />
                    <span className="text-gray-600">
                      Security assessment findings
                    </span>
                  </li>
                  <li className="flex items-center">
                    <FileText
                      size={14}
                      className="text-gray-500 mr-2 flex-shrink-0"
                    />
                    <span className="text-gray-600">
                      Integration test results
                    </span>
                  </li>
                  <li className="flex items-center">
                    <FileText
                      size={14}
                      className="text-gray-500 mr-2 flex-shrink-0"
                    />
                    <span className="text-gray-600">
                      POC demonstration recording
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps After POC */}
        <div className="mt-8 mb-12 bg-gradient-to-r from-green-50 to-teal-50 p-5 rounded-lg border border-green-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <ArrowRight className="mr-2" size={20} />
            Next Steps After POC Completion
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm">
              <h3 className="font-medium text-green-800 mb-3">
                Production Planning
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle
                    size={14}
                    className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-600">
                    Develop detailed production architecture based on POC
                    findings
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={14}
                    className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-600">
                    Create resource allocation plan for production
                    implementation
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={14}
                    className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-600">
                    Develop detailed timeline and implementation phases
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm">
              <h3 className="font-medium text-green-800 mb-3">
                Scaling Strategy
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle
                    size={14}
                    className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-600">
                    Design high-availability architecture based on POC learnings
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={14}
                    className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-600">
                    Develop performance scaling strategy for production volumes
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={14}
                    className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-600">
                    Plan for disaster recovery and business continuity
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm">
              <h3 className="font-medium text-green-800 mb-3">
                Full Implementation
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle
                    size={14}
                    className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-600">
                    Secure full project approval and resource commitment
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={14}
                    className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-600">
                    Create comprehensive training plan for all stakeholders
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={14}
                    className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-600">
                    Develop phased rollout strategy with risk mitigation
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Full data model */}
        {showDependencyGraph && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 max-w-5xl w-full max-h-screen overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  Dependency Graph
                </h2>
                <button
                  onClick={() => setShowDependencyGraph(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="text-center text-gray-500 italic">
                Dependency visualization would appear here in a full
                implementation
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PocScopePage;
