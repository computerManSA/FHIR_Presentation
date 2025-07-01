import React, { Dispatch, SetStateAction } from "react";
import { Link, useLocation } from "react-router-dom";
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

// Define the props for the Navigation component
interface NavigationProps {
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
}

// Navigation component
const Navigation: React.FC<NavigationProps> = ({
  isCollapsed,
  setIsCollapsed,
}) => {
  const location = useLocation();

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
          {
            path: "/as-is-architecture",
            label: "Current Architecture",
            icon: GitBranch,
          },
          { path: "/assumptions", label: "Assumptions", icon: Eye },
          {
            path: "/enhanced-fhir-architecture",
            label: "Enhanced Architecture",
            icon: Server,
          },
          {
            path: "/standard-architecture",
            label: "Standard Architecture",
            icon: Server,
          },
          {
            path: "/sequence-diagram",
            label: "Sequence Diagrams",
            icon: GitBranch,
          },
          // {
          //   path: "/infrastructure-design",
          //   label: "Infrastructure Design",
          //   icon: Network,
          // },
          // {
          //   path: "/technical-solution",
          //   label: "Technical Solution",
          //   icon: Code,
          // },
          { path: "/poc-scope", label: "POC Scope", icon: Target },
          // { path: "/support-needed", label: "Support Needed", icon: Users },
          // { path: "/action-plan", label: "Action Plan", icon: ListTodo },
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
              <div
                className={`flex items-center ${isCollapsed ? "justify-center" : ""}`}
              >
                <Icon size={18} className={isCollapsed ? "" : "mr-2"} />
                {!isCollapsed && <span>{label}</span>}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;