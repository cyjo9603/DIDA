export const ADD_USER_COLOR_REQUEST = 'ADD_USER_COLOR_REQUEST' as const;
export const ADD_USER_COLOR_SUCCESS = 'ADD_USER_COLOR_SUCCESS' as const;
export const ADD_USER_COLOR_FAILURE = 'ADD_USER_COLOR_FAILURE' as const;

export interface AddUserColorRequest {
  type: typeof ADD_USER_COLOR_REQUEST;
  userCode: string;
  colorNum: number;
}

export interface AddUserColorSuccess {
  type: typeof ADD_USER_COLOR_SUCCESS;
  colorNum: number;
}

export interface AddUserColorFailure {
  type: typeof ADD_USER_COLOR_FAILURE;
  error: string;
}

export const addUserColorRequest = (userCode: string, colorNum: number): AddUserColorRequest => ({
  type: ADD_USER_COLOR_REQUEST,
  userCode,
  colorNum,
});

export const addUserColorSuccess = (colorNum: number): AddUserColorSuccess => ({
  type: ADD_USER_COLOR_SUCCESS,
  colorNum,
});

export const addUserColorFailure = (error: string): AddUserColorFailure => ({
  type: ADD_USER_COLOR_FAILURE,
  error,
});
