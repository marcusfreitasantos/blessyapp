import { useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalContext } from "@/contexts/currentUserContext";
import { HStack, VStack, Box, Pressable, Icon } from "@gluestack-ui/themed";
import InputComponent from "../Input";
import { Bell, Search } from "lucide-react-native";
import Avatar from "../Avatar";

const HomeHeader = () => {
  const { setUserObj } = useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Searching..");
  };

  const openNotificationsMenu = () => {
    console.log("Notifications");
  };

  const logoutUser = async () => {
    try {
      await AsyncStorage.removeItem("blessy_current_user");
      setUserObj({});
    } catch (error) {
      console.log("Error on logout ", error);
    }
  };

  return (
    <VStack bg="$white" pt={50} pb={10} px={20} alignItems="center">
      <HStack
        w="100%"
        space="md"
        alignItems="center"
        justifyContent="space-between"
      >
        <Pressable onPress={logoutUser}>
          <Avatar
            avatarImg="https://github.com/marcusfreitasantos.png"
            avatarTitle="Marcus Freitas"
          />
        </Pressable>

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
          <Icon as={Bell} size="xl" color="$blessyPrimaryColor" />
        </Pressable>
      </HStack>
    </VStack>
  );
};

export default HomeHeader;
