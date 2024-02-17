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
