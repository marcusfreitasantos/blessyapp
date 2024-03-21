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
    title: string;
    body: string;
  }[];
};

const NotificationsMenu = ({
  notificationsContent,
}: NotificationsContentProps) => {
  const goToNotificationLink = (notificationBody: string) => {
    console.log("notification", notificationBody);
  };

  return (
    <AnimatedBox w="100%">
      <Box h={300} bgColor="$white" w="100%" mt={20}>
        {notificationsContent && (
          <FlatList
            data={notificationsContent}
            renderItem={({ item }) => (
              <>
                <Pressable onPress={() => goToNotificationLink(item.body)}>
                  <HStack alignItems="center" space="md">
                    <Avatar avatarTitle="Videira" />
                    <VStack space="sm" py={5}>
                      <Text color="$secondary400" fontSize="$sm">
                        {item.title}
                      </Text>
                      <Text color="$secondary300" fontSize="$xs" mt={-10}>
                        21 de março
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
