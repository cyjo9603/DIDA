export const WRITE_DIARY_REQUEST = 'WRITE_DIARY_REQUEST' as const;
export const WRITE_DIARY_SUCCESS = 'WRITE_DIARY_SUCCESS' as const;
export const WRITE_DIARY_FAILURE = 'WRITE_DIARY_FAILURE' as const;

export interface WriteDiaryRequest {
  type: typeof WRITE_DIARY_REQUEST;
}

export interface WriteDiarySuccess {
  type: typeof WRITE_DIARY_SUCCESS;
}

export interface WriteDiaryFailure {
  type: typeof WRITE_DIARY_FAILURE;
  error: string;
}

export const writeDiaryRequest = (): WriteDiaryRequest => ({
  type: WRITE_DIARY_REQUEST,
});

export const writeDiarySuccess = (): WriteDiarySuccess => ({
  type: WRITE_DIARY_SUCCESS,
});

export const writeDiaryFailure = (error: string): WriteDiaryFailure => ({
  type: WRITE_DIARY_FAILURE,
  error,
});
