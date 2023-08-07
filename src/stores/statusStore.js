import create from "zustand";

import { statusEnum } from "utils/enums";

export const useStatusStore = create((set) => ({
  status: statusEnum.IDlE,
  setLoading: (loading) => set({ loading }),
  handleAsyncOperation: async (asyncFunction) => {
    try {
      set({ loading: statusEnum.LOADING });
      await asyncFunction();
      set({ loading: statusEnum.LOADED });
    } catch (error) {
      set({ loading: statusEnum.ERROR });
    }
  },
}));
