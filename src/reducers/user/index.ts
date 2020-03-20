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
import {SetIsConnected, SET_ISCONNECTED} from './setIsConnected';
import {
  PartnerCodeCheckRequest,
  PartnerCodeCheckSuccess,
  PartnerCodeCheckFailure,
  PARTNER_CODE_CHECK_REQUEST,
  PARTNER_CODE_CHECK_SUCCESS,
  PARTNER_CODE_CHECK_FAILURE,
} from './partnerCheck';
import {AddFirstDate, ADD_FIRST_DATE} from './addFirstDate';
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
    partnerCode: string | null;
    selectColor?: number;
    firstDate?: Date;
    isLocalData: Boolean;
  };
  userSign: {
    isPartnerCode: Boolean | null;
    partnerFirstDate: string | null;
  };
  createCount: number;
}

const userInitialState: IUserState = {
  isConnected: null,
  userInfo: {
    userCode: null,
    partnerCode: null,
    isLocalData: false,
  },
  userSign: {
    isPartnerCode: null,
    partnerFirstDate: null,
  },
  createCount: 0,
};

type UserReducerAction =
  | UserSignUp
  | UserInfoUpdate
  | UserInfoCheckRequest
  | UserInfoCheckSuccess
  | SetIsConnected
  | UserInfoCheckFailure
  | DeleteUser
  | GetLocalData
  | PartnerCodeCheckRequest
  | PartnerCodeCheckSuccess
  | PartnerCodeCheckFailure
  | AddFirstDate
  | AddUserColorRequest
  | AddUserColorSuccess
  | AddUserColorFailure;

const userReducer = (state: IUserState = userInitialState, action: UserReducerAction) => {
  return produce(state, (draft: IUserState) => {
    switch (action.type) {
      // signup
      case USER_SIGNUP_REQUEST:
        console.log('USER_SIGNUP_REQUEST');
        break;

      //  user info update
      case USER_INFO_UPDATE_REQUEST:
        console.log('USER_INFO_UPDATE_REQUEST');
        break;

      // user info check
      case USER_INFO_CHECK_REQUEST:
        console.log('USER_INFO_CHECK_REQUEST');
        break;

      case USER_INFO_CHECK_SUCCESS: {
        console.log('USER_INFO_CHECK_SUCCESS');
        if (!action.data.check) {
          draft.userInfo.userCode = action.data.code;
          break;
        } else {
          draft.createCount++;
          break;
        }
      }
      case USER_INFO_CHECK_FAILURE:
        console.log('USER_INFO_CHECK_FAILURE');
        break;

      // delete user info
      case DELETE_USER_REQUEST:
        console.log('DELETE_USER_REQUEST');
        break;

      // get local data
      case GET_LOCAL_DATA: {
        console.log('GET_LOCAL_DATA');
        draft.userInfo.userCode = action.data.userCode;
        draft.userInfo.partnerCode = action.data.partnerCode;
        draft.userInfo.isLocalData = true;
        break;
      }

      // partner code check
      case PARTNER_CODE_CHECK_REQUEST: {
        console.log('PARTNER_CODE_CHECK_REQUEST');
        draft.userSign.isPartnerCode = null;
        break;
      }
      case PARTNER_CODE_CHECK_SUCCESS: {
        console.log('PARTNER_CODE_CHECK_SUCCESS');
        draft.userInfo.partnerCode = action.code;
        draft.userSign.isPartnerCode = true;
        draft.userSign.partnerFirstDate = action.partnerFirstDate;
        break;
      }
      case PARTNER_CODE_CHECK_FAILURE: {
        console.log('PARTNER_CODE_CHECK_FAILURE');
        draft.userSign.isPartnerCode = false;
        break;
      }

      // add firs date
      case ADD_FIRST_DATE:
        console.log('ADD_FIRST_DATE');
        break;

      // add user color
      case ADD_USER_COLOR_REQUEST:
      case ADD_USER_COLOR_FAILURE:
        console.log('ADD_USER_COLOR');
        break;

      case ADD_USER_COLOR_SUCCESS:
        console.log('ADD_USER_COLOR_SUCCESS');
        draft.userInfo.selectColor = action.colorNum;
        break;

      // set isConnected
      case SET_ISCONNECTED: {
        console.log('SET_ISCONNECTED');
        draft.isConnected = action.check;
        break;
      }

      default:
        break;
    }
  });
};

export default userReducer;
