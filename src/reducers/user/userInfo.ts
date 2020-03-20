export const USER_INFO_UPDATE_REQUEST = 'USER_INFO_UPDATE_REQUEST' as const;
export const USER_INFO_CHECK_REQUEST = 'USER_INFO_CHECK_REQUEST' as const;
export const USER_INFO_CHECK_SUCCESS = 'USER_INFO_CHECK_SUCCESS' as const;
export const USER_INFO_CHECK_FAILURE = 'USER_INFO_CHECK_FAILURE' as const;

// user info update
export interface UserInfoUpdate {
  type: typeof USER_INFO_UPDATE_REQUEST;
}

// user info check
export interface UserInfoCheckRequest {
  type: typeof USER_INFO_CHECK_REQUEST;
  code: string;
}
export interface UserInfoCheckSuccess {
  type: typeof USER_INFO_CHECK_SUCCESS;
  data: {
    check: Boolean;
    code: string;
  };
}
export interface UserInfoCheckFailure {
  type: typeof USER_INFO_CHECK_FAILURE;
}

// user info update
export const userInfoUpdate = (): UserInfoUpdate => ({
  type: USER_INFO_UPDATE_REQUEST,
});

// user info check
export const userInfoCheckRequest = (code: string): UserInfoCheckRequest => ({
  type: USER_INFO_CHECK_REQUEST,
  code,
});
export const userInfoCheckSuccess = (data: {
  check: Boolean;
  code: string;
}): UserInfoCheckSuccess => ({
  type: USER_INFO_CHECK_SUCCESS,
  data,
});
export const userInfoCheckFailure = (): UserInfoCheckFailure => ({
  type: USER_INFO_CHECK_FAILURE,
});
