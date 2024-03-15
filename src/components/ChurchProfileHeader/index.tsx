import { useContext } from "react";
import { ChurchContentGlobalContext } from "@/contexts/currentChurchContent";
import {
  HStack,
  ImageBackground,
  Icon,
  Pressable,
  Text,
} from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowLeft, Heart, Share2 } from "lucide-react-native";
import { router } from "expo-router";

type ChurchProfileHeaderProps = {
  coverImg: string;
  totalFollowers: number;
};

const ChurchProfileHeader = ({
  coverImg,
  totalFollowers,
}: ChurchProfileHeaderProps) => {
  const { setCurrentChurchContentCategory } = useContext(
    ChurchContentGlobalContext
  );

  const handleBack = () => {
    setCurrentChurchContentCategory("news");
    router.back();
  };

  const bookmarkCurrentChurch = () => {
    console.log("bookmarkCurrentChurch");
  };

  const shareCurrentChurch = () => {
    console.log("shareCurrentChurch");
  };

  return (
    <ImageBackground
      h={200}
      source={{
        uri: coverImg,
      }}
    >
      <LinearGradient colors={["black", "transparent"]} style={{ flex: 1 }} />

      <HStack
        style={{ position: "absolute", top: 40 }}
        justifyContent="space-between"
        w="100%"
        px={20}
      >
        <Pressable onPress={handleBack}>
          <Icon as={ArrowLeft} color="white" size="xl" />
        </Pressable>

        <HStack space="2xl">
          <HStack>
            <Text color="$white" pr={5}>
              {totalFollowers ? totalFollowers : ""}
            </Text>

            <Pressable onPress={bookmarkCurrentChurch}>
              <Icon as={Heart} color="white" size="xl" />
            </Pressable>
          </HStack>

          <Pressable onPress={shareCurrentChurch}>
            <Icon as={Share2} color="white" size="xl" />
          </Pressable>
        </HStack>
      </HStack>
    </ImageBackground>
  );
};

export default ChurchProfileHeader;
