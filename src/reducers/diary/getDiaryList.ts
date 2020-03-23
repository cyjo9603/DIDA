export const GET_DIARY_LIST_REQUEST = 'GET_DIARY_LIST_REQUEST' as const;
export const GET_DIARY_LIST_SUCCESS = 'GET_DIARY_LIST_SUCCESS' as const;
export const GET_DIARY_LIST_FAILURE = 'GET_DIARY_LIST_FAILURE' as const;

interface resData {
  contents: string;
  diaryDate: string;
  diaryNo: number;
  score: number;
  userCode: string;
}

export interface GetDiaryListRequest {
  type: typeof GET_DIARY_LIST_REQUEST;
}
export interface GetDiaryListSuccess {
  type: typeof GET_DIARY_LIST_SUCCESS;
  userData: resData[];
  partnerData: resData[];
}
export interface GetDiaryListFailure {
  type: typeof GET_DIARY_LIST_FAILURE;
  error: string;
}

export const getDiaryListRequest = (): GetDiaryListRequest => ({
  type: GET_DIARY_LIST_REQUEST,
});
export const getDiaryListSuccess = (
  userData: resData[],
  partnerData: resData[],
): GetDiaryListSuccess => ({
  type: GET_DIARY_LIST_SUCCESS,
  userData,
  partnerData,
});
export const getDiaryListFailure = (error: string): GetDiaryListFailure => ({
  type: GET_DIARY_LIST_FAILURE,
  error,
});
