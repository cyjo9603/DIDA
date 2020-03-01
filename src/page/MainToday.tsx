import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';

import Box from '../commonComponent/Box';
import {TextEB} from '../commonComponent/TextComponent';
import CurrentColor from '../component/CurrentColor';
import {IRootState} from '../reducers/index';

const MainToday = () => {
  const {firstDate} = useSelector((state: IRootState) => state.userReducer.userInfo!);
  const {selectColor} = useSelector((state: IRootState) => state.userReducer.userInfo!);
  const currentDDay = Math.floor((new Date().getTime() - firstDate.getTime()) / (60 * 1000 * 60 * 24));

  return (
    <>
      {/* my color */}
      <Box marginTop={133.3333}>
        <CurrentColor select={selectColor}></CurrentColor>
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
      <Button>
        <Image source={require('../../image/drawable-xxxhdpi/bt_upload.png')} style={{width: 74.6666, height: 74.6666}}></Image>
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
export default MainToday;
