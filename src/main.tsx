import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";

// Import all presentation pages
import introductionPage from "./Diagrams/introduction";
import whatIsFHIRPage from "./Diagrams/what_is_fhir";
import fhirBenefitsPage from "./Diagrams/fhir_benefits";
import asIsArchitecture from "./Diagrams/as-is-architecture";
import assumptionsPage from "./Diagrams/assumptions";
import enhancedFHIRArchitecture from "./Diagrams/enhanced-fhir-architecture";
import infrastructureDesign from "./Diagrams/infrastructure-design";
import pocScopePage from "./Diagrams/poc-scope";
import technicalSolutionPage from "./Diagrams/technical-solution";
import supportneededPage from "./Diagrams/support-needed";
import actionPlanPage from "./Diagrams/action-plan";

// Navigation component
const Navigation = () => {
  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white p-4 overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-xl font-bold mb-2">FHIR Interoperability</h1>
        <p className="text-gray-400 text-sm">Technical Presentation</p>
      </div>

      <ul className="space-y-1">
        <li>
          <Link
            to="/"
            className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors"
          >
            Introduction
          </Link>
        </li>
        <li>
          <Link
            to="/what-is-fhir"
            className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors"
          >
            What is FHIR?
          </Link>
        </li>
        <li>
          <Link
            to="/fhir-benefits"
            className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors"
          >
            FHIR Benefits
          </Link>
        </li>
        <li>
          <Link
            to="/as-is-architecture"
            className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors"
          >
            Current Architecture
          </Link>
        </li>
        <li>
          <Link
            to="/assumptions"
            className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors"
          >
            Assumptions
          </Link>
        </li>
        <li>
          <Link
            to="/enhanced-fhir-architecture"
            className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors"
          >
            Enhanced Architecture
          </Link>
        </li>
        <li>
          <Link
            to="/infrastructure-design"
            className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors"
          >
            Infrastructure Design
          </Link>
        </li>
        <li>
          <Link
            to="/technical-solution"
            className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors"
          >
            Technical Solution
          </Link>
        </li>
        <li>
          <Link
            to="/poc-scope"
            className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors"
          >
            POC Scope
          </Link>
        </li>
        <li>
          <Link
            to="/support-needed"
            className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors"
          >
            Support Needed
          </Link>
        </li>
        <li>
          <Link
            to="/action-plan"
            className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors"
          >
            Action Plan
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// Main application component
const App = () => {
  return (
    <Router>
      <div className="flex">
        <Navigation />
        <main className="ml-64 w-full">
          <Routes>
            <Route path="/" element={<introductionPage />} />
            <Route path="/what-is-fhir" element={<whatIsFHIRPage />} />
            <Route path="/fhir-benefits" element={<fhirBenefitsPage />} />
            <Route path="/as-is-architecture" element={<asIsArchitecture />} />
            <Route path="/assumptions" element={<assumptionsPage />} />
            <Route
              path="/enhanced-fhir-architecture"
              element={<enhancedFHIRArchitecture />}
            />
            <Route
              path="/infrastructure-design"
              element={<infrastructureDesign />}
            />
            <Route
              path="/technical-solution"
              element={<technicalSolutionPage />}
            />
            <Route path="/poc-scope" element={<pocScopePage />} />
            <Route path="/support-needed" element={<supportneededPage />} />
            <Route path="/action-plan" element={<actionPlanPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
