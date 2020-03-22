import {call, takeLatest, select, put} from 'redux-saga/effects';

import axios from 'axios';

import {diaryAPI} from '../../reqAddr';
import {IRootState} from '../../reducers/index';
import {
  WriteDiaryRequest,
  WRITE_DIARY_REQUEST,
  writeDiarySuccess,
  writeDiaryFailure,
} from '../../reducers/diary/writeDiary';

interface reqData {
  userCode: string;
  diaryDate: string;
  score: number;
  contents: string;
}

const writeDiaryAPI = (data: reqData) => axios.post(diaryAPI.add, data);

function* writeDiary(action: WriteDiaryRequest) {
  try {
    const {userReducer}: IRootState = yield select();
    const data: reqData = {
      ...action.data,
      userCode: userReducer.userInfo.userCode!,
    };
    const result = yield call(writeDiaryAPI, data);
    if (result.success) {
      yield put(writeDiarySuccess());
    } else {
      yield put(writeDiaryFailure('fail'));
    }
    console.log(result.data);
  } catch (e) {
    // error
    yield put(writeDiaryFailure(e));
  }
}

function* watchAddDiary() {
  yield takeLatest(WRITE_DIARY_REQUEST, writeDiary);
}

export default watchAddDiary;
