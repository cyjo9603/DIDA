import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components/native';

import {ITheme} from '../theme';

import Box from '../commonComponent/Box';
import TextB, {TextEB, TextR} from '../commonComponent/TextComponent';

const DiaryItem = () => {
  let test01 = 'yellow';
  let test02 = 'blue';

  return (
    <View>
      {/* header */}
      <Top>
        <TextEB size={32} color="mainText">
          1459
        </TextEB>
        <TouchableOpacity>
          <Image
            source={require('../../image/drawable-xxxhdpi/bt_write.png')}
            style={{width: 37.3333, height: 37.3333}}
          />
        </TouchableOpacity>
      </Top>

      {/* contents */}
      <Box marginBottom={36.6666}>
        <Box marginLeft={2.6666} marginTop={2.6666} marginBottom={2.6666}>
          <TextB size={17.3333} color="inputBorder">
            days
          </TextB>
        </Box>

        {/* line contents */}
        <LineContainer>
          <Block writer={test01} />
          <Contents size={20} color="notifyMessage_03">
            오늘 같이 본 영화는 너무 재밌었어!
          </Contents>
          <HeartOn
            source={require(`../../image/drawable-xxxhdpi/ic_heart_${
              test01 === 'yellow' ? '5' : '3'
            }_on.png`)}
          />
        </LineContainer>
        <LineContainer>
          <Block writer={test02} />
          <Contents size={20} color="notifyMessage_03">
            앞으론 겨울왕국 같은건 보지말자 ㅠ 노잼
          </Contents>
          <HeartOn
            source={require(`../../image/drawable-xxxhdpi/ic_heart_${
              test02 === 'yellow' ? '5' : '3'
            }_on.png`)}
          />
        </LineContainer>
      </Box>
    </View>
  );
};

const Top = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

const Contents = styled(TextR)`
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
