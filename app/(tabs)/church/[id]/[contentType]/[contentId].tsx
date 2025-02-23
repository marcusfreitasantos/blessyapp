import React, { useEffect, useState, useContext } from "react";
import { FlatList, Linking, Alert } from "react-native";
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
import EventInfo from "@/components/EventInfo";
import ButtonComponent from "@/components/Button";

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
  singlePostContent: string;
  eventStartDate: string;
  eventEndDate: string;
  eventTime: string;
  eventAddress: string;
  eventEntranceType: string;
  eventEntranceValue: string;
  eventLink: {
    title: string;
    url: string;
    target: string;
  };
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

  const subscribeToChurchEvent = ({ eventLink }: CurrentContentProps) => {
    Linking.openURL(eventLink.url);
  };

  const getCurrentContent = async () => {
    try {
      setIsLoading(true);
      const res = await getChurchSingleContentById(id, contentType, contentId);
      console.log(res?.data);
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

                {contentType === "not show" && (
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

              {contentType === "event" && (
                <>
                  <Box px={20} my={10}>
                    <Divider />
                  </Box>
                  <HStack px={20}>
                    <EventInfo
                      eventAddress={currentContent.eventAddress}
                      eventEndDate={currentContent.eventEndDate}
                      eventEntranceType={currentContent.eventEntranceType}
                      eventEntranceValue={currentContent.eventEntranceValue}
                      eventStartDate={currentContent.eventStartDate}
                      eventTime={currentContent.eventTime}
                    />
                  </HStack>
                </>
              )}

              <Box px={20} my={10}>
                <Divider />
              </Box>

              <Box px={20} pb={20} flex={1}>
                {currentContent.singlePostContent && (
                  <Paragraph postContent={currentContent.singlePostContent} />
                )}
              </Box>

              {contentType === "event" && currentContent.eventLink && (
                <ButtonComponent
                  buttonText={currentContent.eventLink.title}
                  onPress={() => subscribeToChurchEvent(currentContent)}
                  variant="solid"
                  action="primary"
                />
              )}
            </>
          )}
        </Box>
      )}
    </>
  );
};

export default ContentTypeScreen;
