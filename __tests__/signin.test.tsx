import TestRenderer from "react-test-renderer";
import Signin from "../app/index";

describe("<Signin/>", () => {
  it("Should render login screen", () => {
    const tree = TestRenderer.create(<Signin />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
