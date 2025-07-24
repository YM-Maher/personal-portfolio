// src/store/authStore.ts (Zustand Example)
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  setUser: (user: any) => set({ user }),
}));
