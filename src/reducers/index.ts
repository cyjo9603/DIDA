import {combineReducers} from 'redux';
import userReducer, {IUserState} from './user/index';
import diaryReducer, {IDiaryState} from './diary/index';

export interface IRootState {
  userReducer: IUserState;
  diaryReducer: IDiaryState;
}

const rootReducer = combineReducers({
  userReducer,
  diaryReducer,
});

export default rootReducer;
