import { useState, useContext } from "react";
import { GlobalContext } from "@/contexts/currentUserContext";
import { Alert } from "react-native";
import { authUser } from "@/services/api";
import { router, Link } from "expo-router";

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
  HStack,
  Spinner,
} from "@gluestack-ui/themed";

const Form = () => {
  const { setToken } = useContext(GlobalContext);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [userPass, setUserPass] = useState("");
  const [loading, isLoading] = useState(false);

  const userLogin = async () => {
    try {
      isLoading(true);
      const response = await authUser(username, userPass);
      const jwtToken = response.data.token;
      setToken(jwtToken);
      router.replace("/home");
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível fazer login", `Erro: ${error}`);
    } finally {
      isLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Center w="100%" h={200}>
          <HStack space="sm">
            <Spinner color="white" />
            <Text color="white" size="md">
              Entrando
            </Text>
          </HStack>
        </Center>
      ) : (
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

            <InputField
              placeholder="Email"
              value={username}
              onChangeText={(t) => setUsername(t)}
            />
          </Input>

          <Input variant="outline" size="md" p={10}>
            <InputSlot pr={0}>
              <InputIcon as={LockIcon} />
            </InputSlot>

            <InputField
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={userPass}
              onChangeText={(t) => setUserPass(t)}
            />

            <InputSlot pr={0} onPress={() => setShowPassword(!showPassword)}>
              <InputIcon as={showPassword ? EyeOffIcon : EyeIcon} />
            </InputSlot>
          </Input>

          <Button
            size="md"
            variant="solid"
            action="primary"
            onPress={userLogin}
          >
            <ButtonText>Login </ButtonText>
          </Button>
        </VStack>
      )}
    </>
  );
};

export default Form;
