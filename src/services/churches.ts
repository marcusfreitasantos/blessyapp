import perf from "@react-native-firebase/perf";
import firestore from "@react-native-firebase/firestore";

//FIREBASE
export const getChurchesFromFirebase = async () => {
  const trace = await perf().startTrace("fs_get_churches_trace");
  try {
    const response = await firestore()
      .collection("Users")
      .where("role", "==", "church")
      .get();

    trace.putAttribute("status", "success");

    return response;
  } catch (e: any) {
    trace.putAttribute("status", "error");
    trace.putAttribute("error_message", e.message ?? "unknown");
    console.log("Error: ", e);
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

    trace.putAttribute("status", "success");

    return response;
  } catch (e: any) {
    trace.putAttribute("status", "error");
    trace.putAttribute("error_message", e.message ?? "unknown");
    console.log("Error: ", e);
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

    trace.putAttribute("status", "success");

    return response;
  } catch (e: any) {
    trace.putAttribute("status", "error");
    trace.putAttribute("error_message", e.message ?? "unknown");
    console.log("Error: ", e);
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

    trace.putAttribute("status", "success");

    return response;
  } catch (e: any) {
    trace.putAttribute("status", "error");
    trace.putAttribute("error_message", e.message ?? "unknown");
    console.log("Error: ", e);
  } finally {
    await trace.stop();
  }
};

export const getChurchContentFromFirebase = async (
  churchID: string,
  contentCategory: string
) => {
  const trace = await perf().startTrace("fs_get_church_content_trace");
  try {
    const response = await firestore()
      .collection(contentCategory)
      .where("authorID", "==", churchID)
      .where("postStatus", "==", "publish")
      .get();

    trace.putAttribute("status", "success");

    return response;
  } catch (e: any) {
    trace.putAttribute("status", "error");
    trace.putAttribute("error_message", e.message ?? "unknown");
    console.log("Error: ", e);
  } finally {
    await trace.stop();
  }
};

export const getChurchSingleContentFromFirebaseById = async (
  contentCategory: string,
  contentID: string
) => {
  const trace = await perf().startTrace("fs_get_church_single_content_trace");
  try {
    const response = await firestore()
      .collection(contentCategory)
      .doc(contentID)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          return documentSnapshot.data();
        } else {
          return `Erro. Documento [${contentID}] não encontrado`;
        }
      });

    trace.putAttribute("status", "success");

    return response;
  } catch (e: any) {
    trace.putAttribute("status", "error");
    trace.putAttribute("error_message", e.message ?? "unknown");
    console.log("Error: ", e);
  } finally {
    await trace.stop();
  }
};
