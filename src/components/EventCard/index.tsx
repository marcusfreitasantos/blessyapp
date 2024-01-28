import { HStack, VStack, Text, Pressable, Divider } from "@gluestack-ui/themed";

const EventCardComponent = () => {
  const navigateToCardUrl = () => {
    console.log("Navigate");
  };

  return (
    <Pressable onPress={navigateToCardUrl} my={5}>
      <HStack
        p={15}
        justifyContent="space-between"
        alignItems="center"
        space="xs"
        w="100%"
        bg="white"
        mt={5}
        softShadow="4"
        shadowOffset={{ width: 0, height: 10 }}
        shadowOpacity={0.2}
        rounded={5}
      >
        <VStack width="100%" space="md">
          <HStack justifyContent="space-between" alignItems="center">
            <Text bold fontSize="$lg" color="$primary500">
              Nome do evento
            </Text>

            <Text fontSize="$sm" bold>
              01/01/2024
            </Text>
          </HStack>

          <Divider my="$0.5" />

          <Text fontSize="$sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate quam quis sapien convallis vestibulum.
          </Text>
        </VStack>
      </HStack>
    </Pressable>
  );
};

export default EventCardComponent;
