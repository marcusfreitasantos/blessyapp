import {
  HStack,
  VStack,
  Box,
  Text,
  Icon,
  Pressable,
  Image,
} from "@gluestack-ui/themed";
import { Heart } from "lucide-react-native";

type CardComponentProps = {
  id: number;
  logo: string;
  name: string;
  address: string;
};

const CardComponent = (props: CardComponentProps) => {
  const navigateToCardUrl = () => {
    console.log("Navigate to church with ID:", props.id);
  };

  const bookmarkObject = () => {
    console.log("Bookmark church with ID:", props.id);
  };

  const getChurchInitialLetters = () => {
    const churchInitialLettersArray = props.name.split("");
    return churchInitialLettersArray[0];
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
        {props.logo ? (
          <Image
            size="xs"
            source={{
              uri: "https://static.wixstatic.com/media/450325_60342534c4c34514b85f8c85081ca9f2~mv2.png/v1/crop/x_0,y_7,w_1507,h_567/fill/w_215,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo%20videira%20PNG.png",
            }}
            alt="Avatar Image"
            rounded={50}
            borderColor="#ccc"
            borderWidth={1}
          />
        ) : (
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
              {getChurchInitialLetters()}
            </Text>
          </Box>
        )}

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
