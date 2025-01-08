import axios from "axios";

export const wpApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL,
});
