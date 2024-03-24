import { Dimensions, Linking, Alert } from "react-native";
import { ScrollView, Image, Box, Pressable } from "@gluestack-ui/themed";

type CarouselImagesProps = {
  carouselImages: string[];
};

const ImageCarousel = ({ carouselImages }: CarouselImagesProps) => {
  const deviceWidth = Dimensions.get("window").width;
  const imgWidth = (deviceWidth * 80) / 100;
  const supportEmailUrl =
    "mailto:support@blessy.com?subject=Quero anunciar no Blessy!";

  const sendEmailToSupport = () => {
    Linking.openURL(supportEmailUrl);
  };

  return (
    <Box>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {carouselImages &&
          carouselImages.map((item, index) => (
            <Pressable onPress={sendEmailToSupport} key={`banner_img_${index}`}>
              <Image
                source={item}
                w={imgWidth}
                alt="banner"
                h={180}
                rounded={5}
                mr={index === carouselImages.length - 1 ? 0 : 10}
              />
            </Pressable>
          ))}
      </ScrollView>
    </Box>
  );
};

export default ImageCarousel;
