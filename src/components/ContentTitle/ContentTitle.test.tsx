import { render } from "@testing-library/react-native";
import ContentTitle from ".";
import { StyledProvider } from "@gluestack-style/react";
import { config } from "../../../config/gluestack-ui.config";

describe("Content Title Component", () => {
  it("Should render the Content Title component with props", () => {
    const contentTitle = render(
      <StyledProvider config={config}>
        <ContentTitle
          contentDate="01/01/2024"
          contentTitle="Title of the Content"
        />
      </StyledProvider>
    );
    expect(contentTitle).toBeTruthy();
  });
});
