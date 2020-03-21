import React, {useMemo, FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';

import Box from '../commonComponent/Box';
import {TextEB} from '../commonComponent/TextComponent';
import CurrentColor from '../component/CurrentColor';
import {IRootState} from '../reducers/index';
import {MainStackParamList} from '../MainPage';

interface Props {
  navigation: StackNavigationProp<MainStackParamList, 'Main'>;
}

const MainToday: FunctionComponent<Props> = ({navigation}) => {
  const {firstDate} = useSelector((state: IRootState) => state.userReducer.userInfo!);
  const {selectColor} = useSelector((state: IRootState) => state.userReducer.userInfo!);
  const currentDDay = useMemo(
    () =>
      Math.floor((new Date().getTime() - new Date(firstDate!).getTime()) / (1000 * 60 * 60 * 24)) +
      1,
    [firstDate],
  );
  console.log(new Date(firstDate!));

  return (
    <>
      {/* my color */}
      <Box marginTop={133.3333}>
        <CurrentColor select={selectColor!} />
      </Box>

      {/* show my day */}
      <Section>
        <Box marginLeft={17.3333} marginRight={21.3333} marginBottom={16}>
          <TextEB size={24} color="navy_01">
            D+
          </TextEB>
        </Box>
        <TextEB size={80} color="main">
          {currentDDay}
        </TextEB>
        <Box marginLeft={16} marginBottom={16}>
          <TextEB size={24} color="gray_02">
            days
          </TextEB>
        </Box>
      </Section>

      {/* write button */}
      <Button onPress={() => navigation.navigate('WriteDiary')}>
        <ButtonImage source={require('../../image/drawable-xxxhdpi/bt_upload.png')} />
      </Button>
    </>
  );
};

const Section = styled.View`
  margin-top: 88px;
  flex-direction: row;
  align-items: flex-end;
`;

const Button = styled.TouchableOpacity`
  margin-top: 70px;
`;

const ButtonImage = styled.Image`
  width: 74.6666px;
  height: 74.6666px;
`;
export default MainToday;
