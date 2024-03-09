import { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { VStack, Box } from "@gluestack-ui/themed";
import { Church, MapPin } from "lucide-react-native";
import HeaderDefault from "@/components/DefaultHeader";
import InputComponent from "@/components/Input";
import ButtonComponent from "@/components/Button";
import LoadingSpinner from "@/components/LoadingSpinner";
import SearchResult from "@/components/SearchResult";
import { getChurchesByMetadata } from "@/services/churches";
import { useIsFocused } from "@react-navigation/native";

type CurrentChurchesProps = {
  id: number;
  logo: string;
  name: string;
  address: string;
};

const Search = () => {
  const [churchName, setChurchName] = useState("");
  const [churchCity, setChurchCity] = useState("");
  const [churchState, setChurchState] = useState("");
  const [churchAddress, setChurchAddress] = useState("");
  const [churchesFound, setChurchesFound] = useState<
    CurrentChurchesProps[] | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);
  const isFocused = useIsFocused();

  const findChurchByMetadata = async () => {
    try {
      setIsLoading(true);
      Keyboard.dismiss();
      const res = await getChurchesByMetadata(
        churchName,
        churchState,
        churchCity,
        churchAddress
      );
      setChurchesFound(res?.data);
    } catch (error) {
      console.log("Error from findChurchByMetadata: ", error);
      setChurchesFound([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isFocused) {
      setChurchesFound(null);
    }
  }, [isFocused]);

  return (
    <>
      <HeaderDefault screenName="Pesquisa Avançada" />

      <VStack space="xl" reversed={false} w="100%" p={20} bgColor="$white">
        <InputComponent
          inputIcon={Church}
          inputType="text"
          inputPlaceholder="Nome da Igreja"
          inputValue={churchName}
          onChangeText={(t: string) => setChurchName(t)}
        />
        <InputComponent
          inputIcon={MapPin}
          inputType="text"
          inputPlaceholder="Estado"
          inputValue={churchState}
          onChangeText={(t: string) => setChurchState(t)}
        />
        <InputComponent
          inputIcon={MapPin}
          inputType="text"
          inputPlaceholder="Cidade"
          inputValue={churchCity}
          onChangeText={(t: string) => setChurchCity(t)}
        />
        <InputComponent
          inputIcon={MapPin}
          inputType="text"
          inputPlaceholder="Endereço"
          inputValue={churchAddress}
          onChangeText={(t: string) => setChurchAddress(t)}
        />
        <ButtonComponent
          onPress={findChurchByMetadata}
          buttonText="Pesquisar"
          action="primary"
          variant="solid"
          rounded
        />
      </VStack>

      {isLoading ? (
        <Box flex={1}>
          <LoadingSpinner spinnerColor="$blessyPrimaryColor" />
        </Box>
      ) : (
        <SearchResult churchesList={churchesFound} />
      )}
    </>
  );
};

export default Search;
