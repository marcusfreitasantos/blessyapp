import { useState } from "react";
import { FlatList } from "react-native";
import { Box } from "@gluestack-ui/themed";
import CardComponent from "../Card";
import EmptyListCardComponent from "../EmptyListCardComponent";
import HeadingComponent from "../Heading";

type ChurchesListProps = {
  churchesList:
    | {
        id: number;
        logo: string;
        name: string;
        address: string;
      }[]
    | null;
};

const SearchResult = ({ churchesList }: ChurchesListProps) => {
  return (
    <Box p={20} flex={1} bgColor="$white">
      <HeadingComponent headingText="Resultados de busca:" />

      {churchesList && (
        <FlatList
          data={churchesList}
          ListEmptyComponent={<EmptyListCardComponent />}
          renderItem={({ item, index }) => (
            <CardComponent
              id={item.id}
              logo={item.logo}
              name={item.name}
              description={item.address}
              parentUrl="church"
              currentIndex={index}
              hasImg
              hasIcon
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </Box>
  );
};

export default SearchResult;
