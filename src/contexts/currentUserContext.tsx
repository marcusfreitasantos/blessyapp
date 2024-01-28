import { createContext, useState, ReactNode } from "react";

type tokenProps = {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
};

type UserDataProviderProps = {
  children: ReactNode;
};

export const GlobalContext = createContext<tokenProps>({
  token: "",
  setToken: () => {},
});

const UserDataProvider = ({ children }: UserDataProviderProps) => {
  const [token, setToken] = useState("");

  return (
    <GlobalContext.Provider value={{ token, setToken }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default UserDataProvider;
