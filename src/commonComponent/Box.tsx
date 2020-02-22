import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

const Box = styled.View<{
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}>`
  margin-top: ${props => (props.top ? props.top : 0)}px;
  margin-bottom: ${props => (props.bottom ? props.bottom : 0)}px;
  margin-left: ${props => (props.left ? props.left : 0)}px;
  margin-right: ${props => (props.right ? props.right : 0)}px;
`;

export default Box;
