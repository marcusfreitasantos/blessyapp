import { useState } from "react";
import { Alert } from "react-native";

import {
  Box,
  Center,
  Text,
  Input,
  InputField,
  InputSlot,
  InputIcon,
  MailIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon,
  Button,
  ButtonText,
  VStack,
} from "@gluestack-ui/themed";

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);

  const userLogin = () => {
    console.log("Login");
  };

  return (
    <VStack
      space="xl"
      reversed={false}
      bg="white"
      w="100%"
      p={20}
      rounded={3}
      hardShadow={"1"}
    >
      <Input variant="outline" size="md" p={10}>
        <InputSlot pr={0}>
          <InputIcon as={MailIcon} />
        </InputSlot>

        <InputField placeholder="Email" />
      </Input>

      <Input variant="outline" size="md" p={10}>
        <InputSlot pr={0}>
          <InputIcon as={LockIcon} />
        </InputSlot>

        <InputField
          type={showPassword ? "text" : "password"}
          placeholder="Senha"
        />

        <InputSlot pr={0} onPress={() => setShowPassword(!showPassword)}>
          <InputIcon as={showPassword ? EyeOffIcon : EyeIcon} />
        </InputSlot>
      </Input>

      <Button size="md" variant="solid" action="primary" onPress={userLogin}>
        <ButtonText>Login </ButtonText>
      </Button>
    </VStack>
  );
};

export default Form;
