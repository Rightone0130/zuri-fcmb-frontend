import "./backBtn.css";
import { useNavigate } from "react-router-dom";

function BackBtn() {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <>
      <div onClick={goBack} className="backBtn">
        <img
          style={{ maxWidth: "1em", marginRight: "0.5em", maxHeight: "1em" }}
          src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1698517806/fcmb/arrow_back_xj50rk.png"
        />
        <span>Back</span>
      </div>
    </>
  );
}

export default BackBtn;
