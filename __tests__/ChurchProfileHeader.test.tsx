import { render } from "@testing-library/react-native";
import ChurchProfileHeader from "@/components/ChurchProfileHeader";

describe("ChurchProfileHeader Component", () => {
  it("Should render the profile header", () => {
    const profileHeader = render(
      <ChurchProfileHeader coverImg={"DefaultCoverImg"} />
    );
    expect(profileHeader).toBeTruthy();
  });
});
