import { Stack } from "expo-router";

const ContentStack = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="news/index"
        options={{
          headerShown: true,
          title: "Criar conteúdo",
          headerTitleStyle: { color: "#575757", fontWeight: "bold" },
        }}
      />
    </Stack>
  );
};

export default ContentStack;
