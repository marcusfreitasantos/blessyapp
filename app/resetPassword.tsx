import { Text, HStack, ImageBackground } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import BlessyLogo from "@/components/Logo";
import { backgroundImgUri } from "@/components/DefaultImages";
import ResetPasswordForm from "@/components/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <ImageBackground
      src={backgroundImgUri}
      p={40}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <BlessyLogo />

      <ResetPasswordForm />

      <HStack py={20}>
        <Link href="/">
          <Text color="white">Já tem uma conta? Faça login.</Text>
        </Link>
      </HStack>
    </ImageBackground>
  );
};

export default ResetPassword;
