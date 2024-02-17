import { render } from "@testing-library/react-native";
import HomeHeader from ".";
import { StyledProvider } from "@gluestack-style/react";
import { config } from "../../../config/gluestack-ui.config";

describe("Home Header Component", () => {
  it("Should render Home Header", () => {
    const homeHeader = render(
      <StyledProvider config={config}>
        <HomeHeader />
      </StyledProvider>
    );

    expect(homeHeader).toBeTruthy();
  });
});
