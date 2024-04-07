import { render } from "@testing-library/react-native";
import HeadingComponent from "@/components/Heading";
import { StyledProvider } from "@gluestack-style/react";
import { config } from "../config/gluestack-ui.config";

describe("Heading Component", () => {
  it("Should render the heading component with props", () => {
    const headingComponent = render(
      <StyledProvider config={config}>
        <HeadingComponent headingText="Heading Text" />
      </StyledProvider>
    );
    expect(headingComponent).toBeTruthy();
  });
});
