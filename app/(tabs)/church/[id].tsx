import { Text } from "@gluestack-ui/themed";
import { useLocalSearchParams } from "expo-router";
import ChurchProfileHeader from "@/components/ChurchProfileHeader";

const ChurchScreen = () => {
  const currentChurch = useLocalSearchParams();
  return (
    <>
      <ChurchProfileHeader />
      <Text>Current Church: {currentChurch.id}</Text>
    </>
  );
};

export default ChurchScreen;
