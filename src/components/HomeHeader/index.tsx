import { useState } from "react";
import { HStack, VStack, Box } from "@gluestack-ui/themed";
import InputComponent from "../Input";
import { Bell, Search } from "lucide-react-native";
import AvatarImgText from "../Avatar";

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
        <AvatarImgText
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

        <Bell color="#aaa" onPress={openNotificationsMenu} />
      </HStack>
    </VStack>
  );
};

export default HomeHeader;
