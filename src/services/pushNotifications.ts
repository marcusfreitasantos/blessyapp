import * as Notifications from "expo-notifications";
import messaging from "@react-native-firebase/messaging";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

type NotificationMessageProps = {
  notification: {
    android: {};
    body: string;
    title: string;
  };
  data: {
    churchId: string;
    postId: string;
    postType: string;
  };
};

const onMessageReceived = async ({
  notification,
  data,
}: NotificationMessageProps) => {
  if (!notification) return;
  const { title, body } = notification;
  callNotificationAlert(title, body);
};

messaging().onMessage(onMessageReceived);
messaging().setBackgroundMessageHandler(onMessageReceived);

const callNotificationAlert = async (title: string, body: string) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: title,
      body: body,
    },
    trigger: null,
  });
};

export const handleNotificationPermissions = async () => {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
};
