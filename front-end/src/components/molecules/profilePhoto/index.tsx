import styles from "./styles.module.css";
interface ProfilePhotoProps {
  profilePhotoUrl: string;
  loanOfferType: string;
}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({
  loanOfferType,
  profilePhotoUrl,
}) => {
  return (
    <div className={styles.Container}>
      <div className={styles.PhotoWrapper}>
        <img className={styles.Image} src={profilePhotoUrl} />
      </div>
      <h2>{loanOfferType}</h2>
    </div>
  );
};
