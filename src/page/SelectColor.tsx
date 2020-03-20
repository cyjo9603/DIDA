import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View} from 'react-native';
import styled from 'styled-components/native';

import theme, {ThemeType} from '../theme';

import Container from '../component/Container';
import Box from '../commonComponent/Box';
import TextB from '../commonComponent/TextComponent';
import CurrentColor from '../component/CurrentColor';
import BottomButton from '../component/BottomButton';

import {IRootState} from '../reducers/index';
import {addUserColorRequest} from '../reducers/user/addColor';

type ColorKeys = keyof typeof theme.selectColor;

const SelectColor = () => {
  const dispatch = useDispatch();
  const {userCode} = useSelector((state: IRootState) => state.userReducer.userInfo);
  const [color, setColor] = useState(1);

  const onSubmitInputColor = () => {
    console.log(color);
    if (userCode) {
      dispatch(addUserColorRequest(userCode, color));
    }
  };

  return (
    <>
      <Container>
        {/* top message */}
        <Box marginTop={56}>
          <Message size={24} color="main">
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
                key={`selectColorId_${i}`}
                onPress={() => {
                  setColor(i);
                }}>
                <ColorItem colorIndex={i} />
              </ColorContainer>
            ))}
        </Palette>
      </Container>
      <View>
        <BottomButton moveScreen={onSubmitInputColor} />
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
  theme: ThemeType;
  colorIndex: number;
}>`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: ${(props: any) => props.theme.selectColor[props.colorIndex]};
`;

export default SelectColor;
