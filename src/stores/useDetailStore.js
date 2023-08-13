import { create } from "zustand";
import { apiRoutesEnum } from "utils/enums";
import { axiosClient } from "api";

export const useDetailStore = create((set) => ({
  item: null,
  graphData: [],

  reset: () => {
    set({ graphData: [], item: null });
  },

  fetch: async (category = "", id) => {
    try {
      const categoryEnum = category.toUpperCase();
      const { data } = await axiosClient(
        `${apiRoutesEnum[categoryEnum].DETAILS}/${id}`
      );

      const graphData = data.graph || null;
      const item = data?.data || data;

      set({ item, graphData });
    } catch (error) {
      console.error("Error fetching data:", error);
      set({
        item: null,
      });
    }
  },
}));
