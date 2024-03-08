import { createContext, useState, ReactNode } from "react";

type currentChurchContentProps = {
  currentChurchContentCategory: string;
  setCurrentChurchContentCategory: React.Dispatch<React.SetStateAction<string>>;
  showMusicsGroup: boolean;
  setShowMusicsGroup: React.Dispatch<React.SetStateAction<boolean>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
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
    searchTerm: "",
    setSearchTerm: () => {},
  });

const ChurchContentDataProvider = ({
  children,
}: ChurchContentDataProviderProps) => {
  const [currentChurchContentCategory, setCurrentChurchContentCategory] =
    useState("news");

  const [showMusicsGroup, setShowMusicsGroup] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ChurchContentGlobalContext.Provider
      value={{
        currentChurchContentCategory,
        setCurrentChurchContentCategory,
        showMusicsGroup,
        setShowMusicsGroup,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </ChurchContentGlobalContext.Provider>
  );
};

export default ChurchContentDataProvider;
