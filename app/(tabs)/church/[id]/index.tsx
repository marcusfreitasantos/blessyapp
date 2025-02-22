import React, { useEffect, useState, useContext } from "react";
import { Alert, FlatList } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { Box, StatusBar } from "@gluestack-ui/themed";
import { ChurchContentGlobalContext } from "@/contexts/currentChurchContent";
import ChurchProfileHeader from "@/components/ChurchProfileHeader";
import ChurchProfileContentMenu from "@/components/ChurchProfileContentMenu";
import CardComponent from "@/components/Card";
import ChurchProfileHeaderContent from "@/components/ChurchProfileHeaderContent";
import { ContentCategories } from "@/mocks/contentCategories";
import {
  getChurchById,
  getChurchContent,
  getChurchesFromFirebaseByID,
  getChurchContentFromFirebase,
} from "@/services/churches";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useIsFocused } from "@react-navigation/native";
import EmptyListCardComponent from "@/components/EmptyListCardComponent";
import { defaultCoverImgUri } from "@/components/DefaultImages";
import AboutChurch from "@/components/AboutChurch";
import ChurchProps from "@/utils/churchProps";
import { deleteNews } from "@/services/news";
import { GlobalContext } from "@/contexts/currentUserContext";

type CurrentContentProps = {
  churchId: number;
  id: number;
  postTitle: string;
  postExcerpt: string;
};

const ChurchScreen = () => {
  const { currentChurchContentCategory } = useContext(
    ChurchContentGlobalContext
  );
  const { userObj } = useContext(GlobalContext);
  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState(true);
  const currentChurch = useLocalSearchParams();

  const [currentContent, setCurrentContent] = useState<CurrentContentProps[]>(
    []
  );

  const [currentChurchInfo, setCurrentChurchInfo] =
    useState<ChurchProps | null>(null);

  const getCurrentChurchById = async () => {
    try {
      setIsLoading(true);
      const res = await getChurchesFromFirebaseByID(currentChurch.id);
      setCurrentChurchInfo(res?.docs[0].data());
    } catch (error) {
      console.log("Error from getChurchById: ", error);
      router.back();
    } finally {
      setIsLoading(false);
    }
  };

  const getCurrentChurchContent = async (contentCategory: string) => {
    try {
      setIsLoading(true);
      const res = await getChurchContentFromFirebase(
        currentChurch.id,
        contentCategory
      );
      setCurrentContent(res?.docs);
    } catch (error) {
      console.log("Error from getCurrentChurchContent: ", error);
      setCurrentContent(null);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCurrentNewsById = async (postId: number) => {
    try {
      setIsLoading(true);
      const req = await deleteNews(postId, userObj.userID);
      if (req?.status === 200) {
        Alert.alert("Item removido com sucesso!");
      }
    } catch (e) {
      Alert.alert("Não foi possível deletar este item.");
      console.log(e);
    } finally {
      getCurrentChurchContent(currentChurchContentCategory);
    }
  };

  const goToEditContent = (postId: number) => {
    router.push({
      pathname: "/content/news",
      params: {
        postId,
      },
    });
  };

  useEffect(() => {
    if (isFocused) {
      getCurrentChurchById();
      getCurrentChurchContent(currentChurchContentCategory);
    } else {
      setCurrentContent([]);
      setCurrentChurchInfo(null);
    }
  }, [isFocused]);

  if (!currentChurchInfo) {
    return <LoadingSpinner spinnerColor="$blessyPrimaryColor" />;
  }

  return (
    <>
      <StatusBar barStyle="light-content" />

      <ChurchProfileHeader
        totalFollowers={currentChurchInfo.totalFollowers}
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
          <>
            {currentChurchContentCategory === "about" ? (
              <AboutChurch currentChurchInfo={currentChurchInfo} />
            ) : (
              <FlatList
                data={currentContent}
                ListEmptyComponent={<EmptyListCardComponent />}
                renderItem={({ item, index }) => (
                  <CardComponent
                    currentChurchId={currentChurch.id?.toString()}
                    id={item.id}
                    name={item.data().postTitle}
                    description={item.data().postExcerpt}
                    parentUrl={`church/${currentChurch.id}/${currentChurchContentCategory}`}
                    currentIndex={index}
                    isEditable={true}
                    hasIcon={true}
                    editIconPress={() => goToEditContent(item.id)}
                    trashIconPress={() => deleteCurrentNewsById(item.id)}
                  />
                )}
                keyExtractor={(item) => item.id.toString()}
              />
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default ChurchScreen;
