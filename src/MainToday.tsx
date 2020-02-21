import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components/native';

import {ITheme} from './theme';

import CurrentColor from './component/CurrentColor';

const MainToday = () => {
  return (
    <>
      <View style={{marginTop: 133.3333}}>
        <CurrentColor select="n1"></CurrentColor>
      </View>
      <Section>
        <LeftText>D+</LeftText>
        <DayText>257</DayText>
        <RightText>days</RightText>
      </Section>
      <Button>
        <Image
          source={require('../image/drawable-xxxhdpi/bt_upload.png')}
          style={{width: 74.6666, height: 74.6666}}></Image>
      </Button>
    </>
  );
};

const Section = styled.View`
  margin-top: 88px;
  flex-direction: row;
  align-items: flex-end;
`;

const LeftText = styled.Text<{theme: ITheme}>`
  color: ${props => props.theme.menuText};
  font-family: ${props => props.theme.Font.EB}
  font-size: 24px;
  margin-left: 17.3333px;
  margin-right: 21.3333px;
  margin-bottom: 16px;
`;

const DayText = styled.Text<{theme: ITheme}>`
  color: ${props => props.theme.mainText};
  font-family: ${props => props.theme.Font.EB};
  font-size: 80px;
`;

const RightText = styled(LeftText)<{theme: ITheme}>`
  color: ${props => props.theme.notifyMessage_01};
  margin-left: 16px;
  margin-right: 0;
`;

const Button = styled.TouchableOpacity`
  margin-top: 70px;
`;
export default MainToday;
