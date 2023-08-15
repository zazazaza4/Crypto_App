import { categoryEnum } from "utils/enums";
import { useStatusStore } from "./statusStore";
import { useCoinsStore } from "./useCoinsStore";
import { useDetailStore } from "./useDetailStore";
import { useExchangesStore } from "./useExchangesStore";

export { useExchangesStore, useCoinsStore, useDetailStore, useStatusStore };

export const storesCategory = {
  [categoryEnum.COINS]: useCoinsStore,
  [categoryEnum.EXCHANGES]: useExchangesStore,
};
