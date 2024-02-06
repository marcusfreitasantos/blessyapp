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
  currentChurchId: string | string[] | undefined;
};

const ChurchProfileHeaderContent = ({
  currentChurchId,
}: currentChurchProps) => {
  return (
    <Box>
      <HStack justifyContent="space-between">
        <VStack>
          <Heading color="$secondary700">
            Nome da Igreja - {currentChurchId}
          </Heading>
          <Text color="$secondary400">Endereço...</Text>
        </VStack>

        <Avatar avatarImg="" avatarTitle="Nome da Igreja" />
      </HStack>

      <Divider my={20} bgColor="$secondary400" />

      <Text color="$secondary400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        quam quis sapien convallis vestibulum. Phasellus maximus commodo nisi,
        at bibendum mi tincidunt sed.
      </Text>
    </Box>
  );
};

export default ChurchProfileHeaderContent;
