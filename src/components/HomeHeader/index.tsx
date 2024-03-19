import { useContext } from "react";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { GlobalContext } from "@/contexts/currentUserContext";
import { ChurchContentGlobalContext } from "@/contexts/currentChurchContent";
import { HStack, VStack, Box, Pressable, Icon } from "@gluestack-ui/themed";
import InputComponent from "../Input";
import { Bell, Search } from "lucide-react-native";
import Avatar from "../Avatar";

const HomeHeader = () => {
  const navigation = useNavigation();
  const { userObj } = useContext(GlobalContext);

  const { searchTerm, setSearchTerm } = useContext(ChurchContentGlobalContext);

  const handleSearch = (keyword: string) => {
    setSearchTerm(keyword);
  };

  const openNotificationsMenu = () => {
    console.log("Notifications");
  };

  const showProfileMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <VStack bg="$white" pt={50} pb={10} px={20} alignItems="center">
      <HStack
        w="100%"
        space="md"
        alignItems="center"
        justifyContent="space-between"
      >
        <Pressable onPress={showProfileMenu}>
          <Avatar avatarTitle={userObj.firstName} />
        </Pressable>

        <Box w="70%">
          <InputComponent
            inputIcon={Search}
            inputType="text"
            inputPlaceholder="Pesquisar"
            inputValue={searchTerm}
            onChangeText={(t) => handleSearch(t)}
            clearButton={searchTerm ? true : false}
            onPress={() => setSearchTerm("")}
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
