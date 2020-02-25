import React from 'react';
import styled from 'styled-components/native';

import {ThemeType} from '../theme';
type ThemeKeys = keyof ThemeType;

export const TextEB = styled.Text<{
  theme: ThemeType;
  size: number;
  color: ThemeKeys;
}>`
  font-family: ${props => props.theme.Font.EB};
  font-size: ${props => props.size}px;
  color: ${props => props.theme[props.color]};
`;

export const TextR = styled.Text<{
  theme: ThemeType;
  size: number;
  color: ThemeKeys;
}>`
  font-family: ${props => props.theme.Font.R};
  font-size: ${props => props.size}px;
  color: ${props => props.theme[props.color]};
`;

export const TextL = styled.Text<{
  theme: ThemeType;
  size: number;
  color: ThemeKeys;
}>`
  font-family: ${props => props.theme.Font.L};
  font-size: ${props => props.size}px;
  color: ${props => props.theme[props.color]};
`;

const TextB = styled.Text<{theme: ThemeType; size: number; color: ThemeKeys}>`
  font-family: ${props => props.theme.Font.B};
  font-size: ${props => props.size}px;
  color: ${props => props.theme[props.color]};
`;

export default TextB;
