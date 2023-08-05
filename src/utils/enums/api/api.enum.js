export const apiRoutesEnum = {
  EXCHANGES: {
    LIST: "/exchanges/list",
    TICKERS: "/exchanges/list/:id/tickers",
    VOLUME_CHART: "/exchanges/list/:id/volume_chart",
    DETAILS: "/exchanges/list/:id",
  },
  COINS: {
    LIST: "/coins/list",
    SEARCH: "/coins/search",
    TRENDING: "/coins/trending",
    DETAILS: "/coins/list/:id",
  },
};
