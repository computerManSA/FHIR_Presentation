import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
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
import {
  Activity,
  Zap,
  CheckCircle,
  GitBranch,
  Eye,
  Server,
  Network,
  Code,
  Target,
  Users,
  ListTodo,
} from "lucide-react";

// Navigation component
const Navigation = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <nav
      className={`fixed left-0 top-0 h-screen ${isCollapsed ? "w-16" : "w-64"} bg-gray-900 text-white p-4 overflow-y-auto transition-all duration-300`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute right-2 top-2 p-1 text-gray-400 hover:text-white"
      >
        {isCollapsed ? "→" : "←"}
      </button>
      <div className={`mb-8 ${isCollapsed ? "text-center" : ""}`}>
        {!isCollapsed && (
          <>
            <h1 className="text-xl font-bold mb-2">FHIR Interoperability</h1>
            <p className="text-gray-400 text-sm">Technical Presentation</p>
          </>
        )}
      </div>

      <ul className="space-y-1">
        {[
          { path: "/", label: "Introduction", icon: Activity },
          { path: "/what-is-fhir", label: "What is FHIR?", icon: Zap },
          { path: "/fhir-benefits", label: "FHIR Benefits", icon: CheckCircle },
          { path: "/as-is-architecture", label: "Current Architecture", icon: GitBranch },
          { path: "/assumptions", label: "Assumptions", icon: Eye },
          { path: "/enhanced-fhir-architecture", label: "Enhanced Architecture", icon: Server },
          { path: "/infrastructure-design", label: "Infrastructure Design", icon: Network },
          { path: "/technical-solution", label: "Technical Solution", icon: Code },
          { path: "/poc-scope", label: "POC Scope", icon: Target },
          { path: "/support-needed", label: "Support Needed", icon: Users },
          { path: "/action-plan", label: "Action Plan", icon: ListTodo }
        ].map(({ path, label, icon: Icon }) => (
          <li key={path}>
            <Link
              to={path}
              className={`block py-2 rounded transition-colors ${
                location.pathname === path
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-800"
              } ${isCollapsed ? "px-2" : "px-4"}`}
            >
              <div className={`flex items-center ${isCollapsed ? "justify-center" : ""}`}>
                <Icon size={18} className={isCollapsed ? "" : "mr-2"} />
                {!isCollapsed && <span>{label}</span>}
              </div>
            </Link>
          </li>
        ))}
        <li>
          <Link
            to="/what-is-fhir"
            className={`block py-2 px-4 rounded transition-colors ${
              location.pathname === "/what-is-fhir"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-800"
            }`}
          >
            <div className="flex items-center">
              <Zap
                className={`${isCollapsed ? "mx-auto" : "mr-2"}`}
                size={18}
              />
              {!isCollapsed && "What is FHIR?"}
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/fhir-benefits"
            className={`block py-2 px-4 rounded transition-colors ${
              location.pathname === "/fhir-benefits"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-800"
            }`}
          >
            <div className="flex items-center">
              <CheckCircle
                className={`${isCollapsed ? "mx-auto" : "mr-2"}`}
                size={18}
              />
              {!isCollapsed && "FHIR Benefits"}
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/as-is-architecture"
            className={`block py-2 px-4 rounded transition-colors ${
              location.pathname === "/as-is-architecture"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-800"
            }`}
          >
            <div className="flex items-center">
              <GitBranch
                className={`${isCollapsed ? "mx-auto" : "mr-2"}`}
                size={18}
              />
              {!isCollapsed && "Current Architecture"}
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/assumptions"
            className={`block py-2 px-4 rounded transition-colors ${
              location.pathname === "/assumptions"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-800"
            }`}
          >
            <div className="flex items-center">
              <Eye
                className={`${isCollapsed ? "mx-auto" : "mr-2"}`}
                size={18}
              />
              {!isCollapsed && "Assumptions"}
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/enhanced-fhir-architecture"
            className={`block py-2 px-4 rounded transition-colors ${
              location.pathname === "/enhanced-fhir-architecture"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-800"
            }`}
          >
            <div className="flex items-center">
              <Server
                className={`${isCollapsed ? "mx-auto" : "mr-2"}`}
                size={18}
              />
              {!isCollapsed && "Enhanced Architecture"}
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/infrastructure-design"
            className={`block py-2 px-4 rounded transition-colors ${
              location.pathname === "/infrastructure-design"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-800"
            }`}
          >
            <div className="flex items-center">
              <Network
                className={`${isCollapsed ? "mx-auto" : "mr-2"}`}
                size={18}
              />
              {!isCollapsed && "Infrastructure Design"}
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/technical-solution"
            className={`block py-2 px-4 rounded transition-colors ${
              location.pathname === "/technical-solution"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-800"
            } ${isCollapsed ? "text-center px-2" : ""}`}
          >
            <div className="flex items-center">
              <Code
                className={`${isCollapsed ? "mx-auto" : "mr-2"}`}
                size={18}
              />
              {!isCollapsed && "Technical Solution"}
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/poc-scope"
            className={`block py-2 px-4 rounded transition-colors ${
              location.pathname === "/poc-scope"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-800"
            } ${isCollapsed ? "text-center px-2" : ""}`}
          >
            <div className="flex items-center">
              <Target
                className={`${isCollapsed ? "mx-auto" : "mr-2"}`}
                size={18}
              />
              {!isCollapsed && "POC Scope"}
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/support-needed"
            className={`block py-2 px-4 rounded transition-colors ${
              location.pathname === "/support-needed"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-800"
            } ${isCollapsed ? "text-center px-2" : ""}`}
          >
            <div className="flex items-center">
              <Users
                className={`${isCollapsed ? "mx-auto" : "mr-2"}`}
                size={18}
              />
              {!isCollapsed && "Support Needed"}
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/action-plan"
            className={`block py-2 px-4 rounded transition-colors ${
              location.pathname === "/action-plan"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-800"
            } ${isCollapsed ? "text-center px-2" : ""}`}
          >
            <div className="flex items-center">
              <ListTodo
                className={`${isCollapsed ? "mx-auto" : "mr-2"}`}
                size={18}
              />
              {!isCollapsed && "Action Plan"}
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// Main application component
// Main application component
const App = () => {
  // Move the state here
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Router>
      <div className="flex">
        <Navigation isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <main
          className={`${isCollapsed ? "ml-16" : "ml-64"} w-full transition-all duration-300`}
        >
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
