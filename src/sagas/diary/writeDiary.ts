import {call, takeLatest} from 'redux-saga/effects';

import axios from 'axios';

import {diaryAPI} from '../../reqAddr';
import {WRITE_DIARY_REQUEST} from '../../reducers/diary/writeDiary';

const writeDiaryAPI = () => axios.post(diaryAPI.add);

function* writeDiary() {
  try {
    yield call(writeDiaryAPI);
  } catch (e) {
    // error
  }
}

function* watchAddDiary() {
  yield takeLatest(WRITE_DIARY_REQUEST, writeDiary);
}

export default watchAddDiary;
