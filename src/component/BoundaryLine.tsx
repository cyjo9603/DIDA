import React from 'react';
import styled from 'styled-components/native';

import {ITheme} from '../theme';

const BoundaryLine = styled.View<{theme: ITheme}>`
  width: 100%;
  height: 1.3333px;
  background-color: ${props => props.theme.dateBackground};
  margin-bottom: 27.5px;
`;

export default BoundaryLine;
