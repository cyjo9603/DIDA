export const USER_SIGNUP_REQUEST = 'USER_SIGNUP_REQUEST' as const;

export interface UserSignUp {
  type: typeof USER_SIGNUP_REQUEST;
  data: {
    userCode: string;
    deviceToken: string;
    deviceInfo: 'android';
  };
}

export const userSignUp = (userCode: string, deviceToken: string): UserSignUp => ({
  type: USER_SIGNUP_REQUEST,
  data: {
    userCode,
    deviceToken,
    deviceInfo: 'android',
  },
});
