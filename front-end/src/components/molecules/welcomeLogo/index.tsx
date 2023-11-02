import logo from "../../../assets/lENDEX lOGO.png";
import styles from "./styles.module.css";

interface WelcomeLogoInfoProps {
  text: string;
}
export const WelcomeLogoInfo: React.FC<WelcomeLogoInfoProps> = ({ text }) => {
  return (
    <div className={styles.MainWrapper}>
      <div className={styles.LogoContainer}>
        <img className={styles.LogoImg} src={logo} alt="business logo" />
      </div>
      <h2>{text}</h2>
    </div>
  );
};
