import React from "react";
import {
  Server,
  Heart,
  Zap,
  Users,
  PieChart,
  Clock,
  Shield,
  Repeat,
  Activity,
} from "lucide-react";

const IntroductionPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Healthcare Interoperability Initiative
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transforming Saudi Healthcare with FHIR-based Interoperability
        </p>
      </header>

      {/* Vision and Mission Section */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <Activity className="text-blue-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Establish a unified, real-time healthcare data exchange ecosystem
              that seamlessly connects all healthcare stakeholders, enabling
              providers to deliver personalized, informed care while empowering
              patients with complete access to their health information.
            </p>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-blue-800 font-medium text-sm">
                "A connected healthcare system where the right information is
                available to the right person at the right time."
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                <Heart className="text-green-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Implement a standards-based, event-driven healthcare
              interoperability platform using FHIR that bridges existing systems
              and enables real-time data exchange, improving care coordination,
              reducing redundancies, and enhancing the patient experience across
              the Saudi healthcare ecosystem.
            </p>
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-800 font-medium text-sm">
                "Transform healthcare delivery through seamless, secure, and
                standardized information exchange."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Initiative Overview */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-10">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
            <Zap className="text-purple-600" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Initiative Overview
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          The Healthcare Interoperability Initiative aims to address key
          challenges in our current healthcare information ecosystem through the
          implementation of FHIR (Fast Healthcare Interoperability Resources)
          standards. This initiative will transform how healthcare data is
          shared, accessed, and utilized across all stakeholders.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="p-4 bg-gray-50 rounded-lg border">
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              Current Challenges
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  <span className="text-red-600 text-xs">✕</span>
                </span>
                Data silos across healthcare systems
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  <span className="text-red-600 text-xs">✕</span>
                </span>
                Delayed information access affecting care decisions
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  <span className="text-red-600 text-xs">✕</span>
                </span>
                Inconsistent data formats and standards
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  <span className="text-red-600 text-xs">✕</span>
                </span>
                Limited scalability of current architecture
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  <span className="text-red-600 text-xs">✕</span>
                </span>
                Poor user experience due to data freshness issues
              </li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border">
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              Initiative Goals
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  <span className="text-green-600 text-xs">✓</span>
                </span>
                Implement FHIR-based standardized data exchange
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  <span className="text-green-600 text-xs">✓</span>
                </span>
                Enable real-time data access for healthcare providers
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  <span className="text-green-600 text-xs">✓</span>
                </span>
                Improve patient experience and engagement
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  <span className="text-green-600 text-xs">✓</span>
                </span>
                Create scalable, event-driven architecture
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  <span className="text-green-600 text-xs">✓</span>
                </span>
                Support future healthcare innovations and use cases
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-10">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-4">
            <PieChart className="text-orange-600" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Key Benefits</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-5 rounded-lg border border-blue-100 bg-blue-50">
            <div className="flex items-center mb-3">
              <Users className="text-blue-600 mr-2" size={20} />
              <h3 className="font-semibold text-blue-900">For Patients</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Comprehensive health records in one place</li>
              <li>• Real-time access to lab results and reports</li>
              <li>• Improved care coordination across providers</li>
              <li>• Greater control over personal health data</li>
              <li>• Enhanced digital healthcare experience</li>
            </ul>
          </div>

          <div className="p-5 rounded-lg border border-green-100 bg-green-50">
            <div className="flex items-center mb-3">
              <Server className="text-green-600 mr-2" size={20} />
              <h3 className="font-semibold text-green-900">
                For Healthcare Providers
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Complete patient history at point of care</li>
              <li>• Reduced duplicate testing and procedures</li>
              <li>• Evidence-based decision support</li>
              <li>• Streamlined referral and consultation processes</li>
              <li>• Efficient care team collaboration</li>
            </ul>
          </div>

          <div className="p-5 rounded-lg border border-purple-100 bg-purple-50">
            <div className="flex items-center mb-3">
              <Shield className="text-purple-600 mr-2" size={20} />
              <h3 className="font-semibold text-purple-900">
                For Healthcare System
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Reduced healthcare costs through efficiency</li>
              <li>• Enhanced data quality and consistency</li>
              <li>• Improved public health reporting capabilities</li>
              <li>• Future-proof, standards-based architecture</li>
              <li>• Platform for healthcare innovation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Technical Approach */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-10">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
            <Server className="text-indigo-600" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Technical Approach
          </h2>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <span className="text-blue-700 font-bold">1</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Assessment of Current State
              </h3>
              <p className="text-gray-600">
                Analyze existing systems, data flows, and identify
                interoperability gaps
              </p>
            </div>
          </div>

          <div className="ml-5 border-l-2 border-dashed border-blue-200 pl-9 h-8"></div>

          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <span className="text-blue-700 font-bold">2</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                FHIR Implementation Strategy
              </h3>
              <p className="text-gray-600">
                Develop FHIR-based architecture with event-driven components
              </p>
            </div>
          </div>

          <div className="ml-5 border-l-2 border-dashed border-blue-200 pl-9 h-8"></div>

          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <span className="text-blue-700 font-bold">3</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Proof of Concept Development
              </h3>
              <p className="text-gray-600">
                Build and test core components in controlled environment
              </p>
            </div>
          </div>

          <div className="ml-5 border-l-2 border-dashed border-blue-200 pl-9 h-8"></div>

          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <span className="text-blue-700 font-bold">4</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Phased Implementation
              </h3>
              <p className="text-gray-600">
                Iterative deployment of components with continuous validation
              </p>
            </div>
          </div>

          <div className="ml-5 border-l-2 border-dashed border-blue-200 pl-9 h-8"></div>

          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <span className="text-blue-700 font-bold">5</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Ecosystem Integration
              </h3>
              <p className="text-gray-600">
                Scale solution across healthcare partners and systems
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Overview */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
            <Clock className="text-teal-600" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Initiative Timeline Overview
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 h-full w-1 bg-teal-200 rounded"></div>

          <div className="relative z-10 mb-8">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-white border-4 border-white shadow-lg">
                <span className="font-bold">Q2</span>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Assessment & Planning
                </h3>
                <ul className="text-gray-600 mt-2 space-y-1">
                  <li>• Current architecture analysis</li>
                  <li>• Requirements gathering</li>
                  <li>• FHIR implementation strategy</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative z-10 mb-8">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-white border-4 border-white shadow-lg">
                <span className="font-bold">Q3</span>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Proof of Concept
                </h3>
                <ul className="text-gray-600 mt-2 space-y-1">
                  <li>• Core component development</li>
                  <li>• Integration testing</li>
                  <li>• Performance validation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative z-10 mb-8">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-white border-4 border-white shadow-lg">
                <span className="font-bold">Q4</span>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Initial Implementation
                </h3>
                <ul className="text-gray-600 mt-2 space-y-1">
                  <li>• FHIR server deployment</li>
                  <li>• Initial system integrations</li>
                  <li>• User acceptance testing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-white border-4 border-white shadow-lg">
                <span className="font-bold">Q1</span>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Full Scale Deployment
                </h3>
                <ul className="text-gray-600 mt-2 space-y-1">
                  <li>• Complete system integration</li>
                  <li>• Production deployment</li>
                  <li>• Monitoring and optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-10 p-6 bg-gray-100 rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Continue Exploring
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <a
            href="/what-is-fhir"
            className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
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
            className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
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
            className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
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

export default IntroductionPage;
