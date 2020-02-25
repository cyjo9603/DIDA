import React, {useState} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

import theme, {ITheme} from '../theme';

import Container from '../component/Container';
import Box from '../commonComponent/Box';
import TextB from '../commonComponent/TextComponent';
import CurrentColor from '../component/CurrentColor';
import BottomButton from '../component/BottomButton';

type ColorKeys = keyof typeof theme.Color;

const SelectColor = () => {
  const [color, setColor] = useState<ColorKeys>('n1');

  const getColor = (number: number) => `n${number + 1}` as ColorKeys;

  return (
    <>
      <Container>
        {/* top message */}
        <Box marginTop={56}>
          <Message size={24} color="mainText">
            환영합니다!{'\n'}당신의 '색상'을 골라주세요 :)
          </Message>
        </Box>

        {/* my color */}
        <Box marginTop={60}>
          <CurrentColor select={color} />
        </Box>

        <Palette>
          {Array(8)
            .fill(null)
            .map((v, i) => (
              <ColorContainer
                onPress={() => {
                  setColor(getColor(i));
                }}>
                <ColorItem colorIndex={`n${i + 1}`} />
              </ColorContainer>
            ))}
        </Palette>
      </Container>
      <View>
        <BottomButton />
      </View>
    </>
  );
};

const Message = styled(TextB)`
  line-height: 44px;
  text-align: center;
`;

const Palette = styled.View`
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 93.3333px 33.3333px 0 33.3333px;
`;

const ColorContainer = styled.TouchableOpacity`
  width: 90.6666px;
  height: 90.6666px;
  justify-content: center;
  align-items: center;
`;

const ColorItem = styled.View<{
  theme: ITheme;
  colorIndex: string;
}>`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: ${(props: any) => props.theme.Color[props.colorIndex]};
`;

export default SelectColor;
