import { Button, ButtonText } from "@gluestack-ui/themed";

type ButtonComponentProps = {
  onPress: () => void;
  buttonText: string;
  variant: "solid" | "outline" | "link" | undefined;
  action: "primary" | "secondary" | "positive" | "negative" | "default";
  rounded?: boolean;
};

const ButtonComponent = ({
  onPress,
  buttonText,
  variant,
  action,
  rounded,
}: ButtonComponentProps) => {
  return (
    <Button
      size="md"
      variant={variant}
      action={action}
      onPress={onPress}
      borderWidth={2}
      rounded={rounded ? "$md" : "$none"}
    >
      <ButtonText>{buttonText}</ButtonText>
    </Button>
  );
};

export default ButtonComponent;
