import axios from "axios";

export const getChurches = () => {
  try {
    const response = axios.get(`${process.env.EXPO_PUBLIC_BASE_URL}/church`);
    return response;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const getChurchesAds = () => {
  try {
    const response = axios.get(`${process.env.EXPO_PUBLIC_BASE_URL}/church_ad`);
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
      `${process.env.EXPO_PUBLIC_BASE_URL}/church/${churchId}/content/${contentType}`
    );
    return response;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const getChurchSingleContentById = (
  churchId: string | string[] | undefined,
  contentType: string | string[] | undefined,
  contentId: string | string[] | undefined
) => {
  try {
    const response = axios.get(
      `${process.env.EXPO_PUBLIC_BASE_URL}/church/${churchId}/content/${contentType}/${contentId}`
    );
    return response;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const getChurchesByKeyword = (keyword: string) => {
  try {
    const response = axios.get(
      `${process.env.EXPO_PUBLIC_BASE_URL}/church/search/${keyword}`
    );
    return response;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const getChurchesByMetadata = (
  churchName: string,
  churchState: string,
  churchCity: string,
  churchAddress: string
) => {
  try {
    const response = axios.get(
      `${process.env.EXPO_PUBLIC_BASE_URL}/church/searchbymeta/?church_name=${churchName}&church_state=${churchState}&church_city=${churchCity}&church_address=${churchAddress}`
    );
    return response;
  } catch (error) {
    console.log("Error: ", error);
  }
};
