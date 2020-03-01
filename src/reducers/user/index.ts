import IUserSignUp, {USER_SIGNUP_REQUEST} from './userSignUp';
import TUserInfo, {USER_INFO_UPDATE_REQUEST, USER_INFO_CHECK_REQUEST, USER_INFO_CHECK_SUCCESS, USER_INFO_CHECK_FAILURE} from './userInfo';
import IDeleteUser, {DELETE_USER_REQUEST} from './deleteUser';

export interface IUserState {
  isConnected: boolean;
  userInfo: {
    userCode: string;
    partnerCode: string;
    selectColor: 'n1' | 'n2' | 'n3' | 'n4' | 'n5' | 'n6' | 'n7' | 'n8';
    firstDate: Date;
  } | null;
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
  userInfo: dummyData,
};

type UserReducerAction = IUserSignUp | TUserInfo | IDeleteUser;

const userReducer = (state: IUserState = userInitialState, action: UserReducerAction) => {
  switch (action.type) {
    // signup
    case USER_SIGNUP_REQUEST: {
      return {
        ...state,
      };
    }

    //  user info update
    case USER_INFO_UPDATE_REQUEST: {
      return {
        ...state,
      };
    }
    case USER_INFO_CHECK_REQUEST: {
      return {
        ...state,
      };
    }
    case USER_INFO_CHECK_SUCCESS: {
      return {
        ...state,
      };
    }

    // user info check
    case USER_INFO_CHECK_FAILURE: {
      return {
        ...state,
      };
    }

    // delete user info
    case DELETE_USER_REQUEST: {
      return {
        ...state,
      };
    }

    default:
      return {...state};
  }
};

export default userReducer;