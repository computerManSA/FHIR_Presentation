import { create } from 'zustand';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface AccessStore {
  isAuthenticated: boolean;
  checkAccess: (code?: string) => Promise<void>;
}

export const useAccessStore = create<AccessStore>((set) => ({
  isAuthenticated: false,
  checkAccess: async (code?: string) => {
    if (!code) {
      const storedCode = localStorage.getItem('access-code');
      if (storedCode) {
        const validCode = await prisma.accessCode.findUnique({
          where: { code: storedCode }
        });
        if (validCode) {
          set({ isAuthenticated: true });
        }
      }
      return;
    }

    const validCode = await prisma.accessCode.findUnique({
      where: { code }
    });

    if (validCode) {
      localStorage.setItem('access-code', code);
      set({ isAuthenticated: true });
    }
  }
}));