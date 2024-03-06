import { useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { authUser, validateToken } from "@/services/api";
import { GlobalContext } from "@/contexts/currentUserContext";
import { router } from "expo-router";
import { VStack } from "@gluestack-ui/themed";
import { Mail, Lock } from "lucide-react-native";
import ButtonComponent from "../Button";
import InputComponent from "../Input";
import LoadingSpinner from "../LoadingSpinner";

const LoginForm = () => {
  const { setUserObj } = useContext(GlobalContext);
  const [userEmail, setuserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [loading, isLoading] = useState(false);

  const userLogin = async () => {
    try {
      isLoading(true);
      const response = await authUser(userEmail, userPass);
      setUserObj(response.data);
      storeUserObj(response.data);
      router.replace("/home");
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível fazer login", `Erro: ${error}`);
    } finally {
      isLoading(false);
    }
  };

  const getStoredUserObj = async () => {
    isLoading(true);
    try {
      const storedUserObj = await AsyncStorage.getItem("blessy_current_user");

      if (storedUserObj !== null) {
        const currentUserObj = JSON.parse(storedUserObj);

        const { data } = await validateToken(currentUserObj.token);

        if (data.data.status === 200) {
          setUserObj(currentUserObj);
          router.replace("/home");
        }
      }
    } catch (error) {
      console.log("Error getting token from Async Storage:", error);
    } finally {
      isLoading(false);
    }
  };

  const storeUserObj = async (userObj: {}) => {
    try {
      await AsyncStorage.setItem(
        "blessy_current_user",
        JSON.stringify(userObj)
      );
    } catch (error) {
      console.log("Error setting token in Async Storage:", error);
    }
  };

  useEffect(() => {
    getStoredUserObj();
  }, []);

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
          hardShadow="1"
        >
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
            onPress={userLogin}
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
