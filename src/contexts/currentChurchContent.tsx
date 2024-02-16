import { createContext, useState, ReactNode } from "react";

type currentChurchContentProps = {
  currentChurchContentCategory: string;
  setCurrentChurchContentCategory: React.Dispatch<React.SetStateAction<string>>;
  showMusicsGroup: boolean;
  setShowMusicsGroup: React.Dispatch<React.SetStateAction<boolean>>;
};

type ChurchContentDataProviderProps = {
  children: ReactNode;
};

export const ChurchContentGlobalContext =
  createContext<currentChurchContentProps>({
    currentChurchContentCategory: "",
    setCurrentChurchContentCategory: () => {},
    showMusicsGroup: false,
    setShowMusicsGroup: () => false,
  });

const ChurchContentDataProvider = ({
  children,
}: ChurchContentDataProviderProps) => {
  const [currentChurchContentCategory, setCurrentChurchContentCategory] =
    useState("news");

  const [showMusicsGroup, setShowMusicsGroup] = useState(false);

  return (
    <ChurchContentGlobalContext.Provider
      value={{
        currentChurchContentCategory,
        setCurrentChurchContentCategory,
        showMusicsGroup,
        setShowMusicsGroup,
      }}
    >
      {children}
    </ChurchContentGlobalContext.Provider>
  );
};

export default ChurchContentDataProvider;
