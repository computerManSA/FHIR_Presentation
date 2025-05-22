import React, { useState } from "react";
import { exportToPdf } from './utils/exportToPdf';
import {
  Zap,
  TrendingUp,
  Shield,
  Activity,
  Clock,
  Users,
  FileText,
  ChevronRight,
  DollarSign,
  Heart,
  Server,
  PenToolIcon,
  Globe,
  Check,
  RefreshCw,
  BarChart,
  Lock,
  Download,
  CheckCircle,
} from "lucide-react";

const FHIRBenefitsPage = () => {
  const [activeSection, setActiveSection] = useState("overview");

  // Function to scroll to section
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Export functionality
  const exportPageContent = async () => {
    await exportToPdf('mainContent', 'FHIR-Benefits');
  };

  return (
    <div id="mainContent" className="w-full min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-gray-800">FHIR Benefits</h1>
              <p className="text-xs text-gray-600">
                Understanding the value and impact of FHIR in healthcare
              </p>
            </div>

            <button
              onClick={exportPageContent}
              className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              <Download size={14} className="mr-2" />
              Export Guide
            </button>
          </div>
        </div>

        {/* Sticky Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-1 overflow-x-auto py-2">
            {[
              { id: "overview", label: "Overview", icon: Zap },
              { id: "core-benefits", label: "Core Benefits", icon: TrendingUp },
              {
                id: "stakeholder-benefits",
                label: "Stakeholder Benefits",
                icon: Users,
              },
              { id: "business-value", label: "Business Value", icon: BarChart },
              {
                id: "current-challenges",
                label: "Addressing Challenges",
                icon: Activity,
              },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center px-4 py-2 rounded transition-all text-sm ${
                  activeSection === id
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon size={14} className="mr-2" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section id="overview" className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <Zap className="text-blue-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">FHIR Overview</h2>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Fast Healthcare Interoperability Resources (FHIR, pronounced
              "fire") is a next-generation standards framework created by HL7
              International. FHIR combines the best features of previous
              healthcare standards while leveraging current web technologies to
              address the challenges of healthcare information exchange.
            </p>

            <div className="grid md:grid-cols-1 gap-6 mb-6">
              <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-lg mb-3 text-blue-800">
                  Key Characteristics
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check
                        size={18}
                        className="text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                      />
                      <span>
                        Built on modern web standards (HTTP, REST, JSON, XML)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check
                        size={18}
                        className="text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                      />
                      <span>
                        Resource-oriented architecture focusing on common
                        healthcare concepts
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check
                        size={18}
                        className="text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                      />
                      <span>
                        Human-readable representations alongside
                        machine-processable data
                      </span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check
                        size={18}
                        className="text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                      />
                      <span>
                        Strong focus on implementation with robust reference
                        implementations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check
                        size={18}
                        className="text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                      />
                      <span>
                        Evolutionary development based on real-world use cases
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border mb-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-800">
                FHIR vs. Legacy Standards
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Feature
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        HL7 v2
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        HL7 v3/CDA
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        FHIR
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        Technology Base
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        Pipe-delimited text
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        XML, RIM-based
                      </td>
                      <td className="px-4 py-3 text-sm text-green-700 font-semibold">
                        REST, JSON, XML, RDF
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        Implementation Complexity
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        Medium
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">High</td>
                      <td className="px-4 py-3 text-sm text-green-700 font-semibold">
                        Low
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        Web Developer Familiarity
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">Low</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Low</td>
                      <td className="px-4 py-3 text-sm text-green-700 font-semibold">
                        High
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        Real-time Capability
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        Limited
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        Limited
                      </td>
                      <td className="px-4 py-3 text-sm text-green-700 font-semibold">
                        Strong
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-orange-50 p-5 rounded-lg border border-orange-100">
              <h3 className="font-semibold text-lg mb-3 text-orange-800">
                Why FHIR Matters
              </h3>
              <p className="text-gray-700 mb-3">
                FHIR addresses the fundamental challenges of healthcare
                interoperability by combining the technical strengths of
                previous standards with modern web development approaches. This
                makes it significantly easier to implement and reduces the
                barriers to meaningful healthcare data exchange.
              </p>
              <p className="text-gray-700">
                The standard's focus on developer experience, practical use
                cases, and real-world implementation has led to rapid adoption
                globally. Major platforms including Apple Health, Google Cloud
                Healthcare API, and Microsoft Azure API for FHIR have embraced
                the standard, creating a growing ecosystem of interoperable
                healthcare solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Benefits Section */}
      <section id="core-benefits" className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
              <TrendingUp className="text-green-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Core FHIR Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <Zap className="text-blue-600" size={20} />
                </div>
                <h3 className="font-semibold text-lg text-blue-900">
                  Modern Web Standards
                </h3>
              </div>
              <p className="text-gray-700 mb-4 text-sm flex-grow">
                FHIR leverages familiar web technologies like REST, JSON, and
                OAuth, making it accessible to a broad range of developers
                beyond healthcare IT specialists.
              </p>
              <div className="mt-auto">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-gray-600">
                      Reduced development time and costs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-gray-600">
                      Vast ecosystem of tools and libraries
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-gray-600">
                      Accelerated innovation cycle
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-100 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <RefreshCw className="text-green-600" size={20} />
                </div>
                <h3 className="font-semibold text-lg text-green-900">
                  Real-Time Interoperability
                </h3>
              </div>
              <p className="text-gray-700 mb-4 text-sm flex-grow">
                FHIR enables real-time data exchange through RESTful APIs,
                moving healthcare beyond traditional batch processes and
                message-based integration to immediate information access.
              </p>
              <div className="mt-auto">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-gray-600">
                      Timely clinical decision support
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-gray-600">
                      Enhanced care coordination
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-gray-600">
                      Improved patient experience
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-100 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <PenToolIcon className="text-purple-600" size={20} />
                </div>
                <h3 className="font-semibold text-lg text-purple-900">
                  Implementation Focus
                </h3>
              </div>
              <p className="text-gray-700 mb-4 text-sm flex-grow">
                FHIR was designed with practical implementation in mind,
                providing clear specifications, reference implementations, and
                extensive testing tools that accelerate adoption.
              </p>
              <div className="mt-auto">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-purple-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-gray-600">
                      Faster time to market
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-purple-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-gray-600">
                      Lower implementation costs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-purple-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-gray-600">
                      Robust reference implementations
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                  <Globe className="text-yellow-600" size={20} />
                </div>
                <h3 className="font-semibold text-lg text-yellow-900">
                  Global Ecosystem
                </h3>
              </div>
              <p className="text-gray-700 mb-4 text-sm flex-grow">
                FHIR has grown into a global ecosystem of developers, vendors,
                and healthcare organizations creating an unprecedented level of
                interoperability across borders and systems.
              </p>
              <div className="mt-auto">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-yellow-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-gray-600">
                      Global implementation guides
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-yellow-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-gray-600">
                      International patient summary standards
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-yellow-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-gray-600">
                      Cross-border healthcare support
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border border-red-100 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                  <FileText className="text-red-600" size={20} />
                </div>
                <h3 className="font-semibold text-lg text-red-900">
                  Extensibility
                </h3>
              </div>
              <p className="text-gray-700 mb-4 text-sm flex-grow">
                FHIR's extension mechanism strikes the perfect balance between
                standardization and customization, allowing both consistent core
                data and local or specialized requirements to coexist.
              </p>
              <div className="mt-auto">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-red-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-gray-600">
                      Adaptable to local requirements
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-red-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-gray-600">
                      Supports specialty-specific needs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-red-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-gray-600">
                      Future-proof for emerging use cases
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                  <Lock className="text-indigo-600" size={20} />
                </div>
                <h3 className="font-semibold text-lg text-indigo-900">
                  Security & Privacy
                </h3>
              </div>
              <p className="text-gray-700 mb-4 text-sm flex-grow">
                FHIR incorporates modern security standards like OAuth 2.0 and
                OpenID Connect, with built-in support for consent management and
                fine-grained access control.
              </p>
              <div className="mt-auto">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-indigo-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-gray-600">
                      SMART on FHIR authorization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-indigo-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-gray-600">
                      Granular consent mechanisms
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-indigo-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-gray-600">
                      Comprehensive audit capabilities
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Benefits Section */}
      <section id="stakeholder-benefits" className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <Users className="text-blue-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Stakeholder-Specific Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <Heart className="text-green-600" size={20} />
                </div>
                <h3 className="font-semibold text-lg text-green-900">
                  For Patients
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <ChevronRight size={14} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Comprehensive Health Records
                    </h4>
                    <p className="text-sm text-gray-600">
                      Access to complete health information from all providers
                      in one place, empowering patients to better understand and
                      participate in their care.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <ChevronRight size={14} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Real-Time Data Access
                    </h4>
                    <p className="text-sm text-gray-600">
                      Immediate access to test results, medication lists, and
                      clinical notes as soon as they're available, reducing
                      anxiety and improving the care experience.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <ChevronRight size={14} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Better Care Coordination
                    </h4>
                    <p className="text-sm text-gray-600">
                      Reduced duplicate testing, medication errors, and
                      miscommunications between providers through improved data
                      sharing.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <Users className="text-blue-600" size={20} />
                </div>
                <h3 className="font-semibold text-lg text-blue-900">
                  For Healthcare Providers
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <ChevronRight size={14} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Complete Patient Context
                    </h4>
                    <p className="text-sm text-gray-600">
                      Access to comprehensive patient history at the point of
                      care, enabling more informed clinical decision-making and
                      personalized treatment plans.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <ChevronRight size={14} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Efficient Workflows
                    </h4>
                    <p className="text-sm text-gray-600">
                      Streamlined access to external data reduces administrative
                      burden, allowing clinicians to focus more time on patient
                      care and less on data collection.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <ChevronRight size={14} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Reduced Errors
                    </h4>
                    <p className="text-sm text-gray-600">
                      Fewer transcription errors, missed allergies, or
                      medication conflicts through automated data exchange and
                      integration.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <Server className="text-purple-600" size={20} />
                </div>
                <h3 className="font-semibold text-lg text-purple-900">
                  For Healthcare Systems
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <ChevronRight size={14} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Integration Efficiency
                    </h4>
                    <p className="text-sm text-gray-600">
                      Significantly reduced integration costs and timelines
                      through standardized APIs and data models, replacing
                      custom point-to-point interfaces.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <ChevronRight size={14} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Future-Proof Architecture
                    </h4>
                    <p className="text-sm text-gray-600">
                      A standards-based foundation that can adapt to emerging
                      technologies and use cases without requiring complete
                      system overhauls.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                  <DollarSign className="text-yellow-600" size={20} />
                </div>
                <h3 className="font-semibold text-lg text-yellow-900">
                  For the Healthcare Ecosystem
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <ChevronRight size={14} className="text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Lower Barriers to Innovation
                    </h4>
                    <p className="text-sm text-gray-600">
                      Reduced development costs and faster time-to-market for
                      healthcare applications, enabling more startups and
                      innovators to enter the market.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <ChevronRight size={14} className="text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Reduced System-Wide Costs
                    </h4>
                    <p className="text-sm text-gray-600">
                      Decreased duplicate testing, fewer preventable
                      hospitalizations, and improved care coordination leading
                      to overall healthcare cost reduction.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Value Section */}
      <section id="business-value" className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
              <BarChart className="text-green-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Quantifiable Value & ROI
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                Performance Improvements
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded border">
                  <span className="font-medium">Data Freshness</span>
                  <span className="text-green-600 font-bold">
                    Hours → Seconds
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded border">
                  <span className="font-medium">Integration Dev Time</span>
                  <span className="text-green-600 font-bold">
                    40-60% Reduction
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded border">
                  <span className="font-medium">API Response Time</span>
                  <span className="text-green-600 font-bold">
                    &lt;200ms (95th %ile)
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded border">
                  <span className="font-medium">Maintenance Costs</span>
                  <span className="text-green-600 font-bold">
                    30-50% Reduction
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Implementation Benefits
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <Check size={14} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800">
                      Faster Time to Market
                    </h4>
                    <p className="text-sm text-gray-600">
                      Standard APIs reduce development cycles from months to
                      weeks
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <Check size={14} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800">
                      Lower Implementation Risk
                    </h4>
                    <p className="text-sm text-gray-600">
                      Proven standards with extensive documentation and
                      community support
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <Check size={14} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800">
                      Scalable Growth
                    </h4>
                    <p className="text-sm text-gray-600">
                      Linear scaling with new systems vs exponential complexity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Challenges Section */}
      <section id="current-challenges" className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
              <Activity className="text-red-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              How FHIR Addresses Current Challenges
            </h2>
          </div>

          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <Clock className="text-red-600" size={16} />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-800">
                    Data Freshness Issues
                  </h3>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-3">
                  <h4 className="font-medium text-red-800 mb-2">
                    Current Challenge
                  </h4>
                  <p className="text-sm text-gray-700">
                    Batch-oriented data exchange and ETL processes create
                    significant delays between data creation and availability,
                    leading to poor user experience and outdated information for
                    clinical decisions.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-800 mb-2">
                    FHIR Solution
                  </h4>
                  <p className="text-sm text-gray-700">
                    FHIR's RESTful API design enables real-time data access,
                    while its resource-based architecture and event-driven
                    patterns support immediate notification of changes and
                    on-demand data retrieval.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <TrendingUp className="text-red-600" size={16} />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-800">
                    Scalability Limitations
                  </h3>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-3">
                  <h4 className="font-medium text-red-800 mb-2">
                    Current Challenge
                  </h4>
                  <p className="text-sm text-gray-700">
                    Traditional point-to-point integration patterns create a
                    complex web of connections that becomes increasingly
                    difficult to maintain and extend as the number of systems
                    grows.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-800 mb-2">
                    FHIR Solution
                  </h4>
                  <p className="text-sm text-gray-700">
                    FHIR's standardized RESTful APIs and resource models create
                    a consistent interface pattern that scales linearly rather
                    than exponentially as new systems are added.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <PenToolIcon className="text-red-600" size={16} />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-800">
                    Maintainability Challenges
                  </h3>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-3">
                  <h4 className="font-medium text-red-800 mb-2">
                    Current Challenge
                  </h4>
                  <p className="text-sm text-gray-700">
                    Custom interfaces, proprietary data formats, and complex ETL
                    processes create a maintenance burden that consumes IT
                    resources and slows innovation.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-800 mb-2">
                    FHIR Solution
                  </h4>
                  <p className="text-sm text-gray-700">
                    FHIR's standardized resources and interfaces reduce custom
                    code, while its modular design allows components to be
                    updated independently without affecting the entire system.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <Users className="text-red-600" size={16} />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-800">
                    Patient Experience Issues
                  </h3>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-3">
                  <h4 className="font-medium text-red-800 mb-2">
                    Current Challenge
                  </h4>
                  <p className="text-sm text-gray-700">
                    Patients receive notifications about new health data but
                    experience frustration when that data isn't immediately
                    available in their health apps or patient portals.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-800 mb-2">
                    FHIR Solution
                  </h4>
                  <p className="text-sm text-gray-700">
                    FHIR's event-driven notification patterns ensure that
                    patients are only notified when data is actually available
                    for viewing, eliminating the frustrating gap between
                    notification and access.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              The Bottom Line
            </h3>
            <p className="text-gray-700 text-lg">
              FHIR directly solves the critical issues in our current
              architecture:
              <strong className="text-green-700">
                {" "}
                data freshness problems disappear
              </strong>{" "}
              with real-time APIs,
              <strong className="text-blue-700">
                {" "}
                scalability issues resolve
              </strong>{" "}
              through standardized interfaces, and
              <strong className="text-purple-700">
                {" "}
                maintenance overhead drops significantly
              </strong>{" "}
              with proven standards. This isn't just theory—these are measurable
              improvements that directly impact patient care and operational
              efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Continue Exploring
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <a
            href="/what-is-fhir"
            className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <Zap className="text-blue-600" size={18} />
              </div>
              <span className="font-medium">What is FHIR?</span>
            </div>
          </a>

          <a
            href="/as-is-architecture"
            className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                <Activity className="text-red-600" size={18} />
              </div>
              <span className="font-medium">Current Architecture</span>
            </div>
          </a>

          <a
            href="/enhanced-fhir-architecture"
            className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <Server className="text-green-600" size={18} />
              </div>
              <span className="font-medium">Enhanced Architecture</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FHIRBenefitsPage;