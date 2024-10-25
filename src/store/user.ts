import { create } from "zustand";
import { persist } from "zustand/middleware"; // Import persist middleware
import { Roles } from "../config/roles";

interface UserState {
  role: Roles;
  setRole: (role: Roles) => void;
}

export const userStore = create(
  persist<UserState>(
    (set) => ({
      role: Roles.USER, // Default role
      setRole: (role: Roles) => set({ role }), // Method to set role
    }),
    {
      name: "user-storage", // Name of the storage item
    }
  )
);
