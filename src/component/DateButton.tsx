import React, {useState, FunctionComponent} from 'react';
import styled from 'styled-components/native';

import {ThemeType} from '../theme';

import TextB from '../commonComponent/TextComponent';

interface IProps {
  openDatePicker: () => void;
  selectDate: string;
}

const DateButton: FunctionComponent<IProps> = ({openDatePicker, selectDate}) => {
  const [select, setSelect] = useState('2020.01.24 (금)');

  return (
    <Button onPress={openDatePicker}>
      <TextB size={24} color="gray_02">
        {select}
      </TextB>
    </Button>
  );
};

const Button = styled.TouchableOpacity<{theme: ThemeType}>`
  justify-content: center;
  align-items: center;
  width: 372px;
  height: 85.3333px;
  background-color: ${props => props.theme.itemColor.lightGray_03};
  border-radius: 42.6666px;
  border: solid 2.6666px ${props => props.theme.itemColor.lightGray_01};
`;

export default DateButton;
