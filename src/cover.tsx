
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CoverPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-2xl shadow-2xl max-w-4xl mx-auto">
        <div className="flex justify-center items-center space-x-12 mb-8">
          <img 
            src="https://eservices.moh.gov.sa/MOHWebsiteStaticAssets/assets/images/logo-ar.png" 
            alt="MOH Logo"
            className="h-24 object-contain"
          />
          <img 
            src="https://lean.sa/images/logo/logo-dark.png" 
            alt="Lean Logo"
            className="h-16 object-contain"
          />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Healthcare Interoperability Initiative
        </h1>
        <h2 className="text-2xl text-gray-600 mb-8">
          FHIR Implementation Project
        </h2>
        
        <div className="mb-12">
          <p className="text-gray-600 text-lg">
            Technical Presentation and Architecture Overview
          </p>
          <p className="text-gray-500 mt-2">
            Ministry of Health - Kingdom of Saudi Arabia
          </p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg text-lg"
        >
          Start Presentation
        </button>
      </div>
    </div>
  );
};

export default CoverPage;
