import React, {useEffect, useState, useCallback, memo} from 'react';
import styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';

import {ThemeType} from '../theme';

import Container from '../component/Container';
import Box from '../commonComponent/Box';
import TextB, {TextEB, TextR} from '../commonComponent/TextComponent';
import BottomButton from '../component/BottomButton';
import LineContainer, {Line} from '../component/LineContainer';

import {StackParamList} from '../MainPage';
import {userInfoCheckRequest} from '../reducers/user/userInfo';
import {IRootState} from '../reducers/index';
import {partnerCodeCheckRequest} from '../reducers/user/partnerCheck';

interface IProps {
  navigation: StackNavigationProp<StackParamList, 'CodeExchange'>;
}

const getRandomCode = () => {
  const first = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  const number = (Math.random() * 100000).toFixed(0).substr(0, 5);
  const digits = Array(5 - number.length)
    .fill('0')
    .join('');
  return `${first}${digits}${number}`;
};

const CodeExchange: React.FunctionComponent<IProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const {userCode} = useSelector((state: IRootState) => state.userReducer.userInfo);
  const {createCount} = useSelector((state: IRootState) => state.userReducer.userSign);
  const {codeDiff} = useSelector((state: IRootState) => state.userReducer.userSign);
  const [partnerCode, setPartnerCode] = useState('');

  useEffect(() => {
    if (userCode === 'LOADING') {
      const code = getRandomCode();
      dispatch(userInfoCheckRequest(code));
    }
  }, [createCount, userCode]);

  const onChangeInput = useCallback((e: string) => {
    setPartnerCode(e);
  }, []);

  const onSubmitInputCode = useCallback(async () => {
    if (userCode && userCode !== partnerCode && partnerCode.trim()) {
      await dispatch(partnerCodeCheckRequest(userCode, partnerCode, navigation));
    }
  }, [userCode, partnerCode]);

  return (
    <>
      <Container>
        {/* Top message */}
        <Box marginTop={56}>
          <Message size={24} color="main">
            {`상대방과의\n코드 연결이 필요해요 :)`}
          </Message>
        </Box>

        {/* My code */}
        <Box marginTop={121.3333} marginBottom={25.3333}>
          <TextEB size={21.3333} color="main">
            나의 코드
          </TextEB>
        </Box>

        {/* Code value */}
        <LineContainer>
          <Line lineColor="#ffe6e9" width="160" height="13.3333" />
          <TextEB size={40} color="main">
            {userCode}
          </TextEB>
        </LineContainer>

        {/* input code */}
        <InputCode
          placeholder="상대방 코드 입력"
          value={partnerCode}
          onChangeText={onChangeInput}
        />

        {/* Error message */}
        <TextR color={codeDiff === true ? 'error' : 'white'} size={18.6666}>
          * 코드를 확인해주세요 *
        </TextR>

        {/* notice message */}
        <Box marginTop={18}>
          <TextR size={18.6666} color={'lightGray_02'}>
            * 재연결을 위해 자신의 코드를 꼭 기억해주세요 :)
          </TextR>
        </Box>
      </Container>

      {/* bottom */}
      <ItemComtainer>
        <LineContainer marginBottom="39.3333">
          <Line lineColor="#f1f3f5" width="280" height="9.3333" position={'-1'} />
          <TextR size={20} color="gray_02">
            기존에 사용하던 코드가 있어요!
          </TextR>
        </LineContainer>
        <BottomButton moveScreen={onSubmitInputCode} />
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
  background-color: #fff;
`;

const InputCode = styled.TextInput<{theme: ThemeType}>`
  font-family: ${props => props.theme.Font.B};
  width: 372px;
  height: 85.3333px;
  border-radius: 42.6666px;
  border: solid 1.866px ${props => props.theme.itemColor.gray_01};
  color: ${props => props.theme.itemColor.main};
  font-size: 20px;
  text-align: center;
  margin-top: 49.3333px;
  margin-bottom: 21.3333px;
`;

export default memo(CodeExchange);
