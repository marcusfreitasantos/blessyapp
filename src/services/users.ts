import perf from "@react-native-firebase/perf";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

export const getUserDataFromFirebase = async (userID: string) => {
  const trace = await perf().startTrace("fs_get_user_data_trace");
  try {
    const response = await firestore()
      .collection("Users")
      .where("userID", "==", userID)
      .get();

    trace.putAttribute("status", "success");

    return response;
  } catch (e: any) {
    trace.putAttribute("status", "error");
    trace.putAttribute("error_message", e.message ?? "unknown");
    throw new Error(e);
  } finally {
    await trace.stop();
  }
};

export const loginUserWithFirebase = async (
  email: string,
  password: string
) => {
  const trace = await perf().startTrace("fs_login_user_trace");
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);

    if (response.user.uid) {
      trace.putAttribute("status", "success");

      const userData = await getUserDataFromFirebase(response.user.uid);
      return userData;
    }

    trace.putAttribute("status", "no_uid");
  } catch (e: any) {
    trace.putAttribute("status", "error");
    trace.putAttribute("error_message", e.message ?? "unknown");
    throw new Error(e);
  } finally {
    await trace.stop();
  }
};

const saveUserDataInFirebaseCollection = async (
  userID: string,
  email: string,
  firstName: string,
  lastName: string,
  role: string
) => {
  const trace = await perf().startTrace("fs_save_user_data_trace");
  try {
    const payload = {
      userID,
      email,
      firstName,
      lastName,
      role,
    };

    trace.putMetric("payload_size", JSON.stringify(payload).length);
    trace.putAttribute("status", "success");

    const response = await firestore().collection("Users").add(payload);
    return response;
  } catch (e: any) {
    trace.putAttribute("status", "error");
    trace.putAttribute("error_message", e.message ?? "unknown");
    throw new Error(e);
  } finally {
    await trace.stop();
  }
};

export const createUserWithFirebase = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  role: string
) => {
  const trace = await perf().startTrace("fs_create_user_trace");
  try {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password
    );

    if (response.user.uid) {
      const newUserRegistered = await saveUserDataInFirebaseCollection(
        response.user.uid,
        email,
        firstName,
        lastName,
        role
      );

      trace.putAttribute("status", "success");

      return newUserRegistered;
    }

    trace.putAttribute("status", "no_uid");
  } catch (e: any) {
    trace.putAttribute("status", "error");
    trace.putAttribute("error_message", e.message ?? "unknown");
    console.log("error creating user", e);
    throw new Error(e);
  } finally {
    await trace.stop();
  }
};
