import React, { useState } from "react";
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
} from "lucide-react";

const InfrastructureDesign = () => {
  const [selectedZone, setSelectedZone] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);

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
      type: "network",
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
      type: "security",
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
      type: "security",
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
      type: "security",
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
      type: "network",
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
      type: "database",
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
      type: "application",
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
      type: "network",
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
      type: "security",
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
      type: "application",
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
      type: "application",
    },
    "sehhaty-be": {
      name: "Sehhaty Backend",
      description: "Healthcare provider backend application cluster",
      technologies: ["Spring Boot", "Microservices", "Container runtime"],
      specifications: [
        "Auto-scaling group",
        "4-12 instances",
        "8 vCPU",
        "16GB RAM",
      ],
      redundancy: "Auto-scaling based on load",
      category: "application",
      type: "application",
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
      type: "streaming",
    },
    "schema-registry": {
      name: "Schema Registry",
      description:
        "Schema evolution and compatibility management for streaming",
      technologies: [
        "Confluent Schema Registry",
        "Avro schemas",
        "Compatibility checks",
      ],
      specifications: [
        "3 node cluster",
        "4 vCPU",
        "8GB RAM",
        "High availability",
      ],
      redundancy: "Leader election with automatic failover",
      category: "streaming",
      type: "streaming",
    },
    "kafka-connect": {
      name: "Kafka Connect Cluster",
      description: "Distributed streaming connectors for data integration",
      technologies: [
        "Kafka Connect",
        "Custom connectors",
        "Source/sink patterns",
      ],
      specifications: [
        "4 worker nodes",
        "8 vCPU",
        "16GB RAM",
        "Plugin ecosystem",
      ],
      redundancy: "Distributed mode with automatic rebalancing",
      category: "streaming",
      type: "streaming",
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
      type: "cache",
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
      type: "database",
    },
    oracle: {
      name: "Oracle RAC",
      description: "Enterprise database cluster for NPHIES raw data storage",
      technologies: ["Oracle 19c RAC", "ASM storage", "Data Guard"],
      specifications: ["2 node RAC", "32 vCPU", "256GB RAM", "Shared storage"],
      redundancy: "Active-Active RAC with standby database",
      category: "database",
      type: "database",
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
      type: "database",
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
      type: "storage",
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
      type: "monitoring",
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
      type: "security",
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
      components: ["keycloak", "fhir-server", "converter", "sehhaty-be"],
    },
    {
      id: "streaming",
      name: "Streaming Zone",
      color: "border-purple-500 bg-purple-50",
      description: "Event streaming and message processing",
      components: ["redpanda", "schema-registry", "kafka-connect"],
    },
    {
      id: "data",
      name: "Data Zone",
      color: "border-green-500 bg-green-50",
      description: "Data storage and persistence layer",
      components: ["redis-cluster", "postgresql", "oracle", "mssql", "minio"],
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
      service: "External API Calls",
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
      component: "File Operations",
      strategy: "Progressive Backoff",
      config: "Attempts: 1s, 5s, 15s, 60s with I/O error detection",
      maxRetries: "4 attempts before failure notification",
    },
  ];

  const Component = ({ id }: { id: string }) => {
    const component = infrastructureComponents[id];
    if (!component) return null;
    const type = component?.category;

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
          <Icon size={24} className="text-blue-600" />
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

  const ZoneSection = ({ zone }) => (
    <div className={`p-4 rounded-lg border-2 ${zone.color} mb-6`}>
      <h3 className="font-bold text-lg mb-2">{zone.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{zone.description}</p>
      {zone.components.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {zone.components.map((componentId) => (
            <Component key={componentId} id={componentId} />
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

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          FHIR Infrastructure Design
        </h1>
        <p className="text-gray-600">
          Enterprise-grade infrastructure with comprehensive security and high
          availability
        </p>
      </header>

      {/* Network Flow Diagram */}
      <div className="mb-8 p-6 bg-white rounded-lg border shadow-sm">
        <h2 className="text-xl font-bold mb-4">Network Architecture Flow</h2>
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
      </div>

      {/* Network Infrastructure Components */}
      <div className="mb-8 p-6 bg-white rounded-lg border shadow-sm">
        <h2 className="text-xl font-bold mb-4">Network Infrastructure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Component id="dns-lb" />
          <Component id="waf" />
          <Component id="fw-external" />
          <Component id="fw-internal" />
          <Component id="lb-app" />
          <Component id="lb-db" />
        </div>
      </div>

      {/* Security Zones */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Security Zones Architecture</h2>
        {securityZones.map((zone) => (
          <ZoneSection key={zone.id} zone={zone} />
        ))}
      </div>

      {/* Circuit Breaker Patterns */}
      <div className="mb-8 p-6 bg-white rounded-lg border shadow-sm">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <AlertTriangle className="mr-2" size={24} />
          Circuit Breaker Patterns
        </h2>
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
                  <td className="border p-3 font-medium">{strategy.service}</td>
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
      </div>

      {/* Retry Strategies */}
      <div className="mb-8 p-6 bg-white rounded-lg border shadow-sm">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <RefreshCw className="mr-2" size={24} />
          Retry Strategies
        </h2>
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
                  <td className="border p-3 text-sm">{strategy.maxRetries}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Best Practices Summary */}
      <div className="mb-8 p-6 bg-white rounded-lg border shadow-sm">
        <h2 className="text-xl font-bold mb-4">
          Infrastructure Best Practices
        </h2>
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
              <li>• Disaster recovery with RTO &lt; 30min, RPO &lt; 5min</li>
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
      </div>

      {/* Component Detail Modal */}
      {selectedComponent && (
        <ComponentDetailModal componentId={selectedComponent} />
      )}
    </div>
  );
};

export default InfrastructureDesign;
