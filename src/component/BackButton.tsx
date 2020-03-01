import React, {FunctionComponent} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components/native';

interface IProps {
  onPress: () => void;
}

const BackButton: FunctionComponent<IProps> = ({onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Back source={require('../../image/drawable-xxxhdpi/ic_back.png')} />
  </TouchableOpacity>
);

const Back = styled.Image`
  width: 48px;
  height: 48px;
`;

export default BackButton;
