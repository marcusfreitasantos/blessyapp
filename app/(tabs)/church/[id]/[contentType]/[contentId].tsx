import { useEffect, useState, useContext } from "react";
import { FlatList } from "react-native";
import { ChurchContentGlobalContext } from "@/contexts/currentChurchContent";
import { useLocalSearchParams } from "expo-router";
import {
  StatusBar,
  Box,
  HStack,
  Pressable,
  Icon,
  Divider,
} from "@gluestack-ui/themed";
import Paragraph from "@/components/Paragraph";
import ContentTitle from "@/components/ContentTitle";
import { Music } from "lucide-react-native";
import MusicsGroup from "@/components/MusicsGroup";
import { getChurchSingleContentById } from "@/services/churches";
import LoadingSpinner from "@/components/LoadingSpinner";

type CurrentContentProps = {
  id: string;
  churchId: string;
  postDate: string;
  postTitle: string;
  postExcerpt: string;
  postContent: [
    {
      paragraph_title: string;
      paragraph_text: string;
    }
  ];
};

const ContentTypeScreen = () => {
  const { showMusicsGroup, setShowMusicsGroup } = useContext(
    ChurchContentGlobalContext
  );
  const [isLoading, setIsLoading] = useState(false);
  const [currentContent, setCurrentContent] =
    useState<CurrentContentProps | null>(null);
  const { contentId, contentType, id } = useLocalSearchParams();

  const goToMusics = () => {
    setShowMusicsGroup(!showMusicsGroup);
  };

  const getCurrentContent = async () => {
    try {
      setIsLoading(true);
      const res = await getChurchSingleContentById(id, contentType, contentId);
      setCurrentContent(res?.data);
    } catch (error) {
      console.log("Error from getCurrentContent: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCurrentContent();
  }, []);

  if (isLoading) {
    return <LoadingSpinner spinnerColor="$blessyPrimaryColor" />;
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />

      {showMusicsGroup ? (
        <MusicsGroup />
      ) : (
        <Box flex={1} bg="$white">
          {currentContent && (
            <>
              <HStack justifyContent="space-between" alignItems="center" p={20}>
                <ContentTitle
                  contentTitle={currentContent.postTitle}
                  contentDate={currentContent.postDate}
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
                {currentContent.postContent && (
                  <FlatList
                    data={currentContent.postContent}
                    renderItem={({ item }) => (
                      <Paragraph
                        paragraphTitle={item.paragraph_title}
                        paragraphText={item.paragraph_text}
                      />
                    )}
                    keyExtractor={(item) => item.paragraph_title.toString()}
                  />
                )}
              </Box>
            </>
          )}
        </Box>
      )}
    </>
  );
};

export default ContentTypeScreen;
