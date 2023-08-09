import create from "zustand";

import { statusEnum } from "utils/enums";

export const useStatusStore = create((set) => ({
  status: statusEnum.IDLE,
  handleAsyncOperation: async (asyncFunction) => {
    try {
      set({ status: statusEnum.LOADING });
      await asyncFunction();
      set({ status: statusEnum.LOADED });
    } catch (error) {
      set({ status: statusEnum.ERROR });
    }
  },
}));
