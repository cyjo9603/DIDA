import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import theme from './theme';

import rootReducer from './reducers/index';
import MainPage from './MainPage';

const store = createStore(rootReducer);

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MainPage />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
