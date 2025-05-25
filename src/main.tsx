import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./components/navigation.tsx";

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
// import POCScopePage from "./poc-scope.tsx";
import PocScopePage from "./poc-new.tsx";
// import SupportNeededPage from "./support-needed.tsx";
// import ActionPlanPage from "./action-plan.tsx";
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
import AccessGate from "./components/AccessGate.tsx";


// Main application component
const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Router>
      <AccessGate>
        <div className="flex">
          <Navigation
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
          <main
            className={`${isCollapsed ? "ml-16" : "ml-64"} w-full transition-all duration-300`}
          >
            <Routes>
              <Route path="/" element={<Introduction />} />
              <Route path="/what-is-fhir" element={<WhatisFHIR />} />
              <Route path="/fhir-benefits" element={<FHIRBenefitsPage />} />
              <Route
                path="/as-is-architecture"
                element={<AsIsArchitecture />}
              />
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
              <Route path="/poc-scope" element={<PocScopePage />} />
              {/* <Route path="/support-needed" element={<SupportNeededPage />} /> */}
              {/* <Route path="/action-plan" element={<ActionPlanPage />} /> */}
            </Routes>
          </main>
        </div>
      </AccessGate>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
//A$rYGk