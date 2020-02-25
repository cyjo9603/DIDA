import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

import Container from '../component/Container';
import Box from '../commonComponent/Box';
import {TextEB} from '../commonComponent/TextComponent';
import BottomButton from '../component/BottomButton';
import LineContainer, {Line} from '../component/LineContainer';
import DateButton from '../component/DateButton';

const SelectDate = () => {
  const dayInnerText = 1;
  return (
    <>
      <Container>
        {/* Top message */}
        <Box marginTop={212}>
          <LineContainer>
            <Line lineColor="#ffe6e9" width="280" weight="9.3333" />
            <TextEB size={24} color="mainText">
              커플이 된 날을 알려주세요!
            </TextEB>
          </LineContainer>
        </Box>

        {/* show day */}
        <DayContainer>
          <Heart
            source={require('../../image/drawable-xxxhdpi/icon_heart.png')}
          />
          <Box marginLeft={48} marginRight={48}>
            <TextEB size={40} color="mainText">{`${dayInnerText}일`}</TextEB>
          </Box>
          <Heart
            source={require('../../image/drawable-xxxhdpi/icon_heart.png')}
          />
        </DayContainer>

        {/* show date */}
        <Box marginTop={42.6666}>
          <DateButton />
        </Box>
      </Container>
      <View>
        <BottomButton />
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
