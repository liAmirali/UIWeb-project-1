import axios from "axios";

// Get the base URL from an environment variable
const baseURL = import.meta.env.VITE_API_SERVER_ADDR + "/api";
console.log("baseUrl:", baseURL)

// Create an instance of Axios with the base URL
const fetcher = axios.create({
  baseURL,
});

export default fetcher;
