import { Center, Text, HStack, Spinner } from "@gluestack-ui/themed";

type LoadingSpinnerProps = {
  spinnerText: string;
};

const LoadingSpinner = ({ spinnerText }: LoadingSpinnerProps) => {
  return (
    <Center w="100%" flex={1}>
      <HStack space="sm">
        <Spinner color="white" />
        <Text color="white" size="md">
          {spinnerText}
        </Text>
      </HStack>
    </Center>
  );
};

export default LoadingSpinner;
