import React, {useState, FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';

import Container from '../component/Container';
import MainTabItem from '../component/MainTabItem';
import MainToday from './MainToday';
import MainDiary from './MainDiary';
import {MainStackParamList} from '../MainPage';
import Header from '../component/Header';

interface Props {
  navigation: StackNavigationProp<MainStackParamList, 'Main'>;
}

const Main: FunctionComponent<Props> = ({navigation}) => {
  const [state, setState] = useState('TODAY');

  const navTouch = (NavTitle: string) => setState(NavTitle);

  return (
    <Container>
      <Header />
      <Nav>
        <MainTabItem title="TODAY" state={state} press={navTouch} />
        <MainTabItem title="DIARY" state={state} press={navTouch} />
      </Nav>
      {state === 'TODAY' ? <MainToday navigation={navigation} /> : <MainDiary />}
    </Container>
  );
};

const Nav = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 60px;
`;

export default Main;
