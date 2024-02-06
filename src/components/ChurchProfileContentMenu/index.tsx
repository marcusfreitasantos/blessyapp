import { useState, useEffect, useContext } from "react";
import { ChurchContentGlobalContext } from "@/contexts/currentChurchContent";

import { HStack } from "@gluestack-ui/themed";
import ButtonComponent from "../Button";

const ChurchProfileContentMenu = () => {
  const { setCurrentChurchContentCategory } = useContext(
    ChurchContentGlobalContext
  );

  const [currentSelectedButton, setCurrentSelectedButton] = useState("buttonA");

  const handleClick = (content: string, currentButton: string) => {
    setCurrentChurchContentCategory(content);
    setCurrentSelectedButton(currentButton);
  };

  return (
    <HStack space="sm" w="100%" justifyContent="space-between" my={20}>
      <ButtonComponent
        variant="outline"
        buttonText="Notícias"
        action={currentSelectedButton === "buttonA" ? "primary" : "secondary"}
        onPress={() => handleClick("news", "buttonA")}
      />

      <ButtonComponent
        variant="outline"
        buttonText="Liturgia"
        action={currentSelectedButton === "buttonB" ? "primary" : "secondary"}
        onPress={() => handleClick("liturgy", "buttonB")}
      />

      <ButtonComponent
        variant="outline"
        buttonText="Eventos"
        action={currentSelectedButton === "buttonC" ? "primary" : "secondary"}
        onPress={() => handleClick("events", "buttonC")}
      />
    </HStack>
  );
};

export default ChurchProfileContentMenu;
