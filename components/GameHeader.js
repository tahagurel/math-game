import {
  Stack, Row,
  Button, Text, Badge,
} from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialCommunityIcons';

function GameHeader({
  number, movesLeft, moveBack, restartGame,
}) {
  return (
    <Stack>
      <Row alignItems="center" justifyContent="space-between">
        <Button bg="white" rounded="full" onPress={() => restartGame()}>
          <MaterialIcons name="restart" size={24} color="black" />
        </Button>
        <Badge
          alignSelf="center"
          bg="blueGray.800"
          rounded="sm"
          mt={1}
        >
          <Text color="white" fontSize="md">{movesLeft}</Text>
        </Badge>
        <Button bg="white" rounded="full" onPress={() => moveBack()}>
          <Ionicons name="md-chevron-back" size={24} color="black" />
        </Button>
      </Row>
      <Text color="info.50" textAlign="center" fontSize="4xl">{number}</Text>
    </Stack>
  );
}

export default GameHeader;
