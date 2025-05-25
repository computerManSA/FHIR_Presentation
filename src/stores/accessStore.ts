
import { create } from 'zustand';

interface AccessStore {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  checkAccess: (code?: string) => Promise<void>;
}

export const useAccessStore = create<AccessStore>((set) => ({
  isAuthenticated: false,
  isLoading: false,
  error: null,
  checkAccess: async (code?: string) => {
    set({ isLoading: true, error: null });
    try {
      if (!code) {
        const storedCode = localStorage.getItem('access-code');
        if (storedCode) {
          const response = await fetch(`http://0.0.0.0:3000/api/access/check?code=${storedCode}`);
          const data = await response.json();
          if (data.isValid) {
            set({ isAuthenticated: true, isLoading: false });
            return;
          }
        }
        set({ isLoading: false });
        return;
      }

      const response = await fetch(`http://0.0.0.0:3000/api/access/check?code=${code}`);
      const data = await response.json();
      if (data.isValid) {
        localStorage.setItem('access-code', code);
        set({ isAuthenticated: true, isLoading: false });
      } else {
        set({ error: 'Invalid access code', isLoading: false });
      }
    } catch (error) {
      console.error('Failed to check access code:', error);
      set({ error: 'Failed to validate access code', isLoading: false });
    }
  }
}));
