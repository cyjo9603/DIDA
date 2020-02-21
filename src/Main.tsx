import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import {ITheme} from './theme';

import Container from './component/Container';
import MainTabItem from './component/MainTabItem';
import MainToday from './MainToday';

const Main = () => {
  const [state, setState] = useState('TODAY');

  return (
    <Container>
      <Nav>
        <MainTabItem title="TODAY" state={state} />
        <MainTabItem title="DIARY" state={state} />
      </Nav>
      {state === 'TODAY' ? <MainToday /> : <></>}
    </Container>
  );
};

const Nav = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 60px;
`;

export default Main;
