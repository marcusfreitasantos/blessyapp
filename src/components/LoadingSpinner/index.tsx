import { Center, Text, HStack, Spinner } from "@gluestack-ui/themed";

type LoadingSpinnerProps = {
  spinnerText?: string;
  spinnerColor?: string;
};

const LoadingSpinner = ({ spinnerText, spinnerColor }: LoadingSpinnerProps) => {
  return (
    <Center w="100%" flex={1}>
      <HStack space="sm">
        <Spinner color={spinnerColor ? spinnerColor : "$white"} />
        <Text color="white" size="md">
          {spinnerText}
        </Text>
      </HStack>
    </Center>
  );
};

export default LoadingSpinner;
