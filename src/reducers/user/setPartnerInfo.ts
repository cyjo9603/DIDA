export const SET_PARTNER_INFO = 'SET_PARTNER_INFO' as const;

export interface SetPartnerInfo {
  type: typeof SET_PARTNER_INFO;
  partnerCode: string;
  selectColor: number;
}

export const setPartnerInfo = (partnerCode: string, selectColor: number): SetPartnerInfo => ({
  type: SET_PARTNER_INFO,
  partnerCode,
  selectColor,
});
