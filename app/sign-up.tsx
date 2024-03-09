import { Text, HStack, ImageBackground } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import SignUpForm from "@/components/SignUpForm";
import BlessyLogo from "@/components/Logo";
import { backgroundImgUri } from "@/components/DefaultImages";

const Signup = () => {
  return (
    <ImageBackground
      src={backgroundImgUri}
      p={40}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <BlessyLogo />

      <SignUpForm />

      <HStack py={20}>
        <Link href="/">
          <Text color="white">Já tem uma conta? Faça login.</Text>
        </Link>
      </HStack>
    </ImageBackground>
  );
};

export default Signup;
