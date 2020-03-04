import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../MainPage';

export const ADD_FIRST_DATE = 'ADD_FIRST_DATE' as const;

interface IAddFirstDate {
  type: typeof ADD_FIRST_DATE;
  userCode: string;
  date: string;
  navigation: StackNavigationProp<StackParamList, 'SelectColor'>;
}

export const addFirstDateRequest = (userCode: string, date: string, navigation: StackNavigationProp<StackParamList, 'SelectColor'>) => ({
  type: ADD_FIRST_DATE,
  userCode,
  date,
  navigation,
});

export default IAddFirstDate;
