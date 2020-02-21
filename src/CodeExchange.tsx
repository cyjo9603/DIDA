import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styled from 'styled-components/native';

import {ITheme} from './theme';

import Container from './component/Container';
import BottomButton from './component/BottomButton';
import LineContainer, {Line} from './component/LineContainer';
import Message from './component/Message';

const CodeExchange = () => {
  const showingError = true;
  return (
    <>
      <Container>
        <Message>상대방과의{`\n`}코드 연결이 필요해요 :)</Message>
        <MyCode>나의 코드</MyCode>
        <LineContainer>
          <Line lineColor="#ffe6e9" width="160" weight="13.3333" />
          <CodeValue>A16382</CodeValue>
        </LineContainer>
        <InputCode placeholder="상대방 코드 입력"></InputCode>
        <ErrorMessage showing={showingError}>
          * 코드를 확인해주세요 *
        </ErrorMessage>
        <PleaseMessage>
          * 재연결을 위해 자신의 코드를 꼭 기억해주세요 :)
        </PleaseMessage>
      </Container>
      <ItemComtainer>
        <LineContainer marginBottom="39.3333">
          <Line lineColor="#f1f3f5" width="260.6666" weight="9.3333" />
          <BottomMessage>기존에 사용하던 코드가 있어요!</BottomMessage>
        </LineContainer>
        <BottomButton />
      </ItemComtainer>
    </>
  );
};

const ItemComtainer = styled.View`
  align-items: center;
`;

const MyCode = styled.Text<{theme: ITheme}>`
  font-family: ${props => props.theme.Font.EB};
  font-size: 21.3333px;
  margin-top: 121.3333px;
  margin-bottom: 25.3333px;
`;

const CodeValue = styled.Text<{theme: ITheme}>`
  font-family: ${props => props.theme.Font.EB};
  font-size: 40px;
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

const ErrorMessage = styled.Text<{theme: ITheme; showing: boolean}>`
  font-family: ${props => props.theme.Font.R};
  color: ${props => (props.showing ? props.theme.errorMessage : '#fff')};
  font-size: 18.6666px;
`;

const PleaseMessage = styled.Text<{theme: ITheme}>`
  font-family: ${props => props.theme.Font.R};
  color: ${props => props.theme.notifyMessage_02};
  font-size: 18.6666px;
  margin-top: 18px;
`;

const BottomMessage = styled.Text<{theme: ITheme}>`
  font-family: ${props => props.theme.Font.R};
  color: ${props => props.theme.notifyMessage_01};
  font-size: 20px;
`;

export default CodeExchange;
