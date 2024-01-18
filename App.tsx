import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { config } from "./config/gluestack-ui.config";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Box>
          <Text>BLESSY</Text>
          <StatusBar style="auto" />
        </Box>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
