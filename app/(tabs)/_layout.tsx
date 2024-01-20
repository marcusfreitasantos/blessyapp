import { useContext } from "react";
import { GlobalContext } from "@/contexts/currentUserContext";
import { Tabs, Redirect } from "expo-router";

const TabsLayout = () => {
  const { token } = useContext(GlobalContext);

  if (!token) {
    return <Redirect href="/" />;
  }

  return (
    <Tabs>
      <Tabs.Screen
        name="home/index"
        options={{
          headerTitle: "Home",
          title: "Home",
        }}
      />

      <Tabs.Screen
        name="search/index"
        options={{
          headerTitle: "Pesquisar",
          title: "Pesquisar",
        }}
      />

      <Tabs.Screen
        name="bookmarks/index"
        options={{
          headerTitle: "Favoritos",
          title: "Favoritos",
        }}
      />

      <Tabs.Screen
        name="profile/index"
        options={{
          headerTitle: "Perfil",
          title: "Perfil",
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
