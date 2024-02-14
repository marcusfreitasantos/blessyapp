import { render } from "@testing-library/react-native";
import ChurchProfileContentMenu from ".";

describe("ChurchProfileContentMenu Component", () => {
  it("Should render the menu with all its buttons", () => {
    const ChurchProfileContentMenuComponent = render(
      <ChurchProfileContentMenu />
    );

    expect(ChurchProfileContentMenuComponent).toBeTruthy();
  });
});
