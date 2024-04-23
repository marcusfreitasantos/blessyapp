import { useState } from "react";
import { resetUserPassword } from "@/services/users";
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
  modalOnpress?: () => void;
};

const ResetPasswordForm = () => {
  const [userEmail, setuserEmail] = useState("");
  const [loading, isLoading] = useState(false);

  const handleModalOnpress = () => {
    router.push({
      pathname: `/home`,
    });
  };

  const [modalProps, setModalProps] = useState<ModalComponentProps>({
    modalText: "",
    modalType: "success",
    modalState: false,
    modalOnpress: handleModalOnpress,
  });

  const resetPassword = async () => {
    try {
      isLoading(true);
      await resetUserPassword(userEmail);
      setModalProps({
        modalText: "Enviamos uma nova senha para o seu email!",
        modalType: "success",
        modalState: true,
        modalOnpress: handleModalOnpress,
      });
    } catch (error) {
      console.log(error);
      setModalProps({
        modalText:
          "Não foi possível recuperar sua conta, tente novamente ou entre em contato com nosso suporte.",
        modalType: "error",
        modalState: true,
      });
    } finally {
      isLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner spinnerText="Criando conta" />
      ) : (
        <VStack
          space="md"
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
            modalOnpress={modalProps.modalOnpress}
          />

          <InputComponent
            inputIcon={Mail}
            inputType="text"
            inputPlaceholder="Email"
            inputValue={userEmail}
            onChangeText={(t: string) => setuserEmail(t)}
          />

          <ButtonComponent
            onPress={resetPassword}
            buttonText="Redifinir senha"
            action="primary"
            variant="solid"
            rounded
          />
        </VStack>
      )}
    </>
  );
};

export default ResetPasswordForm;
