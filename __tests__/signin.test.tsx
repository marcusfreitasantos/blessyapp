import TestRenderer from "react-test-renderer";
import Signin from "../app/index";
import { StyledProvider } from "@gluestack-style/react";
import { config } from "../config/gluestack-ui.config";

describe("<Signin/>", () => {
  it("Should render login screen", () => {
    const tree = TestRenderer.create(
      <StyledProvider config={config}>
        <Signin />
      </StyledProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
