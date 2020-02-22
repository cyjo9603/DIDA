import React from 'react';
import styled from 'styled-components/native';

const Box = styled.View<{
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}>`
  margin-top: ${props => (props.marginTop ? props.marginTop : '0')}px;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '0')}px;
  margin-left: ${props => (props.marginLeft ? props.marginLeft : '0')}px;
  margin-right: ${props => (props.marginRight ? props.marginRight : '0')}px;
`;

export default Box;
