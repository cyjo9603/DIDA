import {call, put, takeLatest, all, fork} from 'redux-saga/effects';
import axios from 'axios';

import {memberAPI} from '../reqAddr';
import {USER_SIGNUP_REQUEST} from '../reducers/user/userSignUp';
import {USER_INFO_UPDATE_REQUEST, USER_INFO_CHECK_REQUEST, userInfoCheckSuccess, userInfoCheckFailure, IUserInfoCheckRequest} from '../reducers/user/userInfo';
import {DELETE_USER_REQUEST} from '../reducers/user/deleteUser';

// API
const signUpAPI = () => axios.post(memberAPI.add);

const infoUpdateAPI = () => axios.post(memberAPI.update);

const infoCheckAPI = (code: string) => axios.post(memberAPI.info, {code: code});

const deleteUserAPI = () => axios.post(memberAPI.delete);

const getColorAPI = () => axios.post(memberAPI.getColor);

// sign up
function* signUp() {
  try {
    console.log('signUp');
    yield call(signUpAPI);
  } catch (e) {
    // error
  }
}

function* watchSignUp() {
  yield takeLatest(USER_SIGNUP_REQUEST, signUp);
}

// info update
function* infoUpdate() {
  try {
    console.log('infoUpdate');
    yield call(infoUpdateAPI);
  } catch (e) {
    // error
  }
}

function* watchInfoUpdate() {
  yield takeLatest(USER_INFO_UPDATE_REQUEST, infoUpdate);
}

// infoCheck
function* infoCheck(action: IUserInfoCheckRequest) {
  try {
    console.log('infoCheck');
    const infoCheckValue = yield call(() => infoCheckAPI(action.code));
    const check = yield infoCheckValue.data.userInfo.length === 0 ? false : true;
    yield put(userInfoCheckSuccess({check, code: action.code}));
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
  yield all([fork(watchSignUp), fork(watchInfoUpdate), fork(watchInfoCheck), fork(watchDeleteUser)]);
}
