import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import theme from './theme';

import CodeExchange from './page/CodeExchange';
import SelectDate from './page/SelectDate';
import SelectColor from './page/SelectColor';
import Main from './page/Main';

export type StackParamList = {
  CodeExchange: undefined;
  SelectDate: undefined;
  SelectColor: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="CodeExchange">
            <Stack.Screen name="CodeExchange" component={CodeExchange} />
            <Stack.Screen name="SelectDate" component={SelectDate} />
            <Stack.Screen name="SelectColor" component={SelectColor} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* <CodeExchange /> */}
        {/* <SelectDate /> */}
        {/* <SelectColor /> */}
        {/* <Main /> */}
      </ThemeProvider>
    </>
  );
};

export default App;
