import { useState } from "react";
import { FlatList } from "react-native";
import { useLocalSearchParams, router, usePathname } from "expo-router";
import {
  StatusBar,
  Box,
  HStack,
  Pressable,
  Icon,
  Divider,
} from "@gluestack-ui/themed";
import Paragraph from "@/components/Paragraph";
import { ChurchContents } from "@/mocks/churchContent";
import ContentTitle from "@/components/ContentTitle";
import { ListMusic } from "lucide-react-native";

const ContentTypeScreen = () => {
  const [currentContent, setCurrentContent] = useState(ChurchContents);
  const { contentType, id } = useLocalSearchParams();
  const currentRoute = usePathname();

  const goToMusics = () => {
    router.navigate(`${currentRoute}/eventMusics`);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Box flex={1} bg="$white">
        <HStack justifyContent="space-between" alignItems="center" p={20}>
          <ContentTitle
            contentTitle="Nome do evento"
            contentDate="02/02/2024"
          />

          {contentType === "liturgy" && (
            <Pressable
              onPress={goToMusics}
              bg="$blessyPrimaryColor"
              p={10}
              rounded={50}
            >
              <Icon as={ListMusic} size="xl" color="$white" />
            </Pressable>
          )}
        </HStack>

        <Box px={20} my={20}>
          <Divider />
        </Box>

        <Box px={20} pb={20} flex={1}>
          {currentContent && (
            <FlatList
              data={currentContent}
              renderItem={({ item }) => (
                <Paragraph
                  paragraphTitle={item.title}
                  paragraphText={item.text}
                />
              )}
              keyExtractor={(item) => item.title.toString()}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default ContentTypeScreen;
