import {call, takeLatest} from 'redux-saga/effects';

import IAddUserColor, {ADD_USER_COLOR} from '../../reducers/user/addColor';
import {infoUpdateAPI} from './partnerCheck';

function* addUserColor(action: IAddUserColor) {
  try {
    console.log('addUserColor');
    yield call(() => infoUpdateAPI({userCode: action.userCode, colorNum: action.colorId}));
  } catch (e) {
    console.log('addUserColor error');
  }
}

function* watchAddUserColor() {
  yield takeLatest(ADD_USER_COLOR, addUserColor);
}

export default watchAddUserColor;
