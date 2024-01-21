import { Center, Text, HStack, Spinner } from "@gluestack-ui/themed";

interface LoadingSpinnerProps {
  spinnerText: string;
}

const LoadingSpinner = ({ spinnerText }: LoadingSpinnerProps) => {
  return (
    <Center w="100%" h={200}>
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
