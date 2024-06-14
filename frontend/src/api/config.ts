import { LS_ACCESS_TOKEN } from "@/constants/localStorage";
import axios from "axios";

// Get the base URL from an environment variable
const baseURL = import.meta.env.VITE_API_SERVER_ADDR + "/api";
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

      const res = await fetcher.post("/auth/refresh/");
      const newAccessToken = res.data.access_token;

      localStorage.setItem(LS_ACCESS_TOKEN, newAccessToken);

      return fetcher(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default fetcher;
