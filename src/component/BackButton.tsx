import React, {FunctionComponent, useMemo, memo} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

interface IProps {
  onPress: () => void;
}

const BackButton: FunctionComponent<IProps> = ({onPress}) => {
  const imgSource = useMemo(() => require('../../image/drawable-xxxhdpi/ic_back.png'), []);
  const onPressFunc = useMemo(() => onPress, [onPress]);

  return (
    <TouchableOpacity onPress={onPress}>
      <Back source={imgSource} />
    </TouchableOpacity>
  );
};

const Back = styled.Image`
  width: 48px;
  height: 48px;
`;

export default memo(BackButton);
