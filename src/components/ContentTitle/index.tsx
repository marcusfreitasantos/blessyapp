import { Text, Box, Divider, Heading } from "@gluestack-ui/themed";

type ContentTitleProps = {
  contentTitle: string;
  contentDate: string;
};

const ContentTitle = ({ contentTitle, contentDate }: ContentTitleProps) => {
  return (
    <Box pt={40} px={20}>
      <Heading color="$blessyPrimaryColor" fontSize="$3xl">
        {contentTitle}
      </Heading>

      <Text bold fontSize="$md">
        Publicado em: <Text>{contentDate}</Text>
      </Text>
      <Divider mt={10} />
    </Box>
  );
};

export default ContentTitle;
