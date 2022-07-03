import {
  Box,

} from 'native-base';
import { useState } from 'react';

import GameModal from '../components/GameModal';
import ReachNumber from '../components/ReachNumber';
import GameBox from '../components/GameBox';
import GameHeader from '../components/GameHeader';
import SoundBox from '../helpers/SoundBox';

function Main() {
  const [modalShow, setModalShow] = useState(false);
  const [modalText, setModalText] = useState(false);
  const [modalType, setModalType] = useState(false);

  const level1 = require('../levels/level_1.json');
  const [history, setHistory] = useState([]);
  const [number, setNumber] = useState(level1.start_number);

  const movesLeft = `Kalan Hamle: ${level1.move_number - history.length}`;

  const reachNumberText = `${level1.reach_number_start} ${level1.reach_number_end ? `- ${level1.reach_number_end}` : ''} `;

  const restartGame = () => {
    setHistory([]);
    setModalShow(false);
    setModalType(false);
    setNumber(level1.start_number);
  };
  const moveBack = () => {
    setHistory([...history.slice(0, -1)]);
  };

  return (
    <Box width="100%" height="100%" bg="primary.500" p="4" safeArea>
      <GameHeader
        movesLeft={movesLeft}
        number={number}
        restartGame={() => restartGame()}
        moveBack={() => moveBack()}
      />
      <GameBox
        data={level1.values}
        number={number}
        numColumns={level1.columns_number}
        history={history}
        level={level1}
        setHistory={(e) => setHistory(e)}
        setNumber={(e) => setNumber(e)}
        setModalText={(e) => setModalText(e)}
        setModalType={(e) => setModalType(e)}
        setModalShow={(e) => setModalShow(e)}
      />
      <ReachNumber
        reachNumberText={reachNumberText}
      />
      <GameModal
        modalShow={modalShow}
        modalText={modalText}
        modalType={modalType}
        restartGame={() => restartGame()}
      />
      <SoundBox
        history={history}
        modalType={modalType}
      />
    </Box>
  );
}
export default Main;
