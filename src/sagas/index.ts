import {all, call} from 'redux-saga/effects';

import user from './user';
import diary from './diary';

export default function* rootSaga() {
  yield all([call(user), call(diary)]);
}
