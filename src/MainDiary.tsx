import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';

import {ITheme} from './theme';

import DiaryItem from './component/DiaryItem';

const MainDiary = () => {
  return (
    <Container>
      {Array(5)
        .fill(null)
        .map((v, i) => {
          return i !== 0 ? (
            <>
              <BoundaryLine />
              <DiaryItem />
            </>
          ) : (
            <DiaryItem />
          );
        })}
    </Container>
  );
};

const Container = styled.ScrollView`
  width: 100%;
  margin-top: 48px;
  padding-left: 21.3333px;
  padding-right: 22.6666px;
`;

const BoundaryLine = styled.View<{theme: ITheme}>`
  width: 100%;
  height: 1.3333px;
  background-color: ${props => props.theme.dateBackground};
  margin-bottom: 27.5px;
`;

export default MainDiary;
