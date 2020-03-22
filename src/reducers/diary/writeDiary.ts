export const WRITE_DIARY_REQUEST = 'WRITE_DIARY_REQUEST' as const;
export const WRITE_DIARY_SUCCESS = 'WRITE_DIARY_SUCCESS' as const;
export const WRITE_DIARY_FAILURE = 'WRITE_DIARY_FAILURE' as const;

interface reqData {
  score: number;
  contents: string;
  diaryDate: string;
}

export interface WriteDiaryRequest {
  type: typeof WRITE_DIARY_REQUEST;
  data: reqData;
}

export interface WriteDiarySuccess {
  type: typeof WRITE_DIARY_SUCCESS;
}

export interface WriteDiaryFailure {
  type: typeof WRITE_DIARY_FAILURE;
  error: string;
}

export const writeDiaryRequest = (data: reqData): WriteDiaryRequest => ({
  type: WRITE_DIARY_REQUEST,
  data,
});

export const writeDiarySuccess = (): WriteDiarySuccess => ({
  type: WRITE_DIARY_SUCCESS,
});

export const writeDiaryFailure = (error: string): WriteDiaryFailure => ({
  type: WRITE_DIARY_FAILURE,
  error,
});
