import { Text, HStack, ImageBackground, Box } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import SignUpForm from "@/components/SignUpForm";
import BlessyLogo from "@/components/Logo";
import { backgroundImgUri } from "@/components/DefaultImages";
import HelpButton from "@/components/HelpButton";

const Signup = () => {
  return (
    <ImageBackground
      src={backgroundImgUri}
      p={40}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Box flex={1} />

      <BlessyLogo />

      <SignUpForm />

      <HStack py={20}>
        <Link href="/">
          <Text color="white">Já tem uma conta? Faça login.</Text>
        </Link>
      </HStack>

      <HelpButton />
    </ImageBackground>
  );
};

export default Signup;
