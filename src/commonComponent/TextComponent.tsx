import React from 'react';
import styled from 'styled-components/native';

import {ThemeType} from '../theme';
type ColorKeys = keyof ThemeType['itemColor'];

export const TextEB = styled.Text<{
  theme: ThemeType;
  size: number;
  color: ColorKeys;
}>`
  font-family: ${props => props.theme.Font.EB};
  font-size: ${props => props.size}px;
  color: ${props => props.theme.itemColor[props.color]};
`;

export const TextR = styled.Text<{
  theme: ThemeType;
  size: number;
  color: ColorKeys;
}>`
  font-family: ${props => props.theme.Font.R};
  font-size: ${props => props.size}px;
  color: ${props => props.theme.itemColor[props.color]};
`;

export const TextL = styled.Text<{
  theme: ThemeType;
  size: number;
  color: ColorKeys;
}>`
  font-family: ${props => props.theme.Font.L};
  font-size: ${props => props.size}px;
  color: ${props => props.theme.itemColor[props.color]};
`;

const TextB = styled.Text<{theme: ThemeType; size: number; color: ColorKeys}>`
  font-family: ${props => props.theme.Font.B};
  font-size: ${props => props.size}px;
  color: ${props => props.theme.itemColor[props.color]};
`;

export default TextB;
