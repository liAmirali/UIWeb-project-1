import { LS_ACCESS_TOKEN, LS_REFRESH_TOKEN } from "@/constants/localStorage";
import { API_SERVER_ADDR } from "@/constants/urls";
import axios from "axios";

// Get the base URL from an environment variable
const baseURL = API_SERVER_ADDR + "/api";
console.log("baseUrl:", baseURL);

// Create an instance of Axios with the base URL
const fetcher = axios.create({
  baseURL,
});

// Attaching the token to the request header
fetcher.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(LS_ACCESS_TOKEN);

  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

// Refreshing access token if it's expired
fetcher.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem(LS_REFRESH_TOKEN);
      const res = await fetcher.post("/auth/refresh/", { refresh: refreshToken });
      const newAccessToken = res.data.access;

      localStorage.setItem(LS_ACCESS_TOKEN, newAccessToken);

      return fetcher(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default fetcher;
