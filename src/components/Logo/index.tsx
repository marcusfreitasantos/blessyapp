import { Image } from "@gluestack-ui/themed";
import Logo from "../../../assets/blessy_logo.svg";

const BlessyLogo = () => {
  return (
    <Image
      size="xs"
      source={{
        uri: Logo.toString(),
      }}
      alt="Blessy Logo"
    />
  );
};

export default BlessyLogo;
