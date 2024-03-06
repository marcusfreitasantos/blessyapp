import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "@/contexts/currentUserContext";
import { VStack } from "@gluestack-ui/themed";
import HeaderDefault from "@/components/DefaultHeader";
import InputComponent from "@/components/Input";
import ButtonComponent from "@/components/Button";
import { User, Mail, Lock } from "lucide-react-native";

const Profile = () => {
  const { userObj } = useContext(GlobalContext);
  const [userFirstName, setUserFirstName] = useState(userObj.firstName);
  const [userLastName, setUserLastName] = useState(userObj.lastName);
  const [userEmail, setuserEmail] = useState(userObj.email);
  const [userPass, setUserPass] = useState("");

  const userUpdate = async () => {
    console.log(
      `userFirstName: ${userFirstName}, userLastName: ${userLastName}, userEmail: ${userEmail}, userPass: ${userPass}`
    );
  };

  return (
    <>
      <HeaderDefault screenName="Perfil" />
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
          onPress={userUpdate}
          buttonText="Atualizar"
          action="primary"
          variant="solid"
          rounded
        />
      </VStack>
    </>
  );
};

export default Profile;
