import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Box, StatusBar, RefreshControl } from "@gluestack-ui/themed";
import HomeHeader from "@/components/HomeHeader";
import CardComponent from "@/components/Card";
import ImageCarousel from "@/components/ImageCarousel";
import HeadingComponent from "@/components/Heading";
import BannerImg from "../../../assets/home_banner.jpg";
import { getChurches } from "@/services/churches";
import EmptyListCardComponent from "@/components/EmptyListCardComponent";
import LoadingSpinner from "@/components/LoadingSpinner";

type currentChurchesProps = {
  id: number;
  logo: string;
  name: string;
  address: string;
};

const Home = () => {
  const [currentChuches, setCurrentChurches] = useState<
    currentChurchesProps[] | null
  >(null);

  const [isLoading, setIsLoading] = useState(false);
  const imgArray = [BannerImg, BannerImg, BannerImg];

  const getChurchesFromApi = async () => {
    try {
      setIsLoading(true);
      const res = await getChurches();
      setCurrentChurches(res?.data);
    } catch (error) {
      console.log("Error from request list", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getChurchesFromApi();
  }, []);

  if (isLoading) {
    return <LoadingSpinner spinnerColor="$blessyPrimaryColor" />;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeHeader />

      <Box p={20} flex={1} bgColor="$white">
        <ImageCarousel carouselImages={imgArray} />

        <HeadingComponent headingText="Encontre a sua igreja!" />

        <FlatList
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
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </Box>
    </>
  );
};

export default Home;
