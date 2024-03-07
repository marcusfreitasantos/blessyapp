import AsyncStorage from "@react-native-async-storage/async-storage";

const useStoreUserObj = async (userObj: {}) => {
  try {
    await AsyncStorage.setItem("blessy_current_user", JSON.stringify(userObj));
  } catch (error) {
    console.log("Error setting token in Async Storage:", error);
  }
};

export default useStoreUserObj;
