import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  Icon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  HStack,
} from "@gluestack-ui/themed";

import { ChevronDown } from "lucide-react-native";
import { FlatList } from "react-native";
import { MapPin } from "lucide-react-native";

type SelectComponentProps = {
  onValueChange: (value: string) => void;
  selectItemsList: [
    {
      name: string;
      value: string;
    }
  ];
};

const SelectComponent = ({
  onValueChange,
  selectItemsList,
}: SelectComponentProps) => {
  return (
    <Select onValueChange={(value) => onValueChange(value)}>
      <SelectTrigger variant="outline" size="md">
        <HStack alignItems="center">
          <Icon as={MapPin} ml={10} color="$secondary400" size="sm" />
          <SelectInput placeholder="Estado" />
          <Icon as={ChevronDown} mr={10} color="$secondary400" />
        </HStack>
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>

          <FlatList
            data={selectItemsList}
            renderItem={({ item }) => (
              <SelectItem
                key={item.value}
                label={item.name}
                value={item.value}
              />
            )}
            keyExtractor={(item) => item.value}
          />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

export default SelectComponent;
