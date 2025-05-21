import React, { useState } from "react";
import {
  CheckCircle,
  Clock,
  Users,
  AlertTriangle,
  Flag,
  Star,
  Calendar,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  PlusSquare,
  Zap,
  Award,
  FileText,
  Target,
  Briefcase,
} from "lucide-react";

const ActionPlanPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [expandedTask, setExpandedTask] = useState(null);
  const [expandedMilestone, setExpandedMilestone] = useState(null);

  // Color definitions for various statuses
  const statusColors = {
    "Not Started": "text-gray-600 bg-gray-100",
    "In Progress": "text-blue-600 bg-blue-100",
    Delayed: "text-orange-600 bg-orange-100",
    "At Risk": "text-red-600 bg-red-100",
    Completed: "text-green-600 bg-green-100",
    high: "text-red-600 bg-red-100",
    medium: "text-orange-600 bg-orange-100",
    low: "text-blue-600 bg-blue-100",
  };

  // Action plan phases
  const implementationPhases = [
    {
      id: "preparation",
      name: "Phase 1: Preparation & Foundations",
      timeframe: "Weeks 1-4",
      status: "Completed",
      progress: 100,
      description:
        "Establishing the foundation for successful implementation including team formation, requirements gathering, and initial architecture.",
      outcomes: [
        "Project team established and onboarded",
        "Detailed requirements documented",
        "Architecture approach approved",
        "Development environment established",
        "Governance structures defined",
      ],
      tasks: [
        {
          id: "task1-1",
          name: "Form FHIR implementation team",
          assignee: "IT Director",
          dueDate: "Week 1",
          status: "Completed",
          priority: "high",
          subtasks: [
            { name: "Define roles and responsibilities", status: "Completed" },
            { name: "Identify and secure key resources", status: "Completed" },
            { name: "Establish team operating model", status: "Completed" },
          ],
          notes:
            "Team has been established with all key roles filled. Team charter and operating model are in place.",
        },
        {
          id: "task1-2",
          name: "Conduct detailed requirements analysis",
          assignee: "Solution Architect",
          dueDate: "Week 2",
          status: "Completed",
          priority: "high",
          subtasks: [
            { name: "Document functional requirements", status: "Completed" },
            {
              name: "Document non-functional requirements",
              status: "Completed",
            },
            { name: "Validate with stakeholders", status: "Completed" },
          ],
          notes:
            "Requirements document has been approved by all key stakeholders.",
        },
        {
          id: "task1-3",
          name: "Establish development environment",
          assignee: "Infrastructure Lead",
          dueDate: "Week 3",
          status: "Completed",
          priority: "medium",
          subtasks: [
            { name: "Configure Kubernetes cluster", status: "Completed" },
            { name: "Set up CI/CD pipeline", status: "Completed" },
            { name: "Establish code repositories", status: "Completed" },
          ],
          notes:
            "Development environment is operational with all required components.",
        },
        {
          id: "task1-4",
          name: "Define and document architecture",
          assignee: "Solution Architect",
          dueDate: "Week 4",
          status: "Completed",
          priority: "high",
          subtasks: [
            { name: "Document high-level architecture", status: "Completed" },
            { name: "Define component interactions", status: "Completed" },
            { name: "Conduct architecture review", status: "Completed" },
          ],
          notes:
            "Architecture has been reviewed and approved by the architecture review board.",
        },
        {
          id: "task1-5",
          name: "Establish governance structure",
          assignee: "Project Manager",
          dueDate: "Week 4",
          status: "Completed",
          priority: "medium",
          subtasks: [
            { name: "Define steering committee", status: "Completed" },
            { name: "Establish change control board", status: "Completed" },
            { name: "Document decision-making framework", status: "Completed" },
          ],
          notes:
            "Governance structure is in place with all necessary roles filled.",
        },
      ],
    },
    {
      id: "infra",
      name: "Phase 2: Core Infrastructure Implementation",
      timeframe: "Weeks 5-8",
      status: "Completed",
      progress: 100,
      description:
        "Building the core infrastructure components that will serve as the foundation for the FHIR interoperability platform.",
      outcomes: [
        "Redpanda cluster operational",
        "HAPI FHIR server deployed",
        "Keycloak authentication integrated",
        "Infrastructure monitoring established",
        "Initial CI/CD pipelines operational",
      ],
      tasks: [
        {
          id: "task2-1",
          name: "Implement Redpanda streaming cluster",
          assignee: "Infrastructure Engineer",
          dueDate: "Week 6",
          status: "Completed",
          priority: "high",
          subtasks: [
            { name: "Deploy Redpanda to Kubernetes", status: "Completed" },
            { name: "Configure high availability", status: "Completed" },
            { name: "Implement Schema Registry", status: "Completed" },
            { name: "Conduct performance testing", status: "Completed" },
          ],
          notes:
            "Redpanda cluster is operational with 3 nodes and configured for high availability.",
        },
        {
          id: "task2-2",
          name: "Deploy and configure HAPI FHIR server",
          assignee: "FHIR Developer",
          dueDate: "Week 7",
          status: "Completed",
          priority: "high",
          subtasks: [
            { name: "Deploy HAPI FHIR to Kubernetes", status: "Completed" },
            { name: "Configure PostgreSQL backend", status: "Completed" },
            {
              name: "Implement initial FHIR resource profiles",
              status: "Completed",
            },
            { name: "Set up FHIR Validator", status: "Completed" },
          ],
          notes:
            "HAPI FHIR server is deployed and operational with PostgreSQL backend.",
        },
        {
          id: "task2-3",
          name: "Implement Keycloak authentication",
          assignee: "Security Engineer",
          dueDate: "Week 7",
          status: "Completed",
          priority: "high",
          subtasks: [
            { name: "Deploy Keycloak cluster", status: "Completed" },
            { name: "Configure OAuth 2.0 endpoints", status: "Completed" },
            { name: "Implement SMART on FHIR profiles", status: "Completed" },
            { name: "Integrate with HAPI FHIR server", status: "Completed" },
          ],
          notes:
            "Keycloak is operational and integrated with HAPI FHIR server.",
        },
        {
          id: "task2-4",
          name: "Set up monitoring infrastructure",
          assignee: "DevOps Engineer",
          dueDate: "Week 8",
          status: "Completed",
          priority: "medium",
          subtasks: [
            { name: "Deploy Prometheus and Grafana", status: "Completed" },
            { name: "Configure alerting rules", status: "Completed" },
            { name: "Implement application metrics", status: "Completed" },
            { name: "Create operational dashboards", status: "Completed" },
          ],
          notes:
            "Monitoring infrastructure is in place with dashboards for all key components.",
        },
        {
          id: "task2-5",
          name: "Establish CI/CD pipelines",
          assignee: "DevOps Engineer",
          dueDate: "Week 8",
          status: "Completed",
          priority: "medium",
          subtasks: [
            { name: "Configure Jenkins pipelines", status: "Completed" },
            { name: "Implement automated testing", status: "Completed" },
            { name: "Set up deployment automation", status: "Completed" },
            { name: "Document CI/CD processes", status: "Completed" },
          ],
          notes:
            "CI/CD pipelines are operational for all components with automated testing and deployment.",
        },
      ],
    },
    {
      id: "conversion",
      name: "Phase 3: Format Conversion & Integration",
      timeframe: "Weeks 9-12",
      status: "Completed",
      progress: 100,
      description:
        "Building the integration and conversion components to transform legacy healthcare data formats into FHIR resources.",
      outcomes: [
        "HL7v2 to FHIR conversion pipeline operational",
        "CDA to FHIR conversion pipeline operational",
        "Initial NPHIES integration established",
        "Data quality validation mechanisms in place",
      ],
      tasks: [
        {
          id: "task3-1",
          name: "Implement HL7v2 to FHIR conversion service",
          assignee: "Integration Developer",
          dueDate: "Week 10",
          status: "Completed",
          priority: "high",
          subtasks: [
            { name: "Build HL7v2 parser", status: "Completed" },
            { name: "Implement FHIR mapping engine", status: "Completed" },
            { name: "Develop validation mechanisms", status: "Completed" },
            { name: "Test with sample messages", status: "Completed" },
          ],
          notes:
            "HL7v2 to FHIR conversion is operational for ADT, ORM, and ORU message types.",
        },
        {
          id: "task3-2",
          name: "Implement CDA to FHIR conversion service",
          assignee: "Integration Developer",
          dueDate: "Week 11",
          status: "Completed",
          priority: "high",
          subtasks: [
            { name: "Build CDA parser", status: "Completed" },
            { name: "Implement FHIR resource mapping", status: "Completed" },
            {
              name: "Develop template-based transformation",
              status: "Completed",
            },
            { name: "Test with sample documents", status: "Completed" },
          ],
          notes:
            "CDA to FHIR conversion is operational for discharge summaries and consultation notes.",
        },
        {
          id: "task3-3",
          name: "Connect to NPHIES streaming producer",
          assignee: "Integration Lead",
          dueDate: "Week 11",
          status: "Completed",
          priority: "high",
          subtasks: [
            { name: "Implement consumer adapters", status: "Completed" },
            { name: "Configure topic subscriptions", status: "Completed" },
            { name: "Develop error handling mechanisms", status: "Completed" },
            { name: "Test end-to-end flow", status: "Completed" },
          ],
          notes:
            "Successfully connected to NPHIES streaming producer for use case 1 and 2.",
        },
        {
          id: "task3-4",
          name: "Develop data quality validation service",
          assignee: "Data Quality Engineer",
          dueDate: "Week 12",
          status: "Completed",
          priority: "medium",
          subtasks: [
            { name: "Define validation rules", status: "Completed" },
            { name: "Implement rules engine", status: "Completed" },
            { name: "Create reporting mechanisms", status: "Completed" },
            { name: "Test with sample data sets", status: "Completed" },
          ],
          notes:
            "Data quality validation service is operational with comprehensive rule set.",
        },
        {
          id: "task3-5",
          name: "Implement notification service",
          assignee: "Backend Developer",
          dueDate: "Week 12",
          status: "Completed",
          priority: "medium",
          subtasks: [
            { name: "Develop notification producer", status: "Completed" },
            { name: "Configure event topics", status: "Completed" },
            { name: "Implement delivery mechanisms", status: "Completed" },
            { name: "Test notification flow", status: "Completed" },
          ],
          notes:
            "Notification service is operational and publishing events to dedicated topics.",
        },
      ],
    },
    {
      id: "client",
      name: "Phase 4: Client Development & Connectivity",
      timeframe: "Weeks 13-16",
      status: "In Progress",
      progress: 80,
      description:
        "Developing client applications and connectivity mechanisms for healthcare applications to interact with the FHIR platform.",
      outcomes: [
        "FHIR client SDK developed",
        "Mobile application prototype operational",
        "Notification + pull pattern implemented",
        "Offline synchronization capabilities",
      ],
      tasks: [
        {
          id: "task4-1",
          name: "Develop FHIR client SDK",
          assignee: "SDK Developer",
          dueDate: "Week 14",
          status: "Completed",
          priority: "high",
          subtasks: [
            { name: "Implement core SDK functionality", status: "Completed" },
            { name: "Develop authentication module", status: "Completed" },
            { name: "Create resource-specific APIs", status: "Completed" },
            { name: "Build comprehensive documentation", status: "Completed" },
          ],
          notes:
            "FHIR client SDK is complete with support for all required FHIR resources.",
        },
        {
          id: "task4-2",
          name: "Implement notification consumer",
          assignee: "Integration Developer",
          dueDate: "Week 14",
          status: "Completed",
          priority: "high",
          subtasks: [
            {
              name: "Develop notification consumer service",
              status: "Completed",
            },
            { name: "Implement event processing logic", status: "Completed" },
            { name: "Configure consumer groups", status: "Completed" },
            { name: "Test end-to-end notification flow", status: "Completed" },
          ],
          notes:
            "Notification consumer is operational and processing events from all required topics.",
        },
        {
          id: "task4-3",
          name: "Develop mobile application prototype",
          assignee: "Mobile Developer",
          dueDate: "Week 15",
          status: "In Progress",
          priority: "high",
          subtasks: [
            { name: "Implement authentication flow", status: "Completed" },
            { name: "Develop core UI components", status: "Completed" },
            { name: "Integrate with FHIR client SDK", status: "Completed" },
            { name: "Implement notification handling", status: "In Progress" },
          ],
          notes:
            "Mobile application prototype is approximately 90% complete. Notification handling feature is in progress.",
        },
        {
          id: "task4-4",
          name: "Implement offline synchronization",
          assignee: "Mobile Developer",
          dueDate: "Week 16",
          status: "In Progress",
          priority: "medium",
          subtasks: [
            { name: "Develop local storage mechanism", status: "Completed" },
            { name: "Implement conflict resolution", status: "In Progress" },
            { name: "Create synchronization service", status: "Not Started" },
            {
              name: "Test with various connectivity scenarios",
              status: "Not Started",
            },
          ],
          notes:
            "Offline synchronization is approximately 40% complete. Conflict resolution is currently being implemented.",
        },
        {
          id: "task4-5",
          name: "Develop client documentation",
          assignee: "Technical Writer",
          dueDate: "Week 16",
          status: "In Progress",
          priority: "medium",
          subtasks: [
            { name: "Create integration guide", status: "Completed" },
            { name: "Develop API reference", status: "Completed" },
            { name: "Write SDK usage examples", status: "In Progress" },
            { name: "Create onboarding tutorial", status: "Not Started" },
          ],
          notes:
            "Client documentation is approximately 60% complete. SDK usage examples are currently being written.",
        },
      ],
    },
    {
      id: "testing",
      name: "Phase 5: Comprehensive Testing & Optimization",
      timeframe: "Weeks 17-20",
      status: "Not Started",
      progress: 0,
      description:
        "Conducting comprehensive testing, performance optimization, and preparation for production deployment.",
      outcomes: [
        "End-to-end integration testing completed",
        "Performance benchmarks met or exceeded",
        "Security assessment completed",
        "Production deployment plan approved",
      ],
      tasks: [
        {
          id: "task5-1",
          name: "Conduct end-to-end integration testing",
          assignee: "QA Lead",
          dueDate: "Week 18",
          status: "Not Started",
          priority: "high",
          subtasks: [
            { name: "Develop test scenarios", status: "Not Started" },
            { name: "Prepare test data", status: "Not Started" },
            { name: "Execute test cases", status: "Not Started" },
            { name: "Document and address findings", status: "Not Started" },
          ],
          notes: "This task will commence once Phase 4 is nearing completion.",
        },
        {
          id: "task5-2",
          name: "Perform performance testing",
          assignee: "Performance Engineer",
          dueDate: "Week 19",
          status: "Not Started",
          priority: "high",
          subtasks: [
            { name: "Define performance test criteria", status: "Not Started" },
            { name: "Configure test environment", status: "Not Started" },
            { name: "Execute performance tests", status: "Not Started" },
            { name: "Analyze and optimize", status: "Not Started" },
          ],
          notes:
            "This task will identify and address any performance bottlenecks.",
        },
        {
          id: "task5-3",
          name: "Conduct security assessment",
          assignee: "Security Engineer",
          dueDate: "Week 19",
          status: "Not Started",
          priority: "high",
          subtasks: [
            { name: "Perform penetration testing", status: "Not Started" },
            { name: "Conduct code security review", status: "Not Started" },
            {
              name: "Assess authentication implementation",
              status: "Not Started",
            },
            { name: "Document and address findings", status: "Not Started" },
          ],
          notes:
            "This task will ensure the platform meets all security requirements.",
        },
        {
          id: "task5-4",
          name: "Optimize system performance",
          assignee: "Performance Engineer",
          dueDate: "Week 20",
          status: "Not Started",
          priority: "medium",
          subtasks: [
            { name: "Analyze performance test results", status: "Not Started" },
            { name: "Optimize database queries", status: "Not Started" },
            {
              name: "Fine-tune application configurations",
              status: "Not Started",
            },
            { name: "Validate improvements", status: "Not Started" },
          ],
          notes:
            "This task will ensure the system meets or exceeds performance requirements.",
        },
        {
          id: "task5-5",
          name: "Develop production deployment plan",
          assignee: "Operations Lead",
          dueDate: "Week 20",
          status: "Not Started",
          priority: "high",
          subtasks: [
            { name: "Define deployment strategy", status: "Not Started" },
            { name: "Create rollback procedures", status: "Not Started" },
            { name: "Develop monitoring plan", status: "Not Started" },
            { name: "Document operational procedures", status: "Not Started" },
          ],
          notes: "This task will ensure a smooth transition to production.",
        },
      ],
    },
  ];

  // Key milestones for the project
  const keyMilestones = [
    {
      id: "milestone1",
      name: "Project Kickoff",
      date: "Week 1",
      completed: true,
      description: "Official start of the project with all key stakeholders.",
      deliverables: [
        "Project charter",
        "Initial timeline",
        "Resource allocation plan",
        "Success criteria",
      ],
      stakeholders: [
        "Executive Sponsor",
        "IT Leadership",
        "Clinical Leadership",
        "Project Manager",
        "Core Team",
      ],
      outcomeCriteria:
        "Project officially initiated with all stakeholders aligned on goals and approach.",
    },
    {
      id: "milestone2",
      name: "Architecture Approval",
      date: "Week 4",
      completed: true,
      description:
        "Approval of the high-level architecture for the FHIR interoperability platform.",
      deliverables: [
        "Architecture document",
        "Component interaction diagrams",
        "Technology selection rationale",
        "Non-functional requirements validation",
      ],
      stakeholders: [
        "Architecture Review Board",
        "Solution Architects",
        "Security Team",
        "IT Operations",
      ],
      outcomeCriteria:
        "Architecture approved by the Architecture Review Board with no significant concerns.",
    },
    {
      id: "milestone3",
      name: "Core Infrastructure Operational",
      date: "Week 8",
      completed: true,
      description:
        "All core infrastructure components deployed and operational.",
      deliverables: [
        "Operational Redpanda cluster",
        "Configured HAPI FHIR server",
        "Deployed Keycloak authentication",
        "Established monitoring solutions",
      ],
      stakeholders: [
        "Infrastructure Team",
        "DevOps Team",
        "Security Team",
        "Operations Team",
      ],
      outcomeCriteria:
        "All infrastructure components functioning according to specifications with monitoring in place.",
    },
    {
      id: "milestone4",
      name: "First FHIR Resource End-to-End",
      date: "Week 12",
      completed: true,
      description:
        "First demonstration of end-to-end flow from legacy format to FHIR resource.",
      deliverables: [
        "Working conversion pipeline",
        "Successful NPHIES integration",
        "End-to-end flow demonstration",
        "Data quality validation",
      ],
      stakeholders: [
        "Integration Team",
        "FHIR Development Team",
        "Quality Assurance",
        "Clinical SMEs",
      ],
      outcomeCriteria:
        "Successful conversion of HL7v2 ADT message to FHIR Patient resource with data quality validation.",
    },
    {
      id: "milestone5",
      name: "Mobile App Prototype Demo",
      date: "Week 16",
      completed: false,
      description:
        "Demonstration of the mobile application prototype with FHIR integration.",
      deliverables: [
        "Working mobile application",
        "FHIR SDK integration",
        "Notification handling",
        "Basic offline capabilities",
      ],
      stakeholders: [
        "Mobile Development Team",
        "UX/UI Designers",
        "Clinical Users",
        "Executive Stakeholders",
      ],
      outcomeCriteria:
        "Mobile application prototype successfully demonstrates core functionality with stakeholder approval.",
    },
    {
      id: "milestone6",
      name: "Performance & Security Validation",
      date: "Week 19",
      completed: false,
      description:
        "Comprehensive performance testing and security assessment completed.",
      deliverables: [
        "Performance test results",
        "Security assessment report",
        "Optimization recommendations",
        "Remediation plan for any findings",
      ],
      stakeholders: [
        "Performance Engineering",
        "Security Team",
        "Development Team",
        "IT Leadership",
      ],
      outcomeCriteria:
        "System meets or exceeds performance requirements with no critical security findings.",
    },
    {
      id: "milestone7",
      name: "Production Readiness Approval",
      date: "Week 20",
      completed: false,
      description:
        "Final approval for production deployment with all requirements met.",
      deliverables: [
        "Production deployment plan",
        "Operational runbooks",
        "Training materials",
        "Rollback procedures",
      ],
      stakeholders: [
        "Change Control Board",
        "Operations Team",
        "Executive Sponsor",
        "IT Leadership",
        "Clinical Leadership",
      ],
      outcomeCriteria:
        "All stakeholders approve production deployment with confidence in operational readiness.",
    },
  ];

  // Key dependencies for the project
  const keyDependencies = [
    {
      id: "dep1",
      name: "NPHIES Streaming API Access",
      description: "Access to NPHIES streaming API for real-time events",
      prerequisite: "NPHIES team to provide API credentials and documentation",
      impact:
        "Critical for real-time data flow, delay would significantly impact end-to-end capabilities",
      requiredBy: "Week 9 (Start of Phase 3)",
      status: "Completed",
      owner: "Integration Lead & NPHIES Team",
    },
    {
      id: "dep2",
      name: "Clinical SME Availability",
      description:
        "Clinical subject matter experts for data mapping and validation",
      prerequisite: "Clinical department to allocate resources",
      impact:
        "Essential for accurate data mapping and clinical validation of converted resources",
      requiredBy: "Throughout project, concentrated in Weeks 9-12",
      status: "In Progress",
      owner: "Clinical Director",
    },
    {
      id: "dep3",
      name: "Infrastructure Environment Provisioning",
      description:
        "Cloud infrastructure provisioning for development, QA, and production",
      prerequisite: "Infrastructure team to allocate necessary resources",
      impact: "Required for all deployment activities",
      requiredBy: "Week 3 (Dev), Week 15 (QA), Week 21 (Prod)",
      status: "Partially Completed",
      owner: "Infrastructure Team",
    },
    {
      id: "dep4",
      name: "Security Approval for Architecture",
      description:
        "Security team review and approval of the proposed architecture",
      prerequisite: "Complete architecture documentation",
      impact: "Required before implementation can proceed beyond prototyping",
      requiredBy: "Week 4 (End of Phase 1)",
      status: "Completed",
      owner: "Security Team",
    },
    {
      id: "dep5",
      name: "Integration Partner Readiness",
      description: "External systems ready to integrate with FHIR platform",
      prerequisite: "Partners to implement required changes",
      impact: "Critical for demonstrating end-to-end value",
      requiredBy: "Week 17 (Start of Phase 5)",
      status: "At Risk",
      owner: "Partner Engagement Lead",
    },
  ];

  // Progress Metrics
  const progressMetrics = {
    overallProgress: 68,
    tasksByStatus: [
      { status: "Completed", count: 17, percentage: 65 },
      { status: "In Progress", count: 4, percentage: 15 },
      { status: "Not Started", count: 5, percentage: 20 },
    ],
    milestonesByStatus: [
      { status: "Completed", count: 4, percentage: 57 },
      { status: "Upcoming", count: 3, percentage: 43 },
    ],
    phaseCompletion: [
      { phase: "Preparation", percentage: 100 },
      { phase: "Infrastructure", percentage: 100 },
      { phase: "Conversion", percentage: 100 },
      { phase: "Client Development", percentage: 80 },
      { phase: "Testing & Optimization", percentage: 0 },
    ],
  };

  // Task Card Component
  const TaskCard = ({ task, index, expanded, toggleExpanded }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div
        className="p-4 cursor-pointer"
        onClick={() => toggleExpanded(task.id)}
      >
        <div className="flex justify-between items-start">
          <div className="flex items-start">
            <div className="mr-3 mt-1">
              {task.status === "Completed" ? (
                <CheckCircle className="text-green-500" size={18} />
              ) : task.status === "In Progress" ? (
                <Clock className="text-blue-500" size={18} />
              ) : (
                <Clock className="text-gray-400" size={18} />
              )}
            </div>
            <div>
              <h4 className="font-medium text-gray-800">{task.name}</h4>
              <div className="flex items-center mt-1 text-sm text-gray-500">
                <Users size={14} className="mr-1" />
                <span>{task.assignee}</span>
                <span className="mx-2">•</span>
                <Clock size={14} className="mr-1" />
                <span>{task.dueDate}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full mr-2 ${statusColors[task.status]}`}
            >
              {task.status}
            </span>
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[task.priority]}`}
            >
              {task.priority === "high"
                ? "High"
                : task.priority === "medium"
                  ? "Medium"
                  : "Low"}
            </span>
            {expanded ? (
              <ChevronUp className="ml-2 text-gray-400" size={16} />
            ) : (
              <ChevronDown className="ml-2 text-gray-400" size={16} />
            )}
          </div>
        </div>
      </div>

      {expanded && (
        <div className="px-4 pb-4 border-t border-gray-100 mt-2 pt-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="text-sm font-medium text-gray-700 mb-2">
                Subtasks
              </h5>
              <ul className="space-y-2">
                {task.subtasks.map((subtask, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    {subtask.status === "Completed" ? (
                      <CheckCircle size={14} className="text-green-500 mr-2" />
                    ) : subtask.status === "In Progress" ? (
                      <Clock size={14} className="text-blue-500 mr-2" />
                    ) : (
                      <PlusSquare size={14} className="text-gray-400 mr-2" />
                    )}
                    <span
                      className={
                        subtask.status === "Completed"
                          ? "text-gray-500"
                          : "text-gray-700"
                      }
                    >
                      {subtask.name}
                    </span>
                    {subtask.status !== "Completed" &&
                      subtask.status !== "Not Started" && (
                        <span className="ml-2 px-1.5 py-0.5 text-xs rounded bg-blue-100 text-blue-700">
                          {subtask.status}
                        </span>
                      )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-medium text-gray-700 mb-2">Notes</h5>
              <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded border border-gray-100">
                {task.notes}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Milestone Card Component
  const MilestoneCard = ({ milestone, expanded, toggleExpanded }) => (
    <div
      className={`bg-white rounded-lg shadow-sm border ${milestone.completed ? "border-green-200" : "border-blue-200"} hover:shadow-md transition-shadow`}
    >
      <div
        className="p-4 cursor-pointer"
        onClick={() => toggleExpanded(milestone.id)}
      >
        <div className="flex justify-between items-start">
          <div className="flex items-start">
            <div
              className={`mr-3 p-2 rounded-full ${milestone.completed ? "bg-green-100" : "bg-blue-100"}`}
            >
              {milestone.completed ? (
                <Flag className="text-green-500" size={18} />
              ) : (
                <Flag className="text-blue-500" size={18} />
              )}
            </div>
            <div>
              <h4 className="font-medium text-gray-800">{milestone.name}</h4>
              <div className="flex items-center mt-1">
                <Calendar
                  size={14}
                  className={`mr-1 ${milestone.completed ? "text-green-500" : "text-blue-500"}`}
                />
                <span className="text-sm text-gray-500">{milestone.date}</span>
                <span
                  className={`ml-3 px-2 py-0.5 text-xs font-medium rounded-full ${milestone.completed ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}
                >
                  {milestone.completed ? "Completed" : "Upcoming"}
                </span>
              </div>
            </div>
          </div>
          {expanded ? (
            <ChevronUp className="text-gray-400" size={16} />
          ) : (
            <ChevronDown className="text-gray-400" size={16} />
          )}
        </div>
      </div>

      {expanded && (
        <div className="px-4 pb-4 border-t border-gray-100 mt-2 pt-3">
          <p className="text-sm text-gray-600 mb-4">{milestone.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="text-sm font-medium text-gray-700 mb-2">
                Key Deliverables
              </h5>
              <ul className="space-y-1">
                {milestone.deliverables.map((deliverable, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <CheckCircle
                      size={14}
                      className={`mr-2 ${milestone.completed ? "text-green-500" : "text-blue-500"}`}
                    />
                    <span className="text-gray-600">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-medium text-gray-700 mb-2">
                Key Stakeholders
              </h5>
              <div className="flex flex-wrap gap-2">
                {milestone.stakeholders.map((stakeholder, idx) => (
                  <span
                    key={idx}
                    className={`px-2 py-1 text-xs rounded ${milestone.completed ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}
                  >
                    {stakeholder}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <h5 className="text-sm font-medium text-gray-700 mb-1">
                  Success Criteria
                </h5>
                <p
                  className={`text-sm p-2 rounded ${milestone.completed ? "bg-green-50 text-green-700" : "bg-blue-50 text-blue-700"}`}
                >
                  {milestone.outcomeCriteria}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Dependency Card Component
  const DependencyCard = ({ dependency }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <h4 className="font-medium text-gray-800">{dependency.name}</h4>
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full ${
            dependency.status === "Completed"
              ? "bg-green-100 text-green-800"
              : dependency.status === "In Progress"
                ? "bg-blue-100 text-blue-800"
                : dependency.status === "At Risk"
                  ? "bg-red-100 text-red-800"
                  : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {dependency.status}
        </span>
      </div>

      <p className="text-sm text-gray-600 mt-2">{dependency.description}</p>

      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <div className="text-xs text-gray-500 mb-1">Prerequisite</div>
          <div className="text-sm text-gray-700">{dependency.prerequisite}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">Required By</div>
          <div className="text-sm text-gray-700 font-medium">
            {dependency.requiredBy}
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div className="text-xs text-gray-500 mb-1">Impact if Delayed</div>
        <div className="text-sm text-red-600">{dependency.impact}</div>
      </div>

      <div className="mt-3 pt-2 border-t border-gray-100 flex justify-between items-center">
        <div className="text-xs text-gray-500">Owner</div>
        <div className="text-sm font-medium">{dependency.owner}</div>
      </div>
    </div>
  );

  // Progress Metrics Components
  const ProgressOverview = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Overall Progress
        </h3>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block text-blue-600">
                {progressMetrics.overallProgress}% Complete
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-4 mb-2 text-xs flex rounded bg-blue-100">
            <div
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
              style={{ width: `${progressMetrics.overallProgress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Tasks</h3>
        <div className="space-y-1">
          {progressMetrics.tasksByStatus.map((statusGroup, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center">
                <div
                  className={`w-3 h-3 rounded-full mr-2 ${
                    statusGroup.status === "Completed"
                      ? "bg-green-500"
                      : statusGroup.status === "In Progress"
                        ? "bg-blue-500"
                        : "bg-gray-300"
                  }`}
                ></div>
                <span className="text-sm text-gray-600">
                  {statusGroup.status}
                </span>
              </div>
              <div className="text-sm font-medium">
                {statusGroup.count} ({statusGroup.percentage}%)
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Milestones</h3>
        <div className="space-y-1">
          {progressMetrics.milestonesByStatus.map((statusGroup, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center">
                <div
                  className={`w-3 h-3 rounded-full mr-2 ${
                    statusGroup.status === "Completed"
                      ? "bg-green-500"
                      : "bg-blue-500"
                  }`}
                ></div>
                <span className="text-sm text-gray-600">
                  {statusGroup.status}
                </span>
              </div>
              <div className="text-sm font-medium">
                {statusGroup.count} ({statusGroup.percentage}%)
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Phase Completion
        </h3>
        <div className="space-y-2">
          {progressMetrics.phaseCompletion.map((phase, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-600">{phase.phase}</span>
                <span className="text-xs font-medium">{phase.percentage}%</span>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-100">
                <div
                  className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                    phase.percentage === 100
                      ? "bg-green-500"
                      : phase.percentage > 0
                        ? "bg-blue-500"
                        : "bg-gray-300"
                  }`}
                  style={{ width: `${phase.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Next Steps Component
  const NextSteps = () => (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200 mb-6">
      <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
        <ArrowRight className="mr-2" /> Immediate Next Steps
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-3 rounded border border-blue-100 shadow-sm">
          <div className="flex items-center mb-2">
            <div className="p-2 bg-blue-100 rounded-full mr-2">
              <Zap className="text-blue-600" size={16} />
            </div>
            <h4 className="font-medium text-blue-800">Complete Mobile App</h4>
          </div>
          <ul className="space-y-1 text-sm">
            <li className="flex items-start">
              <ArrowRight
                size={14}
                className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Finish notification handling implementation
              </span>
            </li>
            <li className="flex items-start">
              <ArrowRight
                size={14}
                className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Complete offline synchronization module
              </span>
            </li>
            <li className="flex items-start">
              <ArrowRight
                size={14}
                className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Prepare for stakeholder demo (Week 16)
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded border border-blue-100 shadow-sm">
          <div className="flex items-center mb-2">
            <div className="p-2 bg-blue-100 rounded-full mr-2">
              <FileText className="text-blue-600" size={16} />
            </div>
            <h4 className="font-medium text-blue-800">
              Complete Documentation
            </h4>
          </div>
          <ul className="space-y-1 text-sm">
            <li className="flex items-start">
              <ArrowRight
                size={14}
                className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">Finish SDK usage examples</span>
            </li>
            <li className="flex items-start">
              <ArrowRight
                size={14}
                className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">Create onboarding tutorial</span>
            </li>
            <li className="flex items-start">
              <ArrowRight
                size={14}
                className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Develop integration partner guide
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded border border-blue-100 shadow-sm">
          <div className="flex items-center mb-2">
            <div className="p-2 bg-blue-100 rounded-full mr-2">
              <Target className="text-blue-600" size={16} />
            </div>
            <h4 className="font-medium text-blue-800">
              Prepare for Testing Phase
            </h4>
          </div>
          <ul className="space-y-1 text-sm">
            <li className="flex items-start">
              <ArrowRight
                size={14}
                className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Develop comprehensive test scenarios
              </span>
            </li>
            <li className="flex items-start">
              <ArrowRight
                size={14}
                className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">Prepare test data sets</span>
            </li>
            <li className="flex items-start">
              <ArrowRight
                size={14}
                className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">Configure test environment</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  // Critical Success Factors Component
  const CriticalSuccessFactors = () => (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200 mb-6">
      <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
        <Award className="mr-2" /> Critical Success Factors
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-3 rounded border border-green-100 shadow-sm">
          <h4 className="font-medium text-green-800 mb-2">
            Executive Support & Governance
          </h4>
          <ul className="space-y-1 text-sm">
            <li className="flex items-start">
              <CheckCircle
                size={14}
                className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Maintain executive sponsorship and visibility
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle
                size={14}
                className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Continue regular steering committee meetings
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle
                size={14}
                className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Enforce clear decision-making frameworks
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded border border-green-100 shadow-sm">
          <h4 className="font-medium text-green-800 mb-2">
            Resource Management
          </h4>
          <ul className="space-y-1 text-sm">
            <li className="flex items-start">
              <CheckCircle
                size={14}
                className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Protect dedicated team resources from competing priorities
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle
                size={14}
                className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Maintain access to clinical subject matter experts
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle
                size={14}
                className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Ensure infrastructure provisioning aligns with timeline
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded border border-green-100 shadow-sm">
          <h4 className="font-medium text-green-800 mb-2">Technical Focus</h4>
          <ul className="space-y-1 text-sm">
            <li className="flex items-start">
              <CheckCircle
                size={14}
                className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Maintain strict adherence to FHIR standards
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle
                size={14}
                className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Prioritize data quality and validation
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle
                size={14}
                className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Focus on security and scalability
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded border border-green-100 shadow-sm">
          <h4 className="font-medium text-green-800 mb-2">
            Stakeholder Management
          </h4>
          <ul className="space-y-1 text-sm">
            <li className="flex items-start">
              <CheckCircle
                size={14}
                className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Engage integration partners early and consistently
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle
                size={14}
                className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Maintain regular communication with all stakeholders
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle
                size={14}
                className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Validate with clinical users throughout development
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  // Risk Tracking Component
  const RiskTracking = () => (
    <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg border border-red-200 mb-6">
      <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
        <AlertTriangle className="mr-2" /> Active Risks & Mitigation
      </h3>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white divide-y divide-gray-200 rounded-lg overflow-hidden border border-red-100">
          <thead className="bg-red-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-red-800 uppercase tracking-wider">
                Risk
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-red-800 uppercase tracking-wider">
                Severity
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-red-800 uppercase tracking-wider">
                Mitigation Plan
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-red-800 uppercase tracking-wider">
                Owner
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-red-800 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  Integration partner readiness delays
                </div>
                <div className="text-xs text-gray-500">
                  External systems not ready by Week 17
                </div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                  High
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="text-sm text-gray-900">
                  1. Escalate to executive level for partner engagement
                </div>
                <div className="text-sm text-gray-900">
                  2. Develop simulation environment for testing
                </div>
                <div className="text-sm text-gray-900">
                  3. Offer technical assistance to partners
                </div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                Partner Engagement Lead
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  Active Mitigation
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  Mobile offline sync complexity
                </div>
                <div className="text-xs text-gray-500">
                  Technical challenges with conflict resolution
                </div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">
                  Medium
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="text-sm text-gray-900">
                  1. Dedicate additional developer resources
                </div>
                <div className="text-sm text-gray-900">
                  2. Consult with external FHIR experts
                </div>
                <div className="text-sm text-gray-900">
                  3. Consider phased implementation approach
                </div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                Mobile Development Lead
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                  In Progress
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  Performance bottlenecks
                </div>
                <div className="text-xs text-gray-500">
                  Potential issues under heavy load
                </div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">
                  Medium
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="text-sm text-gray-900">
                  1. Early performance testing in Week 16
                </div>
                <div className="text-sm text-gray-900">
                  2. Implement caching strategy
                </div>
                <div className="text-sm text-gray-900">
                  3. Optimize database queries and indexing
                </div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                Performance Engineer
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                  Planned
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            FHIR Implementation Action Plan
          </h1>
          <p className="text-lg text-gray-600">
            A detailed action plan outlining the phases, tasks, milestones, and
            dependencies for successful FHIR platform implementation.
          </p>
        </div>

        {/* Progress Overview */}
        <ProgressOverview />

        {/* Next Steps */}
        <NextSteps />

        {/* Phases and Tasks */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Briefcase className="mr-2" size={24} />
            Implementation Phases & Tasks
          </h2>

          <div className="space-y-8">
            {implementationPhases.map((phase, phaseIndex) => (
              <div
                key={phase.id}
                className="bg-white p-5 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {phase.name}
                    </h3>
                    <div className="flex items-center mt-1">
                      <Clock size={16} className="text-gray-400 mr-1" />
                      <span className="text-sm text-gray-500 mr-3">
                        {phase.timeframe}
                      </span>
                      <span
                        className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                          phase.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : phase.status === "In Progress"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {phase.status}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="text-xs text-gray-500 mb-1">Progress</div>
                      <div className="w-32 bg-gray-200 rounded-full h-2.5">
                        <div
                          className={`h-2.5 rounded-full ${
                            phase.progress === 100
                              ? "bg-green-500"
                              : phase.progress > 0
                                ? "bg-blue-500"
                                : "bg-gray-300"
                          }`}
                          style={{ width: `${phase.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-gray-700">
                      {phase.progress}%
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  {phase.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Expected Outcomes:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {phase.outcomes.map((outcome, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 text-xs rounded ${
                          phase.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : phase.status === "In Progress"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Tasks:
                  </h4>
                  <div className="space-y-3">
                    {phase.tasks.map((task, taskIndex) => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        index={taskIndex}
                        expanded={expandedTask === task.id}
                        toggleExpanded={(id) =>
                          setExpandedTask(expandedTask === id ? null : id)
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Milestones */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Flag className="mr-2" size={24} />
            Key Milestones
          </h2>

          <div className="space-y-4">
            {keyMilestones.map((milestone) => (
              <MilestoneCard
                key={milestone.id}
                milestone={milestone}
                expanded={expandedMilestone === milestone.id}
                toggleExpanded={(id) =>
                  setExpandedMilestone(expandedMilestone === id ? null : id)
                }
              />
            ))}
          </div>
        </div>

        {/* Key Dependencies */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <ArrowRight className="mr-2" size={24} />
            Key Dependencies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyDependencies.map((dependency) => (
              <DependencyCard key={dependency.id} dependency={dependency} />
            ))}
          </div>
        </div>

        {/* Critical Success Factors */}
        <CriticalSuccessFactors />

        {/* Risk Tracking */}
        <RiskTracking />
      </div>
    </div>
  );
};

export default ActionPlanPage;
