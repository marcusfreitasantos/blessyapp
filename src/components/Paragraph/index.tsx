import { Box, Text } from "@gluestack-ui/themed";
import HeadingComponent from "../Heading";

type ParagraphProps = {
  postContent?: string;
};

const Paragraph = ({ postContent = "" }: ParagraphProps) => {
  return (
    <Box>
      <Text fontSize="$sm" color="$secondary400" mb={40}>
        {postContent}
      </Text>
    </Box>
  );
};

export default Paragraph;
