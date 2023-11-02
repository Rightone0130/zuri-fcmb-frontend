import { AuthForm } from "../../components/molecules/form/auth";
import { WelcomeLogoInfo } from "../../components/molecules/welcomeLogo";
import { useApiMutation } from "../../hooks/ApiMutation";
import styles from "./styles.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAccessTokenState } from "../../stateManagement";
export const Register = () => {
  const apiMutation = useApiMutation();
  const [_, setToken] = useAccessTokenState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = (data: { email: string; password: string }) => {
    setLoading(true);
    apiMutation("/register", data)
      .then(({ data }) => {
        const _token = data?.data?.token;
        window.localStorage.setItem("FCMB-TOKEN", _token);
        setToken(_token);
        navigate("/verify-bvn");
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
        <AuthForm loadingState={loading} submitHandler={handleSubmit} />
      </div>
    </div>
  );
};
