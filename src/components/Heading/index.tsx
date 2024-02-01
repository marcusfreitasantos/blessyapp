import { Heading } from "@gluestack-ui/themed";

type HeadingComponentProps = {
  headingText: string;
};

const HeadingComponent = ({ headingText }: HeadingComponentProps) => {
  return (
    <Heading fontSize="$lg" mt={40} color="$secondary700">
      {headingText}
    </Heading>
  );
};

export default HeadingComponent;
