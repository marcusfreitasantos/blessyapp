import { Heading } from "@gluestack-ui/themed";

type HeadingComponentProps = {
  headingText: string;
};

const HeadingComponent = ({ headingText }: HeadingComponentProps) => {
  return (
    <Heading fontSize="$lg" mt={20} color="$secondary500">
      {headingText}
    </Heading>
  );
};

export default HeadingComponent;
