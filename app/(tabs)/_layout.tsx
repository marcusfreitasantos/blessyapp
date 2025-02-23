import { useContext } from "react";
import { GlobalContext } from "@/contexts/currentUserContext";
import { Tabs, Redirect } from "expo-router";
import {
  Home,
  Search,
  Heart,
  User,
  Bell,
  PlusCircle,
} from "lucide-react-native";
import { gluestackUIConfig } from "config/gluestack-ui.config";

const TabsLayout = () => {
  const { userObj } = useContext(GlobalContext);
  if (!userObj.token) {
    return <Redirect href="/" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        unmountOnBlur: true,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarActiveTintColor:
            gluestackUIConfig.tokens.colors.blessyPrimaryColor,
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />

      <Tabs.Screen
        name="search/index"
        options={{
          headerTitle: "Pesquisar",
          tabBarActiveTintColor:
            gluestackUIConfig.tokens.colors.blessyPrimaryColor,
          tabBarIcon: ({ color, size }) => <Search color={color} size={size} />,
        }}
      />

      <Tabs.Screen
        name="bookmarks/index"
        options={{
          headerTitle: "Favoritos",
          tabBarActiveTintColor:
            gluestackUIConfig.tokens.colors.blessyPrimaryColor,
          tabBarIcon: ({ color, size }) => <Heart color={color} size={size} />,
        }}
      />

      <Tabs.Screen
        name="profile/index"
        options={{
          headerTitle: "Perfil",
          tabBarActiveTintColor:
            gluestackUIConfig.tokens.colors.blessyPrimaryColor,
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />

      <Tabs.Screen
        name="notifications/index"
        options={{
          headerTitle: "Notificações",
          tabBarActiveTintColor:
            gluestackUIConfig.tokens.colors.blessyPrimaryColor,
          tabBarIcon: ({ color, size }) => <Bell color={color} size={size} />,
        }}
      />

      <Tabs.Screen
        name="content"
        options={{
          headerTitle: "Criar Conteúdo",
          tabBarActiveTintColor:
            gluestackUIConfig.tokens.colors.blessyPrimaryColor,
          tabBarIcon: ({ color, size }) => (
            <PlusCircle color={color} size={size} />
          ),
          href: userObj.role === "church" ? "/content" : null,
        }}
      />

      <Tabs.Screen
        name="church/[id]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
