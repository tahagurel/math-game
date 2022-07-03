import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  NativeBaseProvider,
} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './screens/Main';
import Welcome from './screens/Welcome';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NativeBaseProvider>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="SecondPage"
        >
          <Stack.Screen
            name="FirstPage"
            component={Welcome}
          />
          <Stack.Screen
            name="SecondPage"
            component={Main}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
