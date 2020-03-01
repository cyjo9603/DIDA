export const GET_DIARY_LIST_REQUEST = 'GET_DIARY_LIST_REQUEST' as const;
export const GET_DIARY_LIST_SUCCESS = 'GET_DIARY_LIST_SUCCESS' as const;
export const GET_DIARY_LIST_FAILURE = 'GET_DIARY_LIST_FAILURE' as const;

interface IGetDiaryListRequest {
  type: typeof GET_DIARY_LIST_REQUEST;
}
interface IGetDiaryListSuccess {
  type: typeof GET_DIARY_LIST_SUCCESS;
}
interface IGetDiaryListFailure {
  type: typeof GET_DIARY_LIST_FAILURE;
}

export const getDiaryListRequest = () => ({
  type: GET_DIARY_LIST_REQUEST,
});
export const getDiaryListSuccess = () => ({
  type: GET_DIARY_LIST_SUCCESS,
});
export const getDiaryListFailure = () => ({
  type: GET_DIARY_LIST_FAILURE,
});

type TGetDiaryList = IGetDiaryListRequest | IGetDiaryListSuccess | IGetDiaryListFailure;

export default TGetDiaryList;
