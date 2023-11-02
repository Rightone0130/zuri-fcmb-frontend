import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    < div className="Head">
      <div className="headerMainContainer">
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/home">
          <div className="headerLogo">
            <img
              width={40}
              src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1698451022/fcmb/lENDEX_lOGO_1_qdjtll.png"
            />
            <span>Lendex</span>
          </div>
        </Link>

        <div className="headerTabs">
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/home">
            <div className="tabsContainer">
              <img
                width={23}
                src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1698451020/fcmb/iconoir_home_t1dyew.png"
              />
              <span>Home</span>
            </div>
          </Link>

          <div className="tabsContainer">
            <img
              width={21}
              src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1698451018/fcmb/payments_1_pilxys.png"
            />
            <Link to={"/LoanOffer"}>
              <span>My Offer</span>
            </Link>
          </div>

          <div className="tabsContainer">
            <img
              width={20}
              src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1698451017/fcmb/account_circle_1_u1zp4z.png"
            />
            <span>Profile</span>
          </div>
        </div>

        <div className="userOption  tabsContainer">
          <img
            width={20}
            src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1698451017/fcmb/keyboard_arrow_down_unzwx9.png"
          />
          <Link style={{textDecoration:"none", color:"inherit"}}  to={"/loan-listing"}>
            <span>Borrower</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
