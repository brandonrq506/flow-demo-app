import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;
const API_URL = "http://localhost:3000/api";

export const apiV1 = axios.create({
  baseURL: `${API_URL}/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

// ENDPOINTS
export const PACKAGES_ENDPOINT = "/packages";
export const SESSION_ENDPOINT = "/session";
