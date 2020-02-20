import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import theme from './src/theme';

import CodeExchange from './src/CodeExchange';
import SelectDate from './src/SelectDate';
import SelectColor from './src/SelectColor';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
      <ThemeProvider theme={theme}>
        {/* <CodeExchange /> */}
        {/* <SelectDate /> */}
        <SelectColor />
      </ThemeProvider>
    </>
  );
};

export default App;
