import React, {FunctionComponent, useMemo, memo} from 'react';
import styled from 'styled-components/native';

import {ThemeType} from '../theme';

import TextB from '../commonComponent/TextComponent';

interface IProps {
  openDatePicker: () => void;
  selectDate: string;
  dayOfTheWeek: string;
}

const transDayOfTheWeek = (dayOfTheWeek: string) => {
  switch (dayOfTheWeek) {
    case 'Sun':
      return '일';
    case 'Mon':
      return '월';
    case 'Tue':
      return '화';
    case 'Wed':
      return '수';
    case 'Thu':
      return '목';
    case 'Fri':
      return '금';
    case 'Sat':
      return '토';
    default:
      return '';
  }
};

const DateButton: FunctionComponent<IProps> = ({openDatePicker, selectDate, dayOfTheWeek}) => {
  const openDatePickerFunc = useMemo(() => openDatePicker, [openDatePicker]);
  const date = useMemo(() => selectDate, [selectDate]);
  const dotw = useMemo(() => transDayOfTheWeek(dayOfTheWeek), [dayOfTheWeek]);

  return (
    <Button onPress={openDatePickerFunc}>
      <TextB size={24} color="gray_02">
        {`${date} (${dotw})`}
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

export default memo(DateButton);
