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

  const textColor = "$secondary500";
  return (
    <Box>
      <HStack alignItems="center">
        <Icon as={Calendar} size="md" color={textColor} />
        <Text ml={10} color={textColor}>
          {eventStartDate} - {eventEndDate}
        </Text>
      </HStack>

      <HStack alignItems="center">
        <Icon as={Clock} size="md" color={textColor} />
        <Text ml={10} color={textColor}>
          {eventTime}
        </Text>
      </HStack>

      <HStack alignItems="center">
        <Icon color={textColor} as={MapPin} size="md" />
        <Text color={textColor} ml={10}>
          {eventAddress}
        </Text>
      </HStack>

      <HStack alignItems="center" justifyContent="space-between" pt={10}>
        <Text color={textColor} bold>
          {translateEntranceType()}
        </Text>

        {eventEntranceType === "notfree" && (
          <>
            <Text color={textColor}>|</Text>
            <Text bold color="$blessyPrimaryColor">
              Inscrição: R${eventEntranceValue}
            </Text>
          </>
        )}
      </HStack>
    </Box>
  );
};

export default EventInfo;
