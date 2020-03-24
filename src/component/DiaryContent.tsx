import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {TextR} from '../commonComponent/TextComponent';
import {useSelector} from 'react-redux';

import {ThemeType} from '../theme';
import {IRootState} from '../reducers/index';
import {DiaryContents} from '../reducers/diary/index';

interface Props {
  contentItem: DiaryContents;
}

const getImageSource = (score: number) => {
  switch (score) {
    case 1:
      return require(`../../image/drawable-xxxhdpi/ic_heart_1_off.png`);
    case 2:
      return require(`../../image/drawable-xxxhdpi/ic_heart_2_off.png`);
    case 3:
      return require(`../../image/drawable-xxxhdpi/ic_heart_3_off.png`);
    case 4:
      return require(`../../image/drawable-xxxhdpi/ic_heart_4_off.png`);
    case 5:
      return require(`../../image/drawable-xxxhdpi/ic_heart_5_off.png`);
    default:
      return require(`../../image/drawable-xxxhdpi/ic_heart_1_off.png`);
  }
};

const DiaryContent: FunctionComponent<Props> = ({contentItem}) => {
  const {userCode} = useSelector((state: IRootState) => state.userReducer.userInfo);
  const {selectColor} = useSelector((state: IRootState) => state.userReducer.userInfo);
  const partnerColor = useSelector(
    (state: IRootState) => state.userReducer.partnerInfo!.selectColor,
  );
  const imgSource = getImageSource(contentItem.score);

  return (
    <LineContainer key={`diaryNo_${contentItem.diaryNo}`}>
      <Block writer={contentItem.userCode === userCode ? selectColor! : partnerColor!} />
      <Contents size={20} color="darkGray_01">
        {contentItem.contents}
      </Contents>
      <HeartOn source={imgSource} />
    </LineContainer>
  );
};

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

export default DiaryContent;
