import { create } from "zustand";

import { axiosClient } from "api";
import { debounce } from "utils/helpers/debounce";
import { apiRoutesEnum } from "utils/enums";

export const useCoinsStore = create((set) => ({
  trending: [],
  list: [],
  filteredList: [],
  page: 1,
  limit: 30,
  canLoadMore: true,
  error: false,

  query: "",

  setQuery: (value) => {
    set({ query: value });
    useCoinsStore.getState().searchCoins();
  },

  searchCoins: debounce(async () => {
    try {
      const query = useCoinsStore.getState().query;

      if (query.length > 1) {
        const { data } = await axiosClient.get(
          `${apiRoutesEnum.COINS.SEARCH}?keyword=${query}`
        );

        set({ list: data, filteredList: data });
      } else {
        const list = useCoinsStore.getState().list;

        set({ list, filteredList: list });
      }
    } catch (error) {
      console.error("Error fetching coins:", error);
    }
  }, 500),

  fetchTrendingCoins: async () => {
    try {
      const { data } = await axiosClient.get(apiRoutesEnum.COINS.TRENDING);
      set({ trending: data });
    } catch (error) {
      console.error("Error searching coins:", error);
    }
  },

  loadMore: () => {
    const page = useCoinsStore.getState().page;
    set({ page: page + 1 });
    useCoinsStore.getState().fetchList(true);
  },

  fetchList: async (isNextPage = false) => {
    if (!isNextPage) {
      set({ page: 1 });
    }

    try {
      const limit = useCoinsStore.getState().limit;

      const { data } = await axiosClient.get(apiRoutesEnum.COINS.LIST, {
        params: {
          page: useCoinsStore.getState().page,
          per_page: limit,
        },
      });

      const newList = data.map(({ id, name, current_price, image }) => {
        return {
          id,
          name,
          price_usd: current_price,
          image,
        };
      });

      if (newList.length < limit) {
        set({ canLoadMore: false });
      } else {
        set({ canLoadMore: true });
      }

      let list = [];

      if (isNextPage) {
        const currentList = useCoinsStore.getState().list;
        list = [...currentList, ...newList];
      } else {
        list = newList;
      }

      set({ list, filteredList: list, error: false });
    } catch (error) {
      set({ error: true, canLoadMore: false });
      console.log(error);
    }
  },
}));
