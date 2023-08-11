import { create } from "zustand";

import { axiosClient } from "api";
import { apiRoutesEnum } from "utils/enums";

export const useExchangeStore = create((set) => ({
  list: [],
  query: "",
  canLoadMore: false,

  setQuery: (e, type) => {
    set({ query: e.target.value });
    useExchangeStore.getState().searchCoins();
  },

  search: () => {},

  fetchList: async () => {
    try {
      const { data } = await axiosClient.get(apiRoutesEnum.EXCHANGES.LIST);

      set({ list: data });
    } catch (error) {
      console.error(error);
    }
  },
}));
