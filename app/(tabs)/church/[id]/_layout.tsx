import { useContext } from "react";
import { Stack } from "expo-router";
import { ChurchContentGlobalContext } from "@/contexts/currentChurchContent";

const ChurchContentTypeStacks = () => {
  const { currentChurchContentCategory } = useContext(
    ChurchContentGlobalContext
  );

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="[contentType]/[id]"
        options={{
          headerShown: true,
          title: currentChurchContentCategory.toUpperCase(),
        }}
      />
    </Stack>
  );
};

export default ChurchContentTypeStacks;
