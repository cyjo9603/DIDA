import {call, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

import {memberAPI} from '../../reqAddr';
import {DELETE_USER_REQUEST} from '../../reducers/user/deleteUser';

const deleteUserAPI = () => axios.post(memberAPI.delete);

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

export default watchDeleteUser;
