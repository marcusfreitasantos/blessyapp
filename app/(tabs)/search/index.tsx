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
import SelectComponent from "@/components/SelectComponent";
import { BrazilianStates } from "@/mocks/brazilianStatesList";

type CurrentChurchesProps = {
  id: number;
  logo: string;
  name: string;
  address: string;
};

type SelectItemsListProps = [
  {
    name: string;
    value: string;
  }
];
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
  const selectItemsList: SelectItemsListProps = BrazilianStates;

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

      <VStack space="md" reversed={false} w="100%" p={20} bgColor="$white">
        <InputComponent
          inputIcon={Church}
          inputType="text"
          inputPlaceholder="Nome da Igreja"
          inputValue={churchName}
          onChangeText={(t: string) => setChurchName(t)}
        />

        <SelectComponent
          selectItemsList={selectItemsList}
          onValueChange={setChurchState}
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
