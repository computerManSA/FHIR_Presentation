import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Introduction from "./introduction.tsx";
import WhatisFHIR from "./what-is-fhir.tsx";
import FHIRBenefitsPage from "./fhir-benefits.tsx";
import AsIsArchitecture from "./as-is-architecture.tsx";
import AssumptionsPage from "./assumptions.tsx";
import EnhancedFHIRArchitecture from "./enhanced-fhir-react.tsx";
import InfrastructureDesign from "./infrastructure-design.tsx";
// import TechnicalSolutionPage from "./technical-solution.tsx";
import POCScopePage from "./poc-scope.tsx";
import SupportNeededPage from "./support-needed.tsx";
import ActionPlanPage from "./action-plan.tsx";

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
            <Route path="/" element={<Introduction />} />
            <Route path="/what-is-fhir" element={<WhatisFHIR />} />
            <Route path="/fhir-benefits" element={<FHIRBenefitsPage />} />
            <Route path="/as-is-architecture" element={<AsIsArchitecture />} />
            <Route path="/assumptions" element={<AssumptionsPage />} />
            <Route
              path="/enhanced-fhir-architecture"
              element={<EnhancedFHIRArchitecture />}
            />
            <Route
              path="/infrastructure-design"
              element={<InfrastructureDesign />}
            />
            {/* <Route
              path="/technical-solution"
              element={<TechnicalSolutionPage />}
            /> */}
            <Route path="/poc-scope" element={<POCScopePage />} />
            <Route path="/support-needed" element={<SupportNeededPage />} />
            <Route path="/action-plan" element={<ActionPlanPage />} />
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
