import { StatusBar, Box } from "@gluestack-ui/themed";
import { FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Paragraph from "@/components/Paragraph";
import { ChurchContents } from "@/mocks/churchContent";
import HeadingComponent from "@/components/Heading";
import { useState } from "react";

const ContentTypeScreen = () => {
  const [currentContent, setCurrentContent] = useState(ChurchContents);
  const { contentType, id } = useLocalSearchParams();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Box p={20} flex={1}>
        <HeadingComponent headingText={`Nome do ${contentType} ${id}`} />

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
