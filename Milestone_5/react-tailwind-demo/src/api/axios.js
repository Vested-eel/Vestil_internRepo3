// Making API Calls with Axios

import axios from "axios";

// Generate a request ID
const generateRequestId = () => Math.random().toString(36).substring(2, 10);

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // example API
  headers: {
    Accept: "*/*",
    "X-Request-ID": generateRequestId(),
  },
  timeout: 5000, // 5 seconds
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
