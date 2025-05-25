import { create } from 'zustand';
import { PrismaClient } from '@prisma/client';

interface AccessStore {
  isAuthenticated: boolean;
  checkAccess: (code?: string) => void;
}

export const useAccessStore = create<AccessStore>((set) => ({
  isAuthenticated: false,
  checkAccess: (code?: string) => {
    if (!code) {
      // Check if there's a stored code
      const storedCode = localStorage.getItem('access-code');
      if (storedCode) {
        set({ isAuthenticated: true });
      }
      return;
    }

    // For now, simple validation - replace with actual validation later
    if (code === 'demo') {
      localStorage.setItem('access-code', code);
      set({ isAuthenticated: true });
    }
  }
}));