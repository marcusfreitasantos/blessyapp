import {
  HStack,
  VStack,
  Box,
  Text,
  Icon,
  Pressable,
} from "@gluestack-ui/themed";
import { Heart } from "lucide-react-native";

const CardComponent = () => {
  const navigateToCardUrl = () => {
    console.log("Navigate");
  };

  const bookmarkObject = () => {
    console.log("bookmarked");
  };

  const customSize = 40;
  return (
    <Pressable onPress={navigateToCardUrl} px={20} py={5}>
      <HStack
        p={15}
        justifyContent="space-between"
        alignItems="center"
        space="xs"
        w="100%"
        bg="white"
        mt={5}
        softShadow="4"
        shadowOffset={{ width: 0, height: 10 }}
        shadowOpacity={0.2}
        rounded={5}
      >
        <Box
          bg="$primary500"
          p={5}
          rounded={50}
          w={customSize}
          h={customSize}
          justifyContent="center"
          alignItems="center"
        >
          <Text color="white" bold>
            VI
          </Text>
        </Box>

        <VStack maxWidth={240}>
          <Text bold fontSize="$lg">
            Videira
          </Text>
          <Text fontSize="$sm" isTruncated>
            Av. Desembargador, nº 111, Aracaju - SE
          </Text>
        </VStack>

        <Pressable onPress={bookmarkObject}>
          <Icon as={Heart} size="xl" />
        </Pressable>
      </HStack>
    </Pressable>
  );
};

export default CardComponent;
