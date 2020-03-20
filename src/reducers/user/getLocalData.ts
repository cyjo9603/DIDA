export const GET_LOCAL_DATA = 'GET_LOCAL_DATA' as const;

export interface GetLocalData {
  type: typeof GET_LOCAL_DATA;
  userCode: string | null;
}

export const getLoaclData = (userCode: string | null): GetLocalData => ({
  type: GET_LOCAL_DATA,
  userCode,
});
