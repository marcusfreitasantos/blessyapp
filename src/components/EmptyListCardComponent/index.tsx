import { HStack, VStack, Text } from "@gluestack-ui/themed";

const EmptyListCardComponent = () => {
  return (
    <HStack
      p={15}
      justifyContent="space-between"
      alignItems="center"
      space="xs"
      w="100%"
      bg="white"
      mt={5}
      softShadow="1"
      borderTopRightRadius={5}
      borderBottomRightRadius={5}
      borderLeftColor="$blessySecondaryColor"
      borderLeftWidth="$4"
    >
      <VStack flex={1} px={10}>
        <Text fontSize="$sm" color="$secondary400">
          Nada encontrado.
        </Text>
      </VStack>
    </HStack>
  );
};

export default EmptyListCardComponent;
