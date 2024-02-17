import { useEffect, useState } from "react";
import HomeHeader from "@/components/HomeHeader";
import CardComponent from "@/components/Card";
import { Box, StatusBar } from "@gluestack-ui/themed";
import ImageCarousel from "@/components/ImageCarousel";
import HeadingComponent from "@/components/Heading";
import { FlatList } from "react-native";
import BannerImg from "../../../assets/home_banner.jpg";
import { getChurches } from "@/services/churches";

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

  const imgArray = [BannerImg, BannerImg, BannerImg];

  const getChurchesFromApi = async () => {
    const res = await getChurches();
    setCurrentChurches(res.data);
  };

  useEffect(() => {
    getChurchesFromApi();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeHeader />

      <Box p={20} flex={1} bgColor="$white">
        <ImageCarousel carouselImages={imgArray} />

        <HeadingComponent headingText="Encontre a sua igreja!" />

        <FlatList
          data={currentChuches}
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
