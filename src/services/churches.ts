import axios from "axios";

export const getChurches = () => {
  const churchesList = axios.get(`${process.env.EXPO_PUBLIC_BASE_URL}/church`);
  return churchesList;
};
