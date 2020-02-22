import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styled from 'styled-components/native';

import {ITheme} from './theme';

import Container from './component/Container';
import Box from './commonComponent/Box';
import TextB, {TextEB, TextR} from './commonComponent/TextComponent';
import BottomButton from './component/BottomButton';
import LineContainer, {Line} from './component/LineContainer';

const CodeExchange = () => {
  const showingError = true;
  return (
    <>
      <Container>
        {/* Top message */}
        <Box marginTop={56}>
          <Message size={24} color="mainText">
            상대방과의{`\n`}코드 연결이 필요해요 :)
          </Message>
        </Box>

        {/* My code */}
        <Box marginTop={121.3333} marginBottom={25.3333}>
          <TextEB size={21.3333} color="mainText">
            나의 코드
          </TextEB>
        </Box>

        {/* Code value */}
        <LineContainer>
          <Line lineColor="#ffe6e9" width="160" weight="13.3333" />
          <TextEB size={40} color="mainText">
            A16382
          </TextEB>
        </LineContainer>

        {/* input code */}
        <InputCode placeholder="상대방 코드 입력"></InputCode>

        {/* Error message */}
        <TextR color={showingError ? 'errorMessage' : 'white'} size={18.6666}>
          * 코드를 확인해주세요 *
        </TextR>

        {/* notice message */}
        <Box marginTop={18}>
          <TextR size={18.6666} color={'notifyMessage_02'}>
            * 재연결을 위해 자신의 코드를 꼭 기억해주세요 :)
          </TextR>
        </Box>
      </Container>

      {/* bottom */}
      <ItemComtainer>
        <LineContainer marginBottom="39.3333">
          <Line lineColor="#f1f3f5" width="260.6666" weight="9.3333" />
          <TextR size={20} color="notifyMessage_01">
            기존에 사용하던 코드가 있어요!
          </TextR>
        </LineContainer>
        <BottomButton />
      </ItemComtainer>
    </>
  );
};

const Message = styled(TextB)`
  line-height: 44px;
  text-align: center;
`;

const ItemComtainer = styled.View`
  align-items: center;
`;

const InputCode = styled.TextInput<{theme: ITheme}>`
  font-family: ${props => props.theme.Font.B};
  width: 372px;
  height: 85.3333px;
  border-radius: 42.6666px;
  border: solid 1.866px ${props => props.theme.inputBorder};
  color: ${props => props.theme.mainText};
  font-size: 20px;
  text-align: center;
  margin-top: 49.3333px;
  margin-bottom: 21.3333px;
`;

export default CodeExchange;
