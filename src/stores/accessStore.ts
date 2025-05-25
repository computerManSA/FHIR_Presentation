
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AccessStore {
  validCodes: { [key: string]: number }; // code -> maxUses
  usedCodes: { [key: string]: string[] }; // code -> deviceIds[]
  addCode: (code: string, maxUses?: number) => void;
  validateCode: (code: string, deviceId: string) => boolean;
  getAccessCount: (code: string) => number;
}

export const useAccessStore = create<AccessStore>()(
  persist(
    (set, get) => ({
      validCodes: {
        'DEMO123': 100, // example code
      },
      usedCodes: {},
      
      addCode: (code, maxUses = 1) => {
        set((state) => ({
          validCodes: { ...state.validCodes, [code]: maxUses }
        }));
      },
      
      validateCode: (code, deviceId) => {
        const state = get();
        if (!state.validCodes[code]) return false;
        
        const usedByDevices = state.usedCodes[code] || [];
        if (usedByDevices.includes(deviceId)) return false;
        
        if (usedByDevices.length >= state.validCodes[code]) return false;
        
        set((state) => ({
          usedCodes: {
            ...state.usedCodes,
            [code]: [...(state.usedCodes[code] || []), deviceId]
          }
        }));
        
        return true;
      },
      
      getAccessCount: (code) => {
        const state = get();
        return (state.usedCodes[code] || []).length;
      }
    }),
    {
      name: 'access-store'
    }
  )
);
