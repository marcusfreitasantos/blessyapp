import { useEffect, useState, useContext } from "react";
import { FlatList, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Box, StatusBar } from "@gluestack-ui/themed";
import { ChurchContentGlobalContext } from "@/contexts/currentChurchContent";
import ChurchProfileHeader from "@/components/ChurchProfileHeader";
import ChurchProfileContentMenu from "@/components/ChurchProfileContentMenu";
import CardComponent from "@/components/Card";
import { ChurchEvents } from "@/mocks/churchEvents";
import { ChurchLiturgy } from "@/mocks/churchLiturgy";
import { ChurchNews } from "@/mocks/churchNews";
import ChurchProfileHeaderContent from "@/components/ChurchProfileHeaderContent";
import { ContentCategories } from "@/mocks/contentCategories";
import { getChurchById } from "@/services/churches";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useIsFocused } from "@react-navigation/native";
import DefaultCoverImg from "../../../../assets/default_cover_img.png";

type currentContentProps = {
  id: number;
  name: string;
  description: string;
};

type currentChurchProps = {
  id: number;
  name: string;
  address: string;
  description: string;
  logo: string;
  cover_img: string;
};

const ChurchScreen = () => {
  const { currentChurchContentCategory } = useContext(
    ChurchContentGlobalContext
  );

  const defaultCoverImgUri = Image.resolveAssetSource(
    Number(DefaultCoverImg)
  ).uri;

  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState(true);
  const currentChurch = useLocalSearchParams();

  const [currentContent, setCurrentContent] = useState<
    currentContentProps[] | null
  >(null);

  const [currentChurchInfo, setCurrentChurchInfo] =
    useState<currentChurchProps | null>(null);

  const getCurrentChurchById = async () => {
    try {
      setIsLoading(true);
      const res = await getChurchById(currentChurch.id);
      setCurrentChurchInfo(res?.data);
    } catch (error) {
      console.log("Error from getChurchById: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (currentChurchContentCategory === "events") {
      setCurrentContent(ChurchEvents);
    } else if (currentChurchContentCategory === "liturgy") {
      setCurrentContent(ChurchLiturgy);
    } else {
      setCurrentContent(ChurchNews);
    }
  }, [currentChurchContentCategory]);

  useEffect(() => {
    getCurrentChurchById();
  }, [isFocused]);

  if (currentChurchInfo)
    return (
      <>
        <StatusBar barStyle="light-content" />

        {isLoading ? (
          <LoadingSpinner spinnerColor="$blessyPrimaryColor" />
        ) : (
          <>
            <ChurchProfileHeader
              coverImg={
                currentChurchInfo.cover_img
                  ? currentChurchInfo.cover_img
                  : defaultCoverImgUri
              }
            />

            <Box p={20} flex={1} bg="$white">
              {currentChurchInfo && (
                <ChurchProfileHeaderContent
                  currentChurchInfo={currentChurchInfo}
                />
              )}

              <ChurchProfileContentMenu
                contentCategoriesGroup={ContentCategories}
              />

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
        )}
      </>
    );
};

export default ChurchScreen;
