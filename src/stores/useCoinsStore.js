import { create } from "zustand";

import { axiosClient } from "api";
import { debounce } from "utils/helpers/debounce";
import { apiRoutesEnum } from "utils/enums";

export const useCoinsStore = create((set) => ({
  trending: [],
  list: [],
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
      const { query, list } = useCoinsStore.getState();

      if (query.length > 1) {
        const { data } = await axiosClient.get(
          `${apiRoutesEnum.COINS.SEARCH}?query=${query}`
        );

        const coins = data.map((coin) => {
          const { name, large, id } = coin;
          return {
            name,
            image: large,
            id,
          };
        });
        set({ coins });
      } else {
        set({ coins: list, searching: false, searched: false });
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
    const { page } = useCoinsStore.getState();
    useCoinsStore.getState().fetchList(page + 1);
  },

  fetchList: async () => {
    try {
      const limit = useCoinsStore.getState().limit;

      const { data } = await axiosClient.get(apiRoutesEnum.COINS.LIST, {
        params: {
          page: useCoinsStore.getState().page,
          per_page: limit,
        },
      });

      const list = data.map(({ id, name, current_price, image }) => {
        return {
          id,
          name,
          price_usd: current_price,
          image,
        };
      });

      if (list.length < limit) {
        set({ canLoadMore: false });
      } else {
        set({ canLoadMore: true });
      }

      set({ list });
    } catch (error) {
      set({ error: true });
      set({ canLoadMore: false });

      console.error(error);
    }
  },
}));
