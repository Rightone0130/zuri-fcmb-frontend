import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { LoanOfferPreviewCard } from "../../components/LoanOfferCard";
import { useAccessTokenValue, useLoanOfferState } from "../../stateManagement";
import { useParams } from "react-router-dom";
import { useApiQuery } from "../../hooks/ApiQuery";
import { useEffect } from "react";
import Header from "../../components/header/header";
export const PreviewLoanOffer = () => {
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
  const accessToken = useAccessTokenValue();
  const [loanListing, setLoanOffer] = useLoanOfferState();
  const apiQuery = useApiQuery();
  const { id } = useParams();
  useEffect(() => {
    apiQuery(`/loan/loan-offer?id=${id}`, accessToken)
      .then((res) => {
        setLoanOffer(res.data.data || []);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);
  return (
    <div className={styles.ListingWrapper}>
      <h1 className={styles.LoanOffer}>Preview Offers</h1>

      {Object.keys(loanListing).length !== 0 ? (
        <LoanOfferPreviewCard
          _id={loanListing?._id!}
          lender={loanListing?.lender!}
          duration={loanListing?.duration!}
          status={loanListing?.status!}
          interestRate={loanListing?.interestRate!}
          amount={loanListing?.amount!}
          type={loanListing?.type!}
        />
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
