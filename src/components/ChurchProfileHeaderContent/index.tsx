import {
  HStack,
  Text,
  VStack,
  Heading,
  Divider,
  Box,
  Image,
} from "@gluestack-ui/themed";

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
      <HStack justifyContent="space-between" space="md">
        <VStack>
          <Heading color="$secondary700">{currentChurchInfo.name}</Heading>
          <Text color="$secondary400" fontSize="$sm">
            {currentChurchInfo.address}
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

      <Divider my={10} bgColor="$secondary400" />

      <Text color="$secondary400" fontSize="$sm">
        {currentChurchInfo.description}
      </Text>
    </Box>
  );
};

export default ChurchProfileHeaderContent;
