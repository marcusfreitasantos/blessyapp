import { Heading } from "@gluestack-ui/themed";

type HeadingComponentProps = {
  headingText: string;
};

const HeadingComponent = ({ headingText }: HeadingComponentProps) => {
  return (
    <Heading fontSize="$lg" my={20} color="$secondary500" lineHeight="$sm">
      {headingText}
    </Heading>
  );
};

export default HeadingComponent;
