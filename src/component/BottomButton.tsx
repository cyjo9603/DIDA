import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components/native';

import {ITheme} from '../theme';

const BottomButton = () => {
  return (
    <MoveButton
      onPress={() => {
        console.log('bottom');
      }}>
      <ButtonText>다음</ButtonText>
    </MoveButton>
  );
};

const MoveButton = styled.TouchableOpacity<{theme: ITheme}>`
  width: 100%;
  height: 66.5333px;
  background-color: ${props => props.theme.buttonBackground};
  justify-content: center;
`;

const ButtonText = styled.Text<{theme: ITheme}>`
  font-family: ${props => props.theme.Font.EB};
  color: #fff;
  font-size: 20px;
  text-align: center;
`;

export default BottomButton;
