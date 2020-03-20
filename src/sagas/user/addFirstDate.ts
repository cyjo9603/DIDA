import {call, takeLatest} from 'redux-saga/effects';

import IAddFirstDate, {ADD_FIRST_DATE} from '../../reducers/user/addFirstDate';
import {infoUpdateAPI} from './partnerCheck';

function* addFirstDate(action: IAddFirstDate) {
  try {
    console.log('addFirstDate');
    yield call(() => infoUpdateAPI({userCode: action.userCode, firstDate: action.date}));
    yield call(() => action.navigation.navigate('SelectColor'));
  } catch (e) {
    console.log('addFirstDate error');
  }
}

function* watchAddFirstDate() {
  yield takeLatest(ADD_FIRST_DATE, addFirstDate);
}

export default watchAddFirstDate;
