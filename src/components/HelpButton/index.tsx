import { Linking } from "react-native";
import { Text, HStack, Pressable, Icon, Box } from "@gluestack-ui/themed";

import { HelpCircle } from "lucide-react-native";

const HelpButton = () => {
  const sendHelpEmail = () => {
    const helpLinkEmail =
      "mailto:suporte@blessyapp.com?subject=Preciso de ajuda com o aplicativo!";
    Linking.openURL(helpLinkEmail);
  };

  return (
    <>
      <Box flex={1} />
      <Pressable onPress={sendHelpEmail}>
        <HStack alignItems="center" space="sm">
          <Icon as={HelpCircle} size="md" color="$white" />
          <Text bold color="white">
            Precisa de ajuda? Fale com a gente.
          </Text>
        </HStack>
      </Pressable>
    </>
  );
};

export default HelpButton;
