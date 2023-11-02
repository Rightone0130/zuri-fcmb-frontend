import { useEffect, useState } from "react";
import CardType2 from "../../components/ cards/cardtype2/cardtype2";
import LoanCard from "../../components/ cards/loanCard/loanCard";
import SeeAllBtn from "../../components/buttons/seeAllBtn/seeAllBtn";
import Header from "../../components/header/header";
import "./loanOffer.css";
import { LoanListingTypes } from "../../types";
import { useApiQuery } from "../../hooks/ApiQuery";
import { useMyProfileState } from "../../stateManagement";

function LoanOffer() {
  const [myProfile] = useMyProfileState();
  const [loanOffers, setLoanOffers] = useState<Partial<LoanListingTypes[]>>([]);
  const apiQuriy = useApiQuery();
  useEffect(() => {
    apiQuriy("/loan/lender-loan-offers")
      .then(({ data }) => {
        setLoanOffers(data.data);
      })
      .catch(({ response }) => {
        alert(alert(response.data.error.message));
      });
  }, []);
  return (
    <>
      <Header />
      <div className="loanOfferMainContainer">
        <div className="loancard">
          <CardType2
            cardMainLabel="My Offer"
            cardDescription="Active Loan Disbursed"
            cardAmount={myProfile?.totalLoanDisbursed ? `NGN ${myProfile?.totalLoanDisbursed}.00`: "NGN 00"}
            btn1ImgUrl="https://res.cloudinary.com/dcntmhgwf/image/upload/v1698479755/fcmb/add_circle_owe1ph.png"
            btn1Label="Create Loan Offer"
            btn1Link="/LoanOfferForm/:type"
          />

          <h2>Loan History</h2>

          {loanOffers?.map((loan) => (
            <LoanCard
              cardUserAvaterUrl="https://res.cloudinary.com/dcntmhgwf/image/upload/v1698505739/fcmb/image_4_zqwhz2.png"
              cardMainLabel="Short Term"
              cardDescription="Loan Amount:"
              cardAmount={`NGN ${loan?.amount}.00`}
            />
          ))}

          <SeeAllBtn />
        </div>
      </div>
    </>
  );
}

export default LoanOffer;
