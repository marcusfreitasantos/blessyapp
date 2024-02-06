import { Heading } from "@gluestack-ui/themed";

type HeadingComponentProps = {
  headingText: string;
};

const HeadingComponent = ({ headingText }: HeadingComponentProps) => {
  return (
    <Heading fontSize="$xl" mt={20} color="$secondary700">
      {headingText}
    </Heading>
  );
};

export default HeadingComponent;
