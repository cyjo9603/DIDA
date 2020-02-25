import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';

import Box from '../commonComponent/Box';
import {TextEB} from '../commonComponent/TextComponent';
import CurrentColor from '../component/CurrentColor';

const MainToday = () => {
  return (
    <>
      {/* my color */}
      <Box marginTop={133.3333}>
        <CurrentColor select="n1"></CurrentColor>
      </Box>

      {/* show my day */}
      <Section>
        <Box marginLeft={17.3333} marginRight={21.3333} marginBottom={16}>
          <TextEB size={24} color="menuText">
            D+
          </TextEB>
        </Box>
        <TextEB size={80} color="mainText">
          257
        </TextEB>
        <Box marginLeft={16} marginBottom={16}>
          <TextEB size={24} color="notifyMessage_01">
            days
          </TextEB>
        </Box>
      </Section>

      {/* write button */}
      <Button>
        <Image
          source={require('../../image/drawable-xxxhdpi/bt_upload.png')}
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

const Button = styled.TouchableOpacity`
  margin-top: 70px;
`;
export default MainToday;
