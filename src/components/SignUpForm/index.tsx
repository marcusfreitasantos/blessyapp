import { useState } from "react";
import { Alert } from "react-native";
import { createUser } from "@/services/users";
import { router } from "expo-router";

import { VStack } from "@gluestack-ui/themed";
import { User, Mail, Lock } from "lucide-react-native";

import ButtonComponent from "../Button";
import InputComponent from "../Input";
import LoadingSpinner from "../LoadingSpinner";
import ModalComponent from "../ModalComponent";

type ModalComponentProps = {
  modalText: string;
  modalState: boolean;
  modalType: "success" | "error";
};

const SignUpForm = () => {
  const [userFullName, setUserFullName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userConfirmPass, setUserConfirmPass] = useState("");
  const [loading, isLoading] = useState(false);
  const [modalProps, setModalProps] = useState<ModalComponentProps>({
    modalText: "",
    modalType: "success",
    modalState: false,
  });

  const createNewUser = async () => {
    const username = userFullName.replace(" ", "").toLowerCase();

    try {
      isLoading(true);
      await createUser(username, userEmail, userPass, userFullName);
      setModalProps({
        modalText: "Conta criada com sucesso!",
        modalType: "success",
        modalState: true,
      });
    } catch (error) {
      console.log(error);
      setModalProps({
        modalText:
          "Não foi possível criar sua conta, tente novamente ou entre em contato com nosso suporte.",
        modalType: "error",
        modalState: true,
      });
    } finally {
      isLoading(false);
      setUserFullName("");
      setuserEmail("");
      setUserPass("");
      setUserConfirmPass("");
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
          <ModalComponent
            modalText={modalProps.modalText}
            modalState={modalProps.modalState}
            modalType={modalProps.modalType}
          />
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
