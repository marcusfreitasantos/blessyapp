import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import ProfileSubMenu from "@/components/ProfileSubMenu";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={ProfileSubMenu}
        screenOptions={{
          headerShown: false,
        }}
      ></Drawer>
    </GestureHandlerRootView>
  );
}
