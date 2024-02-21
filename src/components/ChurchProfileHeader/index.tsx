import { HStack, ImageBackground, Icon, Pressable } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowLeft, Heart, Share2 } from "lucide-react-native";
import { router } from "expo-router";

type CoverImgProps = {
  coverImg: string;
};

const ChurchProfileHeader = ({ coverImg }: CoverImgProps) => {
  const handleBack = () => {
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
          <Pressable onPress={bookmarkCurrentChurch}>
            <Icon as={Heart} color="white" size="xl" />
          </Pressable>

          <Pressable onPress={shareCurrentChurch}>
            <Icon as={Share2} color="white" size="xl" />
          </Pressable>
        </HStack>
      </HStack>
    </ImageBackground>
  );
};

export default ChurchProfileHeader;
