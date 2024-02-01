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

type InputComponentProps = {
  inputIcon?: {};
  inputType: "text" | "password";
  inputPlaceholder: string;
  inputValue: string;
  onChangeText: (t: string) => void;
};

const InputComponent = ({
  inputIcon,
  inputType,
  inputPlaceholder,
  inputValue,
  onChangeText,
}: InputComponentProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input variant="outline" size="md" p={10} borderColor="$secondary300">
      {inputIcon && (
        <InputIcon as={inputIcon} testID="input__icon" color="$secondary400" />
      )}

      <InputField
        type={showPassword ? "text" : inputType}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChangeText={onChangeText}
        placeholderTextColor="$secondary300"
        color="$secondary400"
      />

      {inputType === "password" && (
        <InputSlot pr={0} onPress={() => setShowPassword(!showPassword)}>
          <InputIcon
            as={showPassword ? EyeOffIcon : EyeIcon}
            color="$secondary400"
          />
        </InputSlot>
      )}
    </Input>
  );
};

export default InputComponent;
