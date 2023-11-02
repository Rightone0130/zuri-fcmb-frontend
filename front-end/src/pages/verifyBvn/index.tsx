import { Input } from "../../components/atom/input";
import { WelcomeLogoInfo } from "../../components/molecules/welcomeLogo";
import styles from "./styles.module.css";

import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useApiQuery } from "../../hooks/ApiQuery";
import { Cta } from "../../components/atom/CTA";

export const VerifyBvn = () => {
  const ApiQuery = useApiQuery();
  const [loading, setLoading] = useState(false);
  const [bvn, setBvn] = useState("");

  const navigate = useNavigate();
  const handleSubmit = () => {
    const token = window.localStorage.getItem("FCMB-TOKEN")
    setLoading(true);
    ApiQuery(`/user/verify-bvn?bvn=${bvn}`, token!)
      .then(() => {
        navigate("/home");
      })
      .catch(({ response }) => {
        setLoading(false);
        alert(response.data.error.message);
      });
  };
  return (
    <div className={styles.RegisterWrapper}>
      <div className={styles.FormContainer}>
        <WelcomeLogoInfo text={"create your account"} />
        <div>
          <Input
            name="bvn"
            value={bvn}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setBvn(e.target.value)
            }
            placeholder="enter your 11 digit bvn number"
          />
          <Cta handler={handleSubmit} disabled={loading} text="send" />
        </div>
      </div>
    </div>
  );
};
