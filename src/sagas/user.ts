import {call, put, takeLatest, all, fork} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import {memberAPI} from '../reqAddr';
import {USER_SIGNUP_REQUEST} from '../reducers/user/userSignUp';
import {USER_INFO_UPDATE_REQUEST, USER_INFO_CHECK_REQUEST, userInfoCheckSuccess, userInfoCheckFailure, IUserInfoCheckRequest} from '../reducers/user/userInfo';
import {DELETE_USER_REQUEST} from '../reducers/user/deleteUser';
import {PARTNER_CODE_CHECK_REQUEST, IPartnerCodeCheckRequest, partnerCodeCheckSuccess, partnerCodeCheckFailure} from '../reducers/user/partnerCheck';
import {userSignUp} from '../reducers/user/userSignUp';
import {USER_KEY} from '../storageKey';

// API
const signUpAPI = (code: string) => axios.post(memberAPI.add, {userCode: code, deviceInfo: 'android'});

const infoUpdateAPI = (data: {userCode: string; firstDate?: Date; colorCode?: number; partnerCode?: string}) => {
  if (data.firstDate) {
    console.log('info update first date');
    axios.post(memberAPI.update, {userCode: data.userCode, firstDate: data.firstDate});
  }
  if (data.colorCode) {
    console.log('info update color code');
    axios.post(memberAPI.update, {userCode: data.userCode, colorCode: data.colorCode});
  }
  if (data.partnerCode) {
    console.log('info update partner code');
    axios.post(memberAPI.update, {userCode: data.userCode, partnerCode: data.partnerCode});
  }
};

const infoCheckAPI = (code: string) => axios.post(memberAPI.info, {userCode: code});

const deleteUserAPI = () => axios.post(memberAPI.delete);

const getColorAPI = () => axios.post(memberAPI.getColor);

// info check partner code
function* partnerCheck(action: IPartnerCodeCheckRequest) {
  try {
    console.log('partnerCheck');
    const infoCheckValue = yield call(() => infoCheckAPI(action.data.partnerCode));
    const check = yield infoCheckValue.data.userInfo.length === 0 ? false : true;
    if (check) {
      console.log('partner check true');
      yield call(() => infoUpdateAPI(action.data));
      yield put(partnerCodeCheckSuccess(action.data.partnerCode));
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

// infoCheck
function* infoCheck(action: IUserInfoCheckRequest) {
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

// delete user
function* deleteUser() {
  try {
    console.log('deleteUser');
    yield call(deleteUserAPI);
  } catch (e) {
    // error
  }
}

function* watchDeleteUser() {
  yield takeLatest(DELETE_USER_REQUEST, deleteUser);
}

export default function* userSaga() {
  yield all([fork(watchPartnerCheck), fork(watchInfoCheck), fork(watchDeleteUser)]);
}
