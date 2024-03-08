import { useState } from "react";
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
  Icon,
  HStack,
} from "@gluestack-ui/themed";
import { CheckCircle, X } from "lucide-react-native";
import ButtonComponent from "../Button";

type ModalComponentProps = {
  modalText: string;
  modalState: boolean;
  modalType: "success" | "error";
};

const ModalComponent = ({
  modalText,
  modalState,
  modalType,
}: ModalComponentProps) => {
  const [showModal, setShowModal] = useState(modalState);

  return (
    <Modal
      isOpen={showModal}
      onClose={() => {
        setShowModal(false);
      }}
    >
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <HStack alignItems="center">
            {modalType === "error" ? (
              <Icon as={X} color="$error500" size="lg" />
            ) : (
              <Icon as={CheckCircle} color="$success400" size="lg" />
            )}
            <Text fontSize="$lg" bold color="$secondary500" ml={5}>
              {modalType === "error" ? "Algo deu errado." : "Perfeito!"}
            </Text>
          </HStack>
        </ModalHeader>
        <ModalBody>
          <Text fontSize="$sm">{modalText}</Text>
        </ModalBody>
        <ModalFooter>
          <ButtonComponent
            buttonText="Ok"
            rounded
            variant="solid"
            action="primary"
            onPress={() => setShowModal(false)}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
