import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "@/contexts/currentUserContext";
import { ChurchContentGlobalContext } from "@/contexts/currentChurchContent";
import { FlatList } from "react-native";
import { Box, StatusBar, RefreshControl } from "@gluestack-ui/themed";
import HomeHeader from "@/components/HomeHeader";
import CardComponent from "@/components/Card";
import ImageCarousel from "@/components/ImageCarousel";
import HeadingComponent from "@/components/Heading";
import {
  getChurches,
  getChurchesAds,
  getChurchesFromFirebase,
  getChurchesFromFirebaseByKeyword,
} from "@/services/churches";
import { getChurchesByKeyword } from "@/services/churches";
import EmptyListCardComponent from "@/components/EmptyListCardComponent";
import SearchResult from "@/components/SearchResult";
import { defaultBannerImg } from "@/components/DefaultImages";
import {
  InterstitialAd,
  TestIds,
  AdEventType,
} from "react-native-google-mobile-ads";
import LoadingSpinner from "@/components/LoadingSpinner";

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

  let defaultChurchAd = {
    bannerImg: defaultBannerImg,
    bannerLink:
      "mailto:suporte@blessyapp.com?subject=Quero anunciar no Blessy!",
    bannerTitle: "Anuncie Aqui",
  };
  const [churchAds, setChurchAds] = useState([defaultChurchAd]);

  const adUnitId = __DEV__
    ? TestIds.INTERSTITIAL
    : "ca-app-pub-8430347978354434/9223155764";

  const findChurchBySearchTerm = async () => {
    try {
      const res = await getChurchesFromFirebaseByKeyword(searchTerm);
      setCurrentChurches(res?.docs);
    } catch (error) {
      console.log("Error from handleSearch: ", error);
      setCurrentChurches([]);
    }
  };

  const getChurchesAdsFromApi = async () => {
    try {
      const res = await getChurchesAds();

      const resObj = res?.data;

      resObj.push(defaultChurchAd);

      setChurchAds(resObj);
    } catch (error) {
      console.log("Error from request list (getChurchesAdsFromApi)", error);
      setChurchAds([defaultChurchAd]);
    }
  };

  const getChurchesFromApi = async () => {
    try {
      setIsLoading(true);
      const res = await getChurchesFromFirebase();
      setCurrentChurches(res?.docs);
    } catch (error) {
      console.log("Error from request list (getChurchesFromApi)", error);
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
    getChurchesAdsFromApi();
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

  if (!userObj) return;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeHeader />

      {searchTerm ? (
        <SearchResult churchesList={currentChuches} />
      ) : (
        <Box p={20} flex={1} bgColor="$white">
          {isLoading ? (
            <LoadingSpinner spinnerColor="$blessyPrimaryColor" />
          ) : (
            <>
              <ImageCarousel carouselImages={churchAds} />
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
                    id={item._data.userID}
                    logo={item._data.logo}
                    name={item._data.firstName}
                    description={item._data.address}
                    parentUrl="church"
                    currentIndex={index}
                    hasImg
                    hasIcon
                  />
                )}
                keyExtractor={(item) => item.id.toString()}
              />
            </>
          )}
        </Box>
      )}
    </>
  );
};

export default Home;
