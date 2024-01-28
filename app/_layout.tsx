import UserDataProvider from "@/contexts/currentUserContext";
import { Stack } from "expo-router";
import { GluestackUIProvider, StatusBar } from "@gluestack-ui/themed";
import { config } from "../config/gluestack-ui.config";
import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from "@expo-google-fonts/ubuntu";

const RootLayout = () => {
  let [fontsLoaded, fontError] = useFonts({
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <UserDataProvider>
      <GluestackUIProvider config={config}>
        <StatusBar barStyle="light-content" />
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="sign-up" options={{ headerShown: false }} />
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </GluestackUIProvider>
    </UserDataProvider>
  );
};

export default RootLayout;
