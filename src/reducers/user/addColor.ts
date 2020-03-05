export const ADD_USER_COLOR = 'ADD_USER_COLOR' as const;

interface IAddUserColor {
  type: typeof ADD_USER_COLOR;
  userCode: string;
  colorId: number;
}

export const addUserColorRequest = (userCode: string, colorId: number): IAddUserColor => ({
  type: ADD_USER_COLOR,
  userCode,
  colorId,
});

export default IAddUserColor;
