import { useContext, useEffect, useState } from "react";
import { Stack } from "expo-router";
import { ChurchContentGlobalContext } from "@/contexts/currentChurchContent";

const ChurchContentTypeStacks = () => {
  const { currentChurchContentCategory, showMusicsGroup } = useContext(
    ChurchContentGlobalContext
  );

  const [translatedCategory, setTranslatedCategory] = useState("");

  const translateCurrentChurchContentCategory = () => {
    switch (currentChurchContentCategory) {
      case "news":
        setTranslatedCategory("Notícias");
        break;
      case "liturgy":
        setTranslatedCategory("Liturgia");
        break;

      case "event":
        setTranslatedCategory("Eventos");
        break;
    }
  };

  useEffect(() => {
    translateCurrentChurchContentCategory();
  }, [currentChurchContentCategory]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="[contentType]/[contentId]"
        options={{
          headerShown: !showMusicsGroup,
          title: translatedCategory,
          headerTitleStyle: { color: "#575757", fontWeight: "bold" },
        }}
      />
    </Stack>
  );
};

export default ChurchContentTypeStacks;
