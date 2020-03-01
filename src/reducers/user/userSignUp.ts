export const USER_SIGNUP_REQUEST = 'USER_SIGNUP_REQUEST' as const;

interface IUserSignUp {
  type: typeof USER_SIGNUP_REQUEST;
}

export const userSignUp = () => ({
  type: USER_SIGNUP_REQUEST,
});

export default IUserSignUp;
