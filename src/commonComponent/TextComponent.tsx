import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

import {ITheme} from '../theme';
type ThemeKeys = keyof ITheme;

export const TextEB = styled.Text<{
  theme: ITheme;
  size: number;
  color: ThemeKeys;
}>`
  font-family: ${props => props.theme.Font.EB};
  font-size: ${props => props.size}px;
  color: ${props => props.theme[props.color]};
`;

export const TextR = styled.Text<{
  theme: ITheme;
  size: number;
  color: ThemeKeys;
}>`
  font-family: ${props => props.theme.Font.R};
  font-size: ${props => props.size}px;
  color: ${props => props.theme[props.color]};
`;

export const TextL = styled.Text<{
  theme: ITheme;
  size: number;
  color: ThemeKeys;
}>`
  font-family: ${props => props.theme.Font.L};
  font-size: ${props => props.size}px;
  color: ${props => props.theme[props.color]};
`;

const TextB = styled.Text<{theme: ITheme; size: number; color: ThemeKeys}>`
  font-family: ${props => props.theme.Font.B};
  font-size: ${props => props.size}px;
  color: ${props => props.theme[props.color]};
`;

export default TextB;
