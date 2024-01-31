import { useLocalSearchParams } from "expo-router";
import ChurchProfileHeader from "@/components/ChurchProfileHeader";

const ChurchScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <>
      <ChurchProfileHeader currentChurchId={id} />
    </>
  );
};

export default ChurchScreen;
