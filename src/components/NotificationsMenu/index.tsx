import { FlatList } from "react-native";
import {
  Box,
  Pressable,
  Text,
  HStack,
  Divider,
  VStack,
} from "@gluestack-ui/themed";
import Avatar from "../Avatar";
import { router } from "expo-router";

type NotificationsContentProps = {
  notificationsContent: {
    churchName: string;
    churchId: string;
    body: string;
    postDate: string;
    postId: string;
    postType: string;
    title: string;
  }[];
};

const NotificationsMenu = ({
  notificationsContent,
}: NotificationsContentProps) => {
  const goToNotificationLink = (
    churchId: string,
    postId: string,
    postType: string
  ) => {
    router.push({
      pathname: `/church/${churchId}`,
    });
  };

  return (
    <Box bgColor="$white" w="100%" p={20} flex={1}>
      {notificationsContent && (
        <FlatList
          data={notificationsContent}
          renderItem={({ item }) => (
            <>
              <Pressable
                onPress={() =>
                  goToNotificationLink(
                    item.churchId,
                    item.postId,
                    item.postType
                  )
                }
              >
                <HStack alignItems="center" space="md">
                  {item.churchName && <Avatar avatarTitle={item.churchName} />}
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
  );
};

export default NotificationsMenu;
