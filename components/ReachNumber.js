import { Text, Badge } from 'native-base';

function ReachNumber({ reachNumberText }) {
  return (
    <Badge
      alignSelf="center"
      bg="blueGray.800"
      width="100%"
      rounded="sm"
      mt={1}
    >
      <Text fontSize="3xl" color="white">{reachNumberText}</Text>
    </Badge>

  );
}

export default ReachNumber;
