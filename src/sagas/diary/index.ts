import {all, fork} from 'redux-saga/effects';

import watchAddDiary from './writeDiary';
import watchUpdateDiary from './updateDiary';
import watchDeleteDiary from './deleteDiary';
import watchGetDiaryList from './getDiaryList';

export default function* diarySaga() {
  yield all([
    fork(watchAddDiary),
    fork(watchUpdateDiary),
    fork(watchDeleteDiary),
    fork(watchGetDiaryList),
  ]);
}
