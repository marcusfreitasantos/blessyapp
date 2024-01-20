import React from "react";
import renderer from "react-test-renderer";

import Signin from "../app/index";

describe("<Signin />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<Signin />).toJSON();
    expect(tree?.children.length).toBe(3);
  });
});
