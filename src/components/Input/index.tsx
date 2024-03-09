import { useState } from "react";
import { Input, InputField, InputSlot, InputIcon } from "@gluestack-ui/themed";
import { EyeIcon, EyeOff, X } from "lucide-react-native";

type InputComponentProps = {
  inputIcon?: {};
  inputType: "text" | "password";
  inputPlaceholder: string;
  inputValue: string;
  clearButton?: boolean;
  onChangeText: (t: string) => void;
  onPress?: () => void;
};

const InputComponent = ({
  inputIcon,
  inputType,
  inputPlaceholder,
  inputValue,
  clearButton,
  onChangeText,
  onPress,
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

      {inputType === "password" ? (
        <InputSlot pr={0} onPress={() => setShowPassword(!showPassword)}>
          <InputIcon
            as={showPassword ? EyeOff : EyeIcon}
            color="$secondary400"
          />
        </InputSlot>
      ) : (
        clearButton && (
          <InputSlot pr={0} onPress={onPress}>
            <InputIcon as={X} color="$secondary400" />
          </InputSlot>
        )
      )}
    </Input>
  );
};

export default InputComponent;
