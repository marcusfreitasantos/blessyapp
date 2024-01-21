import { Button, ButtonText } from "@gluestack-ui/themed";

interface ButtonComponentProps {
  onPress: () => void;
  buttonText: string;
  action: "primary" | "secondary" | "positive" | "negative" | "default";
}

const ButtonComponent = ({
  onPress,
  buttonText,
  action,
}: ButtonComponentProps) => {
  return (
    <Button size="md" variant="solid" action={action} onPress={onPress}>
      <ButtonText>{buttonText} </ButtonText>
    </Button>
  );
};

export default ButtonComponent;
