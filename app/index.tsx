import { Center, Text, HStack, Box } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import LoginForm from "@/components/LoginForm";

const Signin = () => {
  return (
    <Center h="100%" bg="$primary500" p={40}>
      <Text color="white" size="6xl" bold py={20}>
        Blessy
      </Text>

      <LoginForm />

      <HStack
        py={20}
        space="lg"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <Link href="/sign-up">
          <Text color="white">Crie sua conta!</Text>
        </Link>

        <Link href="/home">
          <Text color="white">Recuperar senha</Text>
        </Link>
      </HStack>
    </Center>
  );
};

export default Signin;
