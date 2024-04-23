import { Text, HStack, ImageBackground, Box } from "@gluestack-ui/themed";
import { useEffect } from "react";
import { Link } from "expo-router";
import * as Updates from "expo-updates";
import LoginForm from "@/components/LoginForm";
import BlessyLogo from "@/components/Logo";
import { backgroundImgUri } from "@/components/DefaultImages";
import { handleNotificationPermissions } from "@/services/pushNotifications";
import HelpButton from "@/components/HelpButton";

const Signin = () => {
  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      alert(`Error fetching latest Expo update: ${error}`);
    }
  }
  useEffect(() => {
    onFetchUpdateAsync();
    handleNotificationPermissions();
  }, []);
  return (
    <ImageBackground
      src={backgroundImgUri}
      p={40}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Box flex={1} />
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

        <Link href="/resetPassword">
          <Text color="white">Recuperar senha</Text>
        </Link>
      </HStack>

      <HelpButton />
    </ImageBackground>
  );
};

export default Signin;
