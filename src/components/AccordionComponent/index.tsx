import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionIcon,
  AccordionContent,
  AccordionContentText,
  ScrollView,
} from "@gluestack-ui/themed";

import { ChevronUp, ChevronDown } from "lucide-react-native";
import { Musics } from "@/mocks/musics";

const AccordionComponent = () => {
  return (
    <Accordion
      borderColor="$blessyPrimaryColor"
      shadowColor="transparent"
      rounded={5}
    >
      {Musics &&
        Musics.map((music, index) => {
          return (
            <AccordionItem
              rounded={5}
              value={music.id.toString()}
              key={music.id.toString()}
            >
              <AccordionHeader
                borderTopWidth={index === 0 ? 0 : 1}
                borderColor="$blessyPrimaryColor"
                bg="$white"
              >
                <AccordionTrigger>
                  {({ isExpanded }) => {
                    return (
                      <>
                        <AccordionTitleText color="$blessyPrimaryColor">
                          {music.name}
                        </AccordionTitleText>
                        {isExpanded ? (
                          <AccordionIcon as={ChevronUp} ml="$3" />
                        ) : (
                          <AccordionIcon as={ChevronDown} ml="$3" />
                        )}
                      </>
                    );
                  }}
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent h={400}>
                <ScrollView>
                  <AccordionContentText color="$secondary400">
                    {music.lyrics}
                  </AccordionContentText>
                </ScrollView>
              </AccordionContent>
            </AccordionItem>
          );
        })}
    </Accordion>
  );
};

export default AccordionComponent;
