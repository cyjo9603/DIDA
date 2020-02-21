import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import theme from './src/theme';

import CodeExchange from './src/CodeExchange';
import SelectDate from './src/SelectDate';
import SelectColor from './src/SelectColor';
import Main from './src/Main';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
      <ThemeProvider theme={theme}>
        {/* <CodeExchange /> */}
        {/* <SelectDate /> */}
        {/* <SelectColor /> */}
        <Main />
      </ThemeProvider>
    </>
  );
};

export default App;
