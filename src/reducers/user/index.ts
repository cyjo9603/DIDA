import IUserSignUp, {USER_SIGNUP_REQUEST} from './userSignUp';
import TUserInfo, {USER_INFO_UPDATE_REQUEST, USER_INFO_CHECK_REQUEST, USER_INFO_CHECK_SUCCESS, USER_INFO_CHECK_FAILURE} from './userInfo';
import IDeleteUser, {DELETE_USER_REQUEST} from './deleteUser';

export interface IUserState {
  isConnected: boolean;
  userInfo: {
    userCode: string | null;
    partnerCode: string | null;
    selectColor: 'n1' | 'n2' | 'n3' | 'n4' | 'n5' | 'n6' | 'n7' | 'n8' | null;
    firstDate: Date | null;
  };
}

interface IDummy {
  userCode: string;
  partnerCode: string;
  selectColor: 'n1' | 'n2' | 'n3' | 'n4' | 'n5' | 'n6' | 'n7' | 'n8';
  firstDate: Date;
}

const dummyData: IDummy = {
  userCode: 'T01234',
  partnerCode: 'T12345',
  selectColor: 'n1',
  firstDate: new Date(2020, 1, 2),
};

const userInitialState: IUserState = {
  isConnected: false,
  userInfo: {
    userCode: null,
    partnerCode: null,
    selectColor: null,
    firstDate: null,
  },
};

type UserReducerAction = IUserSignUp | TUserInfo | IDeleteUser;

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
        return {...state};
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

    default:
      return {...state};
  }
};

export default userReducer;
