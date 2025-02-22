import axios from "axios";
import perf from "@react-native-firebase/perf";
import firestore from "@react-native-firebase/firestore";

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

//FIREBASE
export const getChurchesFromFirebase = async () => {
  const trace = await perf().startTrace("fs_get_churches_trace");
  try {
    const response = await firestore()
      .collection("Users")
      .where("role", "==", "church")
      .get();
    return response;
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    await trace.stop();
  }
};

export const getChurchesFromFirebaseByKeyword = async (keyword: string) => {
  const trace = await perf().startTrace("fs_get_church_by_keyword_trace");
  try {
    const response = await firestore()
      .collection("Users")
      .where("role", "==", "church")
      .where("firstName", "==", keyword)
      .get();
    return response;
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    await trace.stop();
  }
};

export const getChurchesFromFirebaseByMetadata = async (
  churchName: string,
  churchState: string,
  churchCity: string,
  churchAddress: string
) => {
  const trace = await perf().startTrace("fs_get_church_by_metadata_trace");
  try {
    const response = await firestore()
      .collection("Users")
      .where("role", "==", "church")
      .where("firstName", "==", churchName)
      .where("state", "==", churchState)
      .where("city", "==", churchCity)
      .where("address", "==", churchAddress)
      .get();
    return response;
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    await trace.stop();
  }
};

export const getChurchesFromFirebaseByID = async (churchID: string) => {
  const trace = await perf().startTrace("fs_get_church_by_id_trace");
  try {
    const response = await firestore()
      .collection("Users")
      .where("role", "==", "church")
      .where("userID", "==", churchID)
      .get();
    return response;
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    await trace.stop();
  }
};
