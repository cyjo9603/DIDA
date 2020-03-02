export const USER_INFO_UPDATE_REQUEST = 'USER_INFO_UPDATE_REQUEST' as const;
export const USER_INFO_CHECK_REQUEST = 'USER_INFO_CHECK_REQUEST' as const;
export const USER_INFO_CHECK_SUCCESS = 'USER_INFO_CHECK_SUCCESS' as const;
export const USER_INFO_CHECK_FAILURE = 'USER_INFO_CHECK_FAILURE' as const;

// user info update
interface IUserInfoUpdate {
  type: typeof USER_INFO_UPDATE_REQUEST;
}

// user info check
export interface IUserInfoCheckRequest {
  type: typeof USER_INFO_CHECK_REQUEST;
  code: string;
}
interface IUserInfoCheckSuccess {
  type: typeof USER_INFO_CHECK_SUCCESS;
  data: {
    check: Boolean;
    code: string;
  };
}
interface IUserInfoCheckFailure {
  type: typeof USER_INFO_CHECK_FAILURE;
}

// user info update
export const userInfoUpdate = () => ({
  type: USER_INFO_UPDATE_REQUEST,
});

// user info check
export const userInfoCheckRequest = (code: string): IUserInfoCheckRequest => ({
  type: USER_INFO_CHECK_REQUEST,
  code,
});
export const userInfoCheckSuccess = (data: {check: Boolean; code: string}) => ({
  type: USER_INFO_CHECK_SUCCESS,
  data,
});
export const userInfoCheckFailure = () => ({
  type: USER_INFO_CHECK_FAILURE,
});

type TUserInfo = IUserInfoUpdate | IUserInfoCheckRequest | IUserInfoCheckSuccess | IUserInfoCheckFailure;

export default TUserInfo;
