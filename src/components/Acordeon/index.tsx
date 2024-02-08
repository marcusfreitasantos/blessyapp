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

const Acordeon = () => {
  return (
    <Accordion>
      {Musics &&
        Musics.map((music) => {
          return (
            <AccordionItem value={music.id.toString()}>
              <AccordionHeader>
                <AccordionTrigger>
                  {({ isExpanded }) => {
                    return (
                      <>
                        <AccordionTitleText>{music.name}</AccordionTitleText>
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
              <AccordionContent h={300}>
                <ScrollView>
                  <AccordionContentText>{music.lyrics}</AccordionContentText>
                </ScrollView>
              </AccordionContent>
            </AccordionItem>
          );
        })}
    </Accordion>
  );
};

export default Acordeon;
