import React from 'react';
import styled from 'styled-components/native';

import {ThemeType} from '../theme';

import TextEB from '../commonComponent/TextComponent';

const BottomButton = () => {
  return (
    <MoveButton
      onPress={() => {
        console.log('bottom');
      }}>
      <TextEB size={20} color="white">
        다음
      </TextEB>
    </MoveButton>
  );
};

const MoveButton = styled.TouchableOpacity<{theme: ThemeType}>`
  width: 100%;
  height: 66.5333px;
  background-color: ${props => props.theme.buttonBackground};
  justify-content: center;
  align-items: center;
`;

export default BottomButton;
