import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
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

      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="register"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
