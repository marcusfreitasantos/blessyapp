import { createContext, useState, ReactNode } from "react";

type tokenProps = {
  userObj: {
    token: string;
    userID: number;
    email: string;
    firstName: string;
    lastName: string;
  };
  setUserObj: React.Dispatch<
    React.SetStateAction<{
      token: string;
      userID: number;
      email: string;
      firstName: string;
      lastName: string;
    }>
  >;
};

type UserDataProviderProps = {
  children: ReactNode;
};

export const GlobalContext = createContext<tokenProps>({
  userObj: {
    token: "",
    userID: 0,
    email: "",
    firstName: "",
    lastName: "",
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
  });

  return (
    <GlobalContext.Provider value={{ userObj, setUserObj }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default UserDataProvider;
