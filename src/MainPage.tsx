import 'react-native-gesture-handler';
import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CodeExchange from './page/CodeExchange';
import SelectDate from './page/SelectDate';
import SelectColor from './page/SelectColor';
import Main from './page/Main';
import Splash from './page/Splash';
import StackHeader from './component/StackHeader';
import {IRootState} from './reducers/index';

export type StackParamList = {
  CodeExchange: undefined;
  SelectDate: undefined;
  SelectColor: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const MainPage = () => {
  const {userCode} = useSelector((state: IRootState) => state.userReducer.userInfo);
  const {partnerCode} = useSelector((state: IRootState) => state.userReducer.userInfo);
  const {selectColor} = useSelector((state: IRootState) => state.userReducer.userInfo);
  const {firstDate} = useSelector((state: IRootState) => state.userReducer.userInfo);

  return (
    <>
      {userCode === null ? (
        <Splash />
      ) : userCode !== 'LOADING' && partnerCode && selectColor && firstDate ? (
        <Main />
      ) : (
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
      )}
    </>
  );
};

export default MainPage;
