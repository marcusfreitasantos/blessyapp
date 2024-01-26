import { useState } from "react";

import {
  Input,
  InputField,
  InputSlot,
  InputIcon,
  EyeIcon,
  EyeOffIcon,
} from "@gluestack-ui/themed";
import { View } from "react-native";

interface InputComponentProps {
  inputIcon?: {};
  inputType: "text" | "password";
  inputPlaceholder: string;
  inputValue: string;
  onChangeText: (t: string) => void;
}

const InputComponent = ({
  inputIcon,
  inputType,
  inputPlaceholder,
  inputValue,
  onChangeText,
}: InputComponentProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input variant="outline" size="md" p={10}>
      {inputIcon && <InputIcon as={inputIcon} testID="input__icon" />}

      <InputField
        type={showPassword ? "text" : inputType}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChangeText={onChangeText}
        placeholderTextColor="#aaa"
        color="#aaa"
      />

      {inputType === "password" && (
        <InputSlot pr={0} onPress={() => setShowPassword(!showPassword)}>
          <InputIcon as={showPassword ? EyeOffIcon : EyeIcon} />
        </InputSlot>
      )}
    </Input>
  );
};

export default InputComponent;
