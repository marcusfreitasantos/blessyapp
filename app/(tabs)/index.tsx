import { Box, Text } from "@gluestack-ui/themed";
import { Link } from "expo-router";

const Login = () => {
  return (
    <Box bg="$primary500" p="$5">
      <Text>Blessy</Text>
      <Link href="/home">Login</Link>
    </Box>
  );
};

export default Login;
