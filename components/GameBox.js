import {
  Box, FlatList, Button, Text,
} from 'native-base';

import { useEffect } from 'react';

function GameBox({
  level, history, number, data, numColumns, setHistory, setNumber, setModalText, setModalType, setModalShow,
}) {
  const lastPlay = history[history.length - 1];
  const currentIndex = lastPlay ? parseInt(lastPlay?.index, 10) : false;
  const isFinish = currentIndex >= (level.values.length - level.columns_number);

  const boxSideControl = (index) => {
    const rightBoxControl = index === (currentIndex + 1) && ((index + 1) % level.columns_number) !== 1;
    const leftBoxControl = index === (currentIndex - 1) && ((index + 1) % level.columns_number);
    return rightBoxControl || leftBoxControl;
  };

  const avaibleControl = (index) => {
    if (currentIndex || currentIndex === 0) {
      return index === currentIndex + 1 * level.columns_number || boxSideControl(index);
    }
    return level.columns_number > index;
  };

  const keyExistOnHistory = (index) => history.find((x) => x === index);

  const buttonColor = (index) => {
    const isHistory = history.find((x) => x.index === index);
    if (isHistory) {
      return 'warning.500';
    }

    return avaibleControl(index) ? 'success.600' : 'secondary.600';
  };

  const play = (item, index) => {
    setHistory([...history, { index, item }]);
  };

  const doMath = () => {
    let result = level.start_number;
    if (history.length) {
      history.forEach(({ item }) => {
        result = result < 0 ? 0 : result;
        switch (item.operator) {
          case '+':
            result += item.number;
            break;
          case '-':
            result -= item.number;
            break;
          case 'x':
            result *= item.number;
            break;
          case '/':
            result /= item.number;
            break;
          default:
            return null;
        }
        return null;
      });
    }
    setNumber(result < 0 ? 0 : Math.round(result));
  };

  const gameFinisher = () => {
    if (history.length === level.move_number) {
      setModalText('Hamleniz Bitti!');
      setModalType('error.500');
      setModalShow(true);
    }
    if (isFinish) {
      if (level.reach_number_end) {
        if (number >= level.reach_number_start && number <= level.reach_number_end) {
          setModalText('Tebrikler Kazandın!');
          setModalType('success.500');
          setModalShow(true);
        } else {
          setModalText('Maalesef başaramadın!');
          setModalType('error.500');
          setModalShow(true);
        }
      } else if (number === level.reach_number_start) {
        setModalText('Tebrikler Kazandın!');
        setModalType('success.500');
        setModalShow(true);
      } else {
        setModalText('Maalesef başaramadın!');
        setModalType('error.500');
        setModalShow(true);
      }
    }
  };

  useEffect(() => {
    doMath();
  }, [history]);
  useEffect(() => {
    gameFinisher();
  }, [number]);

  const buttonDisable = (index) => !avaibleControl(index) || keyExistOnHistory(index) || history.length === level.move_number;

  return (
    <Box bg="info.50" width="100%" rounded="sm">
      <FlatList
        scrollEnabled={false}
        data={data}
        numColumns={numColumns}
        keyExtractor={(item, key) => key}
        m={1}
        renderItem={({ item, index }) => (
          <Button
            flex={2}
            bg={buttonColor(index)}
            m="1"
            disabled={buttonDisable(index)}
            key={item}
            size="lg"
            rounded="md"
            onPress={() => play(item, index)}
          >
            <Text fontSize="lg" fontWeight="bold" color="white">{`${item.operator} ${item.number}`}</Text>
          </Button>
        )}
      />
    </Box>
  );
}

export default GameBox;
