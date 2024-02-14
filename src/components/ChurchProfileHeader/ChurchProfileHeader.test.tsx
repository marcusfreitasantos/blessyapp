import { render } from "@testing-library/react-native";
import ChurchProfileHeader from ".";

describe("ChurchProfileHeader Component", () => {
  it("Should render the profile header", () => {
    const profileHeader = render(<ChurchProfileHeader />);
    expect(profileHeader).toBeTruthy();
  });
});
