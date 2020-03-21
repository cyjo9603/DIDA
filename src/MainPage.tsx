import 'react-native-gesture-handler';
import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CodeExchange from './page/CodeExchange';
import SelectDate from './page/SelectDate';
import SelectColor from './page/SelectColor';
import Main from './page/Main';
import WriteDiary from './page/WriteDiary';
import Splash from './page/Splash';
import StackHeader from './component/StackHeader';
import {IRootState} from './reducers/index';

export type SignStackParamList = {
  CodeExchange: undefined;
  SelectDate: undefined;
  SelectColor: undefined;
};

export type MainStackParamList = {
  Main: undefined;
  WriteDiary: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

const SignStack = createStackNavigator<SignStackParamList>();

const MainPage = () => {
  const {userCode} = useSelector((state: IRootState) => state.userReducer.userInfo);
  const {partnerCode} = useSelector((state: IRootState) => state.userReducer.userInfo);
  const {selectColor} = useSelector((state: IRootState) => state.userReducer.userInfo);
  const {firstDate} = useSelector((state: IRootState) => state.userReducer.userInfo);

  return (
    <>
      {userCode === null ? (
        <Splash />
      ) : (
        <NavigationContainer>
          {userCode !== 'LOADING' && partnerCode && selectColor && firstDate ? (
            // <Main />
            <MainStack.Navigator initialRouteName="Main">
              <MainStack.Screen name="Main" component={Main} options={{header: () => null}} />
              <MainStack.Screen
                name="WriteDiary"
                component={WriteDiary}
                options={{header: () => null}}
              />
            </MainStack.Navigator>
          ) : (
            <SignStack.Navigator initialRouteName="CodeExchange">
              <SignStack.Screen
                name="CodeExchange"
                component={CodeExchange}
                options={{
                  title: '',
                  header: () => <StackHeader />,
                }}
              />
              <SignStack.Screen
                name="SelectDate"
                component={SelectDate}
                options={{
                  title: '',
                  header: ({navigation}) => <StackHeader goBack={navigation.goBack} />,
                }}
              />
              <SignStack.Screen
                name="SelectColor"
                component={SelectColor}
                options={{
                  title: '',
                  header: ({navigation}) => <StackHeader goBack={navigation.goBack} />,
                }}
              />
            </SignStack.Navigator>
          )}
        </NavigationContainer>
      )}
    </>
  );
};

export default MainPage;
