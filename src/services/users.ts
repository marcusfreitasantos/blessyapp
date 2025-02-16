import axios from "axios";
import perf from "@react-native-firebase/perf";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
const usersCollection = firestore().collection("Users");

//FIREBASE GET USER DATA
export const getUserDataFromFirebase = async (userID: string) => {
  try {
    const response = await firestore()
      .collection("Users")
      .where("userID", "==", userID)
      .get();

    return response;
  } catch (e: any) {
    throw new Error(e);
  }
};

//FIREBASE AUTH
export const loginUserWithFirebase = async (
  email: string,
  password: string
) => {
  const trace = await perf().startTrace("fs_login_user_trace");
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    if (response.user.uid) {
      const userData = getUserDataFromFirebase(response.user.uid);
      return userData;
    }
  } catch (e: any) {
    throw new Error(e);
  } finally {
    trace.stop();
  }
};

//FIREBASE REGISTER USER
const saveUserDataInFirebaseCollection = async (
  userID: string,
  email: string,
  firstName: string,
  lastName: string,
  role: string
) => {
  try {
    const response = firestore().collection("Users").add({
      userID,
      email,
      firstName,
      lastName,
      role,
    });

    return response;
  } catch (e: any) {
    throw new Error(e);
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
      return newUserRegistered;
    }
  } catch (e: any) {
    console.log("error creating user", e);
    throw new Error(e);
  } finally {
    trace.stop();
  }
};

export const updateUserById = async (
  userID: number,
  firstName: string,
  lastName: string,
  email: string,
  userPass: string
) => {
  const trace = await perf().startTrace("update_user_trace");

  try {
    const updatedUser = axios.post(
      `${process.env.EXPO_PUBLIC_BASE_URL}/users/${userID}`,
      {
        firstName,
        lastName,
        email,
        userPass,
      }
    );

    return updatedUser;
  } catch (e: any) {
    throw new Error(e.message);
  } finally {
    await trace.stop();
  }
};

export const saveUserBookmarks = (userID: number, churchId: number) => {
  try {
    const response = axios.post(
      `${process.env.EXPO_PUBLIC_BASE_URL}/users/${userID}/bookmark`,
      {
        churchId,
      }
    );
    return response;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const removeUserBookmarks = (userID: number, churchId: number) => {
  try {
    const response = axios.delete(
      `${process.env.EXPO_PUBLIC_BASE_URL}/users/${userID}/bookmark/${churchId}`
    );
    return response;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const getUserBookmarks = (userID: number) => {
  try {
    const response = axios.get(
      `${process.env.EXPO_PUBLIC_BASE_URL}/users/${userID}/bookmark`
    );
    return response;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const saveUserDeviceToken = (
  userID: number,
  userDeviceToken: string
) => {
  try {
    const response = axios.post(
      `${process.env.EXPO_PUBLIC_BASE_URL}/users/${userID}/devices`,
      {
        userDeviceToken,
      }
    );
    return response;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const resetUserPassword = async (userEmail: string) => {
  const trace = await perf().startTrace("reset_user_password_trace");
  try {
    const response = axios.post(
      `${process.env.EXPO_PUBLIC_BASE_URL}/users/reset-password/`,
      {
        userEmail,
      }
    );
    return response;
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    await trace.stop();
  }
};

export const getUserNotifications = (userID: number) => {
  try {
    const response = axios.get(
      `${process.env.EXPO_PUBLIC_BASE_URL}/users/${userID}/notifications`
    );
    return response;
  } catch (error) {
    console.log("Error: ", error);
  }
};
