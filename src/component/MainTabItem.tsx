import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';

import {ThemeType} from '../theme';

import {TextEB} from '../commonComponent/TextComponent';

interface IProps {
  title: string;
  state: string;
  press: (NavTitle: string) => void;
}

const MainTabItem: FunctionComponent<IProps> = ({title, state, press}) => {
  return (
    <TouchContainer style={{alignItems: 'center'}} onPress={() => press(title)}>
      <TextEB
        size={21.3333}
        color={title === state ? 'menuText' : 'notifyMessage_01'}>
        {title}
      </TextEB>
      {title === state && <UnderLine />}
    </TouchContainer>
  );
};

const TouchContainer = styled.TouchableOpacity`
  width: 88px;
`;

const UnderLine = styled.View<{theme: ThemeType}>`
  margin-top: 6.6666px;
  background-color: ${props => props.theme.menuText};
  width: 88px;
  height: 4px;
`;

export default MainTabItem;
