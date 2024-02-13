import { render, screen, fireEvent } from "@testing-library/react-native";
import ButtonComponent from ".";

describe("Button Component", () => {
  it("Should render a button and fire its click event", () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <ButtonComponent
        onPress={onPress}
        buttonText="Login"
        action="primary"
        variant="solid"
      />
    );

    const buttonComponent = getByText("Login");

    fireEvent.press(buttonComponent);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
