import { StatusBar, Box } from "@gluestack-ui/themed";
import { FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Paragraph from "@/components/Paragraph";
import { ChurchContents } from "@/mocks/churchContent";
import { useState } from "react";
import ContentTitle from "@/components/ContentTitle";

const ContentTypeScreen = () => {
  const [currentContent, setCurrentContent] = useState(ChurchContents);
  const { contentType, id } = useLocalSearchParams();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ContentTitle contentTitle="Nome do evento" contentDate="02/02/2024" />
      <Box p={20} flex={1}>
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
    </>
  );
};

export default ContentTypeScreen;
