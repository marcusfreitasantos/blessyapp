import { Center, Text, Box, HStack } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import Form from "@/components/form";

const Login = () => {
  return (
    <Center h="100%" bg="$primary500" p={40}>
      <Text color="white" size="6xl" bold py={20}>
        Blessy
      </Text>

      <Form />

      <HStack py={20} space="lg">
        <Link href="/register">
          <Text color="white">Crie sua conta!</Text>
        </Link>

        <Link href="">
          <Text color="white">Recuperar senha</Text>
        </Link>
      </HStack>
    </Center>
  );
};

export default Login;
