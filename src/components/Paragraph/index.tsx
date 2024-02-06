import { Box, Text } from "@gluestack-ui/themed";
import HeadingComponent from "../Heading";

type ParagraphProps = {
  paragraphTitle: string;
  paragraphText: string;
};

const Paragraph = ({ paragraphTitle, paragraphText }: ParagraphProps) => {
  return (
    <Box>
      <HeadingComponent headingText={paragraphTitle} />
      <Text fontSize="$sm" color="$secondary400">
        {paragraphText}
      </Text>
    </Box>
  );
};

export default Paragraph;
