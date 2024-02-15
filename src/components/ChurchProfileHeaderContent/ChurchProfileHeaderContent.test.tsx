import { render } from "@testing-library/react-native";
import ChurchProfileHeaderContent from ".";
import { StyledProvider } from "@gluestack-style/react";
import { config } from "../../../config/gluestack-ui.config";

describe("Church Profile Header Content Component", () => {
  it("Should render ChurchProfileHeaderContent", () => {
    const churchProfileHeaderContent = render(
      <StyledProvider config={config}>
        <ChurchProfileHeaderContent currentChurchId="10" />
      </StyledProvider>
    );
    expect(churchProfileHeaderContent).toBeTruthy();
  });
});
