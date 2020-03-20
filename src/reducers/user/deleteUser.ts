export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST' as const;

export interface DeleteUser {
  type: typeof DELETE_USER_REQUEST;
}

export const deleteUser = (): DeleteUser => ({
  type: DELETE_USER_REQUEST,
});
