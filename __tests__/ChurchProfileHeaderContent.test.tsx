import { render } from "@testing-library/react-native";
import ChurchProfileHeaderContent from "@/components/ChurchProfileHeaderContent";
import { StyledProvider } from "@gluestack-style/react";
import { config } from "../config/gluestack-ui.config";

const currentChurchInfo = {
  id: 1,
  name: "Church Name",
  address: "Church Address",
  description: "Description",
  logo: "Logo",
  coverImg: "CoverImg",
};

describe("Church Profile Header Content Component", () => {
  it("Should render ChurchProfileHeaderContent", () => {
    const churchProfileHeaderContent = render(
      <StyledProvider config={config}>
        <ChurchProfileHeaderContent currentChurchInfo={currentChurchInfo} />
      </StyledProvider>
    );
    expect(churchProfileHeaderContent).toBeTruthy();
  });
});
