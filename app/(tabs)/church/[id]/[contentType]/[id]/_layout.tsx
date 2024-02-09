import { Stack } from "expo-router";

const MusicsDrawerScreen = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="eventMusics"
        options={{
          title: "Repertório musical",
          headerTitleStyle: { color: "#575757", fontWeight: "bold" },
          contentStyle: { backgroundColor: "white" },
        }}
      />
    </Stack>
  );
};

export default MusicsDrawerScreen;
