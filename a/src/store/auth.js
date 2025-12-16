import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      role: "user",
      token: null,
      user: null,

      login: (data) =>
        set({
          isAuthenticated: true,
          role: data?.user?.role || "user",
          token: data?.token,
          user: data?.user,
        }),

      logout: () =>
        set({
          isAuthenticated: false,
          role: "user",
          token: null,
          user: null,
        }),
    }),
    {
      name: "authStorage", // key in localStorage
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        role: state.role,
        token: state.token,
        user: state.user,
      }),
    }
  )
);
