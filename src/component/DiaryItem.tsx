import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components/native';

import {ITheme} from '../theme';

const DiaryItem = () => {
  let test01 = 'yellow';
  let test02 = 'blue';

  return (
    <View>
      <Top>
        <DayValue>1459</DayValue>
        <TouchableOpacity>
          <Image
            source={require('../../image/drawable-xxxhdpi/bt_write.png')}
            style={{width: 37.3333, height: 37.3333}}
          />
        </TouchableOpacity>
      </Top>
      <Section>
        <DayText>days</DayText>
        <LineContainer>
          <Block writer={test01} />
          <LineText>오늘 같이 본 영화는 너무 재밌었어!</LineText>
          <HeartOn
            source={require(`../../image/drawable-xxxhdpi/ic_heart_${
              test01 === 'yellow' ? '5' : '3'
            }_on.png`)}
          />
        </LineContainer>
        <LineContainer>
          <Block writer={test02} />
          <LineText>앞으론 겨울왕국 같은건 보지말자 ㅠ 노잼</LineText>
          <HeartOn
            source={require(`../../image/drawable-xxxhdpi/ic_heart_${
              test02 === 'yellow' ? '5' : '3'
            }_on.png`)}
          />
        </LineContainer>
      </Section>
    </View>
  );
};

const Top = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DayValue = styled.Text<{theme: ITheme}>`
  font-family: ${props => props.theme.Font.EB};
  font-size: 32px;
`;

const DayText = styled.Text<{theme: ITheme}>`
  color: ${props => props.theme.inputBorder};
  font-family: ${props => props.theme.Font.B};
  font-size: 17.3333px;
  margin: 2.6666px;
`;

const Section = styled.View`
  padding-bottom: 36.6666px;
`;

const LineContainer = styled.View`
  flex-direction: row;
  margin-top: 10.6666px;
`;

const Block = styled.View<{theme: ITheme; writer: string}>`
  background-color: ${props =>
    props.writer === 'yellow'
      ? props.theme.blockYellow
      : props.theme.blockBlue};
  position: absolute;
  width: 10.6666px;
  height: 10.6666px;
  border-radius: 2.6666px;
  top: 9.6666px;
  left: 5.3333px;
`;

const LineText = styled.Text<{theme: ITheme}>`
  font-family: ${props => props.theme.Font.R};
  color: ${props => props.theme.notifyMessage_03};
  font-size: 20px;
  line-height: 30px;
  width: 350px;
  margin-left: 32px;
`;

const HeartOn = styled.Image`
  position: absolute;
  top: 3px;
  right: 7px;
  width: 24px;
  height: 24px;
`;

export default DiaryItem;
