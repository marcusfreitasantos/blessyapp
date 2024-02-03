import { HStack, VStack, Text, Icon, Pressable } from "@gluestack-ui/themed";
import { useLocalSearchParams } from "expo-router";

const ContentTypeScreen = () => {
  const currentContent = useLocalSearchParams();

  return (
    <Text>
      {currentContent.contentType}: {currentContent.id}
    </Text>
  );
};

export default ContentTypeScreen;
