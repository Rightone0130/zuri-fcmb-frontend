import styles from "./styles.module.css";

interface CtaProps {
  text: string;
  disabled?: boolean;
  handler: () => void;
}
export const Cta: React.FC<CtaProps> = ({ handler, text, disabled }) => {

  const navigator = () => {
    handler()
  }
  return (
    <button
      className={
        disabled ? `${styles.CTA} ${styles["Cta-Disabled"]}` : `${styles.CTA}`
      }
      disabled={disabled}
      type="button"
      onClick={navigator}
    >
      {text}
    </button>
  );
};
