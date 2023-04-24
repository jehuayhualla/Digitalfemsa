/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import RootNav from './src/navigation/RootNavigation';

function App(): JSX.Element {
  return (
    <SafeAreaProvider >
      <RootNav />
    </SafeAreaProvider>
  );
}

export default App;
