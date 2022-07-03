import {
  Button, Text,
  Center, Modal,
} from 'native-base';

function GameModal({
  modalShow, modalText, modalType, restartGame,
}) {
  return (
    <Center>
      <Modal isOpen={modalShow} closeOnOverlayClick={false} p="4" size="full" backgroundColor={modalType}>
        <Modal.Content textAlign="center" p="5">
          <Text fontSize="xl" textAlign="center" marginBottom="4">{modalText}</Text>
          <Button onPress={() => restartGame()}>
            Tekrar Dene
          </Button>
        </Modal.Content>
      </Modal>
    </Center>
  );
}

export default GameModal;
