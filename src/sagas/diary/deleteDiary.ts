import {call, takeLatest} from 'redux-saga/effects';

import axios from 'axios';

import {diaryAPI} from '../../reqAddr';
import {DELETE_DIARY_REQUEST} from '../../reducers/diary/deleteDiary';

const deleteDiaryAPI = () => axios.post(diaryAPI.delete);

function* deleteDiary() {
  try {
    yield call(deleteDiaryAPI);
  } catch (e) {
    // error
  }
}

function* watchDeleteDiary() {
  yield takeLatest(DELETE_DIARY_REQUEST, deleteDiary);
}

export default watchDeleteDiary;
