import { useLocalSearchParams } from "expo-router";
import ChurchProfileHeader from "@/components/ChurchProfileHeader";
import { Box, HStack } from "@gluestack-ui/themed";
import ButtonComponent from "@/components/Button";
import { useEffect, useState } from "react";
import ChurchProfileContentMenu from "@/components/ChurchProfileContentMenu";

const ChurchScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <>
      <ChurchProfileHeader currentChurchId={id} />
      <Box p={20}>
        <ChurchProfileContentMenu />
      </Box>
    </>
  );
};

export default ChurchScreen;
