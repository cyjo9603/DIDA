import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';

import {ThemeType} from '../theme';

import OpenDrawer from './OpenDrawer';

interface IProps {
  openDrawer: () => void;
}

const MainHeader: FunctionComponent<IProps> = ({openDrawer}) => {
  return (
    <Header>
      <Left>{openDrawer && <OpenDrawer onPress={openDrawer} />}</Left>
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

export default MainHeader;
