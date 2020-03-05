import React, {useMemo, memo} from 'react';
import styled from 'styled-components/native';

import {ThemeType} from '../theme';

import TextEB from '../commonComponent/TextComponent';

const BottomButton: React.FunctionComponent<{moveScreen: () => void}> = ({moveScreen}) => {
  const moveScreenFunc = useMemo(() => moveScreen, [moveScreen]);

  return (
    <MoveButton onPress={moveScreenFunc}>
      <TextEB size={20} color="white">
        다음
      </TextEB>
    </MoveButton>
  );
};

const MoveButton = styled.TouchableOpacity<{theme: ThemeType}>`
  width: 100%;
  height: 66.5333px;
  background-color: ${props => props.theme.itemColor.navy_01};
  justify-content: center;
  align-items: center;
`;

export default memo(BottomButton);
