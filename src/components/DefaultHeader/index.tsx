import { Text, HStack } from "@gluestack-ui/themed";

type HeaderDefaultProps = {
  screenName: string;
};

const HeaderDefault = ({ screenName }: HeaderDefaultProps) => {
  return (
    <HStack bg="$white" px={20} pt={60} pb={20}>
      <Text bold color="$secondary700" fontSize="$xl">
        {screenName}
      </Text>
    </HStack>
  );
};

export default HeaderDefault;
