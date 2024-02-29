import { Dimensions } from "react-native";
import { ScrollView, Image, Box } from "@gluestack-ui/themed";

type CarouselImagesProps = {
  carouselImages: string[];
};

const ImageCarousel = ({ carouselImages }: CarouselImagesProps) => {
  const deviceWidth = Dimensions.get("window").width;
  const imgWidth = (deviceWidth * 80) / 100;

  return (
    <Box>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {carouselImages &&
          carouselImages.map((item, index) => (
            <Image
              key={`banner_img_${index}`}
              source={item}
              w={imgWidth}
              alt="banner"
              h={180}
              rounded={5}
              mr={index === carouselImages.length - 1 ? 0 : 10}
            />
          ))}
      </ScrollView>
    </Box>
  );
};

export default ImageCarousel;
