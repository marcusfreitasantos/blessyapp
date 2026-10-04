import { Linking } from "react-native";
import {
  Box,
  Divider,
  Text,
  ScrollView,
  HStack,
  Icon,
  Pressable,
} from "@gluestack-ui/themed";
import {
  Mail,
  Phone,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  UserCircle,
} from "lucide-react-native";

import ChurchProps from "@/utils/churchProps";

type CurrentChurchProps = {
  currentChurchInfo: ChurchProps;
};

const AboutChurch = ({ currentChurchInfo }: CurrentChurchProps) => {
  const titleMarginNumber = 5;
  const dividerMarginNumber = 15;
  const openCurrentLink = (currentLink: string) => {
    Linking.openURL(currentLink);
  };

  const formatWhatsappNumber = (whatsappNumber: string) => {
    const newWhastappNumber = whatsappNumber.replace(/[^0-9]/g, "");
    return newWhastappNumber;
  };

  const maskForPhoneNumber = (phoneNumber: string) => {
    let newPhoneNumber = phoneNumber.replace(/\D/g, "");
    if (newPhoneNumber.length === 11) {
      newPhoneNumber = newPhoneNumber.replace(
        /(\d{2})(\d{5})(\d{4})/,
        "($1) $2-$3"
      );
    } else {
      newPhoneNumber = newPhoneNumber.replace(
        /(\d{2})(\d{4})(\d{4})/,
        "($1) $2-$3"
      );
    }
    return newPhoneNumber;
  };

  return (
    <ScrollView>
      <Box>
        <Text>{currentChurchInfo.description}</Text>
      </Box>

      {currentChurchInfo.hours && (
        <>
          <Divider my={dividerMarginNumber} />
          <Box>
            <Text bold mb={titleMarginNumber}>
              Horário de funcionamento:
            </Text>
            <Text>{currentChurchInfo.hours}</Text>
          </Box>
        </>
      )}

      {currentChurchInfo.staff?.length ? (
        <>
          <Divider my={dividerMarginNumber} />
          <Box>
            <Text bold mb={titleMarginNumber}>
              Nosso ministério:
            </Text>

            {currentChurchInfo.staff.map((churchStaff, index) => {
              return (
                <HStack
                  space="sm"
                  alignItems="center"
                  py={5}
                  key={`${churchStaff.church_staff_group.church_staff_group_person_name}_${index}`}
                >
                  <Icon as={UserCircle} size="md" color="$secondary600" />

                  <Text bold>
                    {
                      churchStaff.church_staff_group
                        .church_staff_group_person_name
                    }
                  </Text>
                  <Text>-</Text>
                  <Text>
                    {
                      churchStaff.church_staff_group
                        .church_staff_group_person_job
                    }
                  </Text>
                </HStack>
              );
            })}
          </Box>
        </>
      ) : null}

      {currentChurchInfo.contact && (
        <>
          <Divider my={dividerMarginNumber} />
          <Box>
            <Text bold mb={titleMarginNumber}>
              Contato:
            </Text>

            {currentChurchInfo.contact.church_email && (
              <Pressable
                onPress={() =>
                  openCurrentLink(
                    `mailto:${currentChurchInfo.contact.church_email}`
                  )
                }
              >
                <HStack space="sm" alignItems="center">
                  <Icon as={Mail} size="md" color="$secondary600" />
                  <Text color="$secondary600">
                    {currentChurchInfo.contact.church_email}
                  </Text>
                </HStack>
              </Pressable>
            )}

            {currentChurchInfo.contact.church_phone && (
              <Pressable
                onPress={() =>
                  openCurrentLink(
                    `tel:${currentChurchInfo.contact.church_phone}`
                  )
                }
              >
                <HStack space="sm" alignItems="center">
                  <Icon as={Phone} size="md" color="$secondary600" />
                  <Text color="$secondary600">
                    {maskForPhoneNumber(currentChurchInfo.contact.church_phone)}
                  </Text>
                </HStack>
              </Pressable>
            )}

            {currentChurchInfo.contact.church_whatsapp && (
              <Pressable
                onPress={() =>
                  openCurrentLink(
                    `https://api.whatsapp.com/send?phone=55${formatWhatsappNumber(
                      currentChurchInfo.contact.church_whatsapp
                    )}`
                  )
                }
              >
                <HStack space="sm" alignItems="center">
                  <Icon as={MessageCircle} size="md" color="$secondary600" />
                  <Text color="$secondary600">
                    {maskForPhoneNumber(
                      currentChurchInfo.contact.church_whatsapp
                    )}
                  </Text>
                </HStack>
              </Pressable>
            )}
          </Box>
        </>
      )}

      {currentChurchInfo.socialMedia && (
        <>
          <Divider my={dividerMarginNumber} />

          <Box>
            <Text bold mb={titleMarginNumber}>
              Redes sociais:
            </Text>
            <HStack space="md" alignItems="center">
              {currentChurchInfo.socialMedia.church_facebook && (
                <Pressable
                  onPress={() =>
                    openCurrentLink(
                      currentChurchInfo.socialMedia.church_facebook
                    )
                  }
                >
                  <Icon as={Facebook} size="xl" color="$secondary600" />
                </Pressable>
              )}

              {currentChurchInfo.socialMedia.church_instagram && (
                <Pressable
                  onPress={() =>
                    openCurrentLink(
                      currentChurchInfo.socialMedia.church_instagram
                    )
                  }
                >
                  <Icon as={Instagram} size="xl" color="$secondary600" />
                </Pressable>
              )}

              {currentChurchInfo.socialMedia.church_linkedin && (
                <Pressable
                  onPress={() =>
                    openCurrentLink(
                      currentChurchInfo.socialMedia.church_linkedin
                    )
                  }
                >
                  <Icon as={Youtube} size="xl" color="$secondary600" />
                </Pressable>
              )}

              {currentChurchInfo.socialMedia.church_youtube && (
                <Pressable
                  onPress={() =>
                    openCurrentLink(
                      currentChurchInfo.socialMedia.church_youtube
                    )
                  }
                >
                  <Icon as={Linkedin} size="xl" color="$secondary600" />
                </Pressable>
              )}
            </HStack>
          </Box>
        </>
      )}
    </ScrollView>
  );
};

export default AboutChurch;
