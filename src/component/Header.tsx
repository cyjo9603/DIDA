import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const Header = () => {
  return (
    <Container>
      <TouchableOpacity>
        <HeaderItem source={require('../../image/drawable-xxxhdpi/ic_drawer.png')} />
      </TouchableOpacity>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 64px;
  padding: 8px 10.6666px;
`;

const HeaderItem = styled.Image`
  width: 48px;
  height: 48px;
`;

export default Header;
