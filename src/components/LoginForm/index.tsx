import React, { useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginUserWithFirebase } from "@/services/users";
import { GlobalContext } from "@/contexts/currentUserContext";
import { router } from "expo-router";
import { VStack } from "@gluestack-ui/themed";
import { Mail, Lock } from "lucide-react-native";
import ButtonComponent from "../Button";
import InputComponent from "../Input";
import LoadingSpinner from "../LoadingSpinner";
import ModalComponent from "../ModalComponent";
import loginUser from "@/utils/loginUser";
import { Alert } from "react-native";

type ModalComponentProps = {
  modalText: string;
  modalState: boolean;
  modalType: "success" | "error";
};

const LoginForm = () => {
  const { setUserObj } = useContext(GlobalContext);
  const [userEmail, setuserEmail] = useState("videira@gmail.com");
  const [userPass, setUserPass] = useState("cdz___182");
  const [loading, isLoading] = useState(false);
  const [modalProps, setModalProps] = useState<ModalComponentProps>({
    modalText: "",
    modalType: "success",
    modalState: false,
  });

  const userLogin = async () => {
    try {
      isLoading(true);
      const response = await loginUser(userEmail, userPass);
      setUserObj(response?.data);
    } catch (error) {
      console.log(error);
      setModalProps({
        modalText: "Usuário ou senha incorretos!",
        modalType: "error",
        modalState: true,
      });
    } finally {
      isLoading(false);
    }
  };

  const signInUser = async () => {
    console.log(userEmail, userPass);
    isLoading(true);
    try {
      const res = await loginUserWithFirebase(userEmail, userPass);

      if (res?.docs[0].data()) {
        console.log("userdata", res?.docs[0].data());
        setUserObj(res?.docs[0].data());
        router.replace("/home");
      }
    } catch (e) {
      console.log(e);
      Alert.alert("Usuário ou senha inválidos");
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
          space="md"
          reversed={false}
          bg="white"
          w="100%"
          p={20}
          rounded={3}
          hardShadow="1"
        >
          <ModalComponent
            modalText={modalProps.modalText}
            modalState={modalProps.modalState}
            modalType={modalProps.modalType}
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

          <ButtonComponent
            onPress={signInUser}
            buttonText="Login"
            action="primary"
            variant="solid"
            rounded
          />
        </VStack>
      )}
    </>
  );
};

export default LoginForm;
