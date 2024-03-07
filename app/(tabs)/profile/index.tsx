import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "@/contexts/currentUserContext";
import { VStack } from "@gluestack-ui/themed";
import HeaderDefault from "@/components/DefaultHeader";
import InputComponent from "@/components/Input";
import ButtonComponent from "@/components/Button";
import { User, Mail, Lock } from "lucide-react-native";
import { updateUserById } from "@/services/users";
import useStoreUserObj from "@/hooks/useStoreUserObj";
import LoadingSpinner from "@/components/LoadingSpinner";

type UpdateduserObjProps = {
  token: string;
  userID: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
};

const Profile = () => {
  const { userObj, setUserObj } = useContext(GlobalContext);
  const [userFirstName, setUserFirstName] = useState(userObj.firstName);
  const [userLastName, setUserLastName] = useState(userObj.lastName);
  const [userEmail, setuserEmail] = useState(userObj.email);
  const [userPass, setUserPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const userUpdateAfterSubmitForm = async () => {
    try {
      setIsLoading(true);
      const res = await updateUserById(
        userObj.userID,
        userFirstName,
        userLastName,
        userEmail,
        userPass
      );

      if (res) {
        const updatedUserObj: UpdateduserObjProps = {
          token: userObj.token,
          userID: userObj.userID,
          email: res.data.email,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          avatar: "",
        };
        setUserObj(updatedUserObj);
        useStoreUserObj(updatedUserObj);
      }
    } catch (error) {
      console.log("Error from userUpdateAfterSubmitForm: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <HeaderDefault screenName="Perfil" />

      {isLoading ? (
        <LoadingSpinner spinnerColor="$blessyPrimaryColor" />
      ) : (
        <VStack space="xl" reversed={false} w="100%" p={20}>
          <InputComponent
            inputIcon={User}
            inputType="text"
            inputPlaceholder="Nome"
            inputValue={userFirstName}
            onChangeText={(t: string) => setUserFirstName(t)}
          />

          <InputComponent
            inputIcon={User}
            inputType="text"
            inputPlaceholder="Sobrenome"
            inputValue={userLastName}
            onChangeText={(t: string) => setUserLastName(t)}
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
            inputPlaceholder="Confirmar Senha"
            inputValue={userPass}
            onChangeText={(t: string) => setUserPass(t)}
          />

          <ButtonComponent
            onPress={userUpdateAfterSubmitForm}
            buttonText="Atualizar"
            action="primary"
            variant="solid"
            rounded
          />
        </VStack>
      )}
    </>
  );
};

export default Profile;
