import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { UserCreateContext } from "context/UserCreateContext";
import { useContext } from "react";

type Props = {
  title: string;
  description: string;
  isOpen: boolean;
  uniqueId: string;
  password: string;
};

export function DialogModel({
  title,
  description,
  isOpen,
  uniqueId,
  password,
}: Props) {
  const modelContext = useContext(UserCreateContext);
  const onClose = () => modelContext?.isModelOpenFxn();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p className="my-3 text-red-500">{description}</p>
            <p className="my-3">
              <span className="font-bold">Unique Id:</span> {uniqueId}
            </p>
            <p className="my-3">
              <span className="font-bold">Password:</span> {password}
            </p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
