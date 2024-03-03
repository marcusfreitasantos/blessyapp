import { useState } from "react";
import { Alert } from "react-native";
import { createUser } from "@/services/users";
import { router } from "expo-router";

import { VStack } from "@gluestack-ui/themed";
import { User, Mail, Lock } from "lucide-react-native";

import ButtonComponent from "../Button";
import InputComponent from "../Input";
import LoadingSpinner from "../LoadingSpinner";

const SignUpForm = () => {
  const [userFullName, setUserFullName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userConfirmPass, setUserConfirmPass] = useState("");
  const [loading, isLoading] = useState(false);

  const createNewUser = async () => {
    const username = userFullName.replace(" ", "").toLowerCase();

    try {
      isLoading(true);
      await createUser(username, userEmail, userPass, userFullName);
      Alert.alert("Conta criada com sucesso!", "", [
        { text: "Fazer Login", onPress: () => router.replace("/") },
      ]);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", `${error}`);
    } finally {
      isLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner spinnerText="Entrando" />
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
          <InputComponent
            inputIcon={User}
            inputType="text"
            inputPlaceholder="Seu nome completo"
            inputValue={userFullName}
            onChangeText={(t: string) => setUserFullName(t)}
          />

          <InputComponent
            inputIcon={Mail}
            inputType="text"
            inputPlaceholder="Email"
            inputValue={userEmail}
            onChangeText={(t: string) => setuserEmail(t)}
          />

          <InputComponent
            inputIcon={Lock}
            inputType="password"
            inputPlaceholder="Senha"
            inputValue={userPass}
            onChangeText={(t: string) => setUserPass(t)}
          />

          <InputComponent
            inputIcon={Lock}
            inputType="password"
            inputPlaceholder="Confirme sua senha"
            inputValue={userConfirmPass}
            onChangeText={(t: string) => setUserConfirmPass(t)}
          />

          <ButtonComponent
            onPress={createNewUser}
            buttonText="Criar Conta"
            action="primary"
            variant="solid"
            rounded
          />
        </VStack>
      )}
    </>
  );
};

export default SignUpForm;
