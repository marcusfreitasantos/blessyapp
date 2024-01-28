import {
  HStack,
  VStack,
  Box,
  Text,
  Icon,
  Pressable,
} from "@gluestack-ui/themed";
import { Heart } from "lucide-react-native";

interface CardComponentProps {
  id: number;
  logo: string;
  name: string;
  address: string;
}

const CardComponent = (props: CardComponentProps) => {
  const navigateToCardUrl = () => {
    console.log("Navigate to church with ID:", props.id);
  };

  const bookmarkObject = () => {
    console.log("Bookmark church with ID:", props.id);
  };

  const customSize = 40;
  return (
    <Pressable onPress={navigateToCardUrl} my={2}>
      <HStack
        p={15}
        justifyContent="space-between"
        alignItems="center"
        space="xs"
        w="100%"
        bg="white"
        mt={5}
        softShadow="1"
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

        <VStack flex={1} px={10}>
          <Text bold fontSize="$lg">
            {props.name}
          </Text>
          <Text fontSize="$sm" isTruncated>
            {props.address}
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
