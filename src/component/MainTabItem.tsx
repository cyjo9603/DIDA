import React, {FunctionComponent} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import {ITheme} from '../theme';

interface IProps {
  title: string;
  state: string;
}

const MainTabItem: FunctionComponent<IProps> = ({title, state}) => {
  return (
    <TouchContainer style={{alignItems: 'center'}}>
      <TabText clicked={title === state}>{title}</TabText>
      {title === state && <UnderLine />}
    </TouchContainer>
  );
};

const TouchContainer = styled.TouchableOpacity`
  width: 88px;
`;

const TabText = styled.Text<{theme: ITheme; clicked: boolean}>`
  color: ${props =>
    props.clicked ? props.theme.menuText : props.theme.notifyMessage_01};
  font-family: ${props => props.theme.Font.EB};
  font-size: 21.3333px;
`;

const UnderLine = styled.View<{theme: ITheme}>`
  margin-top: 6.6666px;
  background-color: ${props => props.theme.menuText};
  width: 88px;
  height: 4px;
`;

export default MainTabItem;
