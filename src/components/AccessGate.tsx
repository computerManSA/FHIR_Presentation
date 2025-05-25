
import React, { useState, useEffect } from 'react';
import { useAccessStore } from '../stores/accessStore';
import { v4 as uuidv4 } from 'uuid';

const getDeviceId = () => {
  let deviceId = localStorage.getItem('device-id');
  if (!deviceId) {
    deviceId = uuidv4();
    localStorage.setItem('device-id', deviceId);
  }
  return deviceId;
};

interface AccessGateProps {
  children: React.ReactNode;
}

const AccessGate: React.FC<AccessGateProps> = ({ children }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const validateCode = useAccessStore((state) => state.validateCode);
  
  useEffect(() => {
    const checkAuth = async () => {
      const deviceId = getDeviceId();
      const savedCode = localStorage.getItem('access-code');
      if (savedCode) {
        const isValid = await validateCode(savedCode, deviceId);
        setIsAuthenticated(isValid);
      }
      setIsLoading(false);
    };
    checkAuth();
  }, [validateCode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const deviceId = getDeviceId();
    
    try {
      const isValid = await validateCode(code, deviceId);
      if (isValid) {
        localStorage.setItem('access-code', code);
        setIsAuthenticated(true);
        setError('');
      } else {
        setError('Invalid or already used access code');
      }
    } catch (error) {
      setError('Error validating code');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Access Required</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter access code"
            className="w-full p-2 border rounded mb-4"
            disabled={isLoading}
          />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
            disabled={isLoading}
          >
            {isLoading ? 'Validating...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccessGate;
