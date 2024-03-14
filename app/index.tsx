import { Text, HStack, ImageBackground } from "@gluestack-ui/themed";
import { useEffect } from "react";
import { Link } from "expo-router";
import LoginForm from "@/components/LoginForm";
import BlessyLogo from "@/components/Logo";
import { backgroundImgUri } from "@/components/DefaultImages";
import * as Notifications from "expo-notifications";
import messaging from "@react-native-firebase/messaging";

const Signin = () => {
  const onMessageReceived = async (message) => {
    const { title, body } = message.notification;
    console.log("title: ", title, "body: ", body);
    callNotificationAlert(title, body);
  };

  messaging().onMessage(onMessageReceived);
  messaging().setBackgroundMessageHandler(onMessageReceived);

  const callNotificationAlert = async (title, body) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: title,
        body: body,
      },
      trigger: null,
    });
  };

  const handleNotificationPermissions = async () => {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
  };

  useEffect(() => {
    handleNotificationPermissions();
  }, []);

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
