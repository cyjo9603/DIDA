import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {View} from 'react-native';

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
      {diaryLists.map((v: DiaryData, i: number) => (
        <View key={`diary_day_list_${v.writeDate}`}>
          {i !== 0 ? <BoundaryLine /> : null}
          <DiaryItem diaryData={v} />
        </View>
      ))}
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
