import { Text, HStack, ImageBackground } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import LoginForm from "@/components/LoginForm";
import BlessyLogo from "@/components/Logo";
import { backgroundImgUri } from "@/components/DefaultImages";

const Signin = () => {
  return (
    <ImageBackground
      src={backgroundImgUri}
      p={40}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <BlessyLogo />

      <LoginForm />

      <HStack
        py={20}
        space="lg"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <Link href="/sign-up">
          <Text color="white">Crie sua conta!</Text>
        </Link>

        <Link href="/home">
          <Text color="white">Recuperar senha</Text>
        </Link>
      </HStack>
    </ImageBackground>
  );
};

export default Signin;
