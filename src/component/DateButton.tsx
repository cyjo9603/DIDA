import React, {useState} from 'react';
import {DatePickerAndroid, TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components/native';

import {ITheme} from '../theme';

const DateButton = () => {
  const [select, setSelect] = useState('2020.01.24 (금)');

  return (
    <Button>
      <DateText>{select}</DateText>
    </Button>
  );
};

const Button = styled.TouchableOpacity<{theme: ITheme}>`
  justify-content: center;
  align-items: center;
  width: 372px;
  height: 85.3333px;
  background-color: ${props => props.theme.dateBackground};
  border-radius: 42.6666px;
  border: solid 2.6666px ${props => props.theme.dateBorder};
`;

const DateText = styled.Text<{theme: ITheme}>`
  font-family: ${props => props.theme.Font.B};
  color: ${props => props.theme.notifyMessage_01};
  font-size: 24px;
`;

export default DateButton;
