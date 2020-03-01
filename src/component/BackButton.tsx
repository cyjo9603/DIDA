import * as React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components/native';

const BackButton = () => (
  <TouchableOpacity>
    <Back source={require('../../image/drawable-xxxhdpi/ic_back.png')} />
  </TouchableOpacity>
);

const Back = styled.Image`
  width: 48px;
  height: 48px;
  margin-left: 10.6666px;
`;

export default BackButton;
