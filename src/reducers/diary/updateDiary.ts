export const UPDATE_DIARY_REQUEST = 'UPDATE_DIARY_REQUEST' as const;
export const UPDATE_DIARY_SUCCESS = 'UPDATE_DIARY_SUCCESS' as const;
export const UPDATE_DIARY_FAILURE = 'UPDATE_DIARY_FAILURE' as const;

export interface UpdateDiaryRequest {
  type: typeof UPDATE_DIARY_REQUEST;
}

export interface UpdateDiarySuccess {
  type: typeof UPDATE_DIARY_SUCCESS;
}

export interface UpdateDiaryFailure {
  type: typeof UPDATE_DIARY_FAILURE;
  error: string;
}

export const updateDiaryRequest = (): UpdateDiaryRequest => ({
  type: UPDATE_DIARY_REQUEST,
});

export const updateDiarySuccess = (): UpdateDiarySuccess => ({
  type: UPDATE_DIARY_SUCCESS,
});

export const updateDiaryFailure = (error: string): UpdateDiaryFailure => ({
  type: UPDATE_DIARY_FAILURE,
  error,
});
