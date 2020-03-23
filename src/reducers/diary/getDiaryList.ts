import {DiaryContents} from './index';

export const GET_DIARY_LIST_REQUEST = 'GET_DIARY_LIST_REQUEST' as const;
export const GET_DIARY_LIST_SUCCESS = 'GET_DIARY_LIST_SUCCESS' as const;
export const GET_DIARY_LIST_FAILURE = 'GET_DIARY_LIST_FAILURE' as const;

export interface GetDiaryListRequest {
  type: typeof GET_DIARY_LIST_REQUEST;
}
export interface GetDiaryListSuccess {
  type: typeof GET_DIARY_LIST_SUCCESS;
  userData: DiaryContents[];
}
export interface GetDiaryListFailure {
  type: typeof GET_DIARY_LIST_FAILURE;
  error: string;
}

export const getDiaryListRequest = (): GetDiaryListRequest => ({
  type: GET_DIARY_LIST_REQUEST,
});
export const getDiaryListSuccess = (userData: DiaryContents[]): GetDiaryListSuccess => ({
  type: GET_DIARY_LIST_SUCCESS,
  userData,
});
export const getDiaryListFailure = (error: string): GetDiaryListFailure => ({
  type: GET_DIARY_LIST_FAILURE,
  error,
});
