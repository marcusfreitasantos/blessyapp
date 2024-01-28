import { Text } from "@gluestack-ui/themed";
import { useLocalSearchParams } from "expo-router";

const ChurchScreen = () => {
  const currentChurch = useLocalSearchParams();
  return <Text>Church ID: {currentChurch.id}</Text>;
};

export default ChurchScreen;
