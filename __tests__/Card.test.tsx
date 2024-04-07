import { render, screen } from "@testing-library/react-native";
import { StyledProvider } from "@gluestack-style/react";
import { config } from "../config/gluestack-ui.config";
import CardComponent from "@/components/Card";

describe("Card Component", () => {
  it("Should render the card with image and icon", () => {
    render(
      <StyledProvider config={config}>
        <CardComponent
          id={1}
          currentIndex={1}
          parentUrl="/"
          logo="/"
          name="Card Title"
          description="Card description"
          hasImg
          hasIcon
        />
      </StyledProvider>
    );

    const cardIcon = screen.getByTestId("card__component_icon");
    const cardAvatar = screen.getByTestId("avatar__img");

    expect(cardAvatar).toBeTruthy();
    expect(cardIcon).toBeTruthy();
  });

  it("Should render the card without image and without icon", () => {
    render(
      <StyledProvider config={config}>
        <CardComponent
          id={1}
          currentIndex={1}
          parentUrl="/"
          logo="/"
          name="Card Title"
          description="Card description"
        />
      </StyledProvider>
    );

    const cardIcon = screen.queryByTestId("card__component_icon");
    const cardAvatar = screen.queryByTestId("avatar__img");

    expect(cardAvatar).toBeNull();
    expect(cardIcon).toBeNull();
  });
});
