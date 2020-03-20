import {call, takeLatest, put} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import {memberAPI} from '../../reqAddr';
import {USER_KEY} from '../../storageKey';
import {
  USER_INFO_CHECK_REQUEST,
  userInfoCheckSuccess,
  userInfoCheckFailure,
  UserInfoCheckRequest,
} from '../../reducers/user/userInfo';

export const infoCheckAPI = (code: string) => axios.post(memberAPI.info, {userCode: code});

const signUpAPI = (code: string) =>
  axios.post(memberAPI.add, {userCode: code, deviceInfo: 'android'});

function* infoCheck(action: UserInfoCheckRequest) {
  try {
    console.log('infoCheck');
    const infoCheckValue = yield call(() => infoCheckAPI(action.code));
    const check = yield infoCheckValue.data.userInfo.length === 0 ? false : true;
    yield put(userInfoCheckSuccess({check, code: action.code}));
    if (!check) {
      yield call(() => signUpAPI(action.code));
      yield AsyncStorage.setItem(USER_KEY, action.code);
    }
  } catch (e) {
    yield put(userInfoCheckFailure());
  }
}

function* watchInfoCheck() {
  yield takeLatest(USER_INFO_CHECK_REQUEST, infoCheck);
}

export default watchInfoCheck;
