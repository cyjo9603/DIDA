import {call, takeLatest, put} from 'redux-saga/effects';

import {infoCheckAPI} from './infoCheck';
import {
  GetLocalDataRequest,
  GET_LOCALDATA_REQUEST,
  getLocalDataSuccess,
  getLocalDataFailure,
} from '../../reducers/user/getLocalData';

function* getLocalData(action: GetLocalDataRequest) {
  try {
    if (action.userCode) {
      const result = yield call(infoCheckAPI, action.userCode);
      const userInfo = result.data.userInfo[0];
      if (userInfo) {
        const data = {
          userCode: userInfo.userCode,
          partnerCode: userInfo.partnerCode,
          selectColor: userInfo.colorNum,
          firstDate: userInfo.firstDate,
        };
        yield put(getLocalDataSuccess(data));
      } else {
        yield put(getLocalDataFailure('fail', action.userCode));
      }
    } else {
      yield put(getLocalDataFailure('fail'));
    }
  } catch (e) {
    // error
    yield put(getLocalDataFailure(e));
  }
}

function* watchGetLocalData() {
  yield takeLatest(GET_LOCALDATA_REQUEST, getLocalData);
}

export default watchGetLocalData;
