import { categoryEnum } from "utils/enums";
import { useStatusStore } from "./statusStore";
import { useCoinsStore } from "./useCoinsStore";
import { useDetailStore } from "./useDetailStore";
import { useExchangeStore } from "./useExchangeStore";

export { useExchangeStore, useCoinsStore, useDetailStore, useStatusStore };

export const storesCategory = {
  [categoryEnum.COINS]: useCoinsStore,
  [categoryEnum.EXCHANGE]: useExchangeStore,
};
