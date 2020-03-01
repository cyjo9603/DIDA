export const DELETE_DIARY_REQUEST = 'DELETE_DIARY_REQUEST' as const;

interface IDeleteDiary {
  type: typeof DELETE_DIARY_REQUEST;
}

export const DeleteDiary = () => ({
  type: DELETE_DIARY_REQUEST,
});

export default IDeleteDiary;
