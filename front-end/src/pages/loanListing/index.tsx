import { LoanOfferCard } from "../../components/LoanOfferCard";
import styles from "./loanListing.module.css";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useApiQuery } from "../../hooks/ApiQuery";
import {
  useAccessTokenValue,
  useLoanListingState,
} from "../../stateManagement";
import Header from "../../components/header/header";

export const LoanListing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className={styles.Container}>
        <h4 onClick={() => navigate(-1)} className={styles.BackBtn}>
          BACK
        </h4>
        <Wrapper />
      </div>
    </div>
  );
};

const Wrapper = () => {
  const apiQuery = useApiQuery();
  const accessToken = useAccessTokenValue();
  const [loanListing, setLoanListing] = useLoanListingState();

  useEffect(() => {
    const token = window.localStorage.getItem("FCMB-TOKEN") || "";
    apiQuery("/loan/loan-offer-listing", accessToken || token)
      .then((res) => {
        setLoanListing(res.data.data || []);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <div className={styles.ListingWrapper}>
      <h1 className={styles.LoanOffer}>Load Offers</h1>
      {loanListing.length !== 0 ? (
        loanListing.map((loanListing) => (
          <LoanOfferCard
            _id={loanListing?._id!}
            lender={loanListing?.lender!}
            duration={loanListing?.duration!}
            status={loanListing?.status!}
            interestRate={loanListing?.interestRate!}
            amount={loanListing?.amount!}
            type={loanListing?.type!}
          />
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
