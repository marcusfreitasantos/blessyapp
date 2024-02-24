import { useEffect, useState, useContext } from "react";
import { FlatList, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Box, StatusBar } from "@gluestack-ui/themed";
import { ChurchContentGlobalContext } from "@/contexts/currentChurchContent";
import ChurchProfileHeader from "@/components/ChurchProfileHeader";
import ChurchProfileContentMenu from "@/components/ChurchProfileContentMenu";
import CardComponent from "@/components/Card";
import ChurchProfileHeaderContent from "@/components/ChurchProfileHeaderContent";
import { ContentCategories } from "@/mocks/contentCategories";
import { getChurchById, getChurchContent } from "@/services/churches";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useIsFocused } from "@react-navigation/native";
import DefaultCoverImg from "../../../../assets/default_cover_img.png";
import EmptyListCardComponent from "@/components/EmptyListCardComponent";

type currentContentProps = {
  churchId: number;
  id: number;
  postTitle: string;
  postContent: string;
};

type currentChurchProps = {
  id: number;
  name: string;
  address: string;
  description: string;
  logo: string;
  coverImg: string;
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

  const getCurrentChurchContent = async (contentCategory: string) => {
    try {
      setIsLoading(true);
      const res = await getChurchContent(currentChurch.id, contentCategory);
      setCurrentContent(res?.data);
    } catch (error) {
      console.log("Error from getCurrentChurchContent: ", error);
      setCurrentContent(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isFocused) {
      getCurrentChurchById();
      getCurrentChurchContent("news");
    } else {
      setCurrentChurchInfo(null);
      setCurrentContent(null);
    }
  }, [isFocused]);

  if (!currentChurchInfo) {
    return <LoadingSpinner spinnerColor="$blessyPrimaryColor" />;
  }

  return (
    <>
      <StatusBar barStyle="light-content" />

      <ChurchProfileHeader
        coverImg={
          currentChurchInfo.coverImg
            ? currentChurchInfo.coverImg
            : defaultCoverImgUri
        }
      />

      <Box p={20} flex={1} bg="$white">
        {currentChurchInfo && (
          <ChurchProfileHeaderContent currentChurchInfo={currentChurchInfo} />
        )}

        <ChurchProfileContentMenu
          contentCategoriesGroup={ContentCategories}
          getContent={getCurrentChurchContent}
        />

        {isLoading ? (
          <LoadingSpinner spinnerColor="$blessyPrimaryColor" />
        ) : (
          <FlatList
            data={currentContent}
            ListEmptyComponent={<EmptyListCardComponent />}
            renderItem={({ item, index }) => (
              <CardComponent
                id={item.id}
                name={item.postTitle}
                description={item.postContent}
                parentUrl={`church/${currentChurch.id}/${currentChurchContentCategory}`}
                currentIndex={index}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </Box>
    </>
  );
};

export default ChurchScreen;
