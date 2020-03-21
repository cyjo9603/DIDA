import React, {FunctionComponent, useMemo} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import {ThemeType} from '../theme';

import Container from '../component/Container';
import RowContainer from '../commonComponent/RowContainer';
import Box from '../commonComponent/Box';
import TextB, {TextEB} from '../commonComponent/TextComponent';
import StackHeader from '../component/StackHeader';
import {MainStackParamList} from '../MainPage';
import {IRootState} from '../reducers/index';

interface Props {
  navigation: StackNavigationProp<MainStackParamList, 'WriteDiary'>;
}

const WriteDiary: FunctionComponent<Props> = ({navigation}) => {
  const {firstDate} = useSelector((state: IRootState) => state.userReducer.userInfo!);
  const currentDDay = useMemo(
    () =>
      Math.floor((new Date().getTime() - new Date(firstDate!).getTime()) / (1000 * 60 * 60 * 24)) +
      1,
    [firstDate],
  );

  return (
    <Container>
      <StackHeader exitPage={navigation.goBack} submitPage={() => null} />
      {/* drop down menu */}
      <Box marginTop={45.3333}>
        <RowContainer>
          <TextEB size={26.6666} color="main">
            D+{currentDDay}
          </TextEB>
          <Box marginLeft={8}>
            <DropdownImage source={require('../../image/drawable-xxxhdpi/ic_dropdown.png')} />
          </Box>
        </RowContainer>
      </Box>

      {/* question message */}
      <Box marginTop={65.3333}>
        <TextB size={21.3333} color="darkGray_02">
          오늘 기분 어때요?
        </TextB>
      </Box>

      {/* select heart */}
      <Box marginTop={32}>
        <HeartContainer>
          {/* heart level */}
          <TouchContainer>
            <HeartImage source={require('../../image/drawable-xxxhdpi/ic_heart_1_off.png')} />
          </TouchContainer>
          <TouchContainer>
            <HeartImage source={require('../../image/drawable-xxxhdpi/ic_heart_2_off.png')} />
          </TouchContainer>
          <TouchContainer>
            <HeartImage source={require('../../image/drawable-xxxhdpi/ic_heart_3_off.png')} />
          </TouchContainer>
          <TouchContainer>
            <HeartImage source={require('../../image/drawable-xxxhdpi/ic_heart_4_off.png')} />
          </TouchContainer>
          <TouchableOpacity>
            <HeartImage source={require('../../image/drawable-xxxhdpi/ic_heart_5_off.png')} />
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

const InputMessage = styled.TextInput<{theme: ThemeType}>`
  border: solid 1.3333px ${props => props.theme.itemColor.lightGray_01};
  font-family: ${props => props.theme.Font.R};
  color: ${props => props.theme.itemColor.darkGray_01};
  font-size: 20px;
  width: 414.6666px;
  height: 261.3333px;
  border-radius: 16px;
  padding: 34.6666px 32px;
  text-align-vertical: top;
`;

const DropdownImage = styled.Image`
  width: 18.6666px;
  height: 18.6666px;
`;

export default WriteDiary;
