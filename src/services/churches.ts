import axios from "axios";

export const getChurches = () => {
  try {
    const response = axios.get(`${process.env.EXPO_PUBLIC_BASE_URL}/church`);
    return response;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const getChurchById = (churchId: string | string[] | undefined) => {
  try {
    const response = axios.get(
      `${process.env.EXPO_PUBLIC_BASE_URL}/church/${churchId}`
    );
    return response;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const getChurchContent = (
  churchId: string | string[] | undefined,
  contentType: string
) => {
  try {
    const response = axios.get(
      `${process.env.EXPO_PUBLIC_BASE_URL}/church/${churchId}/${contentType}`
    );
    return response;
  } catch (error) {
    console.log("Error: ", error);
  }
};
