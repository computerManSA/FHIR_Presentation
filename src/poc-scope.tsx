import React, { useState } from 'react';
import { 
  Layers, 
  CheckSquare, 
  Server, 
  ArrowRight, 
  Database, 
  Code, 
  Activity, 
  Clock, 
  AlertTriangle,
  Shield,
  Zap,
  CheckCircle,
  Calendar,
  Clock as ClockIcon
} from 'lucide-react';
import { exportToPdf } from './utils/exportToPdf';
import { Download } from "lucide-react";

const FhirPocPage: React.FC = () => {
  const exportPageContent = async () => {
    await exportToPdf('mainContent', 'POC-Scope');
  };

  const [activeTab, setActiveTab] = useState('overview');
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [selectedPhase, setSelectedPhase] = useState(null);

  // Implementation roadmap
  const implementationPhases = [
    {
      id: 'phase1',
      name: 'Phase 1: Core Infrastructure Setup',
      timeline: 'Weeks 1-4',
      status: 'Completed',
      milestones: [
        'Set up Redpanda cluster in Kubernetes environment',
        'Configure Schema Registry with Avro schemas',
        'Implement basic FHIR server with PostgreSQL',
        'Establish connectivity between NPHIES and streaming platform'
      ],
      outcomes: [
        'Event streaming backbone fully operational',
        'FHIR server accepting basic resource types',
        'Initial integration with one NPHIES use case (UC1)'
      ]
    },
    {
      id: 'phase2',
      name: 'Phase 2: Conversion & Authentication',
      timeline: 'Weeks 5-8',
      status: 'Completed',
      milestones: [
        'Implement HL7v2 to FHIR conversion service',
        'Add CDA to FHIR transformation pipeline',
        'Deploy Keycloak and configure SMART on FHIR',
        'Integrate authentication with FHIR server'
      ],
      outcomes: [
        'Fully functional conversion pipeline for legacy formats',
        'Authentication service with SMART scopes',
        'Resource-level authorization based on patient context'
      ]
    },
    {
      id: 'phase3',
      name: 'Phase 3: Notifications & Client Integration',
      timeline: 'Weeks 9-12',
      status: 'Completed',
      milestones: [
        'Build notification service for FHIR resources',
        'Implement notification+pull pattern',
        'Create sample mobile client with FHIR integration',
        'Develop client SDK for easy implementation'
      ],
      outcomes: [
        'End-to-end real-time data flow demonstrated',
        'Mobile app showing real-time updates from streaming',
        'SDK for simplified client integration'
      ]
    },
    {
      id: 'phase4',
      name: 'Phase 4: Resilience & Performance Tuning',
      timeline: 'Weeks 13-16',
      status: 'In Progress',
      milestones: [
        'Implement circuit breakers and retry patterns',
        'Set up monitoring and alerting infrastructure',
        'Optimize FHIR server query performance',
        'Load test and fine-tune system parameters'
      ],
      outcomes: [
        'System resilient to various failure scenarios',
        'Performance metrics meeting or exceeding targets',
        'Comprehensive monitoring dashboards',
        'System capable of handling production loads'
      ]
    },
    {
      id: 'phase5',
      name: 'Phase 5: Production Readiness',
      timeline: 'Weeks 17-20',
      status: 'Planned',
      milestones: [
        'Complete documentation and operational runbooks',
        'Conduct security assessment and remediation',
        'Execute final integration tests with all systems',
        'Develop rollout strategy for production deployment'
      ],
      outcomes: [
        'Production-ready system with complete documentation',
        'Security validated against healthcare standards',
        'Comprehensive integration test suite passing',
        'Ready for phased rollout to production'
      ]
    }
  ];
  const pocAreas = [
    {
      id: 'streaming',
      name: 'Redpanda Event Streaming',
      icon: <Activity className="w-6 h-6 text-orange-500" />,
      description: 'Implemented real-time event streaming with Redpanda as a Kafka-compatible platform',
      details: 'Set up a 3-node Redpanda cluster with Schema Registry to handle event streaming between NPHIES and FHIR layers',
      metrics: [
        'Message throughput: 15,000 msgs/sec',
        'Latency: <10ms end-to-end',
        '99.99% delivery guarantee'
      ],
      components: [
        'Redpanda 23.1.5 on Kubernetes',
        'Schema Registry for Avro serialization',
        'Exactly-once semantics enabled',
        'Topic compaction for state management'
      ],
      code: `// Producer config for NPHIES streaming producer
const producerConfig = {
  'bootstrap.servers': 'redpanda-0.redpanda.fhir-poc:9092',
  'transaction.timeout.ms': 15000,
  'enable.idempotence': true,
  'compression.type': 'lz4',
  'acks': 'all'
};

// Sample producer code
const producer = new KafkaProducer(producerConfig);
await producer.connect();
await producer.beginTransaction();

// Batch of events from a clinical document
for (const resource of fhirResources) {
  await producer.send({
    topic: \`fhir.\${resource.resourceType.toLowerCase()}.created\`,
    messages: [{
      key: resource.id,
      value: avroSerializer.serialize(resource),
      headers: {
        source: 'nphies-converter',
        version: '1.0.0',
        timestamp: Date.now().toString()
      }
    }]
  });
}

await producer.commitTransaction();`
    },
    {
      id: 'conversion',
      name: 'HL7v2/CDA to FHIR Converter',
      icon: <ArrowRight className="w-6 h-6 text-blue-500" />,
      description: 'Built standardized conversion pipeline from legacy formats to FHIR R4',
      details: 'Implemented HAPI FHIR-based conversion service for transforming HL7v2 messages and CDA documents to FHIR R4 resources',
      metrics: [
        'Conversion rate: 120 msgs/sec',
        'Mapping accuracy: 99.5%',
        'Validation rate: 98.7% pass'
      ],
      components: [
        'HAPI FHIR 6.1.0 converter',
        'Custom mapping rules engine',
        'Terminology service integration',
        'FHIR Validator with Saudi profiles'
      ],
      code: `// Sample HL7v2 ADT to FHIR Patient conversion
@Component
public class Hl7v2ToFhirConverter {

  @Autowired
  private FhirContext fhirContext;

  @Autowired
  private ValidationService validationService;

  public Bundle convertAdtToFhir(String hl7Message) {
    // Parse the HL7v2 message
    HapiContext context = new DefaultHapiContext();
    PipeParser parser = context.getPipeParser();
    ADT_A01 adt = (ADT_A01) parser.parse(hl7Message);

    // Create FHIR Bundle
    Bundle bundle = new Bundle();
    bundle.setType(Bundle.BundleType.TRANSACTION);

    // Convert Patient
    Patient patient = new Patient();
    patient.setId(IdType.newRandomUuid());

    // Map patient demographics
    patient.addIdentifier()
      .setSystem("https://nphies.sa/fhir/sid/national-id")
      .setValue(adt.getPID().getPatientID().getIDNumber().getValue());

    HumanName name = patient.addName();
    name.setFamily(adt.getPID().getPatientName()[0].getFamilyName().getSurname().getValue());
    name.addGiven(adt.getPID().getPatientName()[0].getGivenName().getValue());

    // Add entry to bundle
    bundle.addEntry()
      .setResource(patient)
      .getRequest()
        .setMethod(Bundle.HTTPVerb.POST)
        .setUrl("Patient");

    // Validate the bundle
    validationService.validateFhirResource(bundle);

    return bundle;
  }
}`
    },
    {
      id: 'fhir-server',
      name: 'HAPI FHIR Server Implementation',
      icon: <Server className="w-6 h-6 text-green-500" />,
      description: 'Deployed and configured HAPI FHIR server with Saudi Healthcare profiles',
      details: 'Set up HAPI FHIR server with custom configurations, Saudi profiles, and security enhancements',
      metrics: [
        'Response time: <100ms (p95)',
        'Throughput: 500 req/sec',
        'Storage efficiency: 40% ↑ vs legacy'
      ],
      components: [
        'HAPI FHIR Server 6.1.0',
        'PostgreSQL persistence layer',
        'Elasticsearch for search optimization',
        'Redis for response caching'
      ],
      code: `// HAPI FHIR Server configuration
@Configuration
public class FhirServerConfig extends BaseJavaConfigR4 {

  @Autowired
  private Environment env;

  @Override
  public FhirContext fhirContext() {
    FhirContext ctx = FhirContext.forR4();

    // Configure narrative generator
    ctx.setNarrativeGenerator(new DefaultThymeleafNarrativeGenerator());

    // Performance optimization
    ctx.getRestfulClientFactory().setSocketTimeout(30 * 1000);

    return ctx;
  }

  @Bean
  public DaoConfig daoConfig() {
    DaoConfig config = new DaoConfig();

    // Enable advanced features
    config.setAllowMultipleDelete(true);
    config.setAllowExternalReferences(true);
    config.setReuseCachedSearchResultsForMillis(10 * 60 * 1000);
    config.setExpireSearchResultsAfterMillis(60 * 60 * 1000);
    config.setCountSearchResultsUpTo(50000);

    // Set subscription configs
    config.setSubscriptionMatchingEnabled(true);
    config.setSubscriptionPurgeInactiveAfterMillis(86400 * 1000);

    return config;
  }

  @Bean
  public JpaTransactionManager transactionManager(EntityManagerFactory entityManagerFactory) {
    JpaTransactionManager retVal = new JpaTransactionManager();
    retVal.setEntityManagerFactory(entityManagerFactory);
    return retVal;
  }
}`
    },
    {
      id: 'auth',
      name: 'Keycloak + SMART on FHIR Auth',
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      description: 'Integrated authentication with Keycloak and SMART on FHIR standards',
      details: 'Implemented Keycloak with SMART on FHIR scopes and launch contexts for secure healthcare API access',
      metrics: [
        'Auth latency: <200ms',
        'Token validation: <50ms',
        '100% SMART compliance'
      ],
      components: [
        'Keycloak 22.0.1',
        'SMART on FHIR scopes implementation',
        'JWT validation layer',
        'FHIR resource-level permissions'
      ],
      code: `// SMART on FHIR scope validation interceptor
@Interceptor
public class SmartOnFhirAuthInterceptor extends AuthorizationInterceptor {

  @Autowired
  private IFhirResourceDao<Patient> patientDao;

  @Override
  public List<IAuthRule> buildRuleList(RequestDetails theRequestDetails) {
    // Get the OAuth2 token from the request
    String authHeader = theRequestDetails.getHeader("Authorization");
    if (authHeader == null || !authHeader.startsWith("Bearer ")) {
      throw new AuthenticationException("Missing or invalid Authorization header");
    }

    String token = authHeader.substring("Bearer ".length());
    JwtClaimsSet claims = validateAndParseToken(token);

    // Extract SMART scopes
    List<String> scopes = Arrays.asList(claims.getStringListClaim("scope"));

    // Build auth rules based on scopes
    List<IAuthRule> rules = new ArrayList<>();

    // Handle patient-level access
    if (scopes.contains("patient/*.read")) {
      // Get patient ID from token (patient launch context)
      String patientId = claims.getStringClaim("patient_id");

      if (patientId != null) {
        rules.add(new RuleBuilder()
          .allow().read().resourcesOfType(Patient.class)
          .inCompartment("Patient", patientId)
          .andThen()
          .allow().read()
          .resourcesWithAnyId()
          .inCompartment("Patient", patientId)
          .build());
      }
    }

    // System-level access
    if (scopes.contains("system/*.read")) {
      rules.add(new RuleBuilder()
        .allow().read().allResources()
        .build());
    }

    return rules;
  }
}`
    },
    {
      id: 'notifications',
      name: 'Notification & Pull Pattern',
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      description: 'Implemented efficient notification+pull pattern for real-time data updates',
      details: 'Built a lightweight notification system that triggers clients to pull updated FHIR resources',
      metrics: [
        'Push latency: <50ms',
        'Data freshness: real-time',
        'Bandwidth usage: 85% ↓'
      ],
      components: [
        'Redpanda notification topics',
        'Push notification gateway',
        'HAPI FHIR client SDKs',
        'Mobile and web consumers'
      ],
      code: `// Notification producer in FHIR server interceptor
@Interceptor
public class FhirEventNotificationInterceptor {

  @Autowired
  private KafkaTemplate<String, FhirNotification> kafkaTemplate;

  @Hook(Pointcut.STORAGE_PRESTORAGE_RESOURCE_CREATED)
  public void resourceCreated(IBaseResource resource) {
    if (resource instanceof Patient || resource instanceof Encounter || 
        resource instanceof Observation) {

      // Create lightweight notification (just ID, not full resource)
      String resourceType = resource.getIdElement().getResourceType();
      String resourceId = resource.getIdElement().getIdPart();
      String versionId = resource.getIdElement().getVersionIdPart();

      FhirNotification notification = FhirNotification.builder()
        .resourceType(resourceType)
        .id(resourceId)
        .versionId(versionId)
        .operation("create")
        .timestamp(Instant.now().toString())
        .build();

      // Publish to appropriate topic
      kafkaTemplate.send("fhir.notification." + resourceType.toLowerCase(), 
                         resourceId, notification);
    }
  }
}

// Client-side consumer
class NotificationSubscriber {

  private final FhirClient fhirClient;
  private final KafkaConsumer<String, FhirNotification> consumer;

  public void subscribeToPatientUpdates(String patientId) {
    consumer.subscribe(Collections.singletonList("fhir.notification.patient"));

    executorService.submit(() -> {
      while (running) {
        ConsumerRecords<String, FhirNotification> records = consumer.poll(Duration.ofMillis(100));

        for (ConsumerRecord<String, FhirNotification> record : records) {
          // If notification is for our patient
          if (record.key().equals(patientId)) {
            // Pull full resource via FHIR API
            Patient patient = fhirClient.read()
              .resource(Patient.class)
              .withId(patientId)
              .execute();

            // Update UI
            updatePatientDisplay(patient);
          }
        }
      }
    });
  }
}`
    }
  ];

  const comparisonPoints = [
    {
      feature: 'Data Freshness',
      legacy: 'Hours to days old data due to ETL batch processing',
      poc: 'Real-time data with <1 second latency',
      improvement: '99.9% reduction in data lag'
    },
    {
      feature: 'Integration Pattern',
      legacy: 'Point-to-point connections with custom formats',
      poc: 'Event-driven with standardized FHIR resources',
      improvement: '85% reduction in integration complexity'
    },
    {
      feature: 'Scalability',
      legacy: 'Limited by database and ETL bottlenecks',
      poc: 'Horizontal scaling with event streaming',
      improvement: '400% increase in throughput capacity'
    },
    {
      feature: 'Standards Compliance',
      legacy: 'Custom, non-standard data formats',
      poc: 'Full FHIR R4 compliance with Saudi profiles',
      improvement: '100% FHIR R4 standard adherence'
    },
    {
      feature: 'Resilience',
      legacy: 'Single points of failure with limited recovery',
      poc: 'Circuit breakers, retry patterns, streaming resilience',
      improvement: '99.99% system availability'
    },
    {
      feature: 'Security',
      legacy: 'Basic auth with limited access controls',
      poc: 'Keycloak + SMART on FHIR with fine-grained permissions',
      improvement: 'Full SMART on FHIR compliance'
    },
    {
      feature: 'Developer Experience',
      legacy: 'Custom integration for each system',
      poc: 'Standardized FHIR APIs with documentation',
      improvement: '70% reduction in integration time'
    }
  ];

  const pocMetrics = [
    { 
      metric: 'Throughput', 
      value: '15,000', 
      unit: 'msgs/sec',
      change: '+600%' 
    },
    { 
      metric: 'Latency', 
      value: '<10', 
      unit: 'ms',
      change: '-99%' 
    },
    { 
      metric: 'Data Freshness', 
      value: 'Real-time', 
      unit: '',
      change: 'vs. hours' 
    },
    { 
      metric: 'Availability', 
      value: '99.99', 
      unit: '%',
      change: '+2.5%' 
    },
    { 
      metric: 'Standards', 
      value: '100', 
      unit: '% FHIR',
      change: 'vs. proprietary' 
    },
    { 
      metric: 'Integration Time', 
      value: '70', 
      unit: '% reduction',
      change: 'vs. legacy' 
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          FHIR Interoperability POC Implementation
        </h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={exportPageContent}
        >
          <Download className="mr-2 inline-block" size={16} />
          Export to PDF
        </button>

        {/* Tab navigation */}
        <div className="mb-6 flex border-b border-gray-200">
          <button 
            className={`px-4 py-2 font-medium text-sm ${activeTab === 'overview' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview & Metrics
          </button>
          <button 
            className={`px-4 py-2 font-medium text-sm ${activeTab === 'comparison' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('comparison')}
          >
            Before & After
          </button>
          <button 
            className={`px-4 py-2 font-medium text-sm ${activeTab === 'components' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('components')}
          >
            Technical Components
          </button>
          <button 
            className={`px-4 py-2 font-medium text-sm ${activeTab === 'roadmap' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('roadmap')}
          >
            Implementation Roadmap
          </button>
        </div>

        {/* Overview tab */}
        {activeTab === 'overview' && (
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Layers className="mr-2 text-blue-500" />
                POC Implementation Overview
              </h2>
              <p className="text-gray-700 mb-4">
                Our proof-of-concept implementation successfully demonstrated a fully functional FHIR-based
                interoperability layer with event-driven architecture. The POC focused on five critical areas
                that transform the existing architecture into a modern, real-time healthcare data platform.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {pocMetrics.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-500 mb-1">{item.metric}</div>
                    <div className="text-3xl font-bold text-blue-600">
                      {item.value}<span className="text-sm font-normal text-gray-500 ml-1">{item.unit}</span>
                    </div>
                    <div className="text-sm font-medium text-green-600 mt-1">{item.change}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key POC focus areas */}
            <h2 className="text-xl font-semibold mb-4">Key POC Implementation Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {pocAreas.map((area) => (
                <div key={area.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
                  <div className="flex items-center mb-4">
                    {area.icon}
                    <h3 className="text-lg font-semibold ml-2">{area.name}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{area.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-600 mb-2">Key Metrics:</h4>
                    <ul className="text-sm text-gray-600">
                      {area.metrics.map((metric, index) => (
                        <li key={index} className="flex items-center mb-1">
                          <CheckSquare className="w-4 h-4 text-green-500 mr-2" />
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Comparison tab */}
        {activeTab === 'comparison' && (
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <ArrowRight className="mr-2 text-blue-500" />
                Legacy vs. FHIR POC Architecture
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Legacy Architecture</th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">POC Implementation</th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Improvement</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {comparisonPoints.map((point, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{point.feature}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-start">
                          <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          {point.legacy}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-start">
                          <CheckSquare className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {point.poc}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">{point.improvement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <AlertTriangle className="mr-2 text-red-500" />
                  Legacy Architecture Limitations
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                    <span><strong className="text-red-700">Data Staleness:</strong> ETL-based batch processing causes hours of delay before data is available to consumers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                    <span><strong className="text-red-700">Integration Complexity:</strong> Point-to-point connections with custom formats require significant development effort</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                    <span><strong className="text-red-700">Limited Scalability:</strong> Reliance on database-centric processing creates bottlenecks during high load</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</span>
                    <span><strong className="text-red-700">Poor User Experience:</strong> Users have to manually refresh data and face delays in critical information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">5</span>
                    <span><strong className="text-red-700">Maintenance Burden:</strong> Each integration point requires custom maintenance and monitoring</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <CheckSquare className="mr-2 text-green-500" />
                  FHIR POC Key Improvements
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                    <span><strong className="text-green-700">Real-time Updates:</strong> Event-driven architecture delivers notifications in milliseconds with the notification+pull pattern</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                    <span><strong className="text-green-700">Standardized Integration:</strong> FHIR R4 resources provide a common language for all healthcare systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                    <span><strong className="text-green-700">Elastic Scalability:</strong> Event streaming with horizontally scalable services handles peak loads efficiently</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</span>
                    <span><strong className="text-green-700">Enhanced Security:</strong> SMART on FHIR authorization with granular scopes and patient context</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">5</span>
                    <span><strong className="text-green-700">Future-proof:</strong> Standards-based architecture allows easy onboarding of new systems and use cases</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Components tab */}
        {activeTab === 'components' && (
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Server className="mr-2 text-blue-500" />
                Technical Implementation Details
              </h2>
              <p className="text-gray-700 mb-4">
                The POC implementation focused on five critical technical components that enable
                the FHIR-based event-driven architecture. Each component was carefully selected
                for performance, standards compliance, and seamless integration.
              </p>
            </div>

            {/* Technical implementation accordion */}
            <div className="space-y-4">
              {pocAreas.map((area) => (
                <div key={area.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 text-left font-semibold text-gray-800 flex items-center justify-between hover:bg-gray-50 focus:outline-none"
                    onClick={() => setSelectedComponent(selectedComponent === area.id ? null : area.id)}
                  >
                    <div className="flex items-center">
                      {area.icon}
                      <span className="ml-2">{area.name}</span>
                    </div>
                    <svg className={`w-5 h-5 transition-transform ${selectedComponent === area.id ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>

                  {selectedComponent === area.id && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 mb-4">{area.details}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-600 mb-2">Implementation Components:</h4>
                        <ul className="text-sm text-gray-600">
                          {area.components.map((component, index) => (
                            <li key={index} className="flex items-center mb-1">
                              <CheckSquare className="w-4 h-4 text-blue-500 mr-2" />
                              {component}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-600 mb-2">Implementation Code:</h4>
                        <div className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-auto text-sm font-mono">
                          <pre>{area.code`}</pre>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Roadmap tab */}
        {activeTab === 'roadmap' && (
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Calendar className="mr-2 text-blue-500" />
                Implementation Roadmap
              </h2>
              <p className="text-gray-700 mb-4">
                The FHIR interoperability implementation follows a phased approach, with each phase building upon the 
                previous one. The roadmap ensures a systematic rollout of capabilities while managing risk and enabling 
                early validation of key components.
              </p>

              <div className="relative mt-8">
                {/* Vertical timeline line */}
                <div className="absolute h-full w-0.5 bg-gray-200 left-1/2 transform -translate-x-1/2"></div>

                {/* Timeline items */}
                {implementationPhases.map((phase, index) => (
                  <div key={phase.id} className={`relative ${index < implementationPhases.length - 1 ? 'mb-12' : ''}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className={`h-6 w-6 rounded-full border-4 border-white shadow flex items-center justify-center ${
                        phase.status === 'Completed' ? 'bg-green-500' : 
                        phase.status === 'In Progress' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`}>
                        {phase.status === 'Completed' && <CheckCircle className="text-white" size={14} />}
                      </div>
                    </div>

                    {/* Content box - alternating sides */}
                    <div className={`relative ${index % 2 === 0 ? 'ml-1/2 pl-12' : 'mr-1/2 pr-12 text-right'} max-w-md ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                      <button 
                        className={`block w-full text-left mb-2 ${selectedPhase === phase.id ? 'text-blue-600' : 'text-gray-800'} font-bold text-lg hover:text-blue-600 transition-colors`}
                        onClick={() => setSelectedPhase(selectedPhase === phase.id ? null : phase.id)}
                      >
                        {phase.name}
                      </button>

                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <ClockIcon size={16} className="mr-1" />
                        <span>{phase.timeline}</span>
                        <span className={`ml-3 px-2 py-0.5 rounded-full text-xs font-medium ${
                          phase.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                          phase.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {phase.status}
                        </span>
                      </div>

                      {selectedPhase === phase.id && (
                        <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mt-3">
                          <div className="mb-3">
                            <h4 className="font-semibold text-gray-700 mb-2">Key Milestones:</h4>
                            <ul className="space-y-1">
                              {phase.milestones.map((milestone, i) => (
                                <li key={i} className="flex items-start">
                                  <CheckSquare size={16} className={`mr-2 mt-0.5 flex-shrink-0 ${
                                    phase.status === 'Completed' ? 'text-green-500' : 
                                    phase.status === 'In Progress' ? 'text-yellow-500' : 'text-blue-500'
                                  }`} />
                                  <span className="text-sm">{milestone}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-700 mb-2">Expected Outcomes:</h4>
                            <ul className="space-y-1">
                              {phase.outcomes.map((outcome, i) => (
                                <li key={i} className="flex items-start">
                                  <CheckCircle size={16} className={`mr-2 mt-0.5 flex-shrink-0 ${
                                    phase.status === 'Completed' ? 'text-green-500' : 
                                    phase.status === 'In Progress' ? 'text-yellow-500' : 'text-blue-500'
                                  }`} />
                                  <span className="text-sm">{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-lg font-semibold mb-4">Current Progress & Next Steps</h3>

              <div className="mb-6">
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-blue-600 h-4 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>Project Start</span>
                  <span>75% Complete</span>
                  <span>Production</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                    <CheckCircle className="mr-2" size={18} />
                    Completed Milestones
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0" />
                      <span>Redpanda cluster fully operational with Schema Registry</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0" />
                      <span>HAPI FHIR server accepting all primary resource types</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0" />
                      <span>HL7v2/CDA to FHIR conversion pipeline implemented</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0" />
                      <span>Keycloak + SMART on FHIR authentication framework</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0" />
                      <span>Notification + pull pattern demonstrated end-to-end</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-700 mb-3 flex items-center">
                    <ClockIcon className="mr-2" size={18} />
                    Current Focus Areas
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ArrowRight size={14} className="text-blue-500 mr-2 flex-shrink-0" />
                      <span>Implementing circuit breakers across all integration points</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={14} className="text-blue-500 mr-2 flex-shrink-0" />
                      <span>Finalizing monitoring dashboards for end-to-end visibility</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={14} className="text-blue-500 mr-2 flex-shrink-0" />
                      <span>Fine-tuning FHIR server query performance</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={14} className="text-blue-500 mr-2 flex-shrink-0" />
                      <span>Conducting comprehensive load testing</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={14} className="text-blue-500 mr-2 flex-shrink-0" />
                      <span>Drafting operational documentation and runbooks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FhirPocPage;