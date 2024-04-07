import { render } from "@testing-library/react-native";
import Paragraph from "@/components/Paragraph";
import { StyledProvider } from "@gluestack-style/react";
import { config } from "../config/gluestack-ui.config";

describe("Paragraph", () => {
  it("Should render paragraph with props", () => {
    const paragraphComponent = render(
      <StyledProvider config={config}>
        <Paragraph paragraphText="Paragraph" paragraphTitle="Title" />
      </StyledProvider>
    );
    expect(paragraphComponent).toBeTruthy();
  });
});
