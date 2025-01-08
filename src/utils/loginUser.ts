import useStoreUserObj from "@/hooks/useStoreUserObj";
import { authUser } from "@/services/users";
import { router } from "expo-router";

const loginUser = async (userEmail: string, userPass: string) => {
  try {
    const response = await authUser(userEmail, userPass);
    useStoreUserObj(response.data);
    router.replace("/home");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default loginUser;
