import { HStack, VStack, Text, Icon, Pressable } from "@gluestack-ui/themed";
import { Heart } from "lucide-react-native";
import { router } from "expo-router";
import Avatar from "../Avatar";

type CardComponentProps = {
  id: number;
  logo: string;
  name: string;
  address: string;
};

const CardComponent = (props: CardComponentProps) => {
  const navigateToCardUrl = () => {
    router.navigate(`/church/${props.id}`);
  };

  const bookmarkObject = () => {
    console.log("Bookmark church with ID:", props.id);
  };

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
        borderTopRightRadius={5}
        borderBottomRightRadius={5}
        borderLeftColor="$primary500"
        borderLeftWidth="$4"
      >
        <Avatar
          avatarImg="https://static.wixstatic.com/media/450325_60342534c4c34514b85f8c85081ca9f2~mv2.png/v1/crop/x_0,y_7,w_1507,h_567/fill/w_215,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo%20videira%20PNG.png"
          avatarTitle={props.name}
        />
        <VStack flex={1} px={10}>
          <Text bold fontSize="$lg" color="$primary500">
            {props.name}
          </Text>
          <Text fontSize="$sm" isTruncated color="$secondary400">
            {props.address}
          </Text>
        </VStack>

        <Pressable onPress={bookmarkObject}>
          <Icon as={Heart} size="xl" color="$secondary400" />
        </Pressable>
      </HStack>
    </Pressable>
  );
};

export default CardComponent;
