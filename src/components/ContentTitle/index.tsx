import { Text, Box, Heading } from "@gluestack-ui/themed";

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
    </Box>
  );
};

export default ContentTitle;
