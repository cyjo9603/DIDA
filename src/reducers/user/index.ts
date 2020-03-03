import IUserSignUp, {USER_SIGNUP_REQUEST} from './userSignUp';
import TUserInfo, {USER_INFO_UPDATE_REQUEST, USER_INFO_CHECK_REQUEST, USER_INFO_CHECK_SUCCESS, USER_INFO_CHECK_FAILURE} from './userInfo';
import IDeleteUser, {DELETE_USER_REQUEST} from './deleteUser';
import IGetLocalData, {GET_LOCAL_DATA} from './getLocalData';
import ISetIsConnected, {SET_ISCONNECTED} from './setIsConnected';

export interface IUserState {
  isConnected: boolean | null;
  userInfo: {
    userCode: string | null;
    partnerCode: string | null;
    selectColor?: 'n1' | 'n2' | 'n3' | 'n4' | 'n5' | 'n6' | 'n7' | 'n8';
    firstDate?: Date;
    isLocalData: Boolean;
  };
  createCount: number;
}

interface IDummy {
  userCode?: string;
  partnerCode?: string;
  selectColor?: 'n1' | 'n2' | 'n3' | 'n4' | 'n5' | 'n6' | 'n7' | 'n8';
  firstDate?: Date;
  isLocalData: Boolean;
}

const dummyData: IDummy = {
  userCode: undefined,
  partnerCode: 'T12345',
  selectColor: 'n1',
  firstDate: new Date(2020, 1, 2),
  isLocalData: true,
};

const userInitialState: IUserState = {
  isConnected: null,
  userInfo: {
    userCode: null,
    partnerCode: null,
    isLocalData: false,
  },
  //  userInfo: dummyData,
  createCount: 0,
};

type UserReducerAction = IUserSignUp | TUserInfo | IDeleteUser | IGetLocalData | ISetIsConnected;

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
