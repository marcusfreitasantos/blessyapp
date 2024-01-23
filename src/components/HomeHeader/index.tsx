import { HStack, Text, VStack, Box } from "@gluestack-ui/themed";
import InputComponent from "../Input";
import { Bell, Search } from "lucide-react-native";
import { useState } from "react";

const HomeHeader = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Searching..");
  };

  const openNotificationsMenu = () => {
    console.log("Notifications");
  };

  return (
    <VStack bg="#fff" pt={40} pb={10} px={20} alignItems="center">
      <HStack
        w="100%"
        space="md"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          fontSize="$md"
          bold
          backgroundColor="$primary500"
          p={8}
          rounded={8}
          color="#fff"
        >
          MF
        </Text>

        <Box w="60%">
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
