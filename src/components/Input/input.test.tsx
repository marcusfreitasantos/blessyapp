import { render, screen } from "@testing-library/react-native";
import InputComponent from ".";
import { Lock } from "lucide-react-native";

describe("Component: Input", () => {
  it("should render input component with password type with icon", () => {
    const Input = render(
      <InputComponent
        inputIcon={Lock}
        inputType="password"
        inputPlaceholder="Senha"
        inputValue="123_password"
        onChangeText={(t: string) => void t}
      />
    );

    expect(Input).toBeTruthy();
  });

  it("should render input component with text type without icons", () => {
    render(
      <InputComponent
        inputType="text"
        inputPlaceholder="Email"
        inputValue="email@email.com"
        onChangeText={(t: string) => void t}
      />
    );

    const inputIcon = screen.queryByTestId("input__icon");
    expect(inputIcon).toBeNull();
  });
});
