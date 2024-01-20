import { Box, Text } from "@gluestack-ui/themed";
import { Link } from "expo-router";

const Signup = () => {
  return (
    <Box bg="$primary500" p="$5">
      <Text>Signup</Text>
      <Link href="/">Já tem uma conta? Faça login.</Link>
    </Box>
  );
};

export default Signup;
