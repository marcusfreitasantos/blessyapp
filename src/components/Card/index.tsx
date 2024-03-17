import { useEffect, useState, useContext } from "react";
import { router } from "expo-router";
import { HStack, VStack, Text, Icon, Pressable } from "@gluestack-ui/themed";
import { Heart } from "lucide-react-native";
import Avatar from "../Avatar";
import { saveUserBookmarks, removeUserBookmarks } from "@/services/users";
import { GlobalContext } from "@/contexts/currentUserContext";
import messaging from "@react-native-firebase/messaging";
import useStoreUserObj from "@/hooks/useStoreUserObj";

type CardComponentProps = {
  id: number;
  currentIndex: number;
  parentUrl: string;
  logo?: string;
  name: string;
  description: string;
  hasImg?: boolean;
  hasIcon?: boolean;
  bookmarked?: boolean;
};

type UpdateduserObjProps = {
  token: string;
  userID: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  bookmarks: number[];
};

const CardComponent = (props: CardComponentProps) => {
  const firebaseChurchTopic = `topic_church_${props.id}`;
  const { userObj, setUserObj } = useContext(GlobalContext);
  const [currentIndexType, setCurrentIndexType] = useState("even");
  const [bookmarkIconFill, setBookmarkIconFill] = useState(props.bookmarked);
  const navigateToCardUrl = () => {
    router.navigate(`/${props.parentUrl}/${props.id}`);
  };

  const handleBookmarks = async () => {
    setBookmarkIconFill(!bookmarkIconFill);
    if (bookmarkIconFill) {
      removeBookmarkedChurch();
    } else {
      bookmarkChurch();
    }
  };

  const bookmarkChurch = async () => {
    try {
      const req = await saveUserBookmarks(userObj.userID, props.id);
      const updatedUserObj: UpdateduserObjProps = {
        token: userObj.token,
        userID: userObj.userID,
        email: userObj.email,
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        avatar: "",
        bookmarks: req?.data,
      };
      setUserObj(updatedUserObj);
      useStoreUserObj(updatedUserObj);
      messaging().subscribeToTopic(firebaseChurchTopic);
    } catch (error) {
      console.log("Error from bookmarkObject: ", error);
    }
  };

  const removeBookmarkedChurch = async () => {
    try {
      const req = await removeUserBookmarks(userObj.userID, props.id);
      const updatedUserObj: UpdateduserObjProps = {
        token: userObj.token,
        userID: userObj.userID,
        email: userObj.email,
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        avatar: "",
        bookmarks: req?.data,
      };
      setUserObj(updatedUserObj);
      useStoreUserObj(updatedUserObj);
      messaging().unsubscribeFromTopic(firebaseChurchTopic);
    } catch (error) {
      console.log("Error from bookmarkObject: ", error);
    }
  };

  const identifyOddOrEvenIndex = () => {
    if (props.currentIndex % 2 === 0) {
      setCurrentIndexType("even");
    } else {
      setCurrentIndexType("odd");
    }
  };

  useEffect(() => {
    identifyOddOrEvenIndex();
  }, [currentIndexType]);

  return (
    <Pressable onPress={navigateToCardUrl} my={1}>
      <HStack
        p={15}
        justifyContent="space-between"
        alignItems="center"
        space="xs"
        w="100%"
        bg="white"
        softShadow="1"
        borderLeftColor={
          currentIndexType === "odd"
            ? "$blessyPrimaryColor"
            : "$blessySecondaryColor"
        }
        borderLeftWidth="$4"
      >
        {props.hasImg && (
          <Avatar avatarImg={props.logo} avatarTitle={props.name} />
        )}
        <VStack flex={1} px={10}>
          <Text bold fontSize="$lg" color="$secondary400">
            {props.name}
          </Text>
          <Text fontSize="$sm" isTruncated color="$secondary400">
            {props.description}
          </Text>
        </VStack>

        {props.hasIcon && (
          <Pressable onPress={handleBookmarks} testID="card__component_icon">
            <Icon
              as={Heart}
              size="xl"
              color="$blessyPrimaryColor"
              fill={bookmarkIconFill ? "$blessyPrimaryColor" : "$white"}
            />
          </Pressable>
        )}
      </HStack>
    </Pressable>
  );
};

export default CardComponent;
