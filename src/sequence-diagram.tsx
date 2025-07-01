
import React, { useState } from "react";
import {
  ArrowRight,
  ArrowDown,
  ArrowUp,
  Activity,
  Database,
  Server,
  Smartphone,
  Cloud,
  RefreshCw,
  Users,
  Monitor,
  Zap,
} from "lucide-react";

const SequenceDiagram = () => {
  const [selectedSequence, setSelectedSequence] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Define main actors/systems
  const actors = [
    { id: "patient", name: "Patient", icon: Users, color: "blue" },
    { id: "his", name: "HIS Systems", icon: Server, color: "gray" },
    { id: "nphies", name: "NPHIES", icon: Cloud, color: "green" },
    { id: "streaming", name: "Redpanda", icon: Activity, color: "yellow" },
    { id: "fhir", name: "FHIR Server", icon: Database, color: "red" },
    { id: "sehhaty", name: "Sehhaty Apps", icon: Smartphone, color: "purple" },
    { id: "external", name: "External Apps", icon: Monitor, color: "indigo" }
  ];

  // Define sequence flows
  const sequences = [
    {
      id: "patient-visit",
      name: "Patient Visit & Data Flow",
      description: "Complete flow from patient visit to data distribution",
      steps: [
        {
          from: "patient",
          to: "his",
          action: "Patient visits healthcare facility",
          message: "Registration & clinical data",
          type: "sync",
          details: "Patient registers and receives care, clinical data is captured in HIS"
        },
        {
          from: "his",
          to: "nphies",
          action: "HIS (NPHIES Compliant) sends data",
          message: "HL7v2/CDA messages",
          type: "async",
          details: "Compliant HIS systems send standardized data through NPHIES processing"
        },
        {
          from: "his",
          to: "fhir",
          action: "HIS (Non-Compliant) sends data directly",
          message: "Custom format data",
          type: "async",
          details: "Non-compliant HIS systems bypass NPHIES and send directly to FHIR"
        },
        {
          from: "nphies",
          to: "streaming",
          action: "NPHIES publishes validated events",
          message: "Healthcare events",
          type: "async",
          details: "NPHIES processes data and publishes events to streaming platform"
        },
        {
          from: "streaming",
          to: "fhir",
          action: "FHIR consumes events",
          message: "Event notifications",
          type: "async",
          details: "FHIR server consumes events and converts to FHIR resources"
        },
        {
          from: "fhir",
          to: "streaming",
          action: "FHIR publishes notifications",
          message: "Resource notifications",
          type: "async",
          details: "FHIR publishes lightweight notifications about resource changes"
        },
        {
          from: "streaming",
          to: "nphies",
          action: "NPHIES consumes FHIR events",
          message: "FHIR notifications",
          type: "async",
          details: "NPHIES receives data from non-compliant systems via FHIR"
        },
        {
          from: "streaming",
          to: "sehhaty",
          action: "Sehhaty receives notifications",
          message: "Event notifications",
          type: "async",
          details: "Sehhaty applications receive real-time notifications"
        },
        {
          from: "sehhaty",
          to: "fhir",
          action: "Pull complete resources",
          message: "FHIR API requests",
          type: "sync",
          details: "Sehhaty pulls complete resource data using FHIR APIs"
        },
        {
          from: "external",
          to: "fhir",
          action: "External apps request data",
          message: "Authenticated API calls",
          type: "sync",
          details: "External applications like Anat request patient data with JWT authentication"
        }
      ]
    },
    {
      id: "real-time-sync",
      name: "Real-time Data Synchronization",
      description: "How systems stay synchronized through event streaming",
      steps: [
        {
          from: "fhir",
          to: "streaming",
          action: "Detect resource changes",
          message: "Change events",
          type: "async",
          details: "FHIR server detects any resource create/update/delete operations"
        },
        {
          from: "streaming",
          to: "sehhaty",
          action: "Notify Sehhaty",
          message: "Resource reference",
          type: "async",
          details: "Lightweight notification with resource ID and change type"
        },
        {
          from: "streaming",
          to: "nphies",
          action: "Notify NPHIES Consumer",
          message: "FHIR events",
          type: "async",
          details: "NPHIES consumer receives notifications for bidirectional sync"
        },
        {
          from: "sehhaty",
          to: "fhir",
          action: "Fetch updated resource",
          message: "GET /Patient/{id}",
          type: "sync",
          details: "Sehhaty fetches complete resource data using resource reference"
        },
        {
          from: "nphies",
          to: "nphies",
          action: "Process FHIR data",
          message: "Internal processing",
          type: "sync",
          details: "NPHIES processes FHIR data and updates internal systems"
        }
      ]
    },
    {
      id: "external-access",
      name: "External System Access Pattern",
      description: "How external systems like Anat access patient data",
      steps: [
        {
          from: "external",
          to: "fhir",
          action: "Request patient profile",
          message: "GET /Patient/{id} (JWT)",
          type: "sync",
          details: "Doctor requests patient profile through authenticated API"
        },
        {
          from: "fhir",
          to: "fhir",
          action: "Validate JWT token",
          message: "Authentication check",
          type: "sync",
          details: "System validates JWT token and authorized access"
        },
        {
          from: "fhir",
          to: "external",
          action: "Return patient data",
          message: "FHIR Bundle",
          type: "sync",
          details: "Complete patient profile with related resources"
        },
        {
          from: "external",
          to: "fhir",
          action: "Request related data",
          message: "GET /Observation?patient={id}",
          type: "sync",
          details: "Additional requests for observations, conditions, etc."
        },
        {
          from: "fhir",
          to: "external",
          action: "Return clinical data",
          message: "FHIR Resources",
          type: "sync",
          details: "Related clinical observations and conditions"
        }
      ]
    }
  ];

  const currentSequence = sequences[selectedSequence];

  const ActorColumn = ({ actor }) => (
    <div className="flex flex-col items-center">
      <div className={`w-16 h-16 bg-${actor.color}-100 rounded-full flex items-center justify-center mb-2 border-2 border-${actor.color}-300`}>
        <actor.icon className={`text-${actor.color}-600`} size={24} />
      </div>
      <h3 className="text-sm font-semibold text-gray-800 text-center">{actor.name}</h3>
      <div className={`w-1 bg-${actor.color}-200 flex-1 mt-4`} style={{ minHeight: '600px' }}></div>
    </div>
  );

  const SequenceStep = ({ step, index, actors }) => {
    const fromActor = actors.find(a => a.id === step.from);
    const toActor = actors.find(a => a.id === step.to);
    const fromIndex = actors.findIndex(a => a.id === step.from);
    const toIndex = actors.findIndex(a => a.id === step.to);
    
    const isRightDirection = toIndex > fromIndex;
    const distance = Math.abs(toIndex - fromIndex);
    const leftPosition = Math.min(fromIndex, toIndex);
    
    return (
      <div 
        className="relative"
        style={{
          gridColumn: `${leftPosition + 1} / ${leftPosition + distance + 2}`,
          gridRow: index + 1,
          height: '60px',
          margin: '10px 0'
        }}
      >
        <div className="flex items-center h-full">
          {step.from === step.to ? (
            // Self-loop
            <div className="relative w-full flex items-center">
              <div className="absolute right-4 top-0 w-8 h-8 border-t-2 border-r-2 border-gray-400 rounded-tr-lg"></div>
              <div className="absolute right-4 bottom-0">
                <ArrowDown className="text-gray-600" size={16} />
              </div>
              <div className="bg-white p-2 rounded border shadow-sm ml-8 max-w-xs">
                <p className="text-xs font-medium">{step.action}</p>
                <p className="text-xs text-gray-600">{step.message}</p>
              </div>
            </div>
          ) : (
            // Regular arrow
            <div className="relative w-full flex items-center">
              <div className={`flex-1 border-t-2 ${step.type === 'sync' ? 'border-solid border-blue-500' : 'border-dashed border-green-500'}`}></div>
              <div className={isRightDirection ? 'ml-2' : 'mr-2'}>
                {isRightDirection ? (
                  <ArrowRight className={step.type === 'sync' ? 'text-blue-500' : 'text-green-500'} size={16} />
                ) : (
                  <ArrowRight className={`${step.type === 'sync' ? 'text-blue-500' : 'text-green-500'} transform rotate-180`} size={16} />
                )}
              </div>
              <div className={`absolute top-0 transform -translate-y-full bg-white p-2 rounded border shadow-sm max-w-xs ${isRightDirection ? 'left-1/4' : 'right-1/4'}`}>
                <p className="text-xs font-medium">{step.action}</p>
                <p className="text-xs text-gray-600">{step.message}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-screen overflow-auto bg-gray-50 p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          FHIR Architecture - Sequence Diagrams
        </h1>
        <p className="text-gray-600 mb-4">
          Data flow interactions between main architectural components
        </p>
      </header>

      {/* Sequence Selector */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {sequences.map((seq, index) => (
            <button
              key={seq.id}
              onClick={() => setSelectedSequence(index)}
              className={`px-4 py-2 rounded-lg border-2 transition-all ${
                selectedSequence === index
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
              }`}
            >
              <div className="text-sm font-medium">{seq.name}</div>
              <div className="text-xs opacity-75">{seq.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mb-6 p-4 bg-white rounded-lg border-2 border-gray-200">
        <h3 className="font-semibold mb-3">Legend</h3>
        <div className="flex gap-6 text-sm">
          <div className="flex items-center">
            <ArrowRight className="text-blue-500 mr-2" size={16} />
            <span>Synchronous Call</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 border-t-2 border-dashed border-green-500 mr-2"></div>
            <ArrowRight className="text-green-500 mr-2" size={16} />
            <span>Asynchronous Message</span>
          </div>
        </div>
      </div>

      {/* Sequence Diagram */}
      <div className="bg-white rounded-lg border-2 border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">{currentSequence.name}</h2>
        <p className="text-gray-600 mb-6">{currentSequence.description}</p>
        
        <div className="overflow-x-auto">
          <div 
            className="grid gap-8 min-w-max"
            style={{ gridTemplateColumns: `repeat(${actors.length}, 1fr)` }}
          >
            {/* Actor Headers */}
            {actors.map(actor => (
              <ActorColumn key={actor.id} actor={actor} />
            ))}
            
            {/* Sequence Steps */}
            <div 
              className="col-span-full grid gap-0"
              style={{ 
                gridTemplateColumns: `repeat(${actors.length}, 1fr)`,
                gridTemplateRows: `repeat(${currentSequence.steps.length}, 60px)`
              }}
            >
              {currentSequence.steps.map((step, index) => (
                <SequenceStep 
                  key={index} 
                  step={step} 
                  index={index} 
                  actors={actors}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Step Details */}
      <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
        <h3 className="text-lg font-bold mb-4">Sequence Steps Detail</h3>
        <div className="space-y-4">
          {currentSequence.steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4 p-3 bg-gray-50 rounded">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium">{step.action}</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    step.type === 'sync' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {step.type === 'sync' ? 'Synchronous' : 'Asynchronous'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{step.message}</p>
                <p className="text-xs text-gray-500">{step.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SequenceDiagram;
