import { useEffect } from "react";
import Cardtype1 from "../../components/ cards/cardtype1/cardtype1";
import SeeAllBtn from "../../components/buttons/seeAllBtn/seeAllBtn";
import Header from "../../components/header/header";
import TransactionHistory from "../../components/transactionHistory/transactionHistory";
import "./home.css";
import { useApiQuery } from "../../hooks/ApiQuery";
import { useAccessTokenValue, useMyProfileState } from "../../stateManagement";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigiate = useNavigate();
  const apiQuery = useApiQuery();
  const [myProfile, setMyprofile] = useMyProfileState();
  const accessToken = useAccessTokenValue();
  if (!accessToken) navigiate("/login");

  useEffect(() => {
    apiQuery("/user/my-profile", accessToken)
      .then(({ data }) => {
        setMyprofile(data?.data);
      })
      .catch(() => {
        alert("somthing went wrong pls contact customer support");
      });
  }, []);
  return (
    <>
      <Header />
      <div className="homeMainContainer">
        <div>
          <div className="availableBalanceContainer">
            <Cardtype1
              amountLabel="Available balance"
              cardAmount={`NGN ${myProfile?.availableBalance},000.00`}
              btn1Label="Create Loan Offer"
              btn1Link="/LoanOffer"
              btn1ImgUrl="https://res.cloudinary.com/dcntmhgwf/image/upload/v1698479755/fcmb/add_circle_owe1ph.png"
              btn2Label="Fund Wallet"
              btn2ImgUrl="https://res.cloudinary.com/dcntmhgwf/image/upload/v1698479753/fcmb/send_ta49pu.png"
              btn3Label="Withdraw Fund"
              btn3ImgUrl="https://res.cloudinary.com/dcntmhgwf/image/upload/v1698479753/fcmb/send_money_nrbln7.png"
            />
          </div>

          <div className="transactHistory">
            <h2>Transaction History</h2>

            <div className="querryDate">Today</div>
            <div className="historyContainer">
              {myProfile?.transactionHistory?.map((data) => (
                <TransactionHistory
                  key={data._id}
                  trnsBankImgUrl="https://res.cloudinary.com/dcntmhgwf/image/upload/v1698490097/fcmb/Frame_18_wub5l7.png"
                  transUserName={`${data?.lender?.lastname} ${data?.lender?.firstName}`}
                  transactionTime={new Date(data.createdAt).toDateString()}
                  transactAmount={`+ NGN ${data.loanOffer?.amount},245.00`}
                />
              ))}
            </div>

            <SeeAllBtn />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
