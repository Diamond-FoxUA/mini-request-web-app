import { create } from "zustand";
import { persist } from "zustand/middleware";

import { type AppState } from "./types";

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      role: "user",
      requests: [],

      setRole: (role) => set({ role }),

      addRequest: (title, description) =>
        set((state) => ({
          requests: [
            ...state.requests,
            {
              id: crypto.randomUUID(),
              title,
              description,
              status: "new",
              createdAt: new Date().toISOString(),
            },
          ],
        })),

      updateStatus: (id, status) =>
        set((state) => ({
          requests: state.requests.map((req) =>
            req.id === id ? { ...req, status } : req,
          ),
        })),

      deleteRequest: (id) =>
        set((state) => ({
          requests: state.requests.filter((req) => req.id !== id),
        })),

      editRequest: (id, title, description) =>
        set((state) => ({
          requests: state.requests.map((req) =>
            req.id === id ? { ...req, title, description, status: "new" } : req,
          ),
        })),
    }),
    { name: "request-storage" },
  ),
);
