import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';

import DiaryItem from '../component/DiaryItem';
import BoundaryLine from '../component/BoundaryLine';
import {IRootState} from '../reducers/index';
import {getDiaryListRequest} from '../reducers/diary/getDiaryList';
import {DiaryData} from '../reducers/diary/index';

const MainDiary = () => {
  const dispatch = useDispatch();
  const {diaryLists} = useSelector((state: IRootState) => state.diaryReducer);

  console.log('####');
  console.log(diaryLists);

  useEffect(() => {
    dispatch(getDiaryListRequest());
  }, []);

  return (
    <Container>
      {/* {Array(5)
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
        })} */}
      {diaryLists.map((v: DiaryData, i: number) => {
        return i !== 0 ? (
          <>
            <BoundaryLine />
            <DiaryItem diaryData={v} />
          </>
        ) : (
          <DiaryItem diaryData={v} />
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

export default MainDiary;
