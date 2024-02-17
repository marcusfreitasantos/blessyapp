import { render } from "@testing-library/react-native";
import LoadingSpinner from ".";

describe("Loading Spinner", () => {
  it("Should render loading spinner with text from props", () => {
    const loadingSpinner = render(<LoadingSpinner spinnerText="Loading..." />);
    expect(loadingSpinner).toBeTruthy();
  });
});
