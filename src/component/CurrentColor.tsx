import styled from 'styled-components/native';

import theme, {ITheme} from '../theme';
type ColorKeys = keyof typeof theme.Color;

const CurrentColor = styled.View<{theme: ITheme; select: ColorKeys}>`
  width: 254.6666px;
  height: 254.6666px;
  border-radius: 127.3333px
  background-color: ${props => props.theme.Color[props.select]};
  `;

export default CurrentColor;
