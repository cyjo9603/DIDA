import React from 'react';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import theme from './theme';

import rootReducer from './reducers/index';
import rootSaga from './sagas/index';
import MainPage from './MainPage';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

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
