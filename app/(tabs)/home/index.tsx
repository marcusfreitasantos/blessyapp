import { useEffect, useState } from "react";
import HomeHeader from "@/components/HomeHeader";
import CardComponent from "@/components/Card";
import { Box } from "@gluestack-ui/themed";
import ImageCarousel from "@/components/ImageCarousel";
import HeadingComponent from "@/components/Heading";
import { Churches } from "@/mocks/churches";
import { FlatList } from "react-native";

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

  useEffect(() => {
    setCurrentChurches(Churches);
  }, []);

  return (
    <>
      <HomeHeader />
      <Box p={20} flex={1}>
        <ImageCarousel />
        <HeadingComponent headingText="Encontre a sua igreja!" />

        <FlatList
          data={currentChuches}
          renderItem={({ item }) => (
            <CardComponent
              id={item.id}
              logo={item.logo}
              name={item.name}
              address={item.address}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </Box>
    </>
  );
};

export default Home;
