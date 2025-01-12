import axios from "axios";
import perf from "@react-native-firebase/perf";

export const getChurches = async () => {
  const trace = await perf().startTrace("get_churches_trace");
  try {
    const response = axios.get(`${process.env.EXPO_PUBLIC_BASE_URL}/church`);
    return response;
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    await trace.stop();
  }
};

export const getChurchesAds = async () => {
  const trace = await perf().startTrace("get_church_ads_by_id_trace");
  try {
    const response = axios.get(`${process.env.EXPO_PUBLIC_BASE_URL}/church_ad`);
    return response;
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    await trace.stop();
  }
};

export const getChurchById = async (
  churchId: string | string[] | undefined
) => {
  const trace = await perf().startTrace("get_church_by_id_trace");
  try {
    const response = axios.get(
      `${process.env.EXPO_PUBLIC_BASE_URL}/church/${churchId}`
    );
    return response;
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    await trace.stop();
  }
};

export const getChurchContent = async (
  churchId: string | string[] | undefined,
  contentType: string
) => {
  const trace = await perf().startTrace("get_church_content_trace");
  try {
    const response = axios.get(
      `${process.env.EXPO_PUBLIC_BASE_URL}/church/${churchId}/content/${contentType}`
    );
    return response;
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    await trace.stop();
  }
};

export const getChurchSingleContentById = async (
  churchId: string | string[] | undefined,
  contentType: string | string[] | undefined,
  contentId: string | string[] | undefined
) => {
  const trace = await perf().startTrace("get_church_single_content_trace");
  try {
    const response = axios.get(
      `${process.env.EXPO_PUBLIC_BASE_URL}/church/${churchId}/content/${contentType}/${contentId}`
    );
    return response;
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    await trace.stop();
  }
};

export const getChurchesByKeyword = async (keyword: string) => {
  const trace = await perf().startTrace("get_church_by_keyword_trace");
  try {
    const response = axios.get(
      `${process.env.EXPO_PUBLIC_BASE_URL}/church/search/${keyword}`
    );
    return response;
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    await trace.stop();
  }
};

export const getChurchesByMetadata = async (
  churchName: string,
  churchState: string,
  churchCity: string,
  churchAddress: string
) => {
  const trace = await perf().startTrace("get_church_by_metadata_trace");

  try {
    const response = axios.get(
      `${process.env.EXPO_PUBLIC_BASE_URL}/church/searchbymeta/?church_name=${churchName}&church_state=${churchState}&church_city=${churchCity}&church_address=${churchAddress}`
    );
    return response;
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    await trace.stop();
  }
};
