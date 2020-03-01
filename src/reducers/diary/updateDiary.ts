export const UPDATE_DIARY_REQUEST = 'UPDATE_DIARY_REQUEST' as const;

interface IUpdateDiary {
  type: typeof UPDATE_DIARY_REQUEST;
}

export const updateDiary = () => ({
  type: UPDATE_DIARY_REQUEST,
});

export default IUpdateDiary;
