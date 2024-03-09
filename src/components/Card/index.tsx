import { useEffect, useState } from "react";
import { router } from "expo-router";
import { HStack, VStack, Text, Icon, Pressable } from "@gluestack-ui/themed";
import { Heart } from "lucide-react-native";
import Avatar from "../Avatar";

type CardComponentProps = {
  id: number;
  currentIndex: number;
  parentUrl: string;
  logo?: string;
  name: string;
  description: string;
  hasImg?: boolean;
  hasIcon?: boolean;
};

const CardComponent = (props: CardComponentProps) => {
  const [currentIndexType, setCurrentIndexType] = useState("even");
  const navigateToCardUrl = () => {
    router.navigate(`/${props.parentUrl}/${props.id}`);
  };

  const bookmarkObject = () => {
    console.log("Bookmark church with ID:", props.id);
  };

  const identifyOddOrEvenIndex = () => {
    if (props.currentIndex % 2 === 0) {
      setCurrentIndexType("even");
    } else {
      setCurrentIndexType("odd");
    }
  };

  useEffect(() => {
    identifyOddOrEvenIndex();
  }, [currentIndexType]);

  return (
    <Pressable onPress={navigateToCardUrl} my={1}>
      <HStack
        p={15}
        justifyContent="space-between"
        alignItems="center"
        space="xs"
        w="100%"
        bg="white"
        softShadow="1"
        borderLeftColor={
          currentIndexType === "odd"
            ? "$blessyPrimaryColor"
            : "$blessySecondaryColor"
        }
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
          <Pressable onPress={bookmarkObject} testID="card__component_icon">
            <Icon as={Heart} size="xl" color="$secondary400" />
          </Pressable>
        )}
      </HStack>
    </Pressable>
  );
};

export default CardComponent;
