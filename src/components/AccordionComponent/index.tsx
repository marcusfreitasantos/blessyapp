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
    <Accordion borderColor="$white" shadowColor="transparent" rounded={5}>
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
                borderColor="$white"
                bg="$blessyPrimaryColor"
              >
                <AccordionTrigger>
                  {({ isExpanded }) => {
                    return (
                      <>
                        <AccordionTitleText color="$white">
                          {music.name}
                        </AccordionTitleText>
                        {isExpanded ? (
                          <AccordionIcon
                            as={ChevronUp}
                            ml="$3"
                            color="$white"
                          />
                        ) : (
                          <AccordionIcon
                            as={ChevronDown}
                            ml="$3"
                            color="$white"
                          />
                        )}
                      </>
                    );
                  }}
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent h={400} py={20}>
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
