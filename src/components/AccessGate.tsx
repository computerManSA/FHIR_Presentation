
import { ReactNode, useEffect, useState } from 'react';
import { useAccessStore } from '../stores/accessStore';

interface AccessGateProps {
  children: ReactNode;
}

const AccessGate: React.FC<AccessGateProps> = ({ children }) => {
  const { isAuthenticated, isLoading, error, checkAccess } = useAccessStore();
  const [code, setCode] = useState('');

  useEffect(() => {
    checkAccess();
  }, [checkAccess]);

  const handleSubmit = () => {
    // Client-side validation
    const trimmedCode = code.trim();
    
    if (!trimmedCode) {
      return;
    }
    
    // Basic format validation
    if (trimmedCode.length < 6 || trimmedCode.length > 10) {
      return;
    }
    
    // Check for valid characters (alphanumeric only)
    if (!/^[a-zA-Z0-9]+$/.test(trimmedCode)) {
      return;
    }
    
    checkAccess(trimmedCode);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Access Required</h2>
          <p className="mb-4">Please enter your access code to continue.</p>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 10))}
            onKeyPress={handleKeyPress}
            placeholder="Enter access code (6-10 characters)"
            className="w-full p-2 border rounded mb-4"
            maxLength={10}
            autoComplete="off"
            spellCheck={false}
          />
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}
          <button 
            onClick={handleSubmit}
            disabled={isLoading}
            className={`w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Checking...' : 'Submit'}
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default AccessGate;
