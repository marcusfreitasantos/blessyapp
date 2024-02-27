import { Button, ButtonText } from "@gluestack-ui/themed";

type ButtonComponentProps = {
  onPress: () => void;
  buttonText: string;
  variant: "solid" | "outline" | "link" | undefined;
  action: "primary" | "secondary" | "positive" | "negative" | "default";
};

const ButtonComponent = ({
  onPress,
  buttonText,
  variant,
  action,
}: ButtonComponentProps) => {
  return (
    <Button
      size="md"
      variant={variant}
      action={action}
      onPress={onPress}
      borderWidth={2}
    >
      <ButtonText>{buttonText}</ButtonText>
    </Button>
  );
};

export default ButtonComponent;
