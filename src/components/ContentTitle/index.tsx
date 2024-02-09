import { Text, Box, Divider, Heading } from "@gluestack-ui/themed";

type ContentTitleProps = {
  contentTitle: string;
  contentDate: string;
};

const ContentTitle = ({ contentTitle, contentDate }: ContentTitleProps) => {
  return (
    <Box>
      <Heading color="$blessyPrimaryColor" fontSize="$2xl">
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
