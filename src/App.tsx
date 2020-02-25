import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import theme from './theme';

import CodeExchange from './page/CodeExchange';
import SelectDate from './page/SelectDate';
import SelectColor from './page/SelectColor';
import Main from './page/Main';
import WriteDiary from './page/WriteDiary';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
      <ThemeProvider theme={theme}>
        {/* <CodeExchange /> */}
        {/* <SelectDate /> */}
        {/* <SelectColor /> */}
        <Main />
        {/* <WriteDiary /> */}
      </ThemeProvider>
    </>
  );
};

export default App;
