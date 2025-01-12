import axios from "axios";
import perf from "@react-native-firebase/perf";

export const authUser = async (username: string, password: string) => {
  const trace = await perf().startTrace("auth_user_trace");

  try {
    const jwtAuthResponse = axios.post(`${process.env.EXPO_PUBLIC_AUTH_URL}`, {
      username,
      password,
    });

    return jwtAuthResponse;
  } catch (e: any) {
    throw new Error(e.message);
  } finally {
    await trace.stop();
  }
};

export const validateToken = (token: string) => {
  const jwtAuthResponse = axios.post(
    `${process.env.EXPO_PUBLIC_VALIDATE_TOKEN}`,
    "",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return jwtAuthResponse;
};

export const createUser = async (
  username: string,
  userEmail: string,
  userPass: string,
  userFullName: string,
  role: string
) => {
  const trace = await perf().startTrace("create_user_trace");

  try {
    const createdUser = axios.post(
      `${process.env.EXPO_PUBLIC_BASE_URL}/users`,
      {
        username,
        userEmail,
        userPass,
        userFullName,
        role,
      }
    );

    return createdUser;
  } catch (e: any) {
    throw new Error(e.message);
  } finally {
    await trace.stop();
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
