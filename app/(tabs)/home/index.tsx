import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "@/contexts/currentUserContext";
import { ChurchContentGlobalContext } from "@/contexts/currentChurchContent";
import { FlatList } from "react-native";
import { Box, StatusBar, RefreshControl } from "@gluestack-ui/themed";
import HomeHeader from "@/components/HomeHeader";
import CardComponent from "@/components/Card";
import ImageCarousel from "@/components/ImageCarousel";
import HeadingComponent from "@/components/Heading";
import BannerImg from "../../../assets/home_banner.jpg";
import { getChurches } from "@/services/churches";
import { getChurchesByKeyword } from "@/services/churches";
import EmptyListCardComponent from "@/components/EmptyListCardComponent";
import SearchResult from "@/components/SearchResult";
import {
  InterstitialAd,
  TestIds,
  AdEventType,
} from "react-native-google-mobile-ads";

type CurrentChurchesProps = {
  id: number;
  logo: string;
  name: string;
  address: string;
};

const Home = () => {
  const [currentChuches, setCurrentChurches] = useState<
    CurrentChurchesProps[] | null
  >(null);
  const { userObj } = useContext(GlobalContext);
  const { searchTerm } = useContext(ChurchContentGlobalContext);
  const [isLoading, setIsLoading] = useState(false);
  const imgArray = [BannerImg, BannerImg, BannerImg];
  const adUnitId = __DEV__
    ? TestIds.INTERSTITIAL
    : process.env.EXPO_PUBLIC_GOOGLE_ADMOB_ANDROID_ID;

  const findChurchBySearchTerm = async () => {
    try {
      const res = await getChurchesByKeyword(searchTerm);
      setCurrentChurches(res?.data);
    } catch (error) {
      console.log("Error from handleSearch: ", error);
      setCurrentChurches([]);
    }
  };

  const getChurchesFromApi = async () => {
    try {
      setIsLoading(true);
      const res = await getChurches();
      setCurrentChurches(res?.data);
    } catch (error) {
      console.log("Error from request list", error);
      setCurrentChurches([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      findChurchBySearchTerm();
    } else {
      getChurchesFromApi();
    }
  }, [searchTerm]);

  useEffect(() => {
    if (adUnitId) {
      const interstitial = InterstitialAd.createForAdRequest(adUnitId);
      const unsubscribe = interstitial.addAdEventListener(
        AdEventType.LOADED,
        () => {
          interstitial.show();
        }
      );

      interstitial.load();
      return unsubscribe;
    }
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeHeader />

      {searchTerm ? (
        <SearchResult churchesList={currentChuches} />
      ) : (
        <Box p={20} flex={1} bgColor="$white">
          <ImageCarousel carouselImages={imgArray} />

          <HeadingComponent headingText="Encontre a sua igreja!" />

          <FlatList
            contentContainerStyle={{ paddingBottom: 60 }}
            showsVerticalScrollIndicator={false}
            data={currentChuches}
            ListEmptyComponent={<EmptyListCardComponent />}
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={getChurchesFromApi}
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
                hasIcon
                bookmarked={userObj.bookmarks.includes(item.id)}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </Box>
      )}
    </>
  );
};

export default Home;
