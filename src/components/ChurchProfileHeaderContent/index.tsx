import {
  HStack,
  Text,
  VStack,
  Heading,
  Box,
  Image,
} from "@gluestack-ui/themed";

import ChurchProps from "@/utils/churchProps";

type CurrentChurchProps = {
  currentChurchInfo: ChurchProps;
};

const ChurchProfileHeaderContent = ({
  currentChurchInfo,
}: CurrentChurchProps) => {
  return (
    <Box>
      <HStack justifyContent="space-between" space="md">
        <VStack>
          <Heading color="$secondary700">{currentChurchInfo.name}</Heading>
          <Text color="$secondary400" fontSize="$sm">
            {currentChurchInfo.address}
          </Text>
          <Text color="$secondary400" fontSize="$sm">
            {currentChurchInfo.city} - {currentChurchInfo.state}
          </Text>
        </VStack>

        {currentChurchInfo.logo && (
          <Image
            size="full"
            alt="church logo"
            source={{
              uri: currentChurchInfo.logo,
            }}
            h={40}
            w={100}
            resizeMode="contain"
          />
        )}
      </HStack>
    </Box>
  );
};

export default ChurchProfileHeaderContent;
