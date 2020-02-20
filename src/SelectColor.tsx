import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import {ITheme} from './theme';

import Message from './component/Message';
import BottomButton from './component/BottomButton';

const SelectColor = () => {
  return (
    <>
      <Container>
        <Message>환영합니다!{'\n'}당신의 '색상'을 골라주세요 :)</Message>
        <CurrentColor />
        <Palette>
          {Array(8)
            .fill(null)
            .map((v, i) => (
              <ColorContainer onPress={() => {}}>
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

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

const MessageColor = styled(Message)`
  margin-top: 76px;
`;

const CurrentColor = styled.View<{theme: ITheme}>`
  width: 254.6666px;
  height: 254.6666px;
  border-radius: 127.3333px
  background-color: ${props => props.theme.Color.n1};
  margin-top: 60px
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
