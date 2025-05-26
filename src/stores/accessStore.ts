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

      console.log("Checking code:", code);

      try {
        // Make API call with the code
        console.log("Making API call with code:", code);
        const apiUrl = import.meta.env.DEV 
          ? "http://0.0.0.0:5000/api/validate" 
          : "/api/validate";
        
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ code: code }),
        });
        if (!response.ok) {
          console.error("API call failed with response:", response);
          
          // Handle rate limiting
          if (response.status === 429) {
            const errorData = await response.json().catch(() => ({}));
            const retryAfter = errorData.retryAfter || 900; // Default 15 minutes
            const minutes = Math.ceil(retryAfter / 60);
            set({
              isAuthenticated: false,
              isLoading: false,
              error: `Too many attempts. Please try again in ${minutes} minutes.`,
            });
            return;
          }
          
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Response data:", data);

        if (data.valid) {
          localStorage.setItem("access-code", code);
          set({ isAuthenticated: true, isLoading: false, error: null });
          return;
        }

        localStorage.removeItem("access-code");
        
        // Handle specific error messages from security system
        let errorMessage = data.error || "Invalid access code";
        if (data.retryAfter) {
          const minutes = Math.ceil(data.retryAfter / 60);
          errorMessage += ` Please try again in ${minutes} minutes.`;
        }
        
        set({
          isAuthenticated: false,
          isLoading: false,
          error: errorMessage,
        });
      } catch (error) {
        console.error("API call error:", error);
        set({
          isAuthenticated: false,
          isLoading: false,
          error: "Failed to validate code. Please try again later.",
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
