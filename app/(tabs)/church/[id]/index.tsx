import { useEffect, useState, useContext } from "react";
import { ChurchContentGlobalContext } from "@/contexts/currentChurchContent";
import { useLocalSearchParams } from "expo-router";
import ChurchProfileHeader from "@/components/ChurchProfileHeader";
import { Box, StatusBar } from "@gluestack-ui/themed";
import ChurchProfileContentMenu from "@/components/ChurchProfileContentMenu";
import { FlatList } from "react-native";
import CardComponent from "@/components/Card";
import { ChurchEvents } from "@/mocks/churchEvents";
import { ChurchLiturgy } from "@/mocks/churchLiturgy";
import { ChurchNews } from "@/mocks/churchNews";
import ChurchProfileHeaderContent from "@/components/ChurchProfileHeaderContent";
import { ContentCategories } from "@/mocks/contentCategories";

type currentContentProps = {
  id: number;
  name: string;
  description: string;
};

const ChurchScreen = () => {
  const { currentChurchContentCategory } = useContext(
    ChurchContentGlobalContext
  );

  const currentChurch = useLocalSearchParams();

  const [currentContent, setCurrentContent] = useState<
    currentContentProps[] | null
  >(null);

  useEffect(() => {
    if (currentChurchContentCategory === "events") {
      setCurrentContent(ChurchEvents);
    } else if (currentChurchContentCategory === "liturgy") {
      setCurrentContent(ChurchLiturgy);
    } else {
      setCurrentContent(ChurchNews);
    }
  }, [currentChurchContentCategory]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ChurchProfileHeader />

      <Box p={20} flex={1} bg="$white">
        <ChurchProfileHeaderContent currentChurchId={currentChurch.id} />

        <ChurchProfileContentMenu contentCategoriesGroup={ContentCategories} />

        <FlatList
          data={currentContent}
          renderItem={({ item, index }) => (
            <CardComponent
              id={item.id}
              name={item.name}
              description={item.description}
              parentUrl={`church/${currentChurch.id}/${currentChurchContentCategory}`}
              currentIndex={index}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </Box>
    </>
  );
};

export default ChurchScreen;
