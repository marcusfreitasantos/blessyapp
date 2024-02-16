import { useContext, useEffect } from "react";
import { ChurchContentGlobalContext } from "@/contexts/currentChurchContent";
import { router, useNavigation } from "expo-router";
import { Box, Pressable, Text, Icon } from "@gluestack-ui/themed";
import AccordionComponent from "@/components/AccordionComponent";
import { X } from "lucide-react-native";

const MusicsGroup = () => {
  const navigation = useNavigation();

  const { showMusicsGroup, setShowMusicsGroup } = useContext(
    ChurchContentGlobalContext
  );

  const backToPreviousScreen = () => {
    setShowMusicsGroup(!showMusicsGroup);
  };

  return (
    <Box px={20} py={60} bg="$blessyPrimaryColor" flex={1}>
      <Pressable
        onPress={backToPreviousScreen}
        flexDirection="row"
        alignItems="center"
        mb={40}
      >
        <Icon as={X} color="$white" />
        <Text color="$white" fontSize="$lg" bold ml={20}>
          Fechar
        </Text>
      </Pressable>

      <AccordionComponent />
    </Box>
  );
};

export default MusicsGroup;
