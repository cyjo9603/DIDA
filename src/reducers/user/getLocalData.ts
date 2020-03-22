export const GET_LOCALDATA_REQUEST = 'GET_LOCALDATA_REQUEST' as const;
export const GET_LOCALDATA_SUCCESS = 'GET_LOCALDATA_SUCCESS' as const;
export const GET_LOCALDATA_FAILURE = 'GET_LOCALDATA_FAILURE' as const;

interface Data {
  userCode: string;
  partnerCode: string;
  selectColor: number;
  firstDate: string;
}

export interface GetLocalDataRequest {
  type: typeof GET_LOCALDATA_REQUEST;
  userCode: string | null;
  partnerCode: string | null;
}

export interface GetLocalDataSuccess {
  type: typeof GET_LOCALDATA_SUCCESS;
  data: Data;
}

export interface GetLocalDataFailure {
  type: typeof GET_LOCALDATA_FAILURE;
  error: string;
  userCode?: string;
}

export const getLocalDataRequest = (
  userCode: string | null,
  partnerCode: string | null,
): GetLocalDataRequest => ({
  type: GET_LOCALDATA_REQUEST,
  userCode,
  partnerCode,
});

export const getLocalDataSuccess = (data: Data): GetLocalDataSuccess => ({
  type: GET_LOCALDATA_SUCCESS,
  data,
});

export const getLocalDataFailure = (error: string, userCode?: string): GetLocalDataFailure => ({
  type: GET_LOCALDATA_FAILURE,
  error,
  userCode,
});
