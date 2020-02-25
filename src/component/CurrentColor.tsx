import styled from 'styled-components/native';

import theme, {ThemeType} from '../theme';
type ColorKeys = keyof typeof theme.selectColor;

const CurrentColor = styled.View<{theme: ThemeType; select: ColorKeys}>`
  width: 254.6666px;
  height: 254.6666px;
  border-radius: 127.3333px
  background-color: ${props => props.theme.selectColor[props.select]};
  `;

export default CurrentColor;
