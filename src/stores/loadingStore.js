import create from "zustand";
import { loadingState } from "utils/enums";

export const useLoadingStore = create((set) => ({
  loading: loadingState.IDLE,
  setLoading: (loading) => set({ loading }),
  handleAsyncOperation: async (asyncFunction) => {
    try {
      set({ loading: loadingState.LOADING });
      await asyncFunction();
      set({ loading: loadingState.LOADED });
    } catch (error) {
      set({ loading: loadingState.ERROR });
    }
  },
}));
