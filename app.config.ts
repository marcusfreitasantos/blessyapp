import { ExpoConfig } from "@expo/config";

const config: ExpoConfig = {
  name: "Blessy",
  slug: "blessyapp",
  scheme: "blessyapp",
  version: "1.3.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#45B7D0",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    googleServicesFile: process.env.EXPO_PUBLIC_GOOGLE_SERVICES_JSON,
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#45B7D0",
    },
    package: "com.blessyapp",
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    eas: {
      projectId: "ea43554e-5e38-46c3-9f9c-16155f5e6f7e",
    },
  },
  runtimeVersion: {
    policy: "appVersion",
  },
  updates: {
    url: "https://u.expo.dev/ea43554e-5e38-46c3-9f9c-16155f5e6f7e",
  },
  plugins: [
    "@react-native-firebase/app",
    "@react-native-firebase/messaging",
    "expo-router",
    "expo-image-picker",
    [
      "expo-font",
      {
        fonts: [
          "node_modules/@expo-google-fonts/ubuntu/Ubuntu_300Light.ttf",
          "node_modules/@expo-google-fonts/ubuntu/Ubuntu_400Regular.ttf",
          "node_modules/@expo-google-fonts/ubuntu/Ubuntu_500Medium.ttf",
          "node_modules/@expo-google-fonts/ubuntu/Ubuntu_700Bold.ttf",
        ],
      },
    ],
  ],
};

export default config;
