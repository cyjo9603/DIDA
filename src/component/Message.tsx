import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import {ITheme} from '../theme';

const Message = styled.Text<{theme: ITheme}>`
  font-family: ${props => props.theme.Font.B};
  font-size: 24px;
  line-height: 44px;
  color: ${props => props.theme.mainText};
  text-align: center;
  margin-top: 56px;
`;

export default Message;
