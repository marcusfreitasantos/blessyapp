import UserDataProvider from "@/contexts/currentUserContext";
import ChurchContentDataProvider from "@/contexts/currentChurchContent";
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
      <ChurchContentDataProvider>
        <GluestackUIProvider config={config}>
          <StatusBar barStyle="dark-content" />
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="sign-up" options={{ headerShown: false }} />
            <Stack.Screen
              name="resetPassword"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(tabs)"
              options={{
                headerShown: false,
              }}
            />
          </Stack>
        </GluestackUIProvider>
      </ChurchContentDataProvider>
    </UserDataProvider>
  );
};

export default RootLayout;
