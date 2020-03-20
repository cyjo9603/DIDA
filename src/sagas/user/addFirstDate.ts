import {call, takeLatest, put, select} from 'redux-saga/effects';
import moment from 'moment';

import {
  AddFirstDateRequest,
  ADD_FIRST_DATE_REQUEST,
  addFirstDateSuccess,
  addFirstDateFailure,
} from '../../reducers/user/addFirstDate';
import {infoUpdateAPI} from './partnerCheck';
import {infoCheckAPI} from './infoCheck';

function* addFirstDate(action: AddFirstDateRequest) {
  try {
    console.log('addFirstDate');
    const {userReducer} = yield select();
    const partnerInfo = yield call(infoCheckAPI, userReducer.userInfo.partnerCode);
    const partnerDate = partnerInfo.data.userInfo[0].firstDate;
    const dateFormat = moment(partnerDate).format('YYYY-MM-DD');

    if (!partnerDate || dateFormat === action.date) {
      const result = yield call(infoUpdateAPI, {userCode: action.userCode, firstDate: action.date});
      if (result.data.success) {
        yield call(() => action.navigation.navigate('SelectColor'));
        yield put(addFirstDateSuccess(action.date));
      } else {
        yield put(addFirstDateFailure('fail'));
      }
    } else {
      yield put(addFirstDateFailure('fail', true));
    }
  } catch (e) {
    console.log('addFirstDate error');
    yield put(addFirstDateFailure(e));
  }
}

function* watchAddFirstDate() {
  yield takeLatest(ADD_FIRST_DATE_REQUEST, addFirstDate);
}

export default watchAddFirstDate;
