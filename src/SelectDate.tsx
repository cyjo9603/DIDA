import React from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components/native';

import {ITheme} from './theme';

import BottomButton from './component/BottomButton';
import LineContainer, {Line} from './component/LineContainer';

const SelectDate = () => {
  const dayInnerText = 1;
  return (
    <>
      <Container>
        <LineContainer>
          <Line lineColor="#ffe6e9" width="280" weight="9.3333" />
          <Message>커플이 된 날을 알려주세요!</Message>
        </LineContainer>
        <DayContainer>
          <Heart source={require('../image/drawable-xxxhdpi/icon_heart.png')} />
          <DayText>{`${dayInnerText}일`}</DayText>
          <Heart source={require('../image/drawable-xxxhdpi/icon_heart.png')} />
        </DayContainer>
      </Container>
      <BottomContainer>
        <BottomButton />
      </BottomContainer>
    </>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const BottomContainer = styled.View``;

const Message = styled.Text<{theme: ITheme}>`
  font-family: ${props => props.theme.Font.EB};
  color: ${props => props.theme.mainText};
  font-size: 24px;
  text-align: center;
  margin-top: 212px;
`;

const DayContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 66.6666px;
`;

const DayText = styled.Text<{theme: ITheme}>`
  font-family: ${props => props.theme.Font.EB};
  color: ${props => props.theme.mainText};
  font-size: 40px;
  margin: 0 48px;
`;

const Heart = styled.Image`
  width: 24px;
  height: 24px;
`;

export default SelectDate;
