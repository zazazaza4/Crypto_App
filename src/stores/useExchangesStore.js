import { create } from "zustand";

import { axiosClient } from "api";
import { apiRoutesEnum } from "utils/enums";

export const useExchangesStore = create((set) => ({
  list: [],
  filteredList: [],
  query: "",
  error: true,
  canLoadMore: false,

  setQuery: (value) => {
    const newQuery = value;
    set({ query: newQuery });
    useExchangesStore.getState().search(newQuery);
  },

  search: (query) => {
    const filteredList = useExchangesStore
      .getState()
      .list.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );

    set({ filteredList });
  },

  fetchList: async () => {
    try {
      const { data } = await axiosClient.get(apiRoutesEnum.EXCHANGES.LIST);

      set({ list: data });
    } catch (error) {
      set({ error: true });
    }
  },
}));
