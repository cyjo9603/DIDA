import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components/native';

const Header = () => {
  return (
    <Container>
      <TouchableOpacity>
        <Image
          source={require('../../image/drawable-xxxhdpi/ic_drawer.png')}
          style={{width: 48, height: 48}}></Image>
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

export default Header;
