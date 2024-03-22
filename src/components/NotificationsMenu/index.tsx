import { FlatList } from "react-native";
import {
  Box,
  Pressable,
  Text,
  HStack,
  Divider,
  VStack,
} from "@gluestack-ui/themed";
import { AnimatedView } from "@gluestack-style/animation-resolver";
import { styled } from "@gluestack-style/react";
import Avatar from "../Avatar";

const AnimatedBox = styled(AnimatedView, {
  ":initial": {
    opacity: 0,
    height: 0,
  },
  ":animate": {
    opacity: 1,
    height: 200,
  },
  ":exit": {
    height: 0,
  },
});

type NotificationsContentProps = {
  notificationsContent: {
    churchName: string;
    churchId: string;
    body: string;
    postDate: string;
    title: string;
  }[];
};

const NotificationsMenu = ({
  notificationsContent,
}: NotificationsContentProps) => {
  const goToNotificationLink = (notificationBody: string) => {
    console.log("notification", notificationBody);
  };

  return (
    <AnimatedBox w="100%" h={400} py={20}>
      <Box bgColor="$white" w="100%" mt={20}>
        {notificationsContent && (
          <FlatList
            data={notificationsContent}
            renderItem={({ item }) => (
              <>
                <Pressable onPress={() => goToNotificationLink(item.body)}>
                  <HStack alignItems="center" space="md">
                    {item.churchName && (
                      <Avatar avatarTitle={item.churchName} />
                    )}
                    <VStack space="sm" py={5}>
                      <Text color="$secondary400" fontSize="$sm">
                        {item.body}
                      </Text>
                      <Text color="$secondary300" fontSize="$xs" mt={-10}>
                        {item.postDate}
                      </Text>
                    </VStack>
                  </HStack>
                </Pressable>
                <Divider bgColor="$secondary100" my={10} />
              </>
            )}
            keyExtractor={(item) => item.body}
          />
        )}
      </Box>
    </AnimatedBox>
  );
};

export default NotificationsMenu;
