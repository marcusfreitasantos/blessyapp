import { useState } from "react";
import { HStack, VStack, Box, Pressable, Icon } from "@gluestack-ui/themed";
import InputComponent from "../Input";
import { Bell, Search } from "lucide-react-native";
import Avatar from "../Avatar";

const HomeHeader = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Searching..");
  };

  const openNotificationsMenu = () => {
    console.log("Notifications");
  };

  return (
    <VStack bg="#fff" pt={50} pb={10} px={20} alignItems="center">
      <HStack
        w="100%"
        space="md"
        alignItems="center"
        justifyContent="space-between"
      >
        <Avatar
          avatarImg="https://github.com/marcusfreitasantos.png"
          avatarTitle="Marcus Freitas"
        />

        <Box w="70%">
          <InputComponent
            inputIcon={Search}
            inputType="text"
            inputPlaceholder="Pesquisar"
            inputValue={searchTerm}
            onChangeText={(t) => setSearchTerm(t)}
          />
        </Box>

        <Pressable onPress={openNotificationsMenu}>
          <Icon as={Bell} size="xl" color="$secondary400" />
        </Pressable>
      </HStack>
    </VStack>
  );
};

export default HomeHeader;
