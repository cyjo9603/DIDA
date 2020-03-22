import {call, takeLatest, put} from 'redux-saga/effects';

import {infoCheckAPI} from './infoCheck';
import {
  GetLocalDataRequest,
  GET_LOCALDATA_REQUEST,
  getLocalDataSuccess,
  getLocalDataFailure,
} from '../../reducers/user/getLocalData';
import {setPartnerInfo} from '../../reducers/user/setPartnerInfo';

function* getLocalData(action: GetLocalDataRequest) {
  try {
    if (action.userCode) {
      const userResult = yield call(infoCheckAPI, action.userCode);
      let partnerResult;
      if (action.partnerCode) {
        partnerResult = yield call(infoCheckAPI, action.partnerCode);
      }
      const userInfo = userResult.data.userInfo[0];
      const partnerInfo = partnerResult.data.userInfo[0];
      if (partnerInfo) {
        yield put(setPartnerInfo(partnerInfo.userCode, partnerInfo.colorNum));
      }
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
