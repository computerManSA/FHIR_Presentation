import React, { useState } from "react";
import {
  Users,
  DollarSign,
  Clock,
  CheckSquare,
  Award,
  Building,
  HardDrive,
  Zap,
  Shield,
  User,
  Book,
  Briefcase,
  PenToolIcon,
  AlertTriangle,
  Star,
} from "lucide-react";

const SupportNeededPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("resources");

  // Support areas and requirements
  const supportCategories = [
    {
      id: "resources",
      name: "Human Resources",
      icon: <Users className="w-6 h-6 text-blue-500" />,
      description:
        "Technical staff required to implement and maintain the FHIR interoperability solution",
    },
    {
      id: "budget",
      name: "Budget Allocation",
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      description:
        "Financial requirements for software, infrastructure, and operational costs",
    },
    {
      id: "time",
      name: "Timeline Commitments",
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      description:
        "Time allocation and milestone commitments from stakeholders",
    },
    {
      id: "governance",
      name: "Governance Support",
      icon: <Building className="w-6 h-6 text-purple-500" />,
      description:
        "Decision-making and oversight frameworks necessary for successful implementation",
    },
    {
      id: "infrastructure",
      name: "Infrastructure Support",
      icon: <HardDrive className="w-6 h-6 text-red-500" />,
      description:
        "Infrastructure requirements for a robust, scalable architecture",
    },
    {
      id: "training",
      name: "Training & Knowledge",
      icon: <Book className="w-6 h-6 text-yellow-500" />,
      description: "Training requirements and knowledge transfer needs",
    },
  ];

  // Detailed resource requirements
  const resourceRequirements = [
    {
      id: "resources",
      items: [
        {
          role: "FHIR Solution Architect",
          count: 1,
          skills: [
            "Healthcare interoperability expertise",
            "FHIR R4 standard proficiency",
            "Event-driven architecture experience",
            "HAPI FHIR implementation",
          ],
          duration: "Full-time throughout project",
          significance:
            "Critical for overall architecture design and implementation guidance",
        },
        {
          role: "HAPI FHIR Developer",
          count: 2,
          skills: [
            "Java development",
            "HAPI FHIR experience",
            "Healthcare data modeling",
            "RESTful API design",
          ],
          duration: "Full-time through Phase 1-3",
          significance: "Implementation of FHIR server and resource handling",
        },
        {
          role: "Integration Engineer",
          count: 2,
          skills: [
            "HL7v2 and CDA expertise",
            "Data mapping",
            "Message transformation",
            "Event streaming experience",
          ],
          duration: "Full-time through Phase 1-4",
          significance:
            "Critical for legacy system integration and data conversion",
        },
        {
          role: "Infrastructure Engineer",
          count: 1,
          skills: [
            "Kubernetes",
            "Redpanda/Kafka",
            "PostgreSQL",
            "Performance tuning",
          ],
          duration: "Full-time through Phase 1-3, part-time thereafter",
          significance: "Infrastructure setup, optimization and maintenance",
        },
        {
          role: "Security Specialist",
          count: 1,
          skills: [
            "Keycloak",
            "SMART on FHIR",
            "OAuth 2.0",
            "Healthcare security standards",
          ],
          duration: "Part-time throughout project",
          significance:
            "Critical for robust security implementation and compliance",
        },
        {
          role: "Quality Assurance Engineer",
          count: 1,
          skills: [
            "Healthcare data testing",
            "Automated testing",
            "Performance testing",
            "FHIR validation",
          ],
          duration: "Full-time from Phase 2 onwards",
          significance: "Ensuring system reliability and data quality",
        },
        {
          role: "Project Manager",
          count: 1,
          skills: [
            "Healthcare IT experience",
            "Technical project management",
            "Stakeholder coordination",
            "Risk management",
          ],
          duration: "Full-time throughout project",
          significance:
            "Essential for coordination and ensuring timely delivery",
        },
      ],
    },
    {
      id: "budget",
      items: [
        {
          category: "Infrastructure",
          amount: 250000,
          breakdown: [
            { item: "Kubernetes cluster (3 environments)", cost: 120000 },
            { item: "Redpanda Enterprise License", cost: 55000 },
            { item: "HAPI FHIR support subscription", cost: 45000 },
            { item: "Database infrastructure", cost: 30000 },
          ],
          justification:
            "Essential for high-availability, fault-tolerant system architecture",
        },
        {
          category: "Development Tools",
          amount: 75000,
          breakdown: [
            { item: "CI/CD pipeline tools", cost: 25000 },
            { item: "Monitoring & observability", cost: 30000 },
            { item: "Testing platforms", cost: 20000 },
          ],
          justification:
            "Critical for maintaining development velocity and system quality",
        },
        {
          category: "Human Resources",
          amount: 850000,
          breakdown: [
            { item: "Internal team allocation", cost: 600000 },
            { item: "External consultants & specialists", cost: 250000 },
          ],
          justification:
            "Specialized expertise required for efficient implementation",
        },
        {
          category: "Training & Knowledge Transfer",
          amount: 50000,
          breakdown: [
            { item: "FHIR training courses", cost: 20000 },
            { item: "Technical workshops", cost: 15000 },
            { item: "Documentation & knowledge base", cost: 15000 },
          ],
          justification:
            "Building internal capability for long-term maintenance",
        },
        {
          category: "Operational Costs (Year 1)",
          amount: 120000,
          breakdown: [
            { item: "Cloud infrastructure", cost: 75000 },
            { item: "Support & maintenance", cost: 30000 },
            { item: "Ongoing license fees", cost: 15000 },
          ],
          justification: "Ongoing costs to maintain system post-implementation",
        },
        {
          category: "Contingency",
          amount: 150000,
          breakdown: [{ item: "Project risk contingency (15%)", cost: 150000 }],
          justification:
            "Buffer for unforeseen challenges and scope adjustments",
        },
      ],
      totalAmount: 1495000,
    },
    {
      id: "time",
      items: [
        {
          stakeholder: "IT Leadership",
          commitment: "Weekly steering committee meetings (2 hours)",
          decisions: [
            "Resource allocation approvals",
            "Major architectural decisions",
            "Timeline and budget adjustments",
            "Risk mitigation strategies",
          ],
          milestones: [
            { name: "Project kickoff approval", date: "Week 0" },
            { name: "Architecture sign-off", date: "Week 4" },
            { name: "Phase completion reviews", date: "End of each phase" },
            { name: "Production go-live approval", date: "Week 24" },
          ],
        },
        {
          stakeholder: "Clinical Leadership",
          commitment: "Bi-weekly review meetings (1.5 hours)",
          decisions: [
            "Clinical data mapping validation",
            "Clinical workflow integration",
            "Data quality acceptance criteria",
          ],
          milestones: [
            { name: "Clinical requirements sign-off", date: "Week 2" },
            { name: "FHIR resource mapping approval", date: "Week 6" },
            { name: "Clinical data validation", date: "Week 14" },
          ],
        },
        {
          stakeholder: "Security & Compliance",
          commitment: "Monthly reviews + milestone approvals (2-4 hours)",
          decisions: [
            "Security architecture approval",
            "Identity management approach",
            "Compliance validation",
          ],
          milestones: [
            { name: "Security design approval", date: "Week 5" },
            { name: "Authentication implementation review", date: "Week 10" },
            { name: "Final security assessment", date: "Week 22" },
          ],
        },
        {
          stakeholder: "Integration Partners",
          commitment: "Weekly during integration phases (3-4 hours)",
          decisions: [
            "API specification approval",
            "Integration testing approach",
            "Version compatibility management",
          ],
          milestones: [
            { name: "Interface specifications approved", date: "Week 7" },
            { name: "Integration testing complete", date: "Week 18" },
            { name: "Production readiness validation", date: "Week 23" },
          ],
        },
        {
          stakeholder: "Operations Team",
          commitment: "Increasing from monthly to weekly (2-8 hours)",
          decisions: [
            "Operational procedures",
            "Monitoring approach",
            "Support processes",
          ],
          milestones: [
            { name: "Operations runbook approval", date: "Week 16" },
            { name: "Monitoring dashboard sign-off", date: "Week 19" },
            { name: "Support process validation", date: "Week 21" },
          ],
        },
      ],
    },
    {
      id: "governance",
      items: [
        {
          area: "Steering Committee Establishment",
          requirements: [
            "Formation of cross-functional steering committee",
            "Regular cadence of decision-making meetings",
            "Clear escalation paths for blocking issues",
            "Documented decision log and approval process",
          ],
          stakeholders: [
            "CIO",
            "CMIO",
            "CFO",
            "Head of Application Development",
            "Clinical Systems Director",
          ],
          expectedOutcomes:
            "Timely decisions, aligned leadership, clear project direction",
        },
        {
          area: "Architecture Review Board",
          requirements: [
            "Technical architecture approval process",
            "Standards compliance review",
            "Technical debt management",
            "Architecture exception process",
          ],
          stakeholders: [
            "Enterprise Architect",
            "Solutions Architects",
            "Security Architect",
            "Integration Specialist",
          ],
          expectedOutcomes:
            "Technically sound solution adhering to enterprise standards",
        },
        {
          area: "Change Control Board",
          requirements: [
            "Formal change management process",
            "Impact assessment methodology",
            "Stakeholder communication protocol",
            "Change implementation oversight",
          ],
          stakeholders: [
            "Change Manager",
            "Project Managers",
            "Operations Lead",
            "User Representatives",
          ],
          expectedOutcomes: "Controlled evolution with minimized disruption",
        },
        {
          area: "Data Governance Council",
          requirements: [
            "Data quality standards",
            "Master data management approach",
            "Clinical terminology oversight",
            "Data privacy and security policies",
          ],
          stakeholders: [
            "CMIO",
            "Data Governance Officer",
            "Privacy Officer",
            "Clinical Informatics Lead",
          ],
          expectedOutcomes:
            "High-quality, consistent data across the ecosystem",
        },
        {
          area: "Operational Governance",
          requirements: [
            "SLA definition and monitoring",
            "Incident management processes",
            "Capacity planning approach",
            "Performance management",
          ],
          stakeholders: [
            "Operations Director",
            "Service Delivery Manager",
            "Support Team Lead",
            "Infrastructure Manager",
          ],
          expectedOutcomes: "Reliable operations with clear responsibilities",
        },
      ],
    },
    {
      id: "infrastructure",
      items: [
        {
          resource: "Kubernetes Environment",
          specifications: [
            "3-environment setup (Dev, QA, Prod)",
            "Production: 5-node cluster minimum",
            "High availability configuration",
            "Node autoscaling capabilities",
            "Infrastructure as Code deployment",
          ],
          capacity:
            "Capable of handling 500+ requests/second with sub-100ms response time",
          impact:
            "Ensures scalability, resilience, and consistent deployment across environments",
        },
        {
          resource: "Redpanda Streaming Platform",
          specifications: [
            "3-node minimum Redpanda cluster",
            "Rack-aware deployment",
            "Schema Registry implementation",
            "30-day message retention",
            "Topic backup strategy",
          ],
          capacity: "15,000+ msgs/second throughput, sub-10ms latency",
          impact:
            "Critical for real-time event distribution and system integration",
        },
        {
          resource: "Database Infrastructure",
          specifications: [
            "PostgreSQL 14+ cluster",
            "Primary + 2 replicas configuration",
            "Automated backup system",
            "Point-in-time recovery capability",
            "Read-replica for reporting queries",
          ],
          capacity:
            "Capable of storing 50+ million FHIR resources with sub-50ms query times",
          impact:
            "Foundation for reliable data persistence and efficient querying",
        },
        {
          resource: "Search & Analytics",
          specifications: [
            "Elasticsearch cluster for FHIR search",
            "Kibana dashboards for operational visualization",
            "APM for application performance monitoring",
            "Real-time monitoring and alerting",
          ],
          capacity: "Complex FHIR searches in under 100ms, real-time analytics",
          impact:
            "Enables efficient resource discovery and operational visibility",
        },
        {
          resource: "Networking Infrastructure",
          specifications: [
            "Dedicated VLAN for FHIR services",
            "Network segregation with security zones",
            "Load balancing with health checks",
            "DDoS protection",
            "API gateway implementation",
          ],
          capacity:
            "Supports 1000+ concurrent connections with 10Gbps+ throughput",
          impact: "Ensures secure, reliable communication between components",
        },
        {
          resource: "Security Infrastructure",
          specifications: [
            "Keycloak cluster for authentication",
            "HSM for key management",
            "WAF for API protection",
            "Certificate management system",
            "Secrets management solution",
          ],
          capacity: "Supports 10,000+ users, 100+ client applications",
          impact: "Foundational for secure, compliant healthcare data exchange",
        },
      ],
    },
    {
      id: "training",
      items: [
        {
          audience: "Development Team",
          courses: [
            {
              name: "FHIR R4 Fundamentals",
              duration: "3 days",
              provider: "FHIR Academy",
            },
            {
              name: "HAPI FHIR Implementation",
              duration: "4 days",
              provider: "HAPI Community",
            },
            {
              name: "Event-Driven Architecture",
              duration: "2 days",
              provider: "Internal",
            },
            {
              name: "Redpanda Certification",
              duration: "3 days",
              provider: "Redpanda",
            },
          ],
          materials: [
            "FHIR implementation guides",
            "Architecture documentation",
            "Development standards and patterns",
            "Code examples and templates",
          ],
          outcomes:
            "Team capable of implementing and extending the FHIR architecture",
        },
        {
          audience: "Operations Team",
          courses: [
            {
              name: "FHIR Operations",
              duration: "2 days",
              provider: "Internal",
            },
            {
              name: "Kubernetes for Healthcare",
              duration: "3 days",
              provider: "Cloud Native Academy",
            },
            {
              name: "Monitoring & Alerting",
              duration: "2 days",
              provider: "Internal",
            },
            {
              name: "Healthcare SLA Management",
              duration: "1 day",
              provider: "Internal",
            },
          ],
          materials: [
            "Operational runbooks",
            "Troubleshooting guides",
            "Monitoring dashboards",
            "SLA documentation",
          ],
          outcomes:
            "Capable operations team for ongoing support and maintenance",
        },
        {
          audience: "Integration Partners",
          courses: [
            {
              name: "FHIR API Integration",
              duration: "2 days",
              provider: "Internal",
            },
            { name: "SMART on FHIR", duration: "1 day", provider: "Internal" },
            {
              name: "Authentication Workshop",
              duration: "1 day",
              provider: "Internal",
            },
          ],
          materials: [
            "API documentation",
            "Integration patterns guide",
            "Authentication guide",
            "Sample code for common patterns",
          ],
          outcomes:
            "Partners able to efficiently integrate with the FHIR platform",
        },
        {
          audience: "Clinical Staff",
          courses: [
            {
              name: "FHIR for Clinicians",
              duration: "1 day",
              provider: "Internal",
            },
            {
              name: "Data Quality Workshop",
              duration: "0.5 days",
              provider: "Internal",
            },
          ],
          materials: [
            "Clinical data mapping guide",
            "Terminology reference",
            "Data validation procedures",
            "Clinical workflows documentation",
          ],
          outcomes:
            "Clinical understanding of data representation and quality requirements",
        },
        {
          audience: "Management & Stakeholders",
          courses: [
            {
              name: "FHIR Executive Overview",
              duration: "0.5 days",
              provider: "Internal",
            },
            {
              name: "Healthcare Interoperability Strategy",
              duration: "1 day",
              provider: "External",
            },
          ],
          materials: [
            "Strategic benefits documentation",
            "ROI analysis",
            "Compliance overview",
            "Roadmap and vision",
          ],
          outcomes:
            "Aligned leadership with clear understanding of value and direction",
        },
      ],
    },
  ];

  // Calculate total budget if budget category is selected
  const totalBudget =
    selectedCategory === "budget"
      ? resourceRequirements
          .find((r) => r.id === "budget")
          ?.totalAmount.toLocaleString()
      : null;

  // Category Card Component
  const CategoryCard = ({ category, isSelected, onClick }) => (
    <div
      className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
        isSelected
          ? "bg-blue-100 border-2 border-blue-500 shadow-md"
          : "bg-white border border-gray-200 hover:border-blue-300 hover:shadow"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center mb-2">
        <div className={`mr-3 ${isSelected ? "text-blue-600" : ""}`}>
          {category.icon}
        </div>
        <h3
          className={`font-semibold ${isSelected ? "text-blue-800" : "text-gray-800"}`}
        >
          {category.name}
        </h3>
      </div>
      <p
        className={`text-sm ${isSelected ? "text-blue-700" : "text-gray-600"}`}
      >
        {category.description}
      </p>
    </div>
  );

  // Render the selected category content
  const renderCategoryContent = () => {
    const selectedData = resourceRequirements.find(
      (r) => r.id === selectedCategory,
    );

    if (!selectedData) return null;

    switch (selectedCategory) {
      case "resources":
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center">
                <User className="mr-2" /> Key Personnel Requirements
              </h3>
              <p className="text-blue-700">
                The following specialized roles are necessary for successful
                implementation of the FHIR interoperability architecture. These
                resources combine healthcare domain knowledge with technical
                expertise in modern integration technologies.
              </p>
            </div>

            <div className="space-y-4">
              {selectedData.items.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {resource.role}
                      </h4>
                      <div className="text-sm text-blue-600 font-medium mt-1">
                        Required: {resource.count} FTE | {resource.duration}
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      {resource.count > 1
                        ? `${resource.count} positions`
                        : "1 position"}
                    </div>
                  </div>

                  <div className="mt-4">
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">
                      Required Skills & Expertise:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {resource.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-gray-600">
                    <span className="font-medium text-gray-700">
                      Significance:
                    </span>{" "}
                    {resource.significance}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "budget":
        return (
          <div className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2 flex items-center">
                <DollarSign className="mr-2" /> Budget Requirements
              </h3>
              <p className="text-green-700">
                Implementation of the FHIR interoperability architecture
                requires appropriate financial investment across several
                categories. These costs represent the initial implementation and
                first year of operation.
              </p>

              <div className="mt-3 p-3 bg-white rounded-lg border border-green-200">
                <div className="text-2xl font-bold text-green-700">
                  Total Budget: ${totalBudget}
                </div>
                <div className="text-sm text-green-600 mt-1">
                  Implementation + Year 1 Operations
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {selectedData.items.map((budget, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-gray-800">
                      {budget.category}
                    </h4>
                    <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      ${budget.amount.toLocaleString()}
                    </div>
                  </div>

                  <div className="mt-4">
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">
                      Breakdown:
                    </h5>
                    <div className="space-y-2">
                      {budget.breakdown.map((item, i) => (
                        <div key={i} className="flex justify-between text-sm">
                          <span className="text-gray-600">{item.item}</span>
                          <span className="font-medium text-gray-800">
                            ${item.cost.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-gray-50 rounded text-sm text-gray-600 border border-gray-100">
                    <span className="font-medium text-gray-700">
                      Justification:
                    </span>{" "}
                    {budget.justification}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "time":
        return (
          <div className="space-y-6">
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 mb-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-2 flex items-center">
                <Clock className="mr-2" /> Stakeholder Time Commitments
              </h3>
              <p className="text-orange-700">
                Successful implementation requires dedicated time from key
                stakeholders for decision-making, reviews, and approvals at
                critical project milestones.
              </p>
            </div>

            <div className="space-y-4">
              {selectedData.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {item.stakeholder}
                      </h4>
                      <div className="text-sm text-orange-600 font-medium mt-1">
                        {item.commitment}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">
                        Key Decisions Required:
                      </h5>
                      <ul className="space-y-1">
                        {item.decisions.map((decision, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckSquare
                              size={16}
                              className="text-orange-500 mr-2 mt-0.5 flex-shrink-0"
                            />
                            <span className="text-gray-600">{decision}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">
                        Critical Milestones:
                      </h5>
                      <ul className="space-y-1">
                        {item.milestones.map((milestone, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <Clock
                              size={16}
                              className="text-orange-500 mr-2 mt-0.5 flex-shrink-0"
                            />
                            <div>
                              <span className="text-gray-700">
                                {milestone.name}
                              </span>
                              <span className="text-orange-600 ml-2 font-medium">
                                ({milestone.date})
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "governance":
        return (
          <div className="space-y-6">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-2 flex items-center">
                <Building className="mr-2" /> Governance Requirements
              </h3>
              <p className="text-purple-700">
                Strong governance structures are essential for managing
                decisions, standards, and controls throughout the FHIR
                implementation and ongoing operations.
              </p>
            </div>

            <div className="space-y-4">
              {selectedData.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="font-bold text-gray-800 mb-3">{item.area}</h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">
                        Requirements:
                      </h5>
                      <ul className="space-y-1">
                        {item.requirements.map((req, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckSquare
                              size={16}
                              className="text-purple-500 mr-2 mt-0.5 flex-shrink-0"
                            />
                            <span className="text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">
                        Key Stakeholders:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {item.stakeholders.map((stakeholder, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs"
                          >
                            {stakeholder}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 p-3 bg-gray-50 rounded text-sm text-gray-600 border border-gray-100">
                        <span className="font-medium text-gray-700">
                          Expected Outcomes:
                        </span>{" "}
                        {item.expectedOutcomes}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "infrastructure":
        return (
          <div className="space-y-6">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2 flex items-center">
                <HardDrive className="mr-2" /> Infrastructure Requirements
              </h3>
              <p className="text-red-700">
                Robust technical infrastructure is essential for a
                high-performance, resilient FHIR implementation. These
                requirements outline the necessary components to support
                enterprise-grade interoperability.
              </p>
            </div>

            <div className="space-y-4">
              {selectedData.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                    <HardDrive className="text-red-500 mr-2" size={18} />
                    {item.resource}
                  </h4>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">
                        Specifications:
                      </h5>
                      <ul className="space-y-1">
                        {item.specifications.map((spec, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckSquare
                              size={16}
                              className="text-red-500 mr-2 mt-0.5 flex-shrink-0"
                            />
                            <span className="text-gray-600">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="mb-3">
                        <h5 className="text-sm font-semibold text-gray-700 mb-1">
                          Capacity:
                        </h5>
                        <div className="text-sm text-gray-600 bg-red-50 p-2 rounded border border-red-100">
                          {item.capacity}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-gray-700 mb-1">
                          Business Impact:
                        </h5>
                        <div className="text-sm text-gray-600">
                          {item.impact}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "training":
        return (
          <div className="space-y-6">
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2 flex items-center">
                <Book className="mr-2" /> Training & Knowledge Transfer
              </h3>
              <p className="text-yellow-700">
                Comprehensive training and knowledge transfer is critical to
                build internal capability for implementing, using, and
                maintaining the FHIR interoperability platform.
              </p>
            </div>

            <div className="space-y-4">
              {selectedData.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                    <User className="text-yellow-500 mr-2" size={18} />
                    {item.audience}
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">
                        Required Courses:
                      </h5>
                      <div className="space-y-2">
                        {item.courses.map((course, i) => (
                          <div
                            key={i}
                            className="bg-gray-50 p-2 rounded border border-gray-100 text-sm"
                          >
                            <div className="font-medium text-gray-800">
                              {course.name}
                            </div>
                            <div className="flex justify-between mt-1 text-xs">
                              <span className="text-gray-500">
                                {course.provider}
                              </span>
                              <span className="text-yellow-600 font-medium">
                                {course.duration}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">
                        Materials & Resources:
                      </h5>
                      <ul className="space-y-1">
                        {item.materials.map((material, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <Book
                              size={16}
                              className="text-yellow-500 mr-2 mt-0.5 flex-shrink-0"
                            />
                            <span className="text-gray-600">{material}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 p-2 bg-yellow-50 rounded text-sm text-gray-700 border border-yellow-100">
                        <span className="font-medium text-yellow-800">
                          Expected Outcomes:
                        </span>{" "}
                        {item.outcomes}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Executive support needed section
  const ExecutiveSupportSection = () => (
    <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 shadow-sm">
      <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
        <Award className="mr-2" /> Executive Support Requirements
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
          <div className="flex items-center mb-3">
            <Star className="text-blue-500 mr-2" size={18} />
            <h4 className="font-medium text-blue-800">Strategic Alignment</h4>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <CheckSquare
                size={14}
                className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Official designation as strategic initiative
              </span>
            </li>
            <li className="flex items-start">
              <CheckSquare
                size={14}
                className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Integration with digital transformation roadmap
              </span>
            </li>
            <li className="flex items-start">
              <CheckSquare
                size={14}
                className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Executive vision communication to the organization
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
          <div className="flex items-center mb-3">
            <Shield className="text-blue-500 mr-2" size={18} />
            <h4 className="font-medium text-blue-800">
              Organizational Protection
            </h4>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <CheckSquare
                size={14}
                className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Resource commitment protection from competing priorities
              </span>
            </li>
            <li className="flex items-start">
              <CheckSquare
                size={14}
                className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Executive buffer against organizational resistance
              </span>
            </li>
            <li className="flex items-start">
              <CheckSquare
                size={14}
                className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Long-term vision advocacy beyond short-term challenges
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
          <div className="flex items-center mb-3">
            <Briefcase className="text-blue-500 mr-2" size={18} />
            <h4 className="font-medium text-blue-800">
              Organizational Authority
            </h4>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <CheckSquare
                size={14}
                className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Executive mandate for cross-functional cooperation
              </span>
            </li>
            <li className="flex items-start">
              <CheckSquare
                size={14}
                className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Rapid escalation path for blocking issues
              </span>
            </li>
            <li className="flex items-start">
              <CheckSquare
                size={14}
                className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600">
                Authority to enforce architectural decisions
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  // Critical success factors section
  const CriticalSuccessFactors = () => (
    <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 shadow-sm">
      <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
        <PenToolIcon className="mr-2" /> Critical Success Factors
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm">
          <h4 className="font-medium text-green-800 mb-3">
            Internal Success Factors
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <CheckSquare
                size={16}
                className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <div>
                <span className="font-medium text-gray-700">
                  Executive sponsorship
                </span>
                <p className="text-gray-600 mt-0.5">
                  Active, visible support from C-level leadership
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckSquare
                size={16}
                className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <div>
                <span className="font-medium text-gray-700">
                  Dedicated resources
                </span>
                <p className="text-gray-600 mt-0.5">
                  Team focused solely on implementation without competing
                  priorities
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckSquare
                size={16}
                className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <div>
                <span className="font-medium text-gray-700">
                  Clear governance
                </span>
                <p className="text-gray-600 mt-0.5">
                  Well-defined decision-making processes and authorities
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckSquare
                size={16}
                className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <div>
                <span className="font-medium text-gray-700">
                  Knowledge acquisition
                </span>
                <p className="text-gray-600 mt-0.5">
                  Proactive skills development in FHIR and related technologies
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm">
          <h4 className="font-medium text-green-800 mb-3">
            External Success Factors
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <CheckSquare
                size={16}
                className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <div>
                <span className="font-medium text-gray-700">
                  Partner engagement
                </span>
                <p className="text-gray-600 mt-0.5">
                  Active participation from integration partners
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckSquare
                size={16}
                className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <div>
                <span className="font-medium text-gray-700">
                  Vendor support
                </span>
                <p className="text-gray-600 mt-0.5">
                  Responsive vendor assistance for FHIR implementation
                  challenges
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckSquare
                size={16}
                className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <div>
                <span className="font-medium text-gray-700">
                  Regulatory alignment
                </span>
                <p className="text-gray-600 mt-0.5">
                  Compliance with evolving interoperability standards
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckSquare
                size={16}
                className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <div>
                <span className="font-medium text-gray-700">
                  Community engagement
                </span>
                <p className="text-gray-600 mt-0.5">
                  Active participation in FHIR and healthcare IT communities
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  // Risk Factors Section
  const RiskFactors = () => (
    <div className="p-5 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200 shadow-sm">
      <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
        <AlertTriangle className="mr-2" /> Risk Factors & Mitigation
      </h3>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden border border-red-100">
          <thead className="bg-red-50">
            <tr>
              <th className="py-2 px-4 text-left text-red-800 font-medium">
                Risk
              </th>
              <th className="py-2 px-4 text-left text-red-800 font-medium">
                Impact
              </th>
              <th className="py-2 px-4 text-left text-red-800 font-medium">
                Likelihood
              </th>
              <th className="py-2 px-4 text-left text-red-800 font-medium">
                Mitigation Strategy
              </th>
              <th className="py-2 px-4 text-left text-red-800 font-medium">
                Support Needed
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-red-100">
            <tr>
              <td className="py-3 px-4 text-gray-700 font-medium">
                Resource availability constraints
              </td>
              <td className="py-3 px-4">
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">
                  High
                </span>
              </td>
              <td className="py-3 px-4">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
                  Medium
                </span>
              </td>
              <td className="py-3 px-4 text-sm text-gray-600">
                Secure dedicated resources with clear allocation protection
              </td>
              <td className="py-3 px-4 text-sm text-gray-600">
                Executive mandate to protect resource allocation
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-gray-700 font-medium">
                Technical complexity underestimation
              </td>
              <td className="py-3 px-4">
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">
                  High
                </span>
              </td>
              <td className="py-3 px-4">
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">
                  High
                </span>
              </td>
              <td className="py-3 px-4 text-sm text-gray-600">
                Engage FHIR expertise early, phased approach with continuous
                validation
              </td>
              <td className="py-3 px-4 text-sm text-gray-600">
                Budget for external expertise and contingency
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-gray-700 font-medium">
                Integration partner delays
              </td>
              <td className="py-3 px-4">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
                  Medium
                </span>
              </td>
              <td className="py-3 px-4">
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">
                  High
                </span>
              </td>
              <td className="py-3 px-4 text-sm text-gray-600">
                Early engagement, clear specifications, support partner
                readiness
              </td>
              <td className="py-3 px-4 text-sm text-gray-600">
                Executive outreach to partner leadership
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-gray-700 font-medium">
                Data quality issues
              </td>
              <td className="py-3 px-4">
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">
                  High
                </span>
              </td>
              <td className="py-3 px-4">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
                  Medium
                </span>
              </td>
              <td className="py-3 px-4 text-sm text-gray-600">
                Early data profiling, quality rules, proactive cleansing
                strategy
              </td>
              <td className="py-3 px-4 text-sm text-gray-600">
                Data governance framework and ownership
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-gray-700 font-medium">
                Scope creep
              </td>
              <td className="py-3 px-4">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
                  Medium
                </span>
              </td>
              <td className="py-3 px-4">
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">
                  High
                </span>
              </td>
              <td className="py-3 px-4 text-sm text-gray-600">
                Strong change control, clear MVP definition, phased
                implementation
              </td>
              <td className="py-3 px-4 text-sm text-gray-600">
                Executive backing for scope management decisions
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
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Support Requirements
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Successful implementation of the FHIR interoperability platform
          requires dedicated support across multiple dimensions. This page
          outlines the specific requirements needed to ensure successful
          delivery and operation.
        </p>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {supportCategories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              isSelected={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            />
          ))}
        </div>

        {/* Selected category content */}
        <div className="mb-8">{renderCategoryContent()}</div>

        {/* Executive Support Section */}
        <div className="mb-8">
          <ExecutiveSupportSection />
        </div>

        {/* Critical Success Factors */}
        <div className="mb-8">
          <CriticalSuccessFactors />
        </div>

        {/* Risk Factors */}
        <div className="mb-8">
          <RiskFactors />
        </div>
      </div>
    </div>
  );
};

export default SupportNeededPage;
