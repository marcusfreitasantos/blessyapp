import { render } from "@testing-library/react-native";
import LoadingSpinner from ".";
import { StyledProvider } from "@gluestack-style/react";
import { config } from "../../../config/gluestack-ui.config";

describe("Loading Spinner", () => {
  it("Should render loading spinner with text from props", () => {
    const loadingSpinner = render(
      <StyledProvider config={config}>
        <LoadingSpinner spinnerText="Loading..." />
      </StyledProvider>
    );
    expect(loadingSpinner).toBeTruthy();
  });
});
