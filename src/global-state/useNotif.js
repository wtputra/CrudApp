import { create } from "zustand";

export const useNotifStore = create((set) => ({
  notif: "",
  setNotif: (notif) => {
    set((state) => {
      return {
        ...state,
        notif,
      };
    });
  },
}));
