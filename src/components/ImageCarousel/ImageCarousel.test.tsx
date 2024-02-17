import { render } from "@testing-library/react-native";
import ImageCarousel from ".";
import BannerImg from "../../../assets/home_banner.jpg";

describe("Image Carousel", () => {
  it("Should render a carousel of images with props", () => {
    const imgGroup = [BannerImg];

    const imageCarousel = render(<ImageCarousel carouselImages={imgGroup} />);
    expect(imageCarousel).toBeTruthy();
  });
});
