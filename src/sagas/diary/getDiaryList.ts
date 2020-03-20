import {call, takeLatest, put} from 'redux-saga/effects';

import axios from 'axios';

import {diaryAPI} from '../../reqAddr';
import {
  GET_DIARY_LIST_REQUEST,
  getDiaryListSuccess,
  getDiaryListFailure,
} from '../../reducers/diary/getDiaryList';

const getDiaryListAPI = () => axios.post(diaryAPI.getList);

function* getDiaryList() {
  try {
    yield call(getDiaryListAPI);
    yield put(getDiaryListSuccess());
  } catch (e) {
    // error
    yield put(getDiaryListFailure());
  }
}

function* watchGetDiaryList() {
  yield takeLatest(GET_DIARY_LIST_REQUEST, getDiaryList);
}

export default watchGetDiaryList;
