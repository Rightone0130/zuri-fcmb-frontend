import "./App.css";
import { useAccessTokenState } from "./stateManagement";
//import LandingPage from "./pages/landingPage/landingPage";
import HeroSection from "./components/heroSection";

function App() {
  const [accessToken, setAccessToken] = useAccessTokenState();
  const token = window.localStorage.getItem("FCMB-TOKEN") || "";
  if (!accessToken) setAccessToken(token);
  return (
    <>

    <div>
        {/* <LandingPage/> */}
        <HeroSection />

    </div>

    </>
  );
}

export default App;
