import { useContext } from "react";
import { GlobalContext } from "@/contexts/currentUserContext";
import { Tabs, Redirect } from "expo-router";
import { Home, Search, Heart, User } from "lucide-react-native";

const TabsLayout = () => {
  const { token } = useContext(GlobalContext);

  if (!token) {
    return <Redirect href="/" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />

      <Tabs.Screen
        name="search/index"
        options={{
          headerTitle: "Pesquisar",
          tabBarIcon: ({ color, size }) => <Search color={color} size={size} />,
        }}
      />

      <Tabs.Screen
        name="bookmarks/index"
        options={{
          headerTitle: "Favoritos",
          tabBarIcon: ({ color, size }) => <Heart color={color} size={size} />,
        }}
      />

      <Tabs.Screen
        name="profile/index"
        options={{
          headerTitle: "Perfil",
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />

      <Tabs.Screen
        name="church/[id]/index"
        options={{
          href: null,
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
