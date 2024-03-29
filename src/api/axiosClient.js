import axios from "axios";

import { apiConfig } from "./apiConfig";

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => config);
axiosClient.interceptors.response.use(
  async (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);

export { axiosClient };
