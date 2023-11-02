import { useNavigate } from "react-router-dom";
import { useAccessTokenValue, useLoanOfferState } from "../../stateManagement";
import { Cta } from "../atom/CTA";
import { BinaryCardInfo } from "../molecules/binaryCardInfo";
import { ProfilePhoto } from "../molecules/profilePhoto";
import styles from "./styles.module.css";
import { useApiMutation } from "../../hooks/ApiMutation";
import { useState } from "react";

interface LoanOfferCardProps {
  _id: string;
  handler?: () => void;
  lender: {
    _id: string;
    profilePhotoUrl: string;
  };
  amount: number;
  duration: string; //to be changed to date after mvp
  interestRate: number;
  yieldAmount?: number;
  dueDate?: string;
  type?: "Short Term" | "Long Term";
  status?: "active" | "completed";
}

export const LoanOfferCard: React.FC<LoanOfferCardProps> = (props) => {
  const { _id, lender, status, duration, type, amount, interestRate } = props;
  const [_, setLoanOffer] = useLoanOfferState();
  const navigate = useNavigate();
  const loanHandler = () => {
    setLoanOffer(props);
    navigate(`/preview-loan-offer/${_id}`);
  };
  return (
    <div className={styles.LoadCardContainer}>
      <div className={styles.PhotoStatusWrapper}>
        <ProfilePhoto
          profilePhotoUrl={lender?.profilePhotoUrl}
          loanOfferType={type!}
        />
        <h3 className={styles.Active}>{status}</h3>
      </div>
      <div>
        <BinaryCardInfo name="Loan Amount:" value={amount} />
        <BinaryCardInfo name="Loan Duration:" value={duration} />
        <BinaryCardInfo name="Interest Rate" value={`${interestRate}%`} />
      </div>
      <Cta disabled={false} text="Apply For Loan" handler={loanHandler} />
    </div>
  );
};

export const LoanOfferPreviewCard: React.FC<LoanOfferCardProps> = ({
  _id,
  lender,
  status,
  duration,
  type,
  amount,
  interestRate,
}) => {
  const PaybackAmount =
    amount && interestRate && 300 + amount * (interestRate / 100);
  const navigate = useNavigate();
  const accessToken = useAccessTokenValue();
  const token = window.localStorage.getItem("FCMB-TOKEN") || "";
  const apiMutation = useApiMutation();

  const [loading, setLoading] = useState(false);
  const loanHandler = () => {
    setLoading(true);
    const data = {
      lender: lender,
      loanOffer: _id,
    };
    apiMutation("/loan/apply-for-loan", data, accessToken || token)
      .then(() => {
        setLoading(false);
        navigate(`/home`);
      })
      .catch(({ response }) => {
        setLoading(false);
        alert(response.data.error.message);
      });
  };
  return (
    <div className={styles.LoadCardContainer}>
      <div className={styles.PhotoStatusWrapper}>
        <ProfilePhoto
          profilePhotoUrl={lender?.profilePhotoUrl}
          loanOfferType={type!}
        />
        <h3 className={styles.Active}>{status}</h3>
      </div>
      <div>
        <BinaryCardInfo name="Amount Borrowed:" value={amount} />
        <BinaryCardInfo name="Interest Rate" value={`${interestRate}%`} />
        <BinaryCardInfo name="PayBack Amount" value={PaybackAmount} />
        <BinaryCardInfo name="Loan Duration:" value={duration} />
        <BinaryCardInfo name="Dure Date:" value={duration} />
      </div>
      <Cta disabled={loading} text="Accept Loan offer" handler={loanHandler} />
    </div>
  );
};
