import { useState, useContext, useEffect } from "react";
import { FlatList, RefreshControl } from "react-native";
import { GlobalContext } from "@/contexts/currentUserContext";
import { Box } from "@gluestack-ui/themed";
import HeaderDefault from "@/components/DefaultHeader";
import EmptyListCardComponent from "@/components/EmptyListCardComponent";
import { getUserBookmarks } from "@/services/users";
import CardComponent from "@/components/Card";
import { useIsFocused } from "@react-navigation/native";

const Bookmarks = () => {
  const { userObj } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(false);
  const [currentChuches, setCurrentChurches] = useState(null);
  const isFocused = useIsFocused();

  const getUserBookmarkedChurches = async () => {
    try {
      setIsLoading(true);
      const res = await getUserBookmarks(userObj.userID);
      setCurrentChurches(res?.data);
    } catch (error) {
      console.log("Error from getUserBookmarkedChurches: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isFocused) getUserBookmarkedChurches();
  }, [isFocused]);
  return (
    <>
      <HeaderDefault screenName="Favoritos" />
      <Box p={20} flex={1} bgColor="$white">
        <FlatList
          contentContainerStyle={{ paddingBottom: 60 }}
          showsVerticalScrollIndicator={false}
          data={currentChuches}
          ListEmptyComponent={<EmptyListCardComponent />}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={getUserBookmarkedChurches}
            />
          }
          renderItem={({ item, index }) => (
            <CardComponent
              id={item.id}
              logo={item.logo}
              name={item.name}
              description={item.address}
              parentUrl="church"
              currentIndex={index}
              hasImg
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </Box>
    </>
  );
};

export default Bookmarks;
