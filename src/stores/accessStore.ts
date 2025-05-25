import { create } from 'zustand';

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
        try {
          const response = await fetch(`http://0.0.0.0:3000/api/access/check?code=${storedCode}`);
          if (response.ok) {
            const data = await response.json();
            if (data.isValid) {
              set({ isAuthenticated: true });
              return;
            }
          }
        } catch (error) {
          console.error("Failed to check access code:", error);
        }
      }
      return;
    }

    try {
      const response = await fetch(`http://0.0.0.0:3000/api/access/check?code=${code}`);
      if (response.ok) {
        const data = await response.json();
        if (data.isValid) {
          localStorage.setItem('access-code', code);
          set({ isAuthenticated: true });
        }
      }
    } catch (error) {
      console.error("Failed to check access code:", error);
    }
  }
}));