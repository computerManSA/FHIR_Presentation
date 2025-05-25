
import { create } from 'zustand';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface AccessStore {
  validateCode: (code: string, deviceId: string) => Promise<boolean>;
  getAccessCount: (code: string) => Promise<number>;
  addCode: (code: string, maxUses?: number) => Promise<void>;
}

export const useAccessStore = create<AccessStore>()((set, get) => ({
  validateCode: async (code: string, deviceId: string) => {
    try {
      const accessCode = await prisma.accessCode.findUnique({
        where: { code },
        include: { accesses: true },
      });

      if (!accessCode) return false;

      const existingAccess = await prisma.siteAccess.findUnique({
        where: { 
          deviceId_codeId: {
            deviceId,
            codeId: accessCode.id
          }
        },
      });

      if (existingAccess) {
        // Update access count and last access time
        await prisma.siteAccess.update({
          where: { id: existingAccess.id },
          data: { 
            accessCount: existingAccess.accessCount + 1,
            lastAccess: new Date()
          },
        });
        return true;
      }

      if (accessCode.accesses.length >= accessCode.maxUses) return false;

      // Create new access record
      await prisma.siteAccess.create({
        data: {
          deviceId,
          codeId: accessCode.id,
        },
      });

      return true;
    } catch (error) {
      console.error('Error validating code:', error);
      return false;
    }
  },

  getAccessCount: async (code: string) => {
    try {
      const accessCode = await prisma.accessCode.findUnique({
        where: { code },
        include: {
          accesses: {
            select: { accessCount: true },
          },
        },
      });

      if (!accessCode) return 0;
      return accessCode.accesses.reduce((sum, access) => sum + access.accessCount, 0);
    } catch (error) {
      console.error('Error getting access count:', error);
      return 0;
    }
  },

  addCode: async (code: string, maxUses = 1) => {
    try {
      await prisma.accessCode.create({
        data: { code, maxUses },
      });
    } catch (error) {
      console.error('Error adding code:', error);
    }
  },
}));
