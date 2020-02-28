import styled from 'styled-components/native';

const LineContainer = styled.View<{marginBottom?: string}>`
  align-items: center;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '0')}px;
`;

export const Line = styled.View<{
  lineColor: string;
  width: string;
  height: string;
  position?: string;
}>`
  position: absolute;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: ${props => props.lineColor};
  bottom: ${props => (props.position ? props.position : '3.3333')}px;
`;

export default LineContainer;
