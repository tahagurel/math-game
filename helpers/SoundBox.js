import { Audio } from 'expo-av';

import { useState, useEffect } from 'react';

function SoundBox({ history, modalType }) {
  const [sound, setSound] = useState(new Audio.Sound());

  async function playSound(type) {
    const types = {
      win: require('../assets/sound/win.wav'),
      lose: require('../assets/sound/lose.wav'),
      play: require('../assets/sound/play.wav'),
    };
    const soundData = await Audio.Sound.createAsync(types[type]);
    setSound(soundData.sound);
    await soundData.sound.playAsync();
  }

  useEffect(() => {
    if (history.length) {
      playSound('play');
    }
  }, [history]);

  useEffect(() => {
    if (modalType === 'success.500') {
      playSound('win');
    } else if (modalType === 'error.500') {
      playSound('lose');
    }
  }, [modalType]);

  return (null);
}

export default SoundBox;
