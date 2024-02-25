import { useEffect, useState, useContext } from "react";
import { FlatList } from "react-native";
import { ChurchContentGlobalContext } from "@/contexts/currentChurchContent";
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
import { Music } from "lucide-react-native";
import MusicsGroup from "@/components/MusicsGroup";

const ContentTypeScreen = () => {
  const { showMusicsGroup, setShowMusicsGroup } = useContext(
    ChurchContentGlobalContext
  );
  const [currentContent, setCurrentContent] = useState(ChurchContents);
  const { contentType, id } = useLocalSearchParams();

  const goToMusics = () => {
    setShowMusicsGroup(!showMusicsGroup);
  };
  const path = usePathname();

  useEffect(() => {
    console.log("current route", path);
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />

      {showMusicsGroup ? (
        <MusicsGroup />
      ) : (
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
                <Icon as={Music} size="xl" color="$white" />
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
      )}
    </>
  );
};

export default ContentTypeScreen;
