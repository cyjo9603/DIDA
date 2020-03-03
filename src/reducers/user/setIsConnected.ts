export const SET_ISCONNECTED = 'SET_ISCONNECTED' as const;

interface ISetIsConnected {
  type: typeof SET_ISCONNECTED;
  check: Boolean;
}

export const setIsConnected = (check: Boolean) => ({
  type: SET_ISCONNECTED,
  check,
});

export default ISetIsConnected;
