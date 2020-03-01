import 'react-native-gesture-handler';
import React from 'react';
import {createStore} from 'redux';
import {Provider, useSelector} from 'react-redux';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionSpecs, HeaderStyleInterpolators} from '@react-navigation/stack';

import theme from './theme';

import CodeExchange from './page/CodeExchange';
import SelectDate from './page/SelectDate';
import SelectColor from './page/SelectColor';
import Main from './page/Main';
import StackHeader from './component/StackHeader';
import rootReducer, {IRootState} from './reducers/index';

export type StackParamList = {
  CodeExchange: undefined;
  SelectDate: undefined;
  SelectColor: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const store = createStore(rootReducer);

const App = () => {
  const {isConnected} = useSelector((state: IRootState) => state.userReducer);

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {isConnected ? (
            <NavigationContainer>
              <Stack.Navigator initialRouteName="CodeExchange">
                <Stack.Screen
                  name="CodeExchange"
                  component={CodeExchange}
                  options={{
                    title: '',
                    header: () => <StackHeader />,
                  }}
                />
                <Stack.Screen
                  name="SelectDate"
                  component={SelectDate}
                  options={{
                    title: '',
                    header: ({navigation}) => <StackHeader goBack={navigation.goBack} />,
                  }}
                />
                <Stack.Screen
                  name="SelectColor"
                  component={SelectColor}
                  options={{
                    title: '',
                    header: ({navigation}) => <StackHeader goBack={navigation.goBack} />,
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          ) : (
            <Main />
          )}
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
