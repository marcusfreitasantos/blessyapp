import {
  HStack,
  Text,
  ImageBackground,
  Icon,
  Pressable,
  VStack,
  Heading,
  Divider,
  Box,
} from "@gluestack-ui/themed";

import { LinearGradient } from "expo-linear-gradient";
import { ArrowLeft, Heart, Share2 } from "lucide-react-native";
import { router } from "expo-router";
import Avatar from "../Avatar";

type currentChurchProps = {
  currentChurchId: string | string[] | undefined;
};

const ChurchProfileHeader = ({ currentChurchId }: currentChurchProps) => {
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
    <>
      <ImageBackground
        h={200}
        source={{
          uri: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706572800&semt=ais",
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

      <Box p={20}>
        <HStack justifyContent="space-between">
          <VStack>
            <Heading color="$secondary700">
              Nome da Igreja - {currentChurchId}
            </Heading>
            <Text color="$secondary400">Endereço...</Text>
          </VStack>

          <Avatar avatarImg="" avatarTitle="Nome da Igreja" />
        </HStack>

        <Divider my={20} bgColor="$secondary400" />

        <Text color="$secondary400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate quam quis sapien convallis vestibulum. Phasellus maximus
          commodo nisi, at bibendum mi tincidunt sed.
        </Text>
      </Box>
    </>
  );
};

export default ChurchProfileHeader;
