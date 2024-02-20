import axios from "axios";

export const getChurches = () => {
  try {
    const churchesList = axios.get(
      `${process.env.EXPO_PUBLIC_BASE_URL}/church`
    );
    return churchesList;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const getChurchById = (churchId: string | string[] | undefined) => {
  try {
    const churchesList = axios.get(
      `${process.env.EXPO_PUBLIC_BASE_URL}/church/${churchId}`
    );
    return churchesList;
  } catch (error) {
    console.log("Error: ", error);
  }
};
