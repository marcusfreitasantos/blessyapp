import { useState, useEffect } from "react";
import { HStack } from "@gluestack-ui/themed";
import ButtonComponent from "../Button";

const ChurchProfileContentMenu = () => {
  const [currentContent, setCurrentContent] = useState("");
  const [currentSelectedButton, setCurrentSelectedButton] = useState("buttonA");

  const handleClick = (content: string, currentButton: string) => {
    setCurrentContent(content);
    setCurrentSelectedButton(currentButton);
  };

  useEffect(() => {
    console.log("currentContent: ", currentContent);
  }, [currentContent]);

  return (
    <HStack space="sm" w="100%" justifyContent="space-between">
      <ButtonComponent
        variant="outline"
        buttonText="Notícias"
        action={currentSelectedButton === "buttonA" ? "primary" : "secondary"}
        onPress={() => handleClick("Notícias", "buttonA")}
      />

      <ButtonComponent
        variant="outline"
        buttonText="Liturgia"
        action={currentSelectedButton === "buttonB" ? "primary" : "secondary"}
        onPress={() => handleClick("Liturgia", "buttonB")}
      />

      <ButtonComponent
        variant="outline"
        buttonText="Eventos"
        action={currentSelectedButton === "buttonC" ? "primary" : "secondary"}
        onPress={() => handleClick("Eventos", "buttonC")}
      />
    </HStack>
  );
};

export default ChurchProfileContentMenu;
