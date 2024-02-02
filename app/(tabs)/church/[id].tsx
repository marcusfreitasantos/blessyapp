import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import ChurchProfileHeader from "@/components/ChurchProfileHeader";
import { Box } from "@gluestack-ui/themed";
import ChurchProfileContentMenu from "@/components/ChurchProfileContentMenu";
import { FlatList } from "react-native";
import CardComponent from "@/components/Card";
import { ChurchEvents } from "@/mocks/churchEvents";

type currentContentProps = {
  id: number;
  name: string;
  description: string;
};

const ChurchScreen = () => {
  const currentChurch = useLocalSearchParams();

  const [currentContent, setCurrentContent] = useState<
    currentContentProps[] | null
  >(null);

  useEffect(() => {
    setCurrentContent(ChurchEvents);
  }, []);

  return (
    <>
      <ChurchProfileHeader currentChurchId={currentChurch.id} />
      <Box p={20} flex={1}>
        <ChurchProfileContentMenu />

        <FlatList
          data={currentContent}
          renderItem={({ item }) => (
            <CardComponent
              id={item.id}
              name={item.name}
              description={item.description}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </Box>
    </>
  );
};

export default ChurchScreen;
