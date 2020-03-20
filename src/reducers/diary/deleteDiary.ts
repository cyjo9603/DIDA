export const DELETE_DIARY_REQUEST = 'DELETE_DIARY_REQUEST' as const;
export const DELETE_DIARY_SUCCESS = 'DELETE_DIARY_SUCCESS' as const;
export const DELETE_DIARY_FAILURE = 'DELETE_DIARY_FAILURE' as const;

export interface DeleteDiaryRequest {
  type: typeof DELETE_DIARY_REQUEST;
}

export interface DeleteDiarySuccess {
  type: typeof DELETE_DIARY_SUCCESS;
}

export interface DeleteDiaryFailure {
  type: typeof DELETE_DIARY_FAILURE;
  error: string;
}

export const deleteDiaryRequest = (): DeleteDiaryRequest => ({
  type: DELETE_DIARY_REQUEST,
});

export const deleteDiarySuccess = (): DeleteDiarySuccess => ({
  type: DELETE_DIARY_SUCCESS,
});

export const deleteDiaryFailure = (error: string): DeleteDiaryFailure => ({
  type: DELETE_DIARY_FAILURE,
  error,
});
