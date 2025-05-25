import { ReactNode, useEffect, useState } from 'react';
import { useAccessStore } from '../stores/accessStore';

interface AccessGateProps {
  children: ReactNode;
}

export const AccessGate: React.FC<AccessGateProps> = ({ children }) => {
  const { isAuthenticated, checkAccess } = useAccessStore();
  const [code, setCode] = useState('');

  useEffect(() => {
    checkAccess();
  }, [checkAccess]);

  const handleSubmit = async () => {
    await checkAccess(code);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Access Required</h2>
          <p className="mb-4">Please enter your access code to continue.</p>
          <input
            type="text"
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter access code"
            className="w-full p-2 border rounded mb-4"
            value={code}
          />
           <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};