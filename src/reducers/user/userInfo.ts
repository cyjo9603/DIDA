export const USER_INFO_UPDATE_REQUEST = 'USER_INFO_UPDATE_REQUEST' as const;
export const USER_INFO_CHECK_REQUEST = 'USER_INFO_CHECK_REQUEST' as const;
export const USER_INFO_CHECK_SUCCESS = 'USER_INFO_CHECK_SUCCESS' as const;
export const USER_INFO_CHECK_FAILURE = 'USER_INFO_CHECK_FAILURE' as const;

// user info update
interface IUserInfoUpdate {
  type: typeof USER_INFO_UPDATE_REQUEST;
}

// user info check
interface IUserInfoCheckRequest {
  type: typeof USER_INFO_CHECK_REQUEST;
}
interface IUserInfoCheckSuccess {
  type: typeof USER_INFO_CHECK_SUCCESS;
}
interface IUserInfoCheckFailure {
  type: typeof USER_INFO_CHECK_FAILURE;
}

// user info update
export const userInfoUpdate = () => ({
  type: USER_INFO_UPDATE_REQUEST,
});

// user info check
export const userInfoCheckRequest = () => ({
  type: USER_INFO_CHECK_REQUEST,
});
export const userInfoCheckSuccess = () => ({
  type: USER_INFO_CHECK_REQUEST,
});
export const userInfoCheckFailure = () => ({
  type: USER_INFO_CHECK_REQUEST,
});

type TUserInfo = IUserInfoUpdate | IUserInfoCheckRequest | IUserInfoCheckSuccess | IUserInfoCheckFailure;

export default TUserInfo;
