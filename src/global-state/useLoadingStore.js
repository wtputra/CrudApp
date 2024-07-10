import { create } from "zustand";

export const useLoadingStore = create((set) => ({
  loading: false,
  setLoading: (loading) => {
    set((state) => {
      return {
        ...state,
        loading,
      };
    });
  },
}));
