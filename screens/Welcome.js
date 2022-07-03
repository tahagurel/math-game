import React from 'react';
import { Button, Text } from 'native-base';

function Welcome({ navigation }) {
  return (
    <Text>
      Welcome
      <Button onPress={() => navigation.navigate('SecondPage')}>Tıkla</Button>
    </Text>
  );
}

export default Welcome;
