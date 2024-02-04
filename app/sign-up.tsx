import { Center, Text, HStack } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import SignUpForm from "@/components/SignUpForm";
import BlessyLogo from "@/components/Logo";

const Signup = () => {
  return (
    <Center h="100%" bg="$primary500" p={40}>
      <BlessyLogo />

      <SignUpForm />

      <HStack py={20} space="lg">
        <Link href="/">
          <Text color="white">Já tem uma conta? Faça login.</Text>
        </Link>
      </HStack>
    </Center>
  );
};

export default Signup;
