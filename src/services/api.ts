import axios from "axios";

export const wpApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL,
});

export const authUser = (username: string, password: string) => {
  const jwtAuthResponse = axios.post(`${process.env.EXPO_PUBLIC_AUTH_URL}`, {
    username,
    password,
  });

  return jwtAuthResponse;
};

export const validateToken = (token: string) => {
  const jwtAuthResponse = axios.post(
    `${process.env.EXPO_PUBLIC_VALIDATE_TOKEN}`,
    {
      token,
    }
  );

  return jwtAuthResponse;
};

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
