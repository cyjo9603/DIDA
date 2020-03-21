import {StackNavigationProp} from '@react-navigation/stack';
import {SignStackParamList} from '../../MainPage';

export const ADD_FIRST_DATE_REQUEST = 'ADD_FIRST_DATE_REQUEST' as const;
export const ADD_FIRST_DATE_SUCCESS = 'ADD_FIRST_DATE_SUCCESS' as const;
export const ADD_FIRST_DATE_FAILURE = 'ADD_FIRST_DATE_FAILURE' as const;

export interface AddFirstDateRequest {
  type: typeof ADD_FIRST_DATE_REQUEST;
  userCode: string;
  date: string;
  navigation: StackNavigationProp<SignStackParamList, 'SelectColor'>;
}

export interface AddFirstDateSuccess {
  type: typeof ADD_FIRST_DATE_SUCCESS;
  date: string;
}

export interface AddFirstDateFailure {
  type: typeof ADD_FIRST_DATE_FAILURE;
  error: string;
  diff?: boolean;
}

export const addFirstDateRequest = (
  userCode: string,
  date: string,
  navigation: StackNavigationProp<SignStackParamList, 'SelectColor'>,
): AddFirstDateRequest => ({
  type: ADD_FIRST_DATE_REQUEST,
  userCode,
  date,
  navigation,
});

export const addFirstDateSuccess = (date: string): AddFirstDateSuccess => ({
  type: ADD_FIRST_DATE_SUCCESS,
  date,
});

export const addFirstDateFailure = (error: string, diff = false): AddFirstDateFailure => ({
  type: ADD_FIRST_DATE_FAILURE,
  error,
  diff,
});
