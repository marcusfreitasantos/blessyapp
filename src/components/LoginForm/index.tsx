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
  const { setToken } = useContext(GlobalContext);
  const [userEmail, setuserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [loading, isLoading] = useState(false);

  const userLogin = async () => {
    try {
      isLoading(true);
      const response = await authUser(userEmail, userPass);
      const jwtToken = response.data.token;
      setToken(jwtToken);
      storeToken(jwtToken);
      router.replace("/home");
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível fazer login", `Erro: ${error}`);
    } finally {
      isLoading(false);
    }
  };

  const getStoredToken = async () => {
    isLoading(true);
    try {
      const storedToken = await AsyncStorage.getItem(
        "blessy_current_user_token"
      );

      if (storedToken !== null) {
        const { data } = await validateToken(storedToken);

        if (data.data.status === 200) {
          setToken(storedToken);
          router.replace("/home");
        }
      }
    } catch (error) {
      console.log("Error getting token from Async Storage:", error);
    } finally {
      isLoading(false);
    }
  };

  const storeToken = async (currentToken: string) => {
    try {
      await AsyncStorage.setItem("blessy_current_user_token", currentToken);
    } catch (error) {
      console.log("Error setting token in Async Storage:", error);
    }
  };

  useEffect(() => {
    getStoredToken();
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
          />
        </VStack>
      )}
    </>
  );
};

export default LoginForm;
