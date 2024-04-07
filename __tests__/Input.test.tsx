import { render, screen } from "@testing-library/react-native";
import InputComponent from "@/components/Input";
import { Lock } from "lucide-react-native";
import { StyledProvider } from "@gluestack-style/react";
import { config } from "../config/gluestack-ui.config";

describe("Component: Input", () => {
  it("should render input component with password type with icon", () => {
    const Input = render(
      <StyledProvider config={config}>
        <InputComponent
          inputIcon={Lock}
          inputType="password"
          inputPlaceholder="Senha"
          inputValue="123_password"
          onChangeText={(t: string) => void t}
        />
      </StyledProvider>
    );

    expect(Input).toBeTruthy();
  });

  it("should render input component with text type without icons", () => {
    render(
      <StyledProvider config={config}>
        <InputComponent
          inputType="text"
          inputPlaceholder="Email"
          inputValue="email@email.com"
          onChangeText={(t: string) => void t}
        />
      </StyledProvider>
    );

    const inputIcon = screen.queryByTestId("input__icon");
    expect(inputIcon).toBeNull();
  });
});
