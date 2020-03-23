import React, {FunctionComponent, useMemo} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';

import {ThemeType} from '../theme';

import Box from '../commonComponent/Box';
import TextB, {TextEB, TextR} from '../commonComponent/TextComponent';
import {DiaryData} from '../reducers/diary/index';
import {IRootState} from '../reducers/index';

interface Props {
  diaryData: DiaryData;
}

const DiaryItem: FunctionComponent<Props> = ({diaryData}) => {
  const {firstDate} = useSelector((state: IRootState) => state.userReducer.userInfo);
  const {selectColor} = useSelector((state: IRootState) => state.userReducer.userInfo);
  const {userCode} = useSelector((state: IRootState) => state.userReducer.userInfo);
  const partnerColor = useSelector(
    (state: IRootState) => state.userReducer.partnerInfo!.selectColor,
  );
  const imgAddr = require('../../image/drawable-xxxhdpi/bt_write.png');
  const currentDDay = useMemo(
    () =>
      Math.floor(
        (new Date(diaryData.writeDate).getTime() - new Date(firstDate!).getTime()) /
          (1000 * 60 * 60 * 24),
      ),
    [diaryData.writeDate],
  );
  let test01 = 'yellow';

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
          <LineContainer key={`diaryNo_${v.diaryNo}`}>
            <Block writer={v.userCode === userCode ? selectColor! : partnerColor!} />
            <Contents size={20} color="darkGray_01">
              {v.contents}
            </Contents>
            <HeartOn
              source={require(`../../image/drawable-xxxhdpi/ic_heart_${
                test01 === 'yellow' ? '5' : '3'
              }_on.png`)}
            />
          </LineContainer>
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

const LineContainer = styled.View`
  flex-direction: row;
  margin-top: 10.6666px;
`;

const Block = styled.View<{theme: ThemeType; writer: number}>`
  background-color: ${props => props.theme.selectColor[props.writer]};
  position: absolute;
  width: 10.6666px;
  height: 10.6666px;
  border-radius: 2.6666px;
  top: 9.6666px;
  left: 5.3333px;
`;

const Contents = styled(TextR)`
  line-height: 30px;
  width: 350px;
  margin-left: 32px;
`;

const HeartOn = styled.Image`
  position: absolute;
  top: 3px;
  right: 7px;
  width: 24px;
  height: 24px;
`;

const WriteImage = styled.Image`
  width: 37.3333px;
  height: 37.3333px;
`;

export default DiaryItem;
