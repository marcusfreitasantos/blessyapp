import { Heading } from "@gluestack-ui/themed";

type HeadingComponentProps = {
  headingText: string;
};

const HeadingComponent = ({ headingText }: HeadingComponentProps) => {
  return (
    <Heading fontSize="$lg" mt={40} color="$secondary400">
      {headingText}
    </Heading>
  );
};

export default HeadingComponent;
