import { useState, useEffect, useContext } from "react";
import { ChurchContentGlobalContext } from "@/contexts/currentChurchContent";

import { HStack, ScrollView, Box } from "@gluestack-ui/themed";
import ButtonComponent from "../Button";

const ChurchProfileContentMenu = () => {
  const { setCurrentChurchContentCategory } = useContext(
    ChurchContentGlobalContext
  );

  const contentCategoriesGroup = [
    {
      name: "news",
      buttonText: "Notícias",
    },
    {
      name: "liturgy",
      buttonText: "Liturgia",
    },

    {
      name: "events",
      buttonText: "Eventos",
    },
  ];

  const [currentSelectedButton, setCurrentSelectedButton] =
    useState("button_0");

  const handleClick = (content: string, currentButton: string) => {
    setCurrentChurchContentCategory(content);
    setCurrentSelectedButton(currentButton);
  };

  const buttonsWidth = 140;

  return (
    <HStack space="sm" w="100%" justifyContent="space-between" my={20}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {contentCategoriesGroup.map((item, index) => {
          return (
            <Box w={buttonsWidth} mr={5}>
              <ButtonComponent
                key={item.name}
                variant="outline"
                buttonText={item.buttonText}
                action={
                  currentSelectedButton === `button_${index}`
                    ? "primary"
                    : "secondary"
                }
                onPress={() => handleClick(item.name, `button_${index}`)}
              />
            </Box>
          );
        })}
      </ScrollView>
    </HStack>
  );
};

export default ChurchProfileContentMenu;
