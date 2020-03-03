import React, {useState} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import Container from '../component/Container';
import Box from '../commonComponent/Box';
import {TextEB} from '../commonComponent/TextComponent';
import BottomButton from '../component/BottomButton';
import LineContainer, {Line} from '../component/LineContainer';
import DateButton from '../component/DateButton';

import {StackParamList} from '../MainPage';

interface IProps {
  navigation: StackNavigationProp<StackParamList, 'SelectColor'>;
}

const SelectDate: React.FunctionComponent<IProps> = ({navigation}) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const dayInnerText = 1;

  const onChangeDate = (e: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    console.log();
  };

  const showDatePicker = () => {
    setShow(true);
  };

  return (
    <>
      <Container>
        {/* Top message */}
        <Box marginTop={212}>
          <LineContainer>
            <Line lineColor="#ffe6e9" width="280" height="9.3333" />
            <TextEB size={24} color="main">
              커플이 된 날을 알려주세요!
            </TextEB>
          </LineContainer>
        </Box>

        {/* show day */}
        <DayContainer>
          <Heart source={require('../../image/drawable-xxxhdpi/icon_heart.png')} />
          <Box marginLeft={48} marginRight={48}>
            <TextEB size={40} color="main">{`${dayInnerText}일`}</TextEB>
          </Box>
          <Heart source={require('../../image/drawable-xxxhdpi/icon_heart.png')} />
        </DayContainer>
        {show && <DateTimePicker value={date} display="spinner" onChange={onChangeDate} maximumDate={new Date()} />}

        {/* show date */}
        <Box marginTop={42.6666}>
          <DateButton openDatePicker={showDatePicker} selectDate={moment(date).format('YYYY.MM.DD')} dayOfTheWeek={moment(date).format('ddd')} />
        </Box>
      </Container>
      <View>
        <BottomButton moveScreen={() => navigation.navigate('SelectColor')} />
      </View>
    </>
  );
};

const DayContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 66.6666px;
`;

const Heart = styled.Image`
  width: 24px;
  height: 24px;
`;

export default SelectDate;
