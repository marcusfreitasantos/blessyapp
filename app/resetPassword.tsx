import { Text, HStack, ImageBackground, Box } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import BlessyLogo from "@/components/Logo";
import { backgroundImgUri } from "@/components/DefaultImages";
import ResetPasswordForm from "@/components/ResetPasswordForm";
import HelpButton from "@/components/HelpButton";

const ResetPassword = () => {
  return (
    <ImageBackground
      src={backgroundImgUri}
      p={40}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Box flex={1} />
      <BlessyLogo />

      <ResetPasswordForm />

      <HStack py={20}>
        <Link href="/">
          <Text color="white">Já tem uma conta? Faça login.</Text>
        </Link>
      </HStack>

      <HelpButton />
    </ImageBackground>
  );
};

export default ResetPassword;
