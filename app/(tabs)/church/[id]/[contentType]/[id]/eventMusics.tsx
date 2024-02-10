import { router } from "expo-router";
import { Box, Pressable, Text, Icon } from "@gluestack-ui/themed";
import Acordeon from "@/components/Acordeon";
import { X } from "lucide-react-native";

const EventMusicScreen = () => {
  const backToPreviousScreen = () => {
    router.back();
  };

  return (
    <Box p={20}>
      <Pressable
        onPress={backToPreviousScreen}
        flexDirection="row"
        alignItems="center"
      >
        <Icon as={X} color="$error600" />
        <Text color="$secondary400">Fechar</Text>
      </Pressable>

      <Acordeon />
    </Box>
  );
};

export default EventMusicScreen;
