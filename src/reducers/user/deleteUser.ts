export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST' as const;

interface IDeleteUser {
  type: typeof DELETE_USER_REQUEST;
}

export const deleteUser = () => ({
  type: DELETE_USER_REQUEST,
});

export default IDeleteUser;
