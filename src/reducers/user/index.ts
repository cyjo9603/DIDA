import produce from 'immer';

import {UserSignUp, USER_SIGNUP_REQUEST} from './userSignUp';
import {
  UserInfoUpdate,
  UserInfoCheckRequest,
  UserInfoCheckSuccess,
  UserInfoCheckFailure,
  USER_INFO_UPDATE_REQUEST,
  USER_INFO_CHECK_REQUEST,
  USER_INFO_CHECK_SUCCESS,
  USER_INFO_CHECK_FAILURE,
} from './userInfo';
import {DeleteUser, DELETE_USER_REQUEST} from './deleteUser';
import {GetLocalData, GET_LOCAL_DATA} from './getLocalData';
import {
  PartnerCodeCheckRequest,
  PartnerCodeCheckSuccess,
  PartnerCodeCheckFailure,
  PARTNER_CODE_CHECK_REQUEST,
  PARTNER_CODE_CHECK_SUCCESS,
  PARTNER_CODE_CHECK_FAILURE,
} from './partnerCheck';
import {
  AddFirstDateRequest,
  AddFirstDateSuccess,
  AddFirstDateFailure,
  ADD_FIRST_DATE_REQUEST,
  ADD_FIRST_DATE_SUCCESS,
  ADD_FIRST_DATE_FAILURE,
} from './addFirstDate';
import {
  AddUserColorRequest,
  AddUserColorSuccess,
  AddUserColorFailure,
  ADD_USER_COLOR_REQUEST,
  ADD_USER_COLOR_SUCCESS,
  ADD_USER_COLOR_FAILURE,
} from './addColor';

export interface IUserState {
  isConnected: boolean | null;
  userInfo: {
    userCode: string | null;
    partnerCode?: string;
    selectColor?: number;
    firstDate?: string;
  };
  userSign: {
    createCount: number;
    dateDiff?: boolean;
    codeDiff?: boolean;
  };
}

const userInitialState: IUserState = {
  isConnected: null,
  userInfo: {
    userCode: null,
  },
  userSign: {
    createCount: 0,
  },
};

type UserReducerAction =
  | UserSignUp
  | UserInfoUpdate
  | UserInfoCheckRequest
  | UserInfoCheckSuccess
  | UserInfoCheckFailure
  | DeleteUser
  | GetLocalData
  | PartnerCodeCheckRequest
  | PartnerCodeCheckSuccess
  | PartnerCodeCheckFailure
  | AddFirstDateRequest
  | AddFirstDateSuccess
  | AddFirstDateFailure
  | AddUserColorRequest
  | AddUserColorSuccess
  | AddUserColorFailure;

const userReducer = (state: IUserState = userInitialState, action: UserReducerAction) => {
  return produce(state, (draft: IUserState) => {
    switch (action.type) {
      // signup
      case USER_SIGNUP_REQUEST:
        break;

      //  user info update
      case USER_INFO_UPDATE_REQUEST:
        break;

      // user info check
      case USER_INFO_CHECK_REQUEST:
        break;

      case USER_INFO_CHECK_SUCCESS: {
        if (!action.data.check) {
          draft.userInfo.userCode = action.data.code;
          break;
        } else {
          draft.userSign.createCount++;
          break;
        }
      }
      case USER_INFO_CHECK_FAILURE:
        break;

      // delete user info
      case DELETE_USER_REQUEST:
        break;

      // get local data
      case GET_LOCAL_DATA: {
        draft.userInfo.userCode = action.userCode || 'NULL';
        break;
      }

      // partner code check
      case PARTNER_CODE_CHECK_REQUEST:
        break;
      case PARTNER_CODE_CHECK_SUCCESS:
        draft.userSign.codeDiff = false;
        draft.userInfo.partnerCode = action.code;
        break;
      case PARTNER_CODE_CHECK_FAILURE:
        draft.userSign.codeDiff = true;
        break;

      // add firs date
      case ADD_FIRST_DATE_REQUEST:
        break;
      case ADD_FIRST_DATE_SUCCESS:
        draft.userSign.dateDiff = false;
        draft.userInfo.firstDate = action.date;
        break;
      case ADD_FIRST_DATE_FAILURE:
        draft.userSign.dateDiff = true;
        break;

      // add user color
      case ADD_USER_COLOR_REQUEST:
      case ADD_USER_COLOR_FAILURE:
        break;

      case ADD_USER_COLOR_SUCCESS:
        draft.userInfo.selectColor = action.colorNum;
        break;

      default:
        break;
    }
    console.log(action.type);
  });
};

export default userReducer;
