import React, { useState } from "react";
import { exportToPdf } from './utils/exportToPdf';
import { Download } from "lucide-react";
import {
  Shield,
  Server,
  Database,
  Network,
  Lock,
  Eye,
  AlertTriangle,
  Zap,
  Cloud,
  HardDrive,
  Cpu,
  Monitor,
  RefreshCw,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const InfrastructureDesign = () => {
  const exportPageContent = async () => {
    await exportToPdf('mainContent', 'Infrastructure-Design');
  };

  const [selectedZone, setSelectedZone] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    network: true,
    dmz: true,
    app: true,
    streaming: true,
    data: true,
    monitoring: true,
    bestPractices: true,
    resilience: true,
  });

  // Function to toggle section expansion
  const toggleSection = (sectionId) => {
    setExpandedSections({
      ...expandedSections,
      [sectionId]: !expandedSections[sectionId],
    });
  };

  // Brand-accurate logo components
  const BrandLogo = ({ type, size = 24 }) => {
    const logos = {
      apigee: (
        <div
          className="flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          <div
            className="w-full h-full rounded-sm flex items-center justify-center text-white font-bold text-xs"
            style={{ backgroundColor: "#4285f4", fontSize: size * 0.4 }}
          >
            API
          </div>
        </div>
      ),
      redpanda: (
        <div
          className="flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          <div
            className="w-full h-full rounded flex items-center justify-center text-white font-bold"
            style={{ backgroundColor: "#e55c3c", fontSize: size * 0.3 }}
          >
            🐼
          </div>
        </div>
      ),
      keycloak: (
        <div
          className="flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          <div
            className="w-full h-full rounded flex items-center justify-center text-white font-bold text-xs"
            style={{ backgroundColor: "#1e3a8a", fontSize: size * 0.25 }}
          >
            🔐KC
          </div>
        </div>
      ),
      hapi: (
        <div
          className="flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          <div
            className="w-full h-full rounded flex items-center justify-center text-white font-bold text-xs"
            style={{ backgroundColor: "#007acc", fontSize: size * 0.3 }}
          >
            HAPI
          </div>
        </div>
      ),
    };

    return logos[type] || null;
  };

  const infrastructureComponents = {
    // Network Components
    "dns-lb": {
      name: "DNS & Global Load Balancer",
      description:
        "DNS resolution with global load balancing and health checking",
      technologies: ["F5 DNS", "Global Traffic Manager", "Health Monitors"],
      specifications: [
        "Multi-datacenter failover",
        "Geographic routing",
        "Health-based routing",
        "SSL termination",
      ],
      redundancy: "Active-Active across regions",
      category: "network",
    },
    waf: {
      name: "Web Application Firewall",
      description: "Layer 7 protection against application attacks and threats",
      technologies: ["F5 Advanced WAF", "DDoS Protection", "Bot Defense"],
      specifications: [
        "OWASP Top 10 protection",
        "API security",
        "Rate limiting",
        "Geo-blocking",
      ],
      redundancy: "HA pair with session sync",
      category: "security",
    },
    "fw-external": {
      name: "External Firewall",
      description:
        "Perimeter security firewall protecting against external threats",
      technologies: ["Fortinet FortiGate", "IPS/IDS", "SSL Inspection"],
      specifications: [
        "Stateful inspection",
        "Application control",
        "VPN termination",
        "Threat intelligence",
      ],
      redundancy: "Active-Passive cluster",
      category: "security",
    },
    "fw-internal": {
      name: "Internal Firewall",
      description: "East-west traffic protection between internal zones",
      technologies: ["Palo Alto Networks", "Microsegmentation", "Zero Trust"],
      specifications: [
        "Zone-based filtering",
        "User-ID integration",
        "Application visibility",
        "Threat prevention",
      ],
      redundancy: "Active-Active with load sharing",
      category: "security",
    },

    // Infrastructure Components
    "lb-app": {
      name: "Application Load Balancer",
      description: "Layer 7 load balancing for application services",
      technologies: ["F5 BIG-IP LTM", "HAProxy", "Health Checks"],
      specifications: [
        "SSL offloading",
        "Session persistence",
        "Advanced health monitoring",
        "iRules automation",
      ],
      redundancy: "HA pair with connection mirroring",
      category: "network",
    },
    "lb-db": {
      name: "Database Load Balancer",
      description: "Intelligent database routing and connection pooling",
      technologies: ["F5 BIG-IP", "PgBouncer", "Connection Multiplexing"],
      specifications: [
        "Read/write splitting",
        "Connection pooling",
        "Query routing",
        "Failover automation",
      ],
      redundancy: "Active-Passive with synchronous replication",
      category: "database",
    },

    // DMZ Zone
    "apigee-gw": {
      name: "APIGEE Gateway Cluster",
      description:
        "API management gateway providing secure API access and management",
      technologies: ["Google APIGEE Edge", "OAuth 2.0", "Rate Limiting"],
      specifications: [
        "4 nodes minimum",
        "16 vCPU",
        "32GB RAM",
        "SSD storage",
        "Auto-scaling",
      ],
      redundancy: "Active-Active cluster with load balancing",
      category: "application",
      logo: <BrandLogo type="apigee" size={24} />,
    },
    "reverse-proxy": {
      name: "Reverse Proxy",
      description: "High-performance reverse proxy for web traffic handling",
      technologies: ["NGINX Plus", "SSL/TLS termination", "Caching"],
      specifications: [
        "Load balancing",
        "SSL acceleration",
        "HTTP/2 support",
        "Compression",
      ],
      redundancy: "Multiple instances behind load balancer",
      category: "network",
    },

    // Application Zone
    keycloak: {
      name: "Keycloak Cluster",
      description:
        "Identity and access management cluster with high availability",
      technologies: [
        "Keycloak 22+",
        "JGroups clustering",
        "PostgreSQL backend",
      ],
      specifications: [
        "3 node cluster",
        "8 vCPU",
        "16GB RAM",
        "Shared database",
        "Session replication",
      ],
      redundancy: "Active-Active-Active cluster",
      category: "security",
      logo: <BrandLogo type="keycloak" size={24} />,
    },
    "fhir-server": {
      name: "FHIR Server Cluster",
      description: "HAPI FHIR server cluster providing R4 API services",
      technologies: ["HAPI FHIR", "Spring Boot", "JVM optimization"],
      specifications: [
        "6 nodes minimum",
        "16 vCPU",
        "32GB RAM",
        "SSD storage",
        "JVM tuning",
      ],
      redundancy: "Stateless horizontal scaling",
      category: "application",
      logo: <BrandLogo type="hapi" size={24} />,
    },
    converter: {
      name: "Format Converter Service",
      description: "HL7v2/CDA to FHIR conversion service cluster",
      technologies: [
        "HAPI FHIR Converter",
        "Custom mappers",
        "Validation engine",
      ],
      specifications: [
        "4 nodes",
        "8 vCPU",
        "16GB RAM",
        "High CPU for transformation",
      ],
      redundancy: "Horizontal scaling with load balancing",
      category: "application",
    },
    "notification-producer": {
      name: "Notification Producer",
      description:
        "Service that produces lightweight notifications about FHIR resource changes",
      technologies: [
        "Event Sourcing",
        "Redpanda Producer",
        "Resource Change Detection",
      ],
      specifications: [
        "3 node cluster",
        "4 vCPU",
        "8GB RAM",
        "High throughput",
        "Low latency",
      ],
      redundancy: "Active-Active with replication",
      category: "application",
      logo: <BrandLogo type="redpanda" size={24} />,
    },
    "sehhaty-be": {
      name: "Sehhaty Backend",
      description:
        "Healthcare provider backend application cluster with FHIR client capabilities",
      technologies: [
        "Spring Boot",
        "Microservices",
        "HAPI FHIR Client",
        "Container runtime",
      ],
      specifications: [
        "Auto-scaling group",
        "4-12 instances",
        "8 vCPU",
        "16GB RAM",
      ],
      redundancy: "Auto-scaling based on load",
      category: "application",
    },

    // Streaming Zone
    redpanda: {
      name: "Redpanda Cluster",
      description:
        "High-performance streaming platform for event-driven architecture",
      technologies: ["Redpanda", "Raft consensus", "Tiered storage"],
      specifications: [
        "6 broker minimum",
        "16 vCPU",
        "64GB RAM",
        "NVMe SSD",
        "10Gbps network",
      ],
      redundancy: "Distributed consensus with replication factor 3",
      category: "streaming",
      logo: <BrandLogo type="redpanda" size={24} />,
    },
    "schema-registry": {
      name: "Schema Registry",
      description:
        "Schema evolution and compatibility management for streaming",
      technologies: ["Schema Registry", "Avro schemas", "Compatibility checks"],
      specifications: [
        "3 node cluster",
        "4 vCPU",
        "8GB RAM",
        "High availability",
      ],
      redundancy: "Leader election with automatic failover",
      category: "streaming",
    },
    "streaming-consumers": {
      name: "Streaming Consumers",
      description:
        "Consumers that process events from Redpanda for FHIR resource creation",
      technologies: [
        "Redpanda Consumers",
        "Stream Processing",
        "Event Handling",
      ],
      specifications: ["4-8 nodes", "8 vCPU", "16GB RAM", "Auto-scaling"],
      redundancy: "Consumer groups with automatic rebalancing",
      category: "streaming",
    },

    // Data Zone
    "redis-cluster": {
      name: "Redis Cluster",
      description: "Distributed caching layer for high-performance data access",
      technologies: ["Redis Cluster", "Sentinel", "Persistence options"],
      specifications: [
        "6 nodes minimum",
        "8 vCPU",
        "64GB RAM",
        "Network-attached SSD",
      ],
      redundancy: "Sharded cluster with automatic failover",
      category: "cache",
    },
    postgresql: {
      name: "PostgreSQL Cluster",
      description: "Primary database cluster for FHIR and application data",
      technologies: ["PostgreSQL 15", "Streaming replication", "PgBouncer"],
      specifications: [
        "Primary + 2 replicas",
        "16 vCPU",
        "128GB RAM",
        "High-IOPS SSD",
      ],
      redundancy: "Master-slave with automatic promotion",
      category: "database",
    },
    mssql: {
      name: "SQL Server Always On",
      description: "Microsoft SQL Server for cleansed FHIR data analytics",
      technologies: ["SQL Server 2022", "Always On AG", "Columnstore indexes"],
      specifications: [
        "Primary + 2 replicas",
        "16 vCPU",
        "128GB RAM",
        "SSD storage",
      ],
      redundancy: "Synchronous replication with automatic failover",
      category: "database",
    },
    minio: {
      name: "MinIO Cluster",
      description: "S3-compatible object storage for documents and images",
      technologies: ["MinIO", "Erasure coding", "Encryption at rest"],
      specifications: [
        "8 node minimum",
        "8 vCPU",
        "32GB RAM",
        "High-capacity drives",
      ],
      redundancy: "Distributed with erasure coding protection",
      category: "storage",
    },

    // Monitoring Zone
    monitoring: {
      name: "Monitoring Stack",
      description: "Comprehensive monitoring and observability platform",
      technologies: ["Prometheus", "Grafana", "AlertManager", "ELK Stack"],
      specifications: [
        "Time-series database",
        "Log aggregation",
        "Custom dashboards",
        "Alert routing",
      ],
      redundancy: "HA deployment with data replication",
      category: "monitoring",
    },
    siem: {
      name: "SIEM/Security Analytics",
      description: "Security information and event management system",
      technologies: [
        "Splunk Enterprise",
        "Security orchestration",
        "Threat intelligence",
      ],
      specifications: [
        "Indexer cluster",
        "Search head cluster",
        "Heavy forwarders",
      ],
      redundancy: "Multi-site clustering with replication",
      category: "security",
    },
  };

  const securityZones = [
    {
      id: "internet",
      name: "Internet Zone",
      color: "border-red-500 bg-red-50",
      description: "External untrusted network",
      components: [],
    },
    {
      id: "dmz",
      name: "DMZ Zone",
      color: "border-orange-500 bg-orange-50",
      description: "Demilitarized zone for external-facing services",
      components: ["apigee-gw", "reverse-proxy"],
    },
    {
      id: "app",
      name: "Application Zone",
      color: "border-blue-500 bg-blue-50",
      description: "Business application services",
      components: [
        "keycloak",
        "fhir-server",
        "converter",
        "notification-producer",
        "sehhaty-be",
      ],
    },
    {
      id: "streaming",
      name: "Streaming Zone",
      color: "border-purple-500 bg-purple-50",
      description: "Event streaming and message processing",
      components: ["redpanda", "schema-registry", "streaming-consumers"],
    },
    {
      id: "data",
      name: "Data Zone",
      color: "border-green-500 bg-green-50",
      description: "Data storage and persistence layer",
      components: ["redis-cluster", "postgresql", "mssql", "minio"],
    },
    {
      id: "monitoring",
      name: "Monitoring Zone",
      color: "border-yellow-500 bg-yellow-50",
      description: "Monitoring, logging, and security analytics",
      components: ["monitoring", "siem"],
    },
  ];

  const circuitBreakerStrategies = [
    {
      service: "FHIR Server",
      pattern: "Closed → Open → Half-Open",
      thresholds: "Failure threshold: 50%, Timeout: 5s, Cool-down: 30s",
      fallback: "Return cached response or graceful degradation message",
    },
    {
      service: "Database Connections",
      pattern: "Connection pool exhaustion protection",
      thresholds: "Pool utilization: 80%, Queue timeout: 10s",
      fallback: "Reject requests with 503 Service Unavailable",
    },
    {
      service: "NPHIES API Calls",
      pattern: "Per-endpoint circuit breakers",
      thresholds: "Error rate: 30%, Response time: 3s",
      fallback: "Return last known good data or error response",
    },
    {
      service: "Streaming Services",
      pattern: "Consumer lag protection",
      thresholds: "Lag threshold: 10k messages, Memory: 90%",
      fallback: "Pause consumption and alert operations",
    },
  ];

  const retryStrategies = [
    {
      component: "FHIR API Calls",
      strategy: "Exponential Backoff",
      config: "Initial: 100ms, Max: 30s, Multiplier: 2x, Jitter: ±25%",
      maxRetries: "3 attempts for transient failures",
    },
    {
      component: "Database Operations",
      strategy: "Linear Backoff",
      config: "Fixed: 500ms, Max retries: 3, Deadlock detection",
      maxRetries: "Immediate retry for deadlocks",
    },
    {
      component: "Message Processing",
      strategy: "Dead Letter Queue",
      config: "Immediate: 1, Delayed: 2 (5min, 30min), DLQ: Final",
      maxRetries: "DLQ after 3 total attempts",
    },
    {
      component: "NPHIES API Calls",
      strategy: "Adaptive Retry",
      config: "Adjusts retry timing based on API response patterns",
      maxRetries: "5 attempts with increasing intervals",
    },
  ];

  const eventFlowSteps = [
    {
      step: "External Systems Update",
      description: "HIS or other healthcare systems update patient data",
      zone: "External",
      components: ["HIS", "Raqeem", "عينتي"],
      critical: true,
    },
    {
      step: "NPHIES Processing",
      description: "NPHIES validates and processes the incoming data",
      zone: "NPHIES",
      components: [
        "Validation Engine",
        "Integration Engine",
        "Streaming Producer",
      ],
      critical: true,
    },
    {
      step: "Event Publication",
      description: "Events published to Redpanda streaming platform",
      zone: "Streaming",
      components: ["Redpanda Cluster", "Schema Registry"],
      critical: true,
    },
    {
      step: "FHIR Transformation",
      description: "Streaming consumers transform data to FHIR format",
      zone: "Application",
      components: ["Format Converter", "FHIR Server", "Streaming Consumer"],
      critical: true,
    },
    {
      step: "Notification Production",
      description: "Lightweight notifications created for resource changes",
      zone: "Application",
      components: ["Notification Producer", "FHIR Server"],
      critical: true,
    },
    {
      step: "Notification Consumption",
      description: "Sehhaty consumes notifications from streaming platform",
      zone: "Sehhaty",
      components: ["Streaming Consumers", "FHIR Client"],
      critical: true,
    },
    {
      step: "Resource Retrieval",
      description: "Full FHIR resources retrieved via API calls",
      zone: "DMZ / Application",
      components: ["APIGEE Gateway", "FHIR Server", "FHIR Client"],
      critical: true,
    },
  ];

  const Component = ({ id, type }) => {
    const component = infrastructureComponents[id];
    if (!component) return null;

    const iconMap = {
      network: Network,
      security: Shield,
      application: Server,
      streaming: Zap,
      database: Database,
      cache: Cpu,
      storage: HardDrive,
      monitoring: Monitor,
    };

    const Icon = iconMap[component.category] || Server;

    return (
      <div
        className="p-3 rounded-lg border-2 bg-white cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105"
        onClick={() => setSelectedComponent(id)}
      >
        <div className="flex items-center justify-center mb-2">
          {component.logo || <Icon size={24} className="text-blue-600" />}
        </div>
        <div className="text-xs text-center font-medium text-gray-700">
          {component.name}
        </div>
        <div className="text-xs text-center text-gray-500 mt-1">
          {component.redundancy}
        </div>
      </div>
    );
  };

  const SectionHeader = ({ title, id, icon: Icon }) => (
    <div
      className="flex justify-between items-center p-4 bg-gray-100 rounded-lg border cursor-pointer hover:bg-gray-200 transition-all duration-200 mb-4"
      onClick={() => toggleSection(id)}
    >
      <div className="flex items-center">
        <Icon size={20} className="text-blue-600 mr-2" />
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>
      <div>
        {expandedSections[id] ? (
          <span className="text-xl">▼</span>
        ) : (
          <span className="text-xl">▶</span>
        )}
      </div>
    </div>
  );

  const ZoneSection = ({ zone }) => (
    <div className={`p-4 rounded-lg border-2 ${zone.color} mb-6`}>
      <h3 className="font-bold text-lg mb-2">{zone.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{zone.description}</p>
      {zone.components.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {zone.components.map((componentId) => (
            <Component
              key={componentId}
              id={componentId}
              type={infrastructureComponents[componentId].category}
            />
          ))}
        </div>
      )}
    </div>
  );

  const ComponentDetailModal = ({ componentId }) => {
    const component = infrastructureComponents[componentId];
    if (!component) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-96 overflow-y-auto">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              {component.name}
            </h2>
            <button
              onClick={() => setSelectedComponent(null)}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          <p className="text-gray-600 mb-4">{component.description}</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-gray-800">Technologies</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                {component.technologies.map((tech, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle
                      size={12}
                      className="text-green-500 mr-2 flex-shrink-0"
                    />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-semibold mb-3 mt-4 text-gray-800">
                Redundancy Model
              </h3>
              <div className="bg-blue-50 p-3 rounded border">
                <span className="text-sm font-medium text-blue-800">
                  {component.redundancy}
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-gray-800">
                Specifications
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                {component.specifications.map((spec, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Visual Event Flow Diagram component
  const EventFlowDiagram = () => (
    <div className="mt-8 p-6 bg-white rounded-lg border-2 border-blue-200">
      <h3 className="text-lg font-bold mb-4 text-gray-800">
        Event-Driven Infrastructure Flow
      </h3>

      <div className="relative overflow-x-auto">
        <div className="flex flex-col space-y-6">
          {eventFlowSteps.map((step, index) => {
            const zoneColors = {
              External: "blue",
              NPHIES: "green",
              Streaming: "purple",
              Application: "red",
              Sehhaty: "purple",
              "DMZ / Application": "orange",
            };

            const color = zoneColors[step.zone] || "gray";

            return (
              <React.Fragment key={index}>
                {index > 0 && (
                  <div className="flex justify-center">
                    <ArrowRight
                      size={20}
                      className="transform rotate-90 text-gray-400"
                    />
                  </div>
                )}

                <div className="flex items-center">
                  <div className="w-1/6 text-center">
                    <div
                      className={`rounded-full h-16 w-16 bg-${color}-100 flex items-center justify-center mx-auto`}
                    >
                      {step.zone === "External" && (
                        <Server className={`text-${color}-600`} size={32} />
                      )}
                      {step.zone === "NPHIES" && (
                        <GitBranch className={`text-${color}-600`} size={32} />
                      )}
                      {step.zone === "Streaming" && (
                        <Activity className={`text-${color}-600`} size={32} />
                      )}
                      {step.zone === "Application" && (
                        <Database className={`text-${color}-600`} size={32} />
                      )}
                      {step.zone === "Sehhaty" && (
                        <Smartphone className={`text-${color}-600`} size={32} />
                      )}
                      {step.zone === "DMZ / Application" && (
                        <Shield className={`text-${color}-600`} size={32} />
                      )}
                    </div>
                    <p className="text-sm font-medium mt-1">
                      {index + 1}. {step.step}
                    </p>
                  </div>
                  <div className="w-5/6 pl-4">
                    <div
                      className={`p-3 bg-${color}-50 rounded-lg border border-${color}-200`}
                    >
                      <p className="text-sm">{step.description}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {step.components.map((component, compIndex) => (
                          <span
                            key={compIndex}
                            className={`inline-block px-2 py-1 text-xs bg-${color}-100 text-${color}-800 rounded`}
                          >
                            {component}
                          </span>
                        ))}
                      </div>
                      {step.critical && (
                        <div className="mt-2 flex items-center">
                          <AlertTriangle
                            size={12}
                            className="text-orange-500 mr-1"
                          />
                          <span className="text-xs text-orange-700">
                            Infrastructure Resilience Critical
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
        <p className="text-sm font-medium text-green-800">
          The infrastructure is designed to support the event-driven
          architecture pattern, ensuring high availability, fault tolerance, and
          scalability at each step of the data flow. Circuit breakers and retry
          mechanisms protect the system from cascading failures, while redundant
          components eliminate single points of failure.
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Enhanced FHIR Infrastructure Design
        </h1>
        <p className="text-gray-600">
          Enterprise-grade infrastructure with comprehensive security and high
          availability
        </p>
      </header>
      {/* Network Flow Diagram */}
      <SectionHeader title="Network Architecture" id="network" icon={Network} />
      {expandedSections.network && (
        <div className="mb-8 p-6 bg-white rounded-lg border shadow-sm">
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-2">
                <Network className="text-white" size={24} />
              </div>
              <span className="text-sm font-medium">Internet</span>
            </div>
            <div className="flex-1 h-1 bg-gray-300 mx-2"></div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-2">
                <Shield className="text-white" size={24} />
              </div>
              <span className="text-sm font-medium">F5 DNS + WAF</span>
            </div>
            <div className="flex-1 h-1 bg-gray-300 mx-2"></div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                <Lock className="text-white" size={24} />
              </div>
              <span className="text-sm font-medium">External FW</span>
            </div>
            <div className="flex-1 h-1 bg-gray-300 mx-2"></div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-2">
                <Server className="text-white" size={24} />
              </div>
              <span className="text-sm font-medium">DMZ</span>
            </div>
            <div className="flex-1 h-1 bg-gray-300 mx-2"></div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-2">
                <Zap className="text-white" size={24} />
              </div>
              <span className="text-sm font-medium">Internal Zones</span>
            </div>
          </div>
          {/* Network Infrastructure Components */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <Component
              id="dns-lb"
              type={infrastructureComponents["dns-lb"].category}
            />
            <Component
              id="waf"
              type={infrastructureComponents["waf"].category}
            />
            <Component
              id="fw-external"
              type={infrastructureComponents["fw-external"].category}
            />
            <Component
              id="fw-internal"
              type={infrastructureComponents["fw-internal"].category}
            />
            <Component
              id="lb-app"
              type={infrastructureComponents["lb-app"].category}
            />
            <Component
              id="lb-db"
              type={infrastructureComponents["lb-db"].category}
            />
          </div>
        </div>
      )}
      ;{/* DMZ Zone */}
      <SectionHeader title="DMZ Zone Architecture" id="dmz" icon={Shield} />
      {expandedSections.dmz && (
        <div className="mb-8">
          <ZoneSection zone={securityZones[1]} />
        </div>
      )}
      {/* Application Zone */}
      <SectionHeader
        title="Application Zone Architecture"
        id="app"
        icon={Server}
      />
      {expandedSections.app && (
        <div className="mb-8">
          <ZoneSection zone={securityZones[2]} />
        </div>
      )}
      {/* Streaming Zone */}
      <SectionHeader
        title="Streaming Zone Architecture"
        id="streaming"
        icon={Zap}
      />
      {expandedSections.streaming && (
        <div className="mb-8">
          <ZoneSection zone={securityZones[3]} />
        </div>
      )}
      {/* Data Zone */}
      <SectionHeader title="Data Zone Architecture" id="data" icon={Database} />
      {expandedSections.data && (
        <div className="mb-8">
          <ZoneSection zone={securityZones[4]} />
        </div>
      )}
      {/* Monitoring Zone */}
      <SectionHeader
        title="Monitoring Zone Architecture"
        id="monitoring"
        icon={Monitor}
      />
      {expandedSections.monitoring && (
        <div className="mb-8">
          <ZoneSection zone={securityZones[5]} />
        </div>
      )}
      {/* Event Flow Diagram */}
      <EventFlowDiagram />
      {/* Circuit Breaker Patterns */}
      <SectionHeader
        title="Circuit Breaker Patterns"
        id="resilience"
        icon={AlertTriangle}
      />
      {expandedSections.resilience && (
        <div className="mb-8 p-6 bg-white rounded-lg border shadow-sm">
          <p className="text-sm text-gray-700 mb-4">
            Circuit breakers are implemented to prevent cascading failures and
            maintain system stability during partial outages. The following
            patterns ensure that temporary failures in one component don't
            propagate throughout the system.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Service</th>
                  <th className="border p-3 text-left">Pattern</th>
                  <th className="border p-3 text-left">Thresholds</th>
                  <th className="border p-3 text-left">Fallback Strategy</th>
                </tr>
              </thead>
              <tbody>
                {circuitBreakerStrategies.map((strategy, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border p-3 font-medium">
                      {strategy.service}
                    </td>
                    <td className="border p-3 text-sm">{strategy.pattern}</td>
                    <td className="border p-3 text-sm font-mono">
                      {strategy.thresholds}
                    </td>
                    <td className="border p-3 text-sm">{strategy.fallback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Retry Strategies */}
          <h3 className="text-xl font-bold mt-8 mb-4 flex items-center">
            <RefreshCw className="mr-2" size={24} />
            Retry Strategies
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            Complementing the circuit breakers, these retry strategies ensure
            temporary failures can be automatically recovered without manual
            intervention, improving the system's overall resilience.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Component</th>
                  <th className="border p-3 text-left">Strategy</th>
                  <th className="border p-3 text-left">Configuration</th>
                  <th className="border p-3 text-left">Max Retries</th>
                </tr>
              </thead>
              <tbody>
                {retryStrategies.map((strategy, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border p-3 font-medium">
                      {strategy.component}
                    </td>
                    <td className="border p-3 text-sm">{strategy.strategy}</td>
                    <td className="border p-3 text-sm font-mono">
                      {strategy.config}
                    </td>
                    <td className="border p-3 text-sm">
                      {strategy.maxRetries}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {/* Best Practices Summary */}
      <SectionHeader
        title="Infrastructure Best Practices"
        id="bestPractices"
        icon={CheckCircle}
      />
      {expandedSections.bestPractices && (
        <div className="mb-8 p-6 bg-white rounded-lg border shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3 text-blue-600">
                High Availability
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Multi-AZ deployment across availability zones</li>
                <li>• Active-Active clustering for stateless services</li>
                <li>• Database replication with automatic failover</li>
                <li>• Load balancer health checks and traffic routing</li>
                <li>
                  • Disaster recovery with RTO less than 30min, RPO less 5min
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-green-600">
                Security
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Zero trust network architecture</li>
                <li>• End-to-end encryption (TLS 1.3, AES-256)</li>
                <li>• Network microsegmentation between zones</li>
                <li>• Regular security assessments and penetration testing</li>
                <li>• Comprehensive audit logging and SIEM integration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-purple-600">
                Performance
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Horizontal auto-scaling based on metrics</li>
                <li>• Multi-tier caching strategy (CDN, Redis, application)</li>
                <li>• Database query optimization and indexing</li>
                <li>• Connection pooling and resource management</li>
                <li>• Performance monitoring with SLA alerting</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-orange-600">
                Operational Excellence
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Infrastructure as Code (IaC) with version control</li>
                <li>• Automated CI/CD pipelines with testing</li>
                <li>• Centralized logging and distributed tracing</li>
                <li>• Automated backup and recovery procedures</li>
                <li>• 24/7 monitoring with intelligent alerting</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">
              Event-Driven Architecture Considerations
            </h4>
            <p className="text-sm text-blue-700">
              The infrastructure is specifically designed to support the
              event-driven architecture pattern between NPHIES, FHIR, and
              Sehhaty components. The Redpanda streaming platform provides the
              backbone for real-time event processing, while circuit breakers
              and retry mechanisms ensure resilience throughout the event flow.
              This design addresses the data freshness issues identified in the
              current architecture by enabling immediate notification and
              efficient resource retrieval.
            </p>
          </div>
        </div>
      )}
      {/* Component Detail Modal */}
      {selectedComponent && (
        <ComponentDetailModal componentId={selectedComponent} />
      )}
    </div>
  );
};

// Fix for GitBranch not defined
const GitBranch = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="6" y1="3" x2="6" y2="15"></line>
      <circle cx="18" cy="6" r="3"></circle>
      <circle cx="6" cy="18" r="3"></circle>
      <path d="M18 9a9 9 0 0 1-9 9"></path>
    </svg>
  );
};

// Fix for Activity not defined
const Activity = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
  );
};

// Fix for Smartphone not defined
const Smartphone = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
      <line x1="12" y1="18" x2="12.01" y2="18"></line>
    </svg>
  );
};

export default InfrastructureDesign;
