import { Box, Text } from "@gluestack-ui/themed";
import { Link } from "expo-router";

const Register = () => {
  return (
    <Box bg="$primary500" p="$5">
      <Text>Register</Text>
      <Link href="/">Já tem uma conta? Faça login.</Link>
    </Box>
  );
};

export default Register;
