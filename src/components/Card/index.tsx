import { HStack, VStack, Text, Icon, Pressable } from "@gluestack-ui/themed";
import { Heart } from "lucide-react-native";
import { router } from "expo-router";
import Avatar from "../Avatar";

type CardComponentProps = {
  id: number;
  parentUrl: string;
  logo?: string;
  name: string;
  description: string;
  hasImg?: boolean;
  hasIcon?: boolean;
};

const CardComponent = (props: CardComponentProps) => {
  const navigateToCardUrl = () => {
    router.navigate(`/${props.parentUrl}/${props.id}`);
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
        borderLeftColor="$blessyPrimaryColor"
        borderLeftWidth="$4"
      >
        {props.hasImg && (
          <Avatar avatarImg={props.logo} avatarTitle={props.name} />
        )}
        <VStack flex={1} px={10}>
          <Text bold fontSize="$lg" color="$blessyPrimaryColor">
            {props.name}
          </Text>
          <Text fontSize="$sm" isTruncated color="$secondary400">
            {props.description}
          </Text>
        </VStack>

        {props.hasIcon && (
          <Pressable onPress={bookmarkObject}>
            <Icon as={Heart} size="xl" color="$secondary400" />
          </Pressable>
        )}
      </HStack>
    </Pressable>
  );
};

export default CardComponent;
