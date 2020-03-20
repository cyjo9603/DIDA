import {call, takeLatest} from 'redux-saga/effects';

import axios from 'axios';

import {diaryAPI} from '../../reqAddr';
import {UPDATE_DIARY_REQUEST} from '../../reducers/diary/updateDiary';

const updateDiaryAPI = () => axios.post(diaryAPI.update);
function* updateDiary() {
  try {
    yield call(updateDiaryAPI);
  } catch (e) {
    // error
  }
}

function* watchUpdateDiary() {
  yield takeLatest(UPDATE_DIARY_REQUEST, updateDiary);
}

export default watchUpdateDiary;
