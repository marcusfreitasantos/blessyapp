import { createContext, useState, ReactNode } from "react";

type currentUserProps = {
  userObj: {
    token: string;
    userID: number;
    email: string;
    firstName: string;
    lastName: string;
    avatar: string;
    bookmarks: number[];
    role: string;
  };
  setUserObj: React.Dispatch<
    React.SetStateAction<{
      token: string;
      userID: number;
      email: string;
      firstName: string;
      lastName: string;
      avatar: string;
      bookmarks: number[];
      role: string;
    }>
  >;
};

type UserDataProviderProps = {
  children: ReactNode;
};

export const GlobalContext = createContext<currentUserProps>({
  userObj: {
    token: "",
    userID: 0,
    email: "",
    firstName: "",
    lastName: "",
    avatar: "",
    bookmarks: [0],
    role: "subscriber",
  },
  setUserObj: () => {},
});

const UserDataProvider = ({ children }: UserDataProviderProps) => {
  const [userObj, setUserObj] = useState({
    token: "",
    userID: 0,
    email: "",
    firstName: "",
    lastName: "",
    avatar: "",
    bookmarks: [0],
    role: "subscriber",
  });

  return (
    <GlobalContext.Provider value={{ userObj, setUserObj }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default UserDataProvider;
