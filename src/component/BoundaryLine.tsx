import React from 'react';
import styled from 'styled-components/native';

import {ThemeType} from '../theme';

const BoundaryLine = styled.View<{theme: ThemeType}>`
  width: 100%;
  height: 1.3333px;
  background-color: ${props => props.theme.itemColor.lightGray_03};
  margin-bottom: 27.5px;
`;

export default BoundaryLine;
