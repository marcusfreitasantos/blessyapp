import { Image, Box, Text } from "@gluestack-ui/themed";

type AvatarProps = {
  avatarImg: string;
  avatarTitle: string;
};

const Avatar = ({ avatarImg, avatarTitle }: AvatarProps) => {
  const customSize = 40;

  const getInitialLetters = () => {
    const churchInitialLettersArray = avatarTitle.split("");
    return churchInitialLettersArray[0];
  };

  return avatarImg ? (
    <Image
      size="xs"
      source={{
        uri: avatarImg,
      }}
      alt="Avatar Image"
      rounded={50}
      borderColor="#ccc"
      borderWidth={1}
    />
  ) : (
    <Box
      bg="$primary500"
      p={5}
      rounded={50}
      w={customSize}
      h={customSize}
      justifyContent="center"
      alignItems="center"
    >
      <Text color="white" bold>
        {getInitialLetters()}
      </Text>
    </Box>
  );
};

export default Avatar;
