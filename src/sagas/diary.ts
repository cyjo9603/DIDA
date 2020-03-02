import {call, put, takeLatest, all, fork} from 'redux-saga/effects';
import axios from 'axios';

import {diaryAPI} from '../reqAddr';
import {WRITE_DIARY_REQUEST} from '../reducers/diary/writeDiary';
import {UPDATE_DIARY_REQUEST} from '../reducers/diary/updateDiary';
import {DELETE_DIARY_REQUEST} from '../reducers/diary/deleteDiary';
import {GET_DIARY_LIST_REQUEST, getDiaryListSuccess, getDiaryListFailure} from '../reducers/diary/getDiaryList';

// API
const writeDiaryAPI = () => axios.post(diaryAPI.add);

const updateDiaryAPI = () => axios.post(diaryAPI.update);

const deleteDiaryAPI = () => axios.post(diaryAPI.delete);

const getDiaryListAPI = () => axios.post(diaryAPI.getList);

// write diary
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

// update diary
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

// delete diary
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

// get diary list
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

export default function* diarySaga() {
  yield all([fork(watchAddDiary), fork(watchUpdateDiary), fork(watchDeleteDiary), fork(watchGetDiaryList)]);
}
