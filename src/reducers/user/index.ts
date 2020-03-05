import IUserSignUp, {USER_SIGNUP_REQUEST} from './userSignUp';
import TUserInfo, {USER_INFO_UPDATE_REQUEST, USER_INFO_CHECK_REQUEST, USER_INFO_CHECK_SUCCESS, USER_INFO_CHECK_FAILURE} from './userInfo';
import IDeleteUser, {DELETE_USER_REQUEST} from './deleteUser';
import IGetLocalData, {GET_LOCAL_DATA} from './getLocalData';
import ISetIsConnected, {SET_ISCONNECTED} from './setIsConnected';
import TPartnerCodeCheck, {PARTNER_CODE_CHECK_REQUEST, PARTNER_CODE_CHECK_SUCCESS, PARTNER_CODE_CHECK_FAILURE} from './partnerCheck';
import IAddFirstDate, {ADD_FIRST_DATE} from './addFirstDate';
import IAddUserColor, {ADD_USER_COLOR} from './addColor';

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

// interface IDummy {
//   userCode?: string;
//   partnerCode?: string;
//   selectColor?: 'n1' | 'n2' | 'n3' | 'n4' | 'n5' | 'n6' | 'n7' | 'n8';
//   firstDate?: Date;
//   isLocalData: Boolean;
// }

// const dummyData: IDummy = {
//   userCode: undefined,
//   partnerCode: 'T12345',
//   selectColor: 'n1',
//   firstDate: new Date(2020, 1, 2),
//   isLocalData: true,
// };

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
  //  userInfo: dummyData,
  createCount: 0,
};

type UserReducerAction = IUserSignUp | TUserInfo | IDeleteUser | IGetLocalData | ISetIsConnected | TPartnerCodeCheck | IAddFirstDate | IAddUserColor;

const userReducer = (state: IUserState = userInitialState, action: UserReducerAction) => {
  switch (action.type) {
    // signup
    case USER_SIGNUP_REQUEST: {
      console.log('USER_SIGNUP_REQUEST');
      return {
        ...state,
      };
    }

    //  user info update
    case USER_INFO_UPDATE_REQUEST: {
      console.log('USER_INFO_UPDATE_REQUEST');
      return {
        ...state,
      };
    }

    // user info check
    case USER_INFO_CHECK_REQUEST: {
      console.log('USER_INFO_CHECK_REQUEST');
      return {
        ...state,
      };
    }
    case USER_INFO_CHECK_SUCCESS: {
      console.log('USER_INFO_CHECK_SUCCESS');
      if (!action.data.check) {
        const userInfo = {...state.userInfo};
        userInfo.userCode = action.data.code;
        return {
          ...state,
          userInfo,
        };
      } else {
        0;
        return {
          ...state,
          createCount: state.createCount + 1,
        };
      }
    }
    case USER_INFO_CHECK_FAILURE: {
      console.log('USER_INFO_CHECK_FAILURE');
      return {
        ...state,
      };
    }

    // delete user info
    case DELETE_USER_REQUEST: {
      console.log('DELETE_USER_REQUEST');
      return {
        ...state,
      };
    }

    // get local data
    case GET_LOCAL_DATA: {
      console.log('GET_LOCAL_DATA');
      const userInfo = {...state.userInfo};
      userInfo.userCode = action.data.userCode;
      userInfo.partnerCode = action.data.partnerCode;
      userInfo.isLocalData = true;
      return {
        ...state,
        userInfo,
      };
    }

    // partner code check
    case PARTNER_CODE_CHECK_REQUEST: {
      const userSign = {...state.userSign};
      userSign.isPartnerCode = null;
      console.log('PARTNER_CODE_CHECK_REQUEST');
      return {
        ...state,
        userSign,
      };
    }
    case PARTNER_CODE_CHECK_SUCCESS: {
      console.log('PARTNER_CODE_CHECK_SUCCESS');
      const userInfo = {...state.userInfo};
      const userSign = {...state.userSign};
      userInfo.partnerCode = action.code;
      userSign.isPartnerCode = true;
      userSign.partnerFirstDate = action.partnerFirstDate;
      return {
        ...state,
        userInfo,
        userSign,
      };
    }
    case PARTNER_CODE_CHECK_FAILURE: {
      const userSign = {...state.userSign};
      userSign.isPartnerCode = false;
      console.log('PARTNER_CODE_CHECK_FAILURE');
      return {
        ...state,
        userSign,
      };
    }

    // add firs date
    case ADD_FIRST_DATE: {
      console.log('ADD_FIRST_DATE');
      return {
        ...state,
      };
    }

    // add user color
    case ADD_USER_COLOR: {
      console.log('ADD_USER_COLOR');
      const userInfo = state.userInfo;
      userInfo.selectColor = action.colorId;
      return {
        ...state,
      };
    }

    // set isConnected
    case SET_ISCONNECTED: {
      return {
        ...state,
        isConnected: action.check,
      };
    }

    default:
      return {...state};
  }
};

export default userReducer;
