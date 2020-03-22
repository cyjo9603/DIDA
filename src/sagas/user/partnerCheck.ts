import {call, takeLatest, put} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import {memberAPI} from '../../reqAddr';
import {PARTNER_KEY} from '../../storageKey';
import {infoCheckAPI} from './infoCheck';
import {
  PARTNER_CODE_CHECK_REQUEST,
  PartnerCodeCheckRequest,
  partnerCodeCheckSuccess,
  partnerCodeCheckFailure,
} from '../../reducers/user/partnerCheck';

export const infoUpdateAPI = (data: {
  userCode: string;
  firstDate?: string;
  colorNum?: number;
  partnerCode?: string;
}) => {
  if (data.firstDate) {
    console.log('info update first date');
    console.log(`userCode: ${data.userCode}, firstDate: ${data.firstDate}`);
    return axios.post(memberAPI.update, {userCode: data.userCode, firstDate: data.firstDate});
  }
  if (data.colorNum) {
    console.log('info update color code');
    console.log(`userCode: ${data.userCode}, colorNum: ${data.colorNum}`);
    return axios.post(memberAPI.update, {userCode: data.userCode, colorNum: data.colorNum});
  }
  if (data.partnerCode) {
    console.log('info update partner code');
    return axios.post(memberAPI.update, {userCode: data.userCode, partnerCode: data.partnerCode});
  }
};

function* partnerCheck(action: PartnerCodeCheckRequest) {
  try {
    console.log('partnerCheck');
    const infoCheckValue = yield call(() => infoCheckAPI(action.data.partnerCode));
    const check = yield infoCheckValue.data.userInfo.length === 0 ? false : true;
    if (check) {
      console.log('partner check true');
      const partnerFirstDate = infoCheckValue.data.userInfo[0].firstDate;
      yield AsyncStorage.setItem(PARTNER_KEY, action.data.partnerCode);
      yield call(() => infoUpdateAPI(action.data));
      yield put(partnerCodeCheckSuccess(action.data.partnerCode, partnerFirstDate));
      yield call(() => action.data.navigation.navigate('SelectDate'));
    } else {
      throw new Error('잘못된 값');
    }
    //yield call(infoUpdateAPI, {});
  } catch (e) {
    console.log('partner check false');
    yield put(partnerCodeCheckFailure());
    // error
  }
}

function* watchPartnerCheck() {
  yield takeLatest(PARTNER_CODE_CHECK_REQUEST, partnerCheck);
}

export default watchPartnerCheck;
