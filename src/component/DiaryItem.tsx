import React, {FunctionComponent, useMemo} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';

import Box from '../commonComponent/Box';
import TextB, {TextEB} from '../commonComponent/TextComponent';
import {DiaryData} from '../reducers/diary/index';
import {IRootState} from '../reducers/index';
import DiaryContent from './DiaryContent';

interface Props {
  diaryData: DiaryData;
}

const DiaryItem: FunctionComponent<Props> = ({diaryData}) => {
  const {firstDate} = useSelector((state: IRootState) => state.userReducer.userInfo);
  const imgAddr = require('../../image/drawable-xxxhdpi/bt_write.png');
  const currentDDay = useMemo(
    () =>
      Math.floor(
        (new Date(diaryData.writeDate).getTime() - new Date(firstDate!).getTime()) /
          (1000 * 60 * 60 * 24),
      ),
    [diaryData.writeDate],
  );

  return (
    <View>
      {/* header */}
      <Top>
        <TextEB size={32} color="main">
          {currentDDay}
        </TextEB>
        <TouchableOpacity>
          <WriteImage source={imgAddr} />
        </TouchableOpacity>
      </Top>

      {/* contents */}
      <Box marginBottom={36.6666}>
        <Box marginLeft={2.6666} marginTop={2.6666} marginBottom={2.6666}>
          <TextB size={17.3333} color="gray_01">
            days
          </TextB>
        </Box>

        {/* line contents */}
        {diaryData.contents.map(v => (
          <DiaryContent key={`diaryNo_${v.diaryNo}`} contentItem={v} />
        ))}
      </Box>
    </View>
  );
};

const Top = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const WriteImage = styled.Image`
  width: 37.3333px;
  height: 37.3333px;
`;

export default DiaryItem;
