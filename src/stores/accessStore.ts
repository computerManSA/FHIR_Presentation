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
      console.log("Checking code:", code);
      try {
        // Make API call with the code
        console.log("Making API call with code:", code);
        const response = await fetch("/api/validate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ code: code }),
        });

        const data = await response.json();
        console.log("Response data:", data);

        if (response.ok && data.valid) {
          localStorage.setItem("access-code", code);
          set({ isAuthenticated: true, isLoading: false, error: null });
          return;
        }

        localStorage.removeItem("access-code");
        set({
          isAuthenticated: false,
          isLoading: false,
          error: data.error || "Invalid access code",
        });
      } catch (error) {
        console.error("API call error:", error);
        set({
          isAuthenticated: false,
          isLoading: false,
          error: "Failed to validate code. Please try again.",
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
