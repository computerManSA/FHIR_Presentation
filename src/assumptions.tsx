import React, { useState } from "react";
import {
  FileText,
  CheckCircle,
  AlertCircle,
  Server,
  Database,
  Cloud,
  Clock,
  Shield,
  Activity,
  Users,
  Zap,
  GitBranch,
  Link,
} from "lucide-react";

const AssumptionsPage = () => {
  const [expandedSections, setExpandedSections] = useState({
    general: true,
    system: true,
    data: true,
    tech: true,
    timeline: true,
  });

  // Toggle section expansion
  const toggleSection = (sectionId) => {
    setExpandedSections({
      ...expandedSections,
      [sectionId]: !expandedSections[sectionId],
    });
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Project Assumptions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Key assumptions and prerequisites for the FHIR implementation
          initiative
        </p>
      </header>

      {/* Introduction */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <p className="text-gray-700 leading-relaxed mb-6">
          Successful implementation of the enhanced FHIR architecture depends on
          several key assumptions. These assumptions form the foundation of our
          planning and approach. Any significant deviation from these
          assumptions may require adjustments to the proposed architecture,
          timeline, or implementation strategy.
        </p>

        <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
          <div className="flex items-start mb-2">
            <AlertCircle
              className="text-blue-600 mr-2 flex-shrink-0 mt-1"
              size={20}
            />
            <p className="text-blue-800 font-medium">
              These assumptions have been carefully considered and are deemed
              realistic based on our current understanding. However, they should
              be validated during the initial phases of the project to confirm
              their accuracy.
            </p>
          </div>
        </div>
      </div>

      {/* General Assumptions */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("general")}
        >
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
              <FileText className="text-indigo-600" size={20} />
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              General Assumptions
            </h2>
          </div>
          <div className="text-gray-500">
            {expandedSections.general ? (
              <span className="text-2xl">▼</span>
            ) : (
              <span className="text-2xl">▶</span>
            )}
          </div>
        </div>

        {expandedSections.general && (
          <div className="mt-6 pl-14">
            <ul className="space-y-5">
              
              <li className="flex items-start">
                <CheckCircle
                  className="text-green-500 mr-3 flex-shrink-0 mt-1"
                  size={18}
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Incremental Approach
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    The implementation will follow an incremental approach,
                    starting with core FHIR resources and use cases, then
                    expanding to cover additional scenarios over time.
                  </p>
                </div>
              </li>

              
              <li className="flex items-start">
                <CheckCircle
                  className="text-green-500 mr-3 flex-shrink-0 mt-1"
                  size={18}
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Compliance with Standards
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    All development will adhere to FHIR R4 (4.0.1)
                    specifications, which will be the standard version used
                    across all components and interfaces.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* System Integration Assumptions */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("system")}
        >
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <Server className="text-blue-600" size={20} />
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              System Integration Assumptions
            </h2>
          </div>
          <div className="text-gray-500">
            {expandedSections.system ? (
              <span className="text-2xl">▼</span>
            ) : (
              <span className="text-2xl">▶</span>
            )}
          </div>
        </div>

        {expandedSections.system && (
          <div className="mt-6 pl-14">
            <div className="space-y-5">
              <div className="flex items-start">
                <CheckCircle
                  className="text-green-500 mr-3 flex-shrink-0 mt-1"
                  size={18}
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    NPHIES Integration Capability
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    NPHIES system will be able to implement the Streaming
                    Producer component to publish events to the integration
                    layer, and optionally expose RESTful APIs for
                    reference-based integration patterns.
                  </p>
                  <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <h4 className="text-sm font-medium text-blue-800 mb-1">
                      Implementation Options
                    </h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li className="flex items-start">
                        <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          <span className="text-blue-800 font-medium text-xs">
                            1
                          </span>
                        </div>
                        <span>
                          <strong>Full Data Pattern:</strong> NPHIES includes
                          complete healthcare data in streaming messages
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          <span className="text-blue-800 font-medium text-xs">
                            2
                          </span>
                        </div>
                        <span>
                          <strong>Reference Pattern:</strong> NPHIES publishes
                          references and exposes APIs for data retrieval
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

             

              <div className="flex items-start">
                <CheckCircle
                  className="text-green-500 mr-3 flex-shrink-0 mt-1"
                  size={18}
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Streaming Platform Availability
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    A production-grade messaging platform (Redpanda or Kafka)
                    will be available to support the event-driven architecture
                    pattern with the necessary performance and reliability
                    characteristics.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <AlertCircle
                  className="text-yellow-500 mr-3 flex-shrink-0 mt-1"
                  size={18}
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    API Gateway & Authentication
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    An API gateway (APIGEE) and authentication service
                    (Keycloak) will be available to secure and manage access to
                    FHIR APIs, though these could be implemented as part of the
                    project if needed.
                  </p>
                </div>
              </div>

              
              <div className="flex items-start">
                <AlertCircle
                  className="text-yellow-500 mr-3 flex-shrink-0 mt-1"
                  size={18}
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Object Storage Availability
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    An object storage service (MinIO or S3) will be available for storing large files and documents, though this could be implemented as part of the project if needed (example radiology).
                  </p>
                </div>
              </div>

              
            </div>
          </div>
        )}
      </div>

      {/* Data Assumptions */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("data")}
        >
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
              <Database className="text-green-600" size={20} />
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              Data Assumptions
            </h2>
          </div>
          <div className="text-gray-500">
            {expandedSections.data ? (
              <span className="text-2xl">▼</span>
            ) : (
              <span className="text-2xl">▶</span>
            )}
          </div>
        </div>

        {expandedSections.data && (
          <div className="mt-6 pl-14">
            <div className="space-y-5">
              <div className="flex items-start">
                <CheckCircle
                  className="text-green-500 mr-3 flex-shrink-0 mt-1"
                  size={18}
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Data Mapping Feasibility
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Source data from NPHIES and external systems can be reliably
                    mapped to corresponding FHIR resources without significant
                    loss of information or semantic meaning.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle
                  className="text-green-500 mr-3 flex-shrink-0 mt-1"
                  size={18}
                />
                <div>
                  <h3 className="font-semibold text-gray-800">Data Quality</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Source data meets minimum quality requirements for
                    successful transformation to FHIR. Where data quality issues
                    exist, remediation steps will be incorporated into the
                    implementation plan.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle
                  className="text-green-500 mr-3 flex-shrink-0 mt-1"
                  size={18}
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Terminology Alignment
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Standard terminologies (SNOMED CT, LOINC, ICD-10) are either
                    already in use or can be mapped from existing code systems
                    to support FHIR's structured coding requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Technical Implementation Assumptions */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("tech")}
        >
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
              <Zap className="text-purple-600" size={20} />
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              Technical Implementation Assumptions
            </h2>
          </div>
          <div className="text-gray-500">
            {expandedSections.tech ? (
              <span className="text-2xl">▼</span>
            ) : (
              <span className="text-2xl">▶</span>
            )}
          </div>
        </div>

        {expandedSections.tech && (
          <div className="mt-6 pl-14">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-5">
                <div className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-3 flex-shrink-0 mt-1"
                    size={18}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Infrastructure Readiness
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Appropriate infrastructure (servers, databases, networks)
                      will be available for development, testing, and production
                      environments with sufficient capacity and performance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-3 flex-shrink-0 mt-1"
                    size={18}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      FHIR Server Maturity
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      HAPI FHIR server implementation will be suitable for our
                      requirements and can be configured and extended as needed
                      to meet specific organizational needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-3 flex-shrink-0 mt-1"
                    size={18}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Development Environment
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Development and testing environments will be available
                      that closely mirror production, allowing for meaningful
                      testing and validation before deployment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-3 flex-shrink-0 mt-1"
                    size={18}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Network Connectivity
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Appropriate network connectivity and bandwidth will be
                      available between all components of the system, with
                      necessary security measures in place.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-3 flex-shrink-0 mt-1"
                    size={18}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Security Requirements
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Security requirements for healthcare data will be clearly
                      defined and implementable within the proposed architecture
                      using standard security patterns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-3 flex-shrink-0 mt-1"
                    size={18}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      DevOps Pipeline
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      CI/CD pipelines and DevOps practices will be established
                      to support frequent, reliable deployments with appropriate
                      testing and validation steps.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-purple-50 p-4 rounded-lg border border-purple-100">
              <h3 className="font-semibold text-purple-900 mb-2">
                FHIR Resources Focus
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Initially, the implementation will focus on these core FHIR
                resources, which cover the most essential healthcare data
                elements:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white p-3 rounded border flex items-center">
                  <Users className="text-purple-500 mr-2" size={16} />
                  <span className="text-sm">Patient</span>
                </div>
                <div className="bg-white p-3 rounded border flex items-center">
                  <Activity className="text-purple-500 mr-2" size={16} />
                  <span className="text-sm">Observation</span>
                </div>
                <div className="bg-white p-3 rounded border flex items-center">
                  <GitBranch className="text-purple-500 mr-2" size={16} />
                  <span className="text-sm">Condition</span>
                </div>
                <div className="bg-white p-3 rounded border flex items-center">
                  <Link className="text-purple-500 mr-2" size={16} />
                  <span className="text-sm">Encounter</span>
                </div>
                <div className="bg-white p-3 rounded border flex items-center">
                  <Shield className="text-purple-500 mr-2" size={16} />
                  <span className="text-sm">Medication</span>
                </div>
                <div className="bg-white p-3 rounded border flex items-center">
                  <Activity className="text-purple-500 mr-2" size={16} />
                  <span className="text-sm">Procedure</span>
                </div>
                <div className="bg-white p-3 rounded border flex items-center">
                  <Users className="text-purple-500 mr-2" size={16} />
                  <span className="text-sm">Practitioner</span>
                </div>
                <div className="bg-white p-3 rounded border flex items-center">
                  <Server className="text-purple-500 mr-2" size={16} />
                  <span className="text-sm">Organization</span>
                </div>
              </div>
              <p className="text-gray-600 text-xs mt-3">
                Additional resources will be added in subsequent phases based on
                use case priorities.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Timeline & Resource Assumptions */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("timeline")}
        >
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
              <Clock className="text-yellow-600" size={20} />
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              Timeline & Resource Assumptions
            </h2>
          </div>
          <div className="text-gray-500">
            {expandedSections.timeline ? (
              <span className="text-2xl">▼</span>
            ) : (
              <span className="text-2xl">▶</span>
            )}
          </div>
        </div>

        {expandedSections.timeline && (
          <div className="mt-6 pl-14">
            <div className="space-y-5">
              <div className="flex items-start">
                <CheckCircle
                  className="text-green-500 mr-3 flex-shrink-0 mt-1"
                  size={18}
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Phased Implementation
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    The implementation will follow a phased approach over 12-18
                    months, beginning with a proof of concept, followed by an
                    MVP implementation, and then expansion to full production.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle
                  className="text-green-500 mr-3 flex-shrink-0 mt-1"
                  size={18}
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Technical Team Composition
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    The implementation will require a dedicated technical team
                    including FHIR specialists, integration developers, database
                    experts, and DevOps engineers.
                  </p>
                  <div className="mt-2 grid md:grid-cols-2 gap-2">
                    <div className="bg-gray-50 p-2 rounded border text-xs">
                      <span className="font-medium">FHIR Specialists:</span> 1
                      FTEs
                    </div>
                    <div className="bg-gray-50 p-2 rounded border text-xs">
                      <span className="font-medium">
                        Integration Developers:
                      </span>{" "}
                      1 FTEs
                    </div>
                    <div className="bg-gray-50 p-2 rounded border text-xs">
                      <span className="font-medium">
                        Database/Infrastructure:
                      </span>{" "}
                      1 FTEs
                    </div>
                    <div className="bg-gray-50 p-2 rounded border text-xs">
                      <span className="font-medium">DevOps/CI/CD:</span> 1
                      FTEs
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle
                  className="text-green-500 mr-3 flex-shrink-0 mt-1"
                  size={18}
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Stakeholder Availability
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Key stakeholders from NPHIES, Sehhaty, and other relevant
                    teams will be available for requirements gathering,
                    decision-making, and validation activities throughout the
                    project.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertCircle
                  className="text-yellow-500 mr-3 flex-shrink-0 mt-1"
                  size={18}
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Parallel Operations
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    During the transition period, both the current architecture
                    and the FHIR-based solution will operate in parallel to
                    ensure continuity of service and facilitate validation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Key Risks Section */}
      <div className="bg-red-50 rounded-lg shadow-md p-6 mb-8 border border-red-200">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
            <AlertCircle className="text-red-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-gray-800">
            Key Assumptions Risks
          </h2>
        </div>

        <p className="text-gray-700 mb-4">
          The following risks related to our assumptions have been identified
          and will require mitigation strategies:
        </p>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-red-100">
            <h3 className="font-semibold text-red-800 mb-2">
              NPHIES Integration Complexity
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              NPHIES integration may be more complex than anticipated,
              potentially affecting the timeline or requiring additional
              resources.
            </p>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-700">Impact: High</span>
              <span className="font-medium text-gray-700">
                Probability: Medium
              </span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-red-100">
            <h3 className="font-semibold text-red-800 mb-2">
              Data Mapping Challenges
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              Source data formats may be inconsistent or incomplete, making FHIR
              mapping more difficult and time-consuming than expected.
            </p>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-700">Impact: Medium</span>
              <span className="font-medium text-gray-700">
                Probability: High
              </span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-red-100">
            <h3 className="font-semibold text-red-800 mb-2">
              Performance Scaling
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              The event-driven architecture may face performance challenges at
              scale, particularly with high message volumes or complex
              transformations.
            </p>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-700">Impact: High</span>
              <span className="font-medium text-gray-700">
                Probability: Medium
              </span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-red-100">
            <h3 className="font-semibold text-red-800 mb-2">
              Resource Availability
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              Securing sufficient skilled resources with FHIR expertise may be
              challenging, potentially causing delays or quality issues in
              implementation.
            </p>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-700">Impact: Medium</span>
              <span className="font-medium text-gray-700">
                Probability: Medium
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
            <CheckCircle className="text-green-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-gray-800">
            Assumption Validation Plan
          </h2>
        </div>

        <p className="text-gray-700 mb-4">
          These assumptions will be validated through the following activities:
        </p>

        <div className="space-y-3">
          <div className="flex items-start">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              <span className="text-green-700 font-medium text-xs">1</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">
                Stakeholder Workshops
              </h3>
              <p className="text-sm text-gray-600">
                Conduct workshops with key stakeholders to validate assumptions
                and gather additional requirements.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              <span className="text-green-700 font-medium text-xs">2</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">
                Technical Assessment
              </h3>
              <p className="text-sm text-gray-600">
                Perform a detailed technical assessment of existing systems,
                including data quality, integration capabilities, and
                performance characteristics.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              <span className="text-green-700 font-medium text-xs">3</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Proof of Concept</h3>
              <p className="text-sm text-gray-600">
                Implement a targeted proof of concept to validate key technical
                assumptions and identify potential issues.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              <span className="text-green-700 font-medium text-xs">4</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">
                Regular Review Cycles
              </h3>
              <p className="text-sm text-gray-600">
                Establish regular review cycles to reassess assumptions and
                adjust plans based on new information.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              <span className="text-green-700 font-medium text-xs">5</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">
                Risk Management Process
              </h3>
              <p className="text-sm text-gray-600">
                Implement a formal risk management process to track and mitigate
                risks related to key assumptions.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="/enhanced-fhir-architecture"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span>Continue to Enhanced Architecture</span>
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AssumptionsPage;
