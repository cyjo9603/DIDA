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
    const result = yield call(getDiaryListAPI, userReducer.userInfo.userCode!);
    yield put(getDiaryListSuccess(result.data.diaryList));
  } catch (e) {
    // error
    yield put(getDiaryListFailure(e));
  }
}

function* watchGetDiaryList() {
  yield takeLatest(GET_DIARY_LIST_REQUEST, getDiaryList);
}

export default watchGetDiaryList;
