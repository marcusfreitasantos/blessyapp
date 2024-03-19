import { useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { router } from "expo-router";
import { GlobalContext } from "@/contexts/currentUserContext";
import {
  HStack,
  VStack,
  Box,
  Pressable,
  Text,
  Divider,
} from "@gluestack-ui/themed";
import Avatar from "../Avatar";

const ProfileSubMenu = () => {
  const { userObj, setUserObj } = useContext(GlobalContext);

  const logoutUser = async () => {
    try {
      await AsyncStorage.removeItem("blessy_current_user");
      setUserObj({
        token: "",
        userID: 0,
        email: "",
        firstName: "",
        lastName: "",
        avatar: "",
        bookmarks: [],
      });
    } catch (error) {
      console.log("Error on logout ", error);
    }
  };
  return (
    <Box flex={1} p={20}>
      <DrawerContentScrollView scrollEnabled={false}>
        <HStack alignItems="center" space="md">
          <Avatar avatarTitle={userObj.firstName} />
          <Text bold fontSize="$md">
            {userObj.firstName}
          </Text>
        </HStack>

        <Divider my={20} />

        <VStack space="md">
          <Pressable onPress={() => router.navigate("/bookmarks")}>
            <Text>Favoritos</Text>
          </Pressable>

          <Pressable onPress={() => router.navigate("/profile")}>
            <Text>Ver perfil</Text>
          </Pressable>

          <Pressable onPress={logoutUser}>
            <Text>Sair</Text>
          </Pressable>
        </VStack>
      </DrawerContentScrollView>
    </Box>
  );
};

export default ProfileSubMenu;
