import {call, takeLatest, put} from 'redux-saga/effects';

import {
  AddUserColorRequest,
  ADD_USER_COLOR_REQUEST,
  addUserColorSuccess,
  addUserColorFailure,
} from '../../reducers/user/addColor';
import {infoUpdateAPI} from './partnerCheck';

function* addUserColor(action: AddUserColorRequest) {
  try {
    console.log('addUserColor');
    const result = yield call(infoUpdateAPI, {
      userCode: action.userCode,
      colorNum: action.colorNum,
    });
    if (result.data.success) {
      yield put(addUserColorSuccess(action.colorNum));
    } else {
      yield put(addUserColorFailure('fail'));
    }
  } catch (e) {
    console.log('addUserColor error');
    yield put(addUserColorFailure(e));
  }
}

function* watchAddUserColor() {
  yield takeLatest(ADD_USER_COLOR_REQUEST, addUserColor);
}

export default watchAddUserColor;
