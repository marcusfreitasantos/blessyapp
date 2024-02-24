import { useState, useContext, useRef } from "react";
import { ChurchContentGlobalContext } from "@/contexts/currentChurchContent";
import { HStack, ScrollView, Box } from "@gluestack-ui/themed";
import ButtonComponent from "../Button";

type contentCategoriesGroupProps = {
  getContent: (content: string) => void;
  contentCategoriesGroup: {
    name: string;
    buttonText: string;
  }[];
};

const ChurchProfileContentMenu = ({
  getContent,
  contentCategoriesGroup,
}: contentCategoriesGroupProps) => {
  const { setCurrentChurchContentCategory } = useContext(
    ChurchContentGlobalContext
  );

  const scrollRef = useRef();

  const [currentSelectedButton, setCurrentSelectedButton] =
    useState("button_0");

  const autoScrollMenuItems = (currentButtonIndex: number) => {
    if (scrollRef.current) {
      if (currentButtonIndex === contentCategoriesGroup.length - 1) {
        scrollRef.current.scrollToEnd();
      } else {
        scrollRef.current.scrollTo({
          x: 0,
          y: 0,
        });
      }
    }
  };

  const handleClick = (
    content: string,
    currentButton: string,
    currentButtonIndex: number
  ) => {
    getContent(content);
    setCurrentChurchContentCategory(content);
    setCurrentSelectedButton(currentButton);
    autoScrollMenuItems(currentButtonIndex);
  };

  const buttonsWidth = 140;

  return (
    <HStack space="sm" w="100%" justifyContent="space-between" my={20}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
      >
        {contentCategoriesGroup.map((item, index) => {
          return (
            <Box w={buttonsWidth} mr={5} key={item.name}>
              <ButtonComponent
                variant="outline"
                buttonText={item.buttonText}
                action={
                  currentSelectedButton === `button_${index}`
                    ? "primary"
                    : "secondary"
                }
                onPress={() => handleClick(item.name, `button_${index}`, index)}
              />
            </Box>
          );
        })}
      </ScrollView>
    </HStack>
  );
};

export default ChurchProfileContentMenu;
