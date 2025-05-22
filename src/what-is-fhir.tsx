import React, { useState, useEffect } from "react";
import { exportToPdf } from './utils/exportToPdf';
import {
  Zap,
  Server,
  Code,
  Database,
  Link,
  GitMerge,
  Box,
  Globe,
  Lock,
  Users,
  Book,
  ArrowRight,
  Check,
  RefreshCw,
  FileText,
  Activity,
  Download,
} from "lucide-react";
import { CheckCircle } from "lucide-react";

const WhatIsFHIRPage = () => {
  const [activeSection, setActiveSection] = useState("overview");

  // Track scroll position for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "overview",
        "core-concepts",
        "architecture",
        "resources",
        "api",
        "standards",
      ];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 140; // Account for sticky header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  // Export functionality
  const exportPageContent = async () => {
    await exportToPdf('mainContent', 'What-is-FHIR');

## Overview
Fast Healthcare Interoperability Resources (FHIR, pronounced "fire") is a next-generation standards framework created by HL7 International. FHIR combines the best features of previous healthcare standards while leveraging current web technologies to address the challenges of healthcare information exchange.

## Key Characteristics
- Built on modern web standards (HTTP, REST, JSON, XML)
- Resource-oriented architecture focusing on common healthcare concepts
- Human-readable representations alongside machine-processable data
- Strong focus on implementation with robust reference implementations
- Evolutionary development based on real-world use cases

## Core Concepts
### Resources
The fundamental building blocks of FHIR are Resources - modular, clearly defined packages of healthcare information.

### References
FHIR resources can reference each other, creating a web of interconnected healthcare information.

### Extensions
FHIR's extension mechanism addresses healthcare's need for both standardization and customization.

### Profiles & Implementation Guides
Profiles constrain FHIR resources for specific use cases. Implementation Guides provide comprehensive guidance.

## FHIR vs Legacy Standards
| Feature | HL7 v2 | HL7 v3/CDA | FHIR |
|---------|---------|------------|------|
| Technology Base | Pipe-delimited text | XML, RIM-based | REST, JSON, XML, RDF |
| Implementation Complexity | Medium | High | Low |
| Web Developer Familiarity | Low | Low | High |
| Human Readability | Poor | Moderate | Good |
| Real-time Capability | Limited | Limited | Strong |

## RESTful API Operations
- **Read:** GET /[type]/[id]
- **Create:** POST /[type]
- **Update:** PUT /[type]/[id]
- **Delete:** DELETE /[type]/[id]
- **Search:** GET /[type]?[parameters]

## Extended Operations
- $everything: Retrieves all resources related to a patient
- $validate: Validates resources against profiles
- $expand: Expands ValueSets to retrieve codes
- $meta-operations: Manages resource metadata

Generated on: ${new Date().toLocaleString()}
    `;

    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "what-is-fhir-guide.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div id="mainContent" className="w-full min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-gray-800">What is FHIR?</h1>
              <p className="text-xs text-gray-600">
                Understanding Fast Healthcare Interoperability Resources
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
              { id: "core-concepts", label: "Core Concepts", icon: Box },
              { id: "architecture", label: "Architecture", icon: Server },
              { id: "resources", label: "Resources", icon: Database },
              { id: "api", label: "RESTful API", icon: Code },
              { id: "standards", label: "Standards", icon: Book },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center px-3 py-2 rounded-lg whitespace-nowrap transition-all text-sm ${
                  activeSection === id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Icon size={14} className="mr-2" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content - preserving original layout */}
      <div className="w-full min-h-screen bg-gray-50 p-6">
        <header className="text-center mb-12 mt-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            What is FHIR?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the Fast Healthcare Interoperability Resources
            Standard
          </p>
        </header>

        {/* Navigation Tabs - keep for compatibility but hide with CSS */}
        <div
          className="flex flex-wrap justify-center mb-8 gap-2"
          style={{ display: "none" }}
        >
          <button
            onClick={() => scrollToSection("overview")}
            className={`px-4 py-2 rounded-full ${activeSection === "overview" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
          >
            Overview
          </button>
          <button
            onClick={() => scrollToSection("core-concepts")}
            className={`px-4 py-2 rounded-full ${activeSection === "core-concepts" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
          >
            Core Concepts
          </button>
          <button
            onClick={() => scrollToSection("architecture")}
            className={`px-4 py-2 rounded-full ${activeSection === "architecture" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
          >
            Architecture
          </button>
          <button
            onClick={() => scrollToSection("resources")}
            className={`px-4 py-2 rounded-full ${activeSection === "resources" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
          >
            Resources
          </button>
          <button
            onClick={() => scrollToSection("api")}
            className={`px-4 py-2 rounded-full ${activeSection === "api" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
          >
            RESTful API
          </button>
          <button
            onClick={() => scrollToSection("standards")}
            className={`px-4 py-2 rounded-full ${activeSection === "standards" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
          >
            Standards
          </button>
        </div>

        {/* Overview Section */}
        <section id="overview" className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <Zap className="text-blue-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                FHIR Overview
              </h2>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Fast Healthcare Interoperability Resources (FHIR, pronounced
                "fire") is a next-generation standards framework created by HL7
                International. FHIR combines the best features of previous
                healthcare standards while leveraging current web technologies
                to address the challenges of healthcare information exchange.
              </p>

              <div className="grid md:grid-cols-1 gap-6 mb-6">
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-lg mb-3 text-blue-800">
                    Key Characteristics
                  </h3>
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

                <div
                  className="bg-green-50 p-5 rounded-lg border border-green-100"
                  style={{ display: "none" }}
                >
                  <h3 className="font-semibold text-lg mb-3 text-green-800">
                    FHIR Evolution
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <span className="text-green-800 font-medium text-xs">
                          1
                        </span>
                      </div>
                      <div>
                        <span className="font-medium">DSTU1 (2014)</span>
                        <p className="text-sm">
                          First draft standard for trial use
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-green-300 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <span className="text-green-800 font-medium text-xs">
                          2
                        </span>
                      </div>
                      <div>
                        <span className="font-medium">DSTU2 (2015)</span>
                        <p className="text-sm">
                          Significant evolution, early adoption
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <span className="text-white font-medium text-xs">
                          3
                        </span>
                      </div>
                      <div>
                        <span className="font-medium">STU3 (2017)</span>
                        <p className="text-sm">
                          Maturity and stabilization of the standard
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <span className="text-white font-medium text-xs">
                          4
                        </span>
                      </div>
                      <div>
                        <span className="font-medium">R4 (2019)</span>
                        <p className="text-sm">
                          First normative content, current version
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <span className="text-white font-medium text-xs">
                          5
                        </span>
                      </div>
                      <div>
                        <span className="font-medium">R5 (Draft)</span>
                        <p className="text-sm">
                          Future direction with expanded capabilities
                        </p>
                      </div>
                    </div>
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
                        <td className="px-4 py-3 text-sm text-gray-700">
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
                        <td className="px-4 py-3 text-sm text-gray-700">
                          High
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">Low</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          Web Developer Familiarity
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">Low</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Low</td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          High
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          Human Readability
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          Poor
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          Moderate
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          Good
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
                        <td className="px-4 py-3 text-sm text-gray-700">
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
                  previous standards with modern web development approaches.
                  This makes it significantly easier to implement and reduces
                  the barriers to meaningful healthcare data exchange.
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

        {/* Core Concepts Section */}
        <section id="core-concepts" className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                <Box className="text-purple-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Core Concepts
              </h2>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                FHIR is built around several core concepts that provide a
                flexible, composable approach to healthcare data representation
                and exchange. Understanding these concepts is key to
                successfully implementing FHIR-based solutions.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-purple-50 p-5 rounded-lg border border-purple-100">
                  <div className="flex items-center mb-3">
                    <Box className="text-purple-600 mr-2" size={20} />
                    <h3 className="font-semibold text-lg text-purple-900">
                      Resources
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    The fundamental building blocks of FHIR are{" "}
                    <strong>Resources</strong> - modular, clearly defined
                    packages of healthcare information. Each resource represents
                    a coherent healthcare concept, such as a Patient,
                    Observation, or Medication.
                  </p>
                  <p className="text-gray-700">
                    Resources have a defined structure with common metadata, a
                    human-readable section, and a structured data section. They
                    can be used individually or combined into larger documents
                    or messages.
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-3">
                    <Link className="text-blue-600 mr-2" size={20} />
                    <h3 className="font-semibold text-lg text-blue-900">
                      References
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    FHIR resources can <strong>reference</strong> each other,
                    creating a web of interconnected healthcare information. For
                    example, an Observation resource might reference the Patient
                    it pertains to and the Practitioner who recorded it.
                  </p>
                  <p className="text-gray-700">
                    References can be internal (within the same system) or
                    external (pointing to resources in other systems), enabling
                    complex healthcare workflows and data relationships.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                  <div className="flex items-center mb-3">
                    <GitMerge className="text-green-600 mr-2" size={20} />
                    <h3 className="font-semibold text-lg text-green-900">
                      Extensions
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    FHIR's <strong>extension mechanism</strong> addresses one of
                    healthcare's biggest challenges: the need for both
                    standardization and customization. Extensions allow for
                    adding new elements to resources without changing their core
                    definition.
                  </p>
                  <p className="text-gray-700">
                    This flexibility ensures that FHIR can accommodate local
                    requirements, specialty needs, and emerging use cases while
                    maintaining a consistent core that enables interoperability.
                  </p>
                </div>

                <div className="bg-red-50 p-5 rounded-lg border border-red-100">
                  <div className="flex items-center mb-3">
                    <Book className="text-red-600 mr-2" size={20} />
                    <h3 className="font-semibold text-lg text-red-900">
                      Profiles & Implementation Guides
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    <strong>Profiles</strong> constrain FHIR resources for
                    specific use cases by defining which elements are required,
                    what extensions are used, and what terminologies should be
                    employed.
                  </p>
                  <p className="text-gray-700">
                    <strong>Implementation Guides</strong> bundle profiles with
                    other conformance resources, narratives, and examples to
                    provide comprehensive guidance for implementing FHIR in
                    specific contexts, such as a national healthcare system or a
                    clinical specialty.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border mb-6">
                <div className="flex items-center mb-3">
                  <Database className="text-gray-600 mr-2" size={20} />
                  <h3 className="font-semibold text-lg text-gray-900">
                    Data Types
                  </h3>
                </div>
                <p className="text-gray-700 mb-3">
                  FHIR defines a rich set of data types that are used within
                  resources to represent different kinds of healthcare
                  information:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">
                      Primitive Types
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>
                        • <strong>string</strong>: Text strings
                      </li>
                      <li>
                        • <strong>boolean</strong>: True/false values
                      </li>
                      <li>
                        • <strong>integer</strong>: Whole numbers
                      </li>
                      <li>
                        • <strong>decimal</strong>: Precise decimal numbers
                      </li>
                      <li>
                        • <strong>uri</strong>: Universal resource identifiers
                      </li>
                      <li>
                        • <strong>dateTime</strong>: Date/time values
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">
                      Complex Types
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>
                        • <strong>CodeableConcept</strong>: Coded values with
                        text
                      </li>
                      <li>
                        • <strong>Identifier</strong>: Business identifiers
                      </li>
                      <li>
                        • <strong>Period</strong>: Time ranges
                      </li>
                      <li>
                        • <strong>Quantity</strong>: Measurements with units
                      </li>
                      <li>
                        • <strong>Reference</strong>: References to other
                        resources
                      </li>
                      <li>
                        • <strong>HumanName</strong>: Structured person names
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100">
                <div className="flex items-center mb-3">
                  <Globe className="text-yellow-600 mr-2" size={20} />
                  <h3 className="font-semibold text-lg text-yellow-900">
                    Terminologies
                  </h3>
                </div>
                <p className="text-gray-700 mb-3">
                  FHIR incorporates standardized medical terminologies like
                  SNOMED CT, LOINC, and ICD-10 through coded elements within
                  resources. These terminologies provide consistent medical
                  language across systems.
                </p>
                <p className="text-gray-700">
                  The standard includes specific resources (CodeSystem,
                  ValueSet, ConceptMap) for managing and using terminology
                  content, enabling sophisticated terminology services that
                  support clinical decision making, analytics, and
                  interoperability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section id="architecture" className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                <Server className="text-indigo-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                FHIR Architecture
              </h2>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                FHIR's architecture is designed to be flexible, scalable, and
                adaptable to different healthcare contexts. It combines a
                resource-oriented approach with RESTful principles and various
                implementation paradigms.
              </p>

              <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 mb-6">
                <h3 className="font-semibold text-lg mb-3 text-indigo-900">
                  Architectural Approaches
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="flex items-center mb-2">
                      <Server className="text-indigo-600 mr-2" size={20} />
                      <h4 className="font-medium text-indigo-900">REST API</h4>
                    </div>
                    <p className="text-sm text-gray-700">
                      The primary FHIR paradigm uses RESTful APIs for
                      resource-based interactions. Each resource has a URL and
                      supports standard HTTP operations (GET, POST, PUT, DELETE)
                      for CRUD operations.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border">
                    <div className="flex items-center mb-2">
                      <FileText className="text-indigo-600 mr-2" size={20} />
                      <h4 className="font-medium text-indigo-900">Documents</h4>
                    </div>
                    <p className="text-sm text-gray-700">
                      FHIR documents are collections of resources with a fixed
                      presentation, assembled into a Bundle resource with a
                      Composition resource providing structure and context.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border">
                    <div className="flex items-center mb-2">
                      <RefreshCw className="text-indigo-600 mr-2" size={20} />
                      <h4 className="font-medium text-indigo-900">Messaging</h4>
                    </div>
                    <p className="text-sm text-gray-700">
                      FHIR messaging uses a Bundle resource with a MessageHeader
                      to exchange information between systems, supporting
                      workflows like orders, referrals, and notifications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-800">
                  FHIR Server Components
                </h3>
                <div className="bg-gray-50 p-5 rounded-lg border">
                  <div className="relative">
                    {/* API Layer */}
                    <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 mb-2">
                      <h4 className="font-medium text-blue-800 mb-2">
                        FHIR RESTful API Layer
                      </h4>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="bg-white p-2 rounded border text-xs text-center">
                          Read
                        </div>
                        <div className="bg-white p-2 rounded border text-xs text-center">
                          Search
                        </div>
                        <div className="bg-white p-2 rounded border text-xs text-center">
                          Create
                        </div>
                        <div className="bg-white p-2 rounded border text-xs text-center">
                          Update
                        </div>
                      </div>
                    </div>

                    {/* Arrow Down */}
                    <div className="flex justify-center mb-2">
                      <ArrowRight
                        size={20}
                        className="transform rotate-90 text-gray-400"
                      />
                    </div>

                    {/* Business Logic */}
                    <div className="bg-green-100 border border-green-200 rounded-lg p-4 mb-2">
                      <h4 className="font-medium text-green-800 mb-2">
                        Business Logic & Validation Layer
                      </h4>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="bg-white p-2 rounded border text-xs text-center">
                          Validation
                        </div>
                        <div className="bg-white p-2 rounded border text-xs text-center">
                          Business Rules
                        </div>
                        <div className="bg-white p-2 rounded border text-xs text-center">
                          Terminology
                        </div>
                        <div className="bg-white p-2 rounded border text-xs text-center">
                          Security
                        </div>
                      </div>
                    </div>

                    {/* Arrow Down */}
                    <div className="flex justify-center mb-2">
                      <ArrowRight
                        size={20}
                        className="transform rotate-90 text-gray-400"
                      />
                    </div>

                    {/* Storage Layer */}
                    <div className="bg-purple-100 border border-purple-200 rounded-lg p-4">
                      <h4 className="font-medium text-purple-800 mb-2">
                        Storage Layer
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-white p-2 rounded border text-xs text-center">
                          Resource Storage
                        </div>
                        <div className="bg-white p-2 rounded border text-xs text-center">
                          Search Indexing
                        </div>
                        <div className="bg-white p-2 rounded border text-xs text-center">
                          Version History
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-800">
                  Security Architecture
                </h3>
                <div className="bg-red-50 p-5 rounded-lg border border-red-100">
                  <div className="flex items-center mb-3">
                    <Lock className="text-red-600 mr-2" size={20} />
                    <h4 className="font-medium text-red-900">
                      FHIR Security Framework
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-3">
                    FHIR provides a comprehensive security framework that
                    leverages existing standards and best practices:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">
                        Authentication & Authorization
                      </h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• OAuth 2.0 for delegated authorization</li>
                        <li>• OpenID Connect for authentication</li>
                        <li>• SMART on FHIR for app authorization</li>
                        <li>• UMA (User-Managed Access) support</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">
                        Additional Security Measures
                      </h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• TLS for transport security</li>
                        <li>• Digital signatures for content integrity</li>
                        <li>• Audit logging via AuditEvent resource</li>
                        <li>• Consent management via Consent resource</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: "none" }}>
                <h3 className="font-semibold text-lg mb-3 text-gray-800">
                  Implementation Patterns
                </h3>
                <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-yellow-900 mb-2">
                        FHIR Server Implementations
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>
                          • Standalone FHIR servers (HAPI FHIR, FHIR Server for
                          Azure)
                        </li>
                        <li>• EHR-integrated FHIR APIs</li>
                        <li>
                          • Cloud-based FHIR services (Google, AWS, Azure)
                        </li>
                        <li>
                          • Mobile and client applications with FHIR capability
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-900 mb-2">
                        Common Deployment Scenarios
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• EHR data access and integration</li>
                        <li>• Mobile health applications</li>
                        <li>• Population health management</li>
                        <li>• Clinical research data​​​​​​​​​​​​​​​​</li>
                        <li>• Public health reporting</li>
                        <li>• Healthcare analytics platforms</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                <Box className="text-green-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                FHIR Resources
              </h2>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                FHIR defines over 140 different resource types, each
                representing a specific healthcare concept. These resources are
                organized into logical categories based on their purpose and
                usage patterns.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                  <h3 className="font-semibold text-lg mb-3 text-green-800">
                    Patient-Centered Resources
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Users
                        className="text-green-600 mr-2 flex-shrink-0 mt-0.5"
                        size={16}
                      />
                      <div>
                        <h4 className="font-medium text-gray-800">Patient</h4>
                        <p className="text-sm text-gray-600">
                          Demographics, contact information, and administrative
                          details about an individual receiving healthcare
                          services
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Users
                        className="text-green-600 mr-2 flex-shrink-0 mt-0.5"
                        size={16}
                      />
                      <div>
                        <h4 className="font-medium text-gray-800">
                          RelatedPerson
                        </h4>
                        <p className="text-sm text-gray-600">
                          A person with a relationship to the patient (family
                          member, guardian, caregiver)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Users
                        className="text-green-600 mr-2 flex-shrink-0 mt-0.5"
                        size={16}
                      />
                      <div>
                        <h4 className="font-medium text-gray-800">Person</h4>
                        <p className="text-sm text-gray-600">
                          Demographics and administrative information about an
                          individual not in a specific healthcare role
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-lg mb-3 text-blue-800">
                    Clinical Resources
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Activity
                        className="text-blue-600 mr-2 flex-shrink-0 mt-0.5"
                        size={16}
                      />
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Observation
                        </h4>
                        <p className="text-sm text-gray-600">
                          Measurements, test results, and other findings (vital
                          signs, lab results, social history, etc.)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Activity
                        className="text-blue-600 mr-2 flex-shrink-0 mt-0.5"
                        size={16}
                      />
                      <div>
                        <h4 className="font-medium text-gray-800">Condition</h4>
                        <p className="text-sm text-gray-600">
                          Clinical conditions, problems, diagnoses, or other
                          health matters
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Activity
                        className="text-blue-600 mr-2 flex-shrink-0 mt-0.5"
                        size={16}
                      />
                      <div>
                        <h4 className="font-medium text-gray-800">Procedure</h4>
                        <p className="text-sm text-gray-600">
                          Activities performed for diagnostic or therapeutic
                          purposes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-purple-50 p-5 rounded-lg border border-purple-100">
                  <h3 className="font-semibold text-lg mb-3 text-purple-800">
                    Medication Resources
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Box
                        className="text-purple-600 mr-2 flex-shrink-0 mt-0.5"
                        size={16}
                      />
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Medication
                        </h4>
                        <p className="text-sm text-gray-600">
                          Definition of a medication or pharmaceutical product
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Box
                        className="text-purple-600 mr-2 flex-shrink-0 mt-0.5"
                        size={16}
                      />
                      <div>
                        <h4 className="font-medium text-gray-800">
                          MedicationRequest
                        </h4>
                        <p className="text-sm text-gray-600">
                          An order or request for medication to be dispensed and
                          administered
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Box
                        className="text-purple-600 mr-2 flex-shrink-0 mt-0.5"
                        size={16}
                      />
                      <div>
                        <h4 className="font-medium text-gray-800">
                          MedicationAdministration
                        </h4>
                        <p className="text-sm text-gray-600">
                          Record of a medication being administered to a patient
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100">
                  <h3 className="font-semibold text-lg mb-3 text-yellow-800">
                    Administrative Resources
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Server
                        className="text-yellow-600 mr-2 flex-shrink-0 mt-0.5"
                        size={16}
                      />
                      <div>
                        <h4 className="font-medium text-gray-800">Encounter</h4>
                        <p className="text-sm text-gray-600">
                          An interaction between a patient and healthcare
                          provider(s)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Server
                        className="text-yellow-600 mr-2 flex-shrink-0 mt-0.5"
                        size={16}
                      />
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Organization
                        </h4>
                        <p className="text-sm text-gray-600">
                          A formally or informally recognized grouping of people
                          or organizations
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Server
                        className="text-yellow-600 mr-2 flex-shrink-0 mt-0.5"
                        size={16}
                      />
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Practitioner
                        </h4>
                        <p className="text-sm text-gray-600">
                          A person who is directly or indirectly involved in the
                          provisioning of healthcare
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border mb-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-800">
                  Resource Structure
                </h3>
                <p className="text-gray-700 mb-4">
                  While each resource type has its unique content, all FHIR
                  resources share a common structure with these components:
                </p>

                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-100 p-3 border-b font-medium">
                    FHIR Resource Common Structure
                  </div>
                  <div className="p-4 bg-white">
                    <div className="mb-3 p-2 border-l-4 border-blue-500 bg-blue-50">
                      <h4 className="font-medium text-blue-900">
                        Resource Type & ID
                      </h4>
                      <p className="text-sm text-gray-600">
                        The specific type (e.g., Patient) and a unique
                        identifier for the resource
                      </p>
                    </div>

                    <div className="mb-3 p-2 border-l-4 border-green-500 bg-green-50">
                      <h4 className="font-medium text-green-900">Metadata</h4>
                      <p className="text-sm text-gray-600">
                        Technical elements including version ID, last updated
                        timestamp, profile conformance, security tags, etc.
                      </p>
                    </div>

                    <div className="mb-3 p-2 border-l-4 border-purple-500 bg-purple-50">
                      <h4 className="font-medium text-purple-900">Narrative</h4>
                      <p className="text-sm text-gray-600">
                        Human-readable summary of the resource content,
                        typically in XHTML format
                      </p>
                    </div>

                    <div className="p-2 border-l-4 border-orange-500 bg-orange-50">
                      <h4 className="font-medium text-orange-900">
                        Resource-Specific Data Elements
                      </h4>
                      <p className="text-sm text-gray-600">
                        The unique data elements that define the resource
                        content (e.g., Patient has name, gender, birthDate)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
                <h3 className="font-semibold text-lg mb-3 text-indigo-800">
                  Resource Example: Patient
                </h3>
                <div className="bg-white p-4 rounded-lg border overflow-auto max-h-80">
                  <pre className="text-xs">{`{
                        "resourceType": "Patient",
                        "id": "example",
                        "meta": {
                          "versionId": "1",
                          "lastUpdated": "2020-12-25T12:30:45.123Z"
                        },
                        "text": {
                          "status": "generated",
                          "div": "<div xmlns='http://www.w3.org/1999/xhtml'>John Smith</div>"
                        },
                        "identifier": [
                          {
                            "system": "http://example.org/fhir/mrn",
                            "value": "12345"
                          }
                        ],
                        "active": true,
                        "name": [
                          {
                            "use": "official",
                            "family": "Smith",
                            "given": ["John", "Jacob"]
                          }
                        ],
                        "telecom": [
                          {
                            "system": "phone",
                            "value": "+1 (555) 123-4567",
                            "use": "home"
                          },
                          {
                            "system": "email",
                            "value": "john.smith@example.com"
                          }
                        ],
                        "gender": "male",
                        "birthDate": "1974-12-25",
                        "address": [
                          {
                            "use": "home",
                            "line": ["123 Main St"],
                            "city": "Anytown",
                            "state": "CA",
                            "postalCode": "12345",
                            "country": "USA"
                          }
                        ],
                        "maritalStatus": {
                          "coding": [
                            {
                              "system": "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
                              "code": "M",
                              "display": "Married"
                            }
                          ]
                        },
                        "communication": [
                          {
                            "language": {
                              "coding": [
                                {
                                  "system": "urn:ietf:bcp:47",
                                  "code": "en",
                                  "display": "English"
                                }
                              ]
                            },
                            "preferred": true
                          }
                        ]
                      }`}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RESTful API Section */}
        <section id="api" className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <Code className="text-blue-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                FHIR RESTful API
              </h2>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                The FHIR RESTful API is the primary mechanism for exchanging
                healthcare information. It uses standard HTTP methods to create,
                read, update, delete, and search for resources, making it
                familiar to web developers and enabling straightforward
                integration with modern applications.
              </p>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 mb-6">
                <h3 className="font-semibold text-lg mb-3 text-blue-800">
                  Core API Operations
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="px-4 py-3 text-left text-xs font-medium text-blue-900 uppercase tracking-wider">
                          Operation
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-blue-900 uppercase tracking-wider">
                          HTTP Method
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-blue-900 uppercase tracking-wider">
                          URL Pattern
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-blue-900 uppercase tracking-wider">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          Read
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">GET</td>
                        <td className="px-4 py-3 text-sm font-mono text-xs text-gray-700">
                          /[type]/[id]
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          Retrieve a resource by its type and ID
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          Create
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          POST
                        </td>
                        <td className="px-4 py-3 text-sm font-mono text-xs text-gray-700">
                          /[type]
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          Create a new resource, server assigns ID
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          Update
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">PUT</td>
                        <td className="px-4 py-3 text-sm font-mono text-xs text-gray-700">
                          /[type]/[id]
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          Update an existing resource
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          Delete
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          DELETE
                        </td>
                        <td className="px-4 py-3 text-sm font-mono text-xs text-gray-700">
                          /[type]/[id]
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          Delete a resource
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          Search
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">GET</td>
                        <td className="px-4 py-3 text-sm font-mono text-xs text-gray-700">
                          /[type]?[parameters]
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          Search for resources matching criteria
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
                  <h3 className="font-semibold text-lg mb-3 text-indigo-800">
                    API Example: Read Patient
                  </h3>
                  <p className="text-gray-700 mb-3 text-sm">HTTP Request:</p>
                  <div className="bg-gray-800 text-white p-3 rounded font-mono text-xs mb-3">
                    GET /Patient/123 HTTP/1.1
                    <br />
                    Host: example.org/fhir
                    <br />
                    Accept: application/fhir+json
                  </div>
                  <p className="text-gray-700 mb-2 text-sm">Response:</p>
                  <div className="bg-gray-800 text-white p-3 rounded font-mono text-xs overflow-auto max-h-40">
                    HTTP/1.1 200 OK
                    <br />
                    Content-Type: application/fhir+json
                    <br />
                    {`{
                        "resourceType": "Patient",
                        "id": "123",
                        "meta": { "versionId": "1", "lastUpdated": "2023-01-15T15:45:00Z" },
                        "name": [{ "family": "Smith", "given": ["John"] }],
                        "gender": "male",
                        "birthDate": "1970-01-01"
                      }`}
                  </div>
                </div>

                <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                  <h3 className="font-semibold text-lg mb-3 text-green-800">
                    API Example: Search Patients
                  </h3>
                  <p className="text-gray-700 mb-3 text-sm">HTTP Request:</p>
                  <div className="bg-gray-800 text-white p-3 rounded font-mono text-xs mb-3">
                    GET /Patient?family=smith&gender=male&_format=json HTTP/1.1
                    <br />
                    Host: example.org/fhir
                    <br />
                    Accept: application/fhir+json
                  </div>
                  <p className="text-gray-700 mb-2 text-sm">Response:</p>
                  <div className="bg-gray-800 text-white p-3 rounded font-mono text-xs overflow-auto max-h-40">
                    HTTP/1.1 200 OK
                    <br />
                    Content-Type: application/fhir+json
                    <br />
                    {`{
                        "resourceType": "Bundle",
                        "type": "searchset",
                        "total": 2,
                        "entry": [
                          {
                            "resource": {
                              "resourceType": "Patient",
                              "id": "123",
                              "name": [{ "family": "Smith", "given": ["John"] }],
                              "gender": "male"
                            }
                          },
                          {
                            "resource": {
                              "resourceType": "Patient",
                              "id": "456",
                              "name": [{ "family": "Smith", "given": ["Robert"] }],
                              "gender": "male"
                            }
                          }
                        ]
                      }`}
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100 mb-6">
                <h3 className="font-semibold text-lg mb-3 text-yellow-800">
                  Search Capabilities
                </h3>
                <p className="text-gray-700 mb-3">
                  FHIR's search framework provides powerful capabilities for
                  querying healthcare data:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">
                      Search Parameters
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>
                        • <strong>Standard parameters</strong> for each resource
                        type
                      </li>
                      <li>
                        • <strong>Common parameters</strong> across all
                        resources (e.g., _id, _lastUpdated)
                      </li>
                      <li>
                        • <strong>Custom parameters</strong> defined in
                        SearchParameter resources
                      </li>
                      <li>
                        • <strong>Modifiers</strong> that alter search behavior
                        (e.g., :exact, :missing)
                      </li>
                      <li>
                        • <strong>Prefixes</strong> for comparing values (e.g.,
                        gt, lt, ge, le)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">
                      Advanced Features
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>
                        • <strong>_include / _revinclude</strong> to include
                        related resources
                      </li>
                      <li>
                        • <strong>_sort</strong> to order results
                      </li>
                      <li>
                        • <strong>_count</strong> to limit result size
                      </li>
                      <li>
                        • <strong>Chained parameters</strong> to search across
                        resource references
                      </li>
                      <li>
                        • <strong>Composite parameters</strong> combining
                        multiple fields
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-5 rounded-lg border border-red-100">
                <h3 className="font-semibold text-lg mb-3 text-red-800">
                  Extended Operations
                </h3>
                <p className="text-gray-700 mb-3">
                  Beyond basic CRUD operations, FHIR defines extended operations
                  for specialized functionality:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-medium text-gray-800 mb-2">
                      $everything
                    </h4>
                    <p className="text-sm text-gray-700">
                      Retrieves all available resources related to a specific
                      patient, providing a comprehensive view of their record.
                    </p>
                    <div className="mt-2 bg-gray-100 p-2 rounded text-xs font-mono">
                      GET /Patient/123/$everything
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-medium text-gray-800 mb-2">
                      $validate
                    </h4>
                    <p className="text-sm text-gray-700">
                      Validates a resource against profiles, providing detailed
                      error messages for non-conformant resources.
                    </p>
                    <div className="mt-2 bg-gray-100 p-2 rounded text-xs font-mono">
                      POST /Patient/$validate
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-medium text-gray-800 mb-2">$expand</h4>
                    <p className="text-sm text-gray-700">
                      Expands a ValueSet to retrieve all the codes it includes,
                      supporting terminology-based functionality.
                    </p>
                    <div className="mt-2 bg-gray-100 p-2 rounded text-xs font-mono">
                      GET /ValueSet/123/$expand
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-medium text-gray-800 mb-2">
                      $meta-operations
                    </h4>
                    <p className="text-sm text-gray-700">
                      Operations for managing resource metadata, including tags,
                      security labels, and profiles.
                    </p>
                    <div className="mt-2 bg-gray-100 p-2 rounded text-xs font-mono">
                      GET /Patient/123/$meta
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Standards Section */}
        <section id="standards" className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                <Book className="text-red-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                FHIR Implementation & Standards
              </h2>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Successfully implementing FHIR involves understanding its
                implementation guides, profiles, and integration with other
                healthcare standards and specifications.
              </p>

              <div className="bg-purple-50 p-5 rounded-lg border border-purple-100">
                <h3 className="font-semibold text-lg mb-3 text-purple-800">
                  Implementation Considerations
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-medium text-gray-800 mb-2">
                      Phased Approach
                    </h4>
                    <p className="text-sm text-gray-700">
                      Most organizations adopt FHIR incrementally, focusing
                      first on high-value use cases like patient access or
                      specific data exchange scenarios. This allows for learning
                      and adjustment before broader implementation.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-medium text-gray-800 mb-2">
                      Profiling Strategy
                    </h4>
                    <p className="text-sm text-gray-700">
                      Successful implementations typically define FHIR profiles
                      that constrain the base resources to match organizational
                      requirements and local data models, balancing
                      standardization with specific needs.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-medium text-gray-800 mb-2">
                      Test-Driven Development
                    </h4>
                    <p className="text-sm text-gray-700">
                      The FHIR ecosystem provides extensive testing tools,
                      including public test servers, validation tools, and
                      connectathons. These support an iterative, test-driven
                      approach to implementation.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-medium text-gray-800 mb-2">
                      Open Source Ecosystem
                    </h4>
                    <p className="text-sm text-gray-700">
                      A robust ecosystem of open source tools supports FHIR
                      implementation, including reference servers (HAPI FHIR,
                      FHIR Server for Azure), client libraries, and testing
                      frameworks.
                    </p>
                  </div>
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
              href="/fhir-benefits"
              className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <CheckCircle className="text-green-600" size={18} />
                </div>
                <span className="font-medium">FHIR Benefits</span>
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
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <Server className="text-blue-600" size={18} />
                </div>
                <span className="font-medium">Enhanced Architecture</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsFHIRPage;
