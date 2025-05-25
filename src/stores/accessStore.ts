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
      // Check stored code first if no code provided
      if (!code) {
        const storedCode = localStorage.getItem("access-code");
        if (!storedCode) {
          set({ isLoading: false });
          return;
        }
        code = storedCode;
      }

      // Make API call with the code
      const response = await fetch('/api/validate', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: code }),
      });
      console.log("Response:", response);
      if (response.ok) {
        const data = await response.json();
        if (data.valid) {
          localStorage.setItem("access-code", code);
          set({ isAuthenticated: true, isLoading: false, error: null });
        } else {
          localStorage.removeItem("access-code");
          set({
            isAuthenticated: false,
            isLoading: false,
            error: "Invalid access code",
          });
        }
      } else {
        localStorage.removeItem("access-code");
        set({
          isAuthenticated: false,
          isLoading: false,
          error: "Invalid access code",
        });
      }
    } catch (error) {
      localStorage.removeItem("access-code");
      set({
        isAuthenticated: false,
        isLoading: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to validate access code",
      });
    }
  },
}));
