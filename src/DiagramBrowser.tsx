
import React, { useState } from 'react';
import AsIsArchitecture from '../Diagrams/as-is-architecture';
import EnhancedFHIRArchitecture from '../Diagrams/enhanced-fhir-react';
import InfrastructureDesign from '../Diagrams/infrastructure-design';

const DiagramBrowser = () => {
  const [selectedDiagram, setSelectedDiagram] = useState('as-is');
  
  const diagrams = [
    { id: 'as-is', name: 'As-Is Architecture', component: AsIsArchitecture },
    { id: 'enhanced', name: 'Enhanced FHIR Architecture', component: EnhancedFHIRArchitecture },
    { id: 'infra', name: 'Infrastructure Design', component: InfrastructureDesign },
  ];

  const DiagramComponent = diagrams.find(d => d.id === selectedDiagram)?.component;

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg p-4">
        <div className="container mx-auto">
          <div className="flex space-x-4">
            {diagrams.map(diagram => (
              <button
                key={diagram.id}
                onClick={() => setSelectedDiagram(diagram.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedDiagram === diagram.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {diagram.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <main className="container mx-auto py-6">
        {DiagramComponent && <DiagramComponent />}
      </main>
    </div>
  );
};

export default DiagramBrowser;
