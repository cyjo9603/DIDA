import {all, fork} from 'redux-saga/effects';

import watchPartnerCheck from './partnerCheck';
import watchInfoCheck from './infoCheck';
import watchDeleteUser from './deleteUser';
import watchAddFirstDate from './addFirstDate';
import watchAddUserColor from './addUserColor';
import watchGetLocalData from './getLocalData';

export default function* userSaga() {
  yield all([
    fork(watchPartnerCheck),
    fork(watchInfoCheck),
    fork(watchDeleteUser),
    fork(watchAddFirstDate),
    fork(watchAddUserColor),
    fork(watchGetLocalData),
  ]);
}
