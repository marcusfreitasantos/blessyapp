import { HStack, VStack, Text, Pressable } from "@gluestack-ui/themed";

const EventCardComponent = () => {
  const navigateToCardUrl = () => {
    console.log("Navigate");
  };

  return (
    <Pressable onPress={navigateToCardUrl} px={20} pt={5}>
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
            <Text bold fontSize="$lg">
              Nome do evento
            </Text>

            <Text fontSize="$sm">01/01/2024</Text>
          </HStack>
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
