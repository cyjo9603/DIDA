import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';

import {ThemeType} from '../theme';

import BackButton from './BackButton';

interface IProps {
  goBack?: () => void;
  exitPage?: () => void;
  submitPage?: () => void;
}

const StackHeader: FunctionComponent<IProps> = ({goBack, exitPage, submitPage}) => {
  return (
    <Header>
      {goBack && (
        <Left>
          <BackButton onPress={goBack} type="back" />
        </Left>
      )}
      {exitPage && (
        <Left>
          <BackButton onPress={exitPage} type="exit" />
        </Left>
      )}
      {submitPage && (
        <Right>
          <BackButton onPress={submitPage} type="submit" />
        </Right>
      )}
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

const Right = styled.View`
  margin-right: 21.3333px;
`;

export default StackHeader;
