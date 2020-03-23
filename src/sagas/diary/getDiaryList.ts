import {call, takeLatest, put, select} from 'redux-saga/effects';

import axios from 'axios';

import {diaryAPI} from '../../reqAddr';
import {
  GET_DIARY_LIST_REQUEST,
  getDiaryListSuccess,
  getDiaryListFailure,
} from '../../reducers/diary/getDiaryList';
import {IRootState} from '../../reducers/index';

const getDiaryListAPI = (userCode: string) => axios.post(diaryAPI.getList, {userCode});

function* getDiaryList() {
  try {
    const {userReducer}: IRootState = yield select();
    const userResult = yield call(getDiaryListAPI, userReducer.userInfo.userCode!);
    const partnerResult = yield call(getDiaryListAPI, userReducer.userInfo.partnerCode!);
    console.log(userReducer.userInfo.partnerCode);
    console.log(partnerResult.data);
    yield put(getDiaryListSuccess(userResult.data.diaryList, partnerResult.data.diaryList));
  } catch (e) {
    // error
    yield put(getDiaryListFailure(e));
  }
}

function* watchGetDiaryList() {
  yield takeLatest(GET_DIARY_LIST_REQUEST, getDiaryList);
}

export default watchGetDiaryList;
