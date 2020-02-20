import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

import {ITheme} from '../theme';

const LineContainer = styled.View<{marginBottom?: string}>`
  align-items: center;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '0')}px;
`;

export const Line = styled.View<{
  lineColor: string;
  width: string;
  weight: string;
  position?: string;
}>`
  position: absolute;
  width: ${props => props.width}px;
  height: ${props => props.weight}px;
  background-color: ${props => props.lineColor};
  bottom: 3.3333px;
`;

export default LineContainer;
