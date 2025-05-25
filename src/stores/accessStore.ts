
import { create } from "zustand";

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
        const storedCode = localStorage.getItem("access-code");
        if (!storedCode) {
          set({ isLoading: false });
          return;
        }
        code = storedCode;
      }

      // Mock valid codes
      const validCodes = ["NPHIES24", "MOHNEXT2", "FHIR2024", "VALTEST4"];
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // Record access attempt
      try {
        await fetch("/api/access-log", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ 
            code,
            timestamp: new Date().toISOString(),
            success: validCodes.includes(code)
          })
        });
      } catch (error) {
        console.error("Failed to log access:", error);
      }

      if (validCodes.includes(code)) {
        localStorage.setItem("access-code", code);
        set({ isAuthenticated: true, isLoading: false, error: null });
        return;
      }

      localStorage.removeItem("access-code");
      set({
        isAuthenticated: false,
        isLoading: false,
        error: "Invalid access code"
      });
    } catch (error) {
      localStorage.removeItem("access-code");
      set({
        isAuthenticated: false,
        isLoading: false,
        error: error instanceof Error ? error.message : "Failed to validate access code"
      });
    }
  },
}));