import { Text, Box, Icon, HStack } from "@gluestack-ui/themed";
import { Clock, MapPin, Calendar } from "lucide-react-native";

type EventInfoProps = {
  eventStartDate: string;
  eventEndDate: string;
  eventTime: string;
  eventAddress: string;
  eventEntranceType: string;
  eventEntranceValue: string;
};

const EventInfo = ({
  eventStartDate,
  eventEndDate,
  eventTime,
  eventAddress,
  eventEntranceType,
  eventEntranceValue,
}: EventInfoProps) => {
  const translateEntranceType = () => {
    switch (eventEntranceType) {
      case "notfree":
        return "Evento pago";

      case "free":
        return "Evento gratuito";
    }
  };

  const componentProperties = {
    textColor: "$secondary500",
    fontSize: 14,
  };
  return (
    <Box>
      <HStack alignItems="center">
        <Icon as={Calendar} size="md" color={componentProperties.textColor} />
        <Text
          ml={10}
          color={componentProperties.textColor}
          fontSize={componentProperties.fontSize}
        >
          {eventStartDate} - {eventEndDate}
        </Text>
      </HStack>

      <HStack alignItems="center">
        <Icon as={Clock} size="md" color={componentProperties.textColor} />
        <Text
          ml={10}
          color={componentProperties.textColor}
          fontSize={componentProperties.fontSize}
        >
          {eventTime}
        </Text>
      </HStack>

      <HStack alignItems="center">
        <Icon color={componentProperties.textColor} as={MapPin} size="md" />
        <Text
          color={componentProperties.textColor}
          ml={10}
          fontSize={componentProperties.fontSize}
        >
          {eventAddress}
        </Text>
      </HStack>

      <HStack alignItems="center" justifyContent="space-between" pt={10}>
        <Text
          color={componentProperties.textColor}
          bold
          fontSize={componentProperties.fontSize}
        >
          {translateEntranceType()}
        </Text>

        {eventEntranceType === "notfree" && (
          <>
            <Text color={componentProperties.textColor}>|</Text>
            <Text
              bold
              color="$blessyPrimaryColor"
              fontSize={componentProperties.fontSize}
            >
              Inscrição: R${eventEntranceValue}
            </Text>
          </>
        )}
      </HStack>
    </Box>
  );
};

export default EventInfo;
