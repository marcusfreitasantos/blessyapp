import { createContext, useState, ReactNode } from "react";

type UserDataTypes = {
  userID: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  bookmarks: number[];
  role: string;
};

type CurrentUserProps = {
  userObj: UserDataTypes | null;
  setUserObj: React.Dispatch<React.SetStateAction<UserDataTypes | null>>;
};

type UserDataProviderProps = {
  children: ReactNode;
};

export const GlobalContext = createContext<CurrentUserProps>({
  userObj: null,
  setUserObj: () => {}, // This remains a no-op function for default value
});

const UserDataProvider = ({ children }: UserDataProviderProps) => {
  const [userObj, setUserObj] = useState<UserDataTypes | null>(null);

  return (
    <GlobalContext.Provider value={{ userObj, setUserObj }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default UserDataProvider;
