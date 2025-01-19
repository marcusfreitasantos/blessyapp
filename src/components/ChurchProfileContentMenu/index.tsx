import React, { useState, useContext, useRef } from "react";
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

type ScrollRefProps = {
  scrollToEnd: () => void;
  scrollTo: (options: { x: number; y: number }) => void;
};

const ChurchProfileContentMenu = ({
  getContent,
  contentCategoriesGroup,
}: contentCategoriesGroupProps) => {
  const { currentChurchContentCategory, setCurrentChurchContentCategory } =
    useContext(ChurchContentGlobalContext);

  const scrollRef = useRef<ScrollRefProps>();

  const autoScrollMenuItems = (currentButtonIndex: number) => {
    if (scrollRef.current) {
      if (
        currentButtonIndex === contentCategoriesGroup.length - 2 ||
        currentButtonIndex === contentCategoriesGroup.length - 1
      ) {
        scrollRef.current.scrollToEnd();
      } else {
        scrollRef.current.scrollTo({
          x: 0,
          y: 0,
        });
      }
    }
  };

  const handleClick = (content: string, currentButtonIndex: number) => {
    getContent(content);
    setCurrentChurchContentCategory(content);
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
                rounded
                variant="outline"
                buttonText={item.buttonText}
                action={
                  currentChurchContentCategory === item.name
                    ? "primary"
                    : "secondary"
                }
                onPress={() => handleClick(item.name, index)}
              />
            </Box>
          );
        })}
      </ScrollView>
    </HStack>
  );
};

export default ChurchProfileContentMenu;
