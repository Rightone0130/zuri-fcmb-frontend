import { atom, useRecoilValue, useRecoilState } from "recoil";

import { v4 as uuidv4 } from "uuid";
import { LoanListingTypes, MyProfileTypes } from "../types";

const accessToken = atom({
  key: uuidv4(),
  default:
    "",
});

export const useAccessTokenValue = () => useRecoilValue(accessToken);
export const useAccessTokenState = () => useRecoilState(accessToken);
type LoanListing = Partial<LoanListingTypes[]>;
const loaListing = atom<LoanListing>({
  key: uuidv4(),
  default: [],
});

const loanOffer = atom<Partial<LoanListingTypes>>({
  key: uuidv4(),
  default: {},
});

const myProfile = atom<Partial<MyProfileTypes>>({
  key: uuidv4(),
  default: {},
});

export const useMyProfileState = () =>
  useRecoilState<Partial<MyProfileTypes>>(myProfile);

export const useLoanOfferValue = () => useRecoilValue(loanOffer);
export const useLoanOfferState = () => useRecoilState(loanOffer);

export const useLoanListingState = () =>
  useRecoilState<LoanListing>(loaListing);
export const useLoanListingValue = () =>
  useRecoilValue<LoanListing>(loaListing);
