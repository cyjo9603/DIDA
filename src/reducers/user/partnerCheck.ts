import {StackNavigationProp} from '@react-navigation/stack';
import {SignStackParamList} from '../../MainPage';

export const PARTNER_CODE_CHECK_REQUEST = 'PARTNER_CODE_CHECK_REQUEST' as const;
export const PARTNER_CODE_CHECK_SUCCESS = 'PARTNER_CODE_CHECK_SUCCESS' as const;
export const PARTNER_CODE_CHECK_FAILURE = 'PARTNER_CODE_CHECK_FAILURE' as const;

export interface PartnerCodeCheckRequest {
  type: typeof PARTNER_CODE_CHECK_REQUEST;
  data: {
    userCode: string;
    partnerCode: string;
    navigation: StackNavigationProp<SignStackParamList, 'CodeExchange'>;
  };
}

export interface PartnerCodeCheckSuccess {
  type: typeof PARTNER_CODE_CHECK_SUCCESS;
  code: string;
  partnerFirstDate: string | null;
}

export interface PartnerCodeCheckFailure {
  type: typeof PARTNER_CODE_CHECK_FAILURE;
}

export const partnerCodeCheckRequest = (
  userCode: string,
  partnerCode: string,
  navigation: StackNavigationProp<SignStackParamList, 'CodeExchange'>,
): PartnerCodeCheckRequest => ({
  type: PARTNER_CODE_CHECK_REQUEST,
  data: {
    userCode,
    partnerCode,
    navigation,
  },
});

export const partnerCodeCheckSuccess = (
  code: string,
  partnerFirstDate: string | null,
): PartnerCodeCheckSuccess => ({
  type: PARTNER_CODE_CHECK_SUCCESS,
  code,
  partnerFirstDate,
});

export const partnerCodeCheckFailure = (): PartnerCodeCheckFailure => ({
  type: PARTNER_CODE_CHECK_FAILURE,
});
