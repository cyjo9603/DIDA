import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../MainPage';

export const PARTNER_CODE_CHECK_REQUEST = 'PARTNER_CODE_CHECK_REQUEST' as const;
export const PARTNER_CODE_CHECK_SUCCESS = 'PARTNER_CODE_CHECK_SUCCESS' as const;
export const PARTNER_CODE_CHECK_FAILURE = 'PARTNER_CODE_CHECK_FAILURE' as const;

export interface IPartnerCodeCheckRequest {
  type: typeof PARTNER_CODE_CHECK_REQUEST;
  data: {
    userCode: string;
    partnerCode: string;
    navigation: StackNavigationProp<StackParamList, 'CodeExchange'>;
  };
}

interface IPartnerCodeCheckSuccess {
  type: typeof PARTNER_CODE_CHECK_SUCCESS;
  code: string;
}

interface IPartnerCodeCheckFailure {
  type: typeof PARTNER_CODE_CHECK_FAILURE;
}

export const partnerCodeCheckRequest = (userCode: string, partnerCode: string, navigation: StackNavigationProp<StackParamList, 'CodeExchange'>) => ({
  type: PARTNER_CODE_CHECK_REQUEST,
  data: {
    userCode,
    partnerCode,
    navigation,
  },
});

export const partnerCodeCheckSuccess = (code: string) => ({
  type: PARTNER_CODE_CHECK_SUCCESS,
  code,
});

export const partnerCodeCheckFailure = () => ({
  type: PARTNER_CODE_CHECK_FAILURE,
});

type TPartnerCodeCheck = IPartnerCodeCheckRequest | IPartnerCodeCheckSuccess | IPartnerCodeCheckFailure;

export default TPartnerCodeCheck;
