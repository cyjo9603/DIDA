export const WRITE_DIARY_REQUEST = 'WRITE_DIARY_REQUEST' as const;

interface IWriteDiary {
  type: typeof WRITE_DIARY_REQUEST;
}

export const writeDiary = () => ({
  type: WRITE_DIARY_REQUEST,
});

export default IWriteDiary;
