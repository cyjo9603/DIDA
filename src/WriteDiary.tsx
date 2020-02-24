import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import {ITheme} from './theme';

import Container from './component/Container';
import RowContainer from './commonComponent/RowContainer';
import Box from './commonComponent/Box';
import TextB, {TextEB} from './commonComponent/TextComponent';

const WriteDiary = () => {
  return (
    <Container>
      {/* drop down menu */}
      <Box marginTop={45.3333}>
        <RowContainer>
          <TextEB size={26.6666} color="mainText">
            D+123
          </TextEB>
          <Box marginLeft={8}>
            <Image
              source={require('../image/drawable-xxxhdpi/ic_dropdown.png')}
              style={{width: 18.6666, height: 18.6666}}
            />
          </Box>
        </RowContainer>
      </Box>

      {/* question message */}
      <Box marginTop={65.3333}>
        <TextB size={21.3333} color="notifyMessage_04">
          오늘 기분 어때요?
        </TextB>
      </Box>

      {/* select heart */}
      <Box marginTop={32}>
        <HeartContainer>
          {/* heart level */}
          <TouchContainer>
            <HeartImage
              source={require('../image/drawable-xxxhdpi/ic_heart_1_off.png')}
            />
          </TouchContainer>
          <TouchContainer>
            <HeartImage
              source={require('../image/drawable-xxxhdpi/ic_heart_2_off.png')}
            />
          </TouchContainer>
          <TouchContainer>
            <HeartImage
              source={require('../image/drawable-xxxhdpi/ic_heart_3_off.png')}
            />
          </TouchContainer>
          <TouchContainer>
            <HeartImage
              source={require('../image/drawable-xxxhdpi/ic_heart_4_off.png')}
            />
          </TouchContainer>
          <TouchableOpacity>
            <HeartImage
              source={require('../image/drawable-xxxhdpi/ic_heart_5_off.png')}
            />
          </TouchableOpacity>
        </HeartContainer>
      </Box>

      {/* input message */}
      <Box marginTop={58.6666}>
        <InputMessage />
      </Box>
    </Container>
  );
};

const HeartContainer = styled(RowContainer)`
  margin: 0 60px;
  justify-content: space-between;
`;

const TouchContainer = styled.TouchableOpacity`
  margin-right: 20px;
`;

const HeartImage = styled.Image`
  width: 56px;
  height: 56px;
`;

const InputMessage = styled.TextInput<{theme: ITheme}>`
  border: solid 1.3333px ${props => props.theme.dateBorder};
  font-family: ${props => props.theme.Font.R};
  color: ${props => props.theme.notifyMessage_03};
  font-size: 20px;
  width: 414.6666px;
  height: 261.3333px;
  border-radius: 16px;
  padding: 34.6666px 32px;
  text-align-vertical: top;
`;

export default WriteDiary;
