import {
  HStack,
  Text,
  VStack,
  Heading,
  Divider,
  Box,
} from "@gluestack-ui/themed";

import Avatar from "../Avatar";

type currentChurchProps = {
  currentChurchInfo: {
    id: number;
    name: string;
    address: string;
    description: string;
    logo: string;
    coverImg: string;
  };
};

const ChurchProfileHeaderContent = ({
  currentChurchInfo,
}: currentChurchProps) => {
  return (
    <Box>
      <HStack justifyContent="space-between">
        <VStack>
          <Heading color="$secondary700">{currentChurchInfo.name}</Heading>
          <Text color="$secondary400">{currentChurchInfo.address}</Text>
        </VStack>

        <Avatar avatarImg="" avatarTitle={currentChurchInfo.name} />
      </HStack>

      <Divider my={20} bgColor="$secondary400" />

      <Text color="$secondary400">{currentChurchInfo.description}</Text>
    </Box>
  );
};

export default ChurchProfileHeaderContent;
