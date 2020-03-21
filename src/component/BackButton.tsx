import React, {FunctionComponent, useMemo, memo} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import {ThemeType} from '../theme';

interface IProps {
  onPress: () => void;
  type: 'back' | 'exit' | 'submit';
}

const BackButton: FunctionComponent<IProps> = ({onPress, type}) => {
  const imageSrc = useMemo(() => {
    if (type === 'back') {
      return require('../../image/drawable-xxxhdpi/ic_back.png');
    }
    return require('../../image/drawable-xxxhdpi/ic_close.png');
  }, []);
  const onPressFunc = useMemo(() => onPress, [onPress]);

  return (
    <TouchableOpacity onPress={onPressFunc}>
      {type === 'submit' ? <SubmitText>게시</SubmitText> : <Back source={imageSrc} />}
    </TouchableOpacity>
  );
};

const Back = styled.Image`
  width: 48px;
  height: 48px;
`;

const SubmitText = styled.Text<{theme: ThemeType}>`
  font-family: ${props => props.theme.Font.EB};
  font-size: 20px;
  color: ${props => props.theme.itemColor.navy_01};
`;

export default memo(BackButton);
