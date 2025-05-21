import React from "react";
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
} from "lucide-react";

const FHIRBenefitsPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          FHIR Benefits and Value
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Why FHIR is transforming healthcare interoperability and delivering
          value across the ecosystem
        </p>
      </header>

      {/* Core Benefits Section */}
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
              <TrendingUp className="text-green-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Core FHIR Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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

          <div className="mt-8 grid md:grid-cols-3 gap-8">
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
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <Users className="text-blue-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Stakeholder-Specific Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
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
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
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
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
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
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                    <ChevronRight size={14} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Improved Digital Experience
                    </h4>
                    <p className="text-sm text-gray-600">
                      Consumer-friendly health apps with seamless data exchange,
                      providing personalized insights and facilitating patient
                      engagement.
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
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
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
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
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
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
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
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                    <ChevronRight size={14} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Innovative Applications
                    </h4>
                    <p className="text-sm text-gray-600">
                      Easier integration of specialized clinical apps and
                      decision support tools directly into workflow through
                      standardized FHIR APIs.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
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
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
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
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                    <ChevronRight size={14} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Regulatory Compliance
                    </h4>
                    <p className="text-sm text-gray-600">
                      Alignment with emerging regulations that mandate
                      interoperability and patient access to data, reducing
                      compliance risk and effort.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                    <ChevronRight size={14} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Data Analytics Capabilities
                    </h4>
                    <p className="text-sm text-gray-600">
                      Enhanced ability to gather and analyze data across the
                      enterprise for quality improvement, population health, and
                      operational optimization.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
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
                  <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
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
                  <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
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
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                    <ChevronRight size={14} className="text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Data for Research & Public Health
                    </h4>
                    <p className="text-sm text-gray-600">
                      Standardized data exchange facilitates clinical research,
                      public health surveillance, and population health
                      initiatives.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                    <ChevronRight size={14} className="text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Value-Based Care Support
                    </h4>
                    <p className="text-sm text-gray-600">
                      Improved data sharing enables better coordination and
                      outcomes measurement for value-based care models and
                      alternative payment approaches.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Value Section */}
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
              <BarChart className="text-green-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Quantifiable Value & ROI
            </h2>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Key Performance Indicators Enhanced by FHIR
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Metric
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Typical Improvement
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Technical
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      Integration Development Time
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                      40-60% reduction
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Technical
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      Integration Maintenance Costs
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                      30-50% reduction
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Clinical
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      Duplicate Test Rate
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                      15-25% reduction
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Clinical
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      Medication Reconciliation Time
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                      20-30% reduction
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Operational
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      Chart Retrieval Time
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                      50-70% reduction
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Operational
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      Patient Satisfaction Scores
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                      10-20% improvement
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Financial
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      Readmission Rates
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                      5-15% reduction
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Financial
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      Overall IT Integration Costs
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                      20-40% reduction
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-lg mb-3 text-blue-900">
                Cost Savings Categories
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                    <DollarSign size={14} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Development & Maintenance
                    </h4>
                    <p className="text-sm text-gray-600">
                      Standardized interfaces replace custom point-to-point
                      integrations, reducing development, testing, and
                      maintenance costs across the IT ecosystem.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                    <DollarSign size={14} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Clinical Inefficiencies
                    </h4>
                    <p className="text-sm text-gray-600">
                      Reduced duplicate testing, improved medication management,
                      and fewer adverse events due to better information access
                      at the point of care.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                    <DollarSign size={14} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Administrative Overhead
                    </h4>
                    <p className="text-sm text-gray-600">
                      Decreased manual data entry, fewer phone calls and faxes
                      to retrieve information, and streamlined care transitions
                      and referrals.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                    <DollarSign size={14} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Preventable Utilization
                    </h4>
                    <p className="text-sm text-gray-600">
                      Lower readmission rates, reduced emergency department
                      visits, and fewer complications through improved care
                      coordination and preventive care.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <h3 className="font-semibold text-lg mb-3 text-green-900">
                Implementation ROI Case Study
              </h3>
              <div className="mb-4">
                <p className="text-sm text-gray-700">
                  A typical healthcare organization implementing FHIR-based
                  interoperability can expect significant return on investment,
                  as illustrated by this composite case study based on
                  real-world implementations:
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border mb-4">
                <h4 className="font-medium text-gray-800 mb-2">
                  Implementation Costs
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• FHIR server implementation: $150,000 - $300,000</li>
                  <li>• Integration development: $200,000 - $500,000</li>
                  <li>
                    • Staff training and workflow redesign: $50,000 - $100,000
                  </li>
                  <li>• Total investment: $400,000 - $900,000</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border mb-4">
                <h4 className="font-medium text-gray-800 mb-2">
                  Annual Benefits
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    • Reduced integration maintenance: $100,000 - $250,000
                  </li>
                  <li>• Decreased duplicate testing: $150,000 - $400,000</li>
                  <li>• Staff efficiency gains: $200,000 - $500,000</li>
                  <li>• Reduced readmissions: $300,000 - $750,000</li>
                  <li>• Total annual benefit: $750,000 - $1,900,000</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium text-green-800 mb-2">
                  ROI Analysis
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Payback period: 6-18 months</li>
                  <li>• 3-year ROI: 250% - 550%</li>
                  <li>• 5-year ROI: 400% - 900%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Addressing Current Challenges Section */}
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
              <Activity className="text-red-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              How FHIR Addresses Current Challenges
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                  <Clock className="text-red-600" size={16} />
                </div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Data Freshness Issues
                </h3>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border mb-2">
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
              <div className="bg-green-50 p-4 rounded-lg border">
                <h4 className="font-medium text-green-800 mb-2">
                  FHIR Solution
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  FHIR's RESTful API design enables real-time data access, while
                  its resource-based architecture and event-driven patterns
                  support immediate notification of changes and on-demand data
                  retrieval.
                </p>
                <p className="text-sm text-gray-700">
                  The notification+pull pattern allows systems to be alerted to
                  changes while retrieving only the specific data they need,
                  optimizing both freshness and efficiency.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                  <TrendingUp className="text-red-600" size={16} />
                </div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Scalability Limitations
                </h3>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border mb-2">
                <h4 className="font-medium text-red-800 mb-2">
                  Current Challenge
                </h4>
                <p className="text-sm text-gray-700">
                  Traditional point-to-point integration patterns create a
                  complex web of connections that becomes increasingly difficult
                  to maintain and extend as the number of systems grows.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border">
                <h4 className="font-medium text-green-800 mb-2">
                  FHIR Solution
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  FHIR's standardized RESTful APIs and resource models create a
                  consistent interface pattern that scales linearly rather than
                  exponentially as new systems are added.
                </p>
                <p className="text-sm text-gray-700">
                  Event-driven architectures using FHIR enable loose coupling
                  between systems, while cloud-based FHIR servers provide
                  elastic scaling for growing data volumes and user bases.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                  <PenToolIcon className="text-red-600" size={16} />
                </div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Maintainability Challenges
                </h3>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border mb-2">
                <h4 className="font-medium text-red-800 mb-2">
                  Current Challenge
                </h4>
                <p className="text-sm text-gray-700">
                  Custom interfaces, proprietary data formats, and complex ETL
                  processes create a maintenance burden that consumes IT
                  resources and slows innovation.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border">
                <h4 className="font-medium text-green-800 mb-2">
                  FHIR Solution
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  FHIR's standardized resources and interfaces reduce custom
                  code, while its modular design allows components to be updated
                  independently without affecting the entire system.
                </p>
                <p className="text-sm text-gray-700">
                  The extensive FHIR ecosystem provides ready-made tools,
                  libraries, and reference implementations that reduce
                  development effort and improve maintainability.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                  <Users className="text-red-600" size={16} />
                </div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Patient Experience Issues
                </h3>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border mb-2">
                <h4 className="font-medium text-red-800 mb-2">
                  Current Challenge
                </h4>
                <p className="text-sm text-gray-700">
                  Patients receive notifications about new health data but
                  experience frustration when that data isn't immediately
                  available in their health apps or patient portals.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border">
                <h4 className="font-medium text-green-800 mb-2">
                  FHIR Solution
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  FHIR's event-driven notification patterns ensure that patients
                  are only notified when data is actually available for viewing,
                  eliminating the frustrating gap between notification and
                  access.
                </p>
                <p className="text-sm text-gray-700">
                  SMART on FHIR app capabilities allow patients to access their
                  data through a rich ecosystem of applications tailored to
                  their specific needs and preferences.
                </p>
              </div>
            </div>
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
