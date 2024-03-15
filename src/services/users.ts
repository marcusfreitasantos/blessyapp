import axios from "axios";

export const createUser = (
  username: string,
  userEmail: string,
  userPass: string,
  userFullName: string
) => {
  const createdUser = axios.post(`${process.env.EXPO_PUBLIC_BASE_URL}/users`, {
    username,
    userEmail,
    userPass,
    userFullName,
  });

  return createdUser;
};

export const updateUserById = (
  userID: number,
  firstName: string,
  lastName: string,
  email: string,
  userPass: string
) => {
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
