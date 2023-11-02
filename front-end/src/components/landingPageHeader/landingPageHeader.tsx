import './landingPageHeader.css'
import { Link } from 'react-router-dom';






function LandingPageHeader (){
    return (
        < div className="lndPgHead">
          <div className="lndPgheaderMainContainer">
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/home">
              <div className="lndPgheaderLogo">
                <img
                  width={40}
                  src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1698451022/fcmb/lENDEX_lOGO_1_qdjtll.png"
                />
                <span>Lendex</span>
              </div>
            </Link>
    
            <div className="lndPgheaderTabs">
              <Link style={{ textDecoration: "none", color: "inherit" }} to="/home">
                <div className="lndPgtabsContainer">
                 
                  <span>Lend</span>
                </div>
              </Link>
    
              <div className="lndPgtabsContainer">
               
                <Link to={"/LoanOffer"}>
                  <span>Borrow</span>
                </Link>
              </div>
    
              <div className="lndPgtabsContainer">
               
                <span>FAQs</span>
              </div>
              <div className="lndPgtabsContainer">
               
                <span>Resources</span>
              </div>
              <div className="lndPgtabsContainer">
               
                <span>About Us</span>
              </div>
            </div>
    
            <div className="lndPguserOption  lndPgtabsContainer">
            
              <Link style={{textDecoration:"none", color:"inherit"}}  to={"/login"}>
                <span className='lndPgsignInBtn'>Sign in</span>
              </Link>
              <Link style={{textDecoration:"none", color:"inherit"}}  to={"/register"}>
                <span className='lndPgsignUpBtn'>Create account</span>
              </Link>
            </div>
          </div>
        </div>
      );
}



export default LandingPageHeader;