import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';

import {ThemeType} from '../theme';

import BackButton from './BackButton';

interface IProps {
  goBack?: () => void;
}

const StackHeader: FunctionComponent<IProps> = ({goBack}) => {
  return (
    <Header>
      <Left>{goBack && <BackButton onPress={goBack} />}</Left>
    </Header>
  );
};

const Header = styled.View<{theme: ThemeType}>`
  background-color: ${props => props.theme.itemColor.white};
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.View`
  margin-left: 10.6666px;
`;

export default StackHeader;
