export const GET_LOCAL_DATA = 'GET_LOCAL_DATA' as const;

interface IGetLocalData {
  type: typeof GET_LOCAL_DATA;
  data: {
    userCode: string | null;
    partnerCode: string | null;
  };
}

export const getLoaclData = (data: {userCode: string | null; partnerCode: string | null}) => ({
  type: GET_LOCAL_DATA,
  data,
});

export default IGetLocalData;
