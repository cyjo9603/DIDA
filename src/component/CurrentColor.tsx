import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import {ITheme} from '../theme';

const CurrentColor = styled.View<{theme: ITheme; select: string}>`
  width: 254.6666px;
  height: 254.6666px;
  border-radius: 127.3333px
  background-color: ${(props: any) => props.theme.Color[props.select]};
  `;

export default CurrentColor;
