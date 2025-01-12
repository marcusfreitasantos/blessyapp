import React, { useState } from "react";
import { createUser } from "@/services/users";
import { VStack } from "@gluestack-ui/themed";
import { User, Mail, Lock } from "lucide-react-native";
import ButtonComponent from "../Button";
import InputComponent from "../Input";
import LoadingSpinner from "../LoadingSpinner";
import ModalComponent from "../ModalComponent";
import loginUser from "@/utils/loginUser";
import SelectComponent from "../SelectComponent";

type ModalComponentProps = {
  modalText: string;
  modalState: boolean;
  modalType: "success" | "error";
  modalOnpress?: () => void;
};

const SignUpForm = () => {
  const [userFullName, setUserFullName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userRole, setUserRole] = useState("subscriber");
  const [loading, isLoading] = useState(false);

  const selectItemsList = [
    {
      name: "Membro",
      value: "subscriber",
    },
    {
      name: "Instituição",
      value: "church",
    },
  ];

  const handleModalOnpress = () => {
    loginUser(userEmail, userPass);
  };

  const [modalProps, setModalProps] = useState<ModalComponentProps>({
    modalText: "",
    modalType: "success",
    modalState: false,
    modalOnpress: handleModalOnpress,
  });

  const createNewUser = async () => {
    const username = userFullName.replace(" ", "").toLowerCase();

    try {
      isLoading(true);
      await createUser(username, userEmail, userPass, userFullName, userRole);
      setModalProps({
        modalText: "Conta criada com sucesso!",
        modalType: "success",
        modalState: true,
        modalOnpress: handleModalOnpress,
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
            inputIcon={User}
            inputType="text"
            inputPlaceholder={
              userRole === "subscriber"
                ? "Seu nome completo"
                : "Nome da Instituição"
            }
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

          <SelectComponent
            placeHolder="Selecione o tipo de conta"
            onValueChange={(value: string) => setUserRole(value)}
            selectItemsList={selectItemsList}
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
