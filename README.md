
# FHIR POC for Saudi MOH - .NET Core Implementation

## Repository Structure

```
fhir-moh-poc/
├── docs/
│   ├── architecture/
│   ├── deployment/
│   └── api-specifications/
├── infrastructure/
│   ├── docker/
│   │   ├── docker-compose.yml
│   │   ├── fhir-server/
│   │   ├── keycloak/
│   │   ├── redpanda/
│   │   ├── redis/
│   │   ├── minio/
│   │   └── databases/
│   └── scripts/
├── src/
│   ├── MOH.FHIR.Core/
│   ├── MOH.FHIR.API/
│   ├── MOH.FHIR.Services/
│   ├── MOH.FHIR.Infrastructure/
│   ├── MOH.FHIR.Simulation/
│   └── MOH.FHIR.Tests/
├── simulation-services/
│   ├── nphies-simulator/
│   ├── sehhaty-simulator/
│   ├── his-simulator/
│   └── apigee-simulator/
└── deployment/
    ├── k8s/
    └── cloud/
```

## .NET Core Architecture Implementation

### 1. Enhanced Architecture Components Simulation

Based on your [Enhanced FHIR Architecture](rag://rag_source_1), we'll simulate all layers:

#### External Systems Layer
- **HIS Simulator**: Mock HL7v2/CDA message generation
- **Raqeem Simulator**: Provider registration mock APIs
- **Mawed Simulator**: Appointment system mock APIs
- **Eynti Simulator**: Clinical documentation mock APIs

#### NPHIES Layer (Enhanced)
- **Use Case Processors**: UC1-UCN simulators with validation
- **Streaming Producer**: RedPanda event publishing
- **API Provider**: Reference-based data access (NEW)
- **Raw Data Database**: Oracle simulation with Entity Framework

#### Integration Layer (Enhanced)
- **Error Handling Service**: Comprehensive error management
- **Streaming Engine**: RedPanda cluster simulation
- **APIGEE Gateway**: API management and security proxy
- **Redis Cache**: High-performance caching layer
- **Storage Service**: MinIO S3-compatible storage

#### FHIR Server Layer (Enhanced)
- **Keycloak + SMART**: Authentication and authorization
- **FHIR Format Converter**: HL7v2/CDA to FHIR transformation
- **FHIR Conformance Validator**: Resource validation
- **HAPI FHIR Server**: Full R4 compliance
- **Business Validation**: Clinical rules engine
- **Resource Access Controller**: Fine-grained permissions
- **Terminology Service**: Medical vocabularies
- **Data Cleansing**: Quality improvement
- **Notification Producer**: Event-driven notifications

#### Sehhaty Layer (Enhanced)
- **Offline Sync Service**: Mobile synchronization
- **Mobile App Simulator**: Patient-facing interface
- **Backend Simulator**: Provider workflows
- **FHIR Client**: HAPI-based resource access
- **Streaming Consumers**: Event processing

## Development Environment Setup

### Prerequisites (macOS M4)
- .NET 8.0 SDK
- Docker Desktop for Mac (Apple Silicon)
- Git
- Visual Studio Code or Visual Studio for Mac
- Postman/Insomnia for API testing

### Docker Infrastructure

All infrastructure components will run in Docker containers:

```yaml
# infrastructure/docker/docker-compose.yml
version: '3.8'

services:
  # HAPI FHIR Server R4
  fhir-server:
    image: hapiproject/hapi:latest
    ports:
      - "8080:8080"
    environment:
      - SPRING_DATASOURCE_URL=jdbc:postgresql://postgres-fhir:5432/hapi
    depends_on:
      - postgres-fhir

  # Keycloak + SMART on FHIR
  keycloak:
    image: quay.io/keycloak/keycloak:23.0
    ports:
      - "8180:8080"
    environment:
      - KEYCLOAK_ADMIN=admin
      - KEYCLOAK_ADMIN_PASSWORD=admin123

  # RedPanda (Kafka-compatible)
  redpanda:
    image: redpandadata/redpanda:latest
    ports:
      - "9092:9092"
      - "8081:8081"

  # Redis Cache
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  # MinIO (S3-compatible)
  minio:
    image: minio/minio:latest
    ports:
      - "9000:9000"
      - "9001:9001"

  # PostgreSQL for FHIR
  postgres-fhir:
    image: postgres:15
    environment:
      - POSTGRES_DB=hapi
      - POSTGRES_USER=admin
      - POSTGRES_PASSWORD=admin

  # SQL Server for cleansed data
  sqlserver:
    image: mcr.microsoft.com/mssql/server:2022-latest
    ports:
      - "1433:1433"
    environment:
      - SA_PASSWORD=YourStrong@Passw0rd

  # Oracle simulation (using Oracle XE)
  oracle:
    image: gvenzl/oracle-xe:latest
    ports:
      - "1521:1521"
    environment:
      - ORACLE_PASSWORD=YourStrong@Passw0rd
```

## .NET Core Project Structure

### 1. Core Domain Layer

```csharp
// MOH.FHIR.Core/Models/
public class Patient
{
    public string Id { get; set; }
    public string NationalId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public DateTime DateOfBirth { get; set; }
    public string Gender { get; set; }
    // FHIR R4 compliant properties
}

// MOH.FHIR.Core/Interfaces/
public interface IFHIRConverter
{
    Task<Patient> ConvertHL7v2ToPatient(string hl7Message);
    Task<Observation> ConvertHL7v2ToObservation(string hl7Message);
}
```

### 2. API Layer

```csharp
// MOH.FHIR.API/Controllers/
[ApiController]
[Route("api/fhir/[controller]")]
public class PatientController : ControllerBase
{
    private readonly IFHIRService _fhirService;
    
    [HttpGet("{id}")]
    public async Task<IActionResult> GetPatient(string id)
    {
        var patient = await _fhirService.GetPatientAsync(id);
        return Ok(patient);
    }
    
    [HttpPost]
    public async Task<IActionResult> CreatePatient([FromBody] Patient patient)
    {
        var created = await _fhirService.CreatePatientAsync(patient);
        return CreatedAtAction(nameof(GetPatient), new { id = created.Id }, created);
    }
}
```

### 3. Simulation Services

```csharp
// MOH.FHIR.Simulation/HISSimulator/
public class HISSimulator : IHISSimulator
{
    public async Task<string> GenerateHL7v2ADTMessage()
    {
        // Mock HL7v2 ADT^A01 message
        return "MSH|^~\\&|HIS|KFSH|NPHIES|MOH|20240101120000||ADT^A01|12345|P|2.5\r" +
               "PID|1||123456789^^^MRN||الأحمد^محمد^عبدالله||19850301|M|||الرياض^الرياض^11564^SA||(966)501234567";
    }
}

// MOH.FHIR.Simulation/NPHIESSimulator/
public class NPHIESSimulator : INPHIESSimulator
{
    private readonly IRedPandaProducer _producer;
    
    public async Task ProcessUseCase1(string hl7Message)
    {
        // Simulate NPHIES UC1 processing
        var validatedData = await ValidateHL7Message(hl7Message);
        
        // Publish to RedPanda topic
        await _producer.PublishAsync("nphies.uc1.adt.events", validatedData);
    }
}
```

### 4. Event Streaming Integration

```csharp
// MOH.FHIR.Infrastructure/Streaming/
public class RedPandaProducer : IRedPandaProducer
{
    private readonly IProducer<string, string> _producer;
    
    public async Task PublishAsync(string topic, object data)
    {
        var message = new Message<string, string>
        {
            Key = Guid.NewGuid().ToString(),
            Value = JsonSerializer.Serialize(data)
        };
        
        await _producer.ProduceAsync(topic, message);
    }
}

public class FHIRNotificationConsumer : IFHIRNotificationConsumer
{
    public async Task ProcessNotification(string resourceType, string resourceId)
    {
        // Simulate Sehhaty notification processing
        // Trigger FHIR client to pull full resource
        await PullResourceFromFHIRServer(resourceType, resourceId);
    }
}
```

## Mock API Responses Strategy

### 1. NPHIES Mock Responses
```csharp
public class NPHIESMockController : ControllerBase
{
    [HttpPost("api/nphies/uc1/process")]
    public async Task<IActionResult> ProcessUseCase1([FromBody] HL7Message message)
    {
        // Simulate NPHIES processing delay
        await Task.Delay(Random.Shared.Next(100, 500));
        
        return Ok(new 
        {
            Status = "Processed",
            MessageId = Guid.NewGuid(),
            ProcessedAt = DateTime.UtcNow,
            ValidationResult = "Valid",
            TopicPublished = "nphies.uc1.adt.events"
        });
    }
}
```

### 2. FHIR Server Mock Responses
```csharp
public class FHIRMockController : ControllerBase
{
    [HttpGet("fhir/Patient/{id}")]
    public IActionResult GetPatient(string id)
    {
        return Ok(new 
        {
            resourceType = "Patient",
            id = id,
            identifier = new[] { 
                new { system = "http://moh.gov.sa/nationalid", value = "1234567890" }
            },
            name = new[] {
                new { family = "الأحمد", given = new[] { "محمد", "عبدالله" } }
            },
            gender = "male",
            birthDate = "1985-03-01"
        });
    }
}
```

## Key Business & Technical Benefits Demonstration

### 1. Real-time Data Flow
- **Before**: Hours of batch processing delay
- **After**: Sub-second notification delivery
- **Measurement**: End-to-end latency tracking

### 2. Standards Compliance
- **FHIR R4**: Full resource validation
- **SMART on FHIR**: Authentication flows
- **HL7v2/CDA**: Legacy format support

### 3. Scalability
- **Event-driven**: Horizontal scaling simulation
- **Microservices**: Independent component scaling
- **Caching**: Redis performance optimization

## Implementation Phases

### Phase 1: Infrastructure Setup (Week 1)
1. Docker environment configuration
2. .NET Core project structure
3. Basic FHIR server integration

### Phase 2: Core Simulations (Week 2-3)
1. HIS simulators with mock data
2. NPHIES processing simulation
3. FHIR conversion services

### Phase 3: Event Streaming (Week 4)
1. RedPanda integration
2. Notification+pull pattern
3. Real-time demonstrations

### Phase 4: Authentication & Security (Week 5)
1. Keycloak integration
2. SMART on FHIR implementation
3. Security testing

### Phase 5: Performance & Metrics (Week 6)
1. Load testing scenarios
2. Performance metrics collection
3. Business ROI calculations

## Success Metrics

### Technical KPIs
- **Conversion Time**: < 100ms per HL7 message
- **API Response**: < 200ms for 95th percentile
- **Event Latency**: < 500ms end-to-end
- **FHIR Compliance**: 100% validation pass rate

### Business KPIs
- **Integration Effort**: 60% reduction demonstration
- **Data Freshness**: Hours to seconds improvement
- **Maintenance**: Standardized vs custom comparison
- **Scalability**: Linear vs exponential complexity

This comprehensive plan provides a production-ready POC that demonstrates all aspects of your [Enhanced FHIR Architecture](rag://rag_source_1) using .NET Core, with Docker-based infrastructure and effective mock simulations that prove both technical and business benefits.
