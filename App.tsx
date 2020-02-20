import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import theme from './src/theme';

import CodeExchange from './src/CodeExchange';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
      <ThemeProvider theme={theme}></ThemeProvider>
    </>
  );
};

export default App;
