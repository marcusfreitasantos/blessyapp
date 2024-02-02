import { createContext, useState, ReactNode } from "react";

type currentChurchContentProps = {
  currentChurchContentCategory: string;
  setCurrentChurchContentCategory: React.Dispatch<React.SetStateAction<string>>;
};

type ChurchContentDataProviderProps = {
  children: ReactNode;
};

export const ChurchContentGlobalContext =
  createContext<currentChurchContentProps>({
    currentChurchContentCategory: "",
    setCurrentChurchContentCategory: () => {},
  });

const ChurchContentDataProvider = ({
  children,
}: ChurchContentDataProviderProps) => {
  const [currentChurchContentCategory, setCurrentChurchContentCategory] =
    useState("");

  return (
    <ChurchContentGlobalContext.Provider
      value={{ currentChurchContentCategory, setCurrentChurchContentCategory }}
    >
      {children}
    </ChurchContentGlobalContext.Provider>
  );
};

export default ChurchContentDataProvider;
