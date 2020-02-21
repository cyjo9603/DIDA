import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import {ITheme} from './theme';

import Header from './component/Header';
import Container from './component/Container';
import MainTabItem from './component/MainTabItem';
import MainToday from './MainToday';
import MainDiary from './MainDiary';

const Main = () => {
  const [state, setState] = useState('TODAY');

  const navTouch = (NavTitle: string) => setState(NavTitle);

  return (
    <Container>
      <Header />
      <Nav>
        <MainTabItem title="TODAY" state={state} press={navTouch} />
        <MainTabItem title="DIARY" state={state} press={navTouch} />
      </Nav>
      {state === 'TODAY' ? <MainToday /> : <MainDiary />}
    </Container>
  );
};

const Nav = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 60px;
`;

export default Main;
