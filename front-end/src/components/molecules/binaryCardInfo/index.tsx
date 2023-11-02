import styles from "./styles.module.css";
interface BinaryCardInfoProps {
  name: string;
  value: string | number;
}

export const BinaryCardInfo: React.FC<BinaryCardInfoProps> = ({
  name,
  value,
}) => {
  return (
    <div className={styles.InfoContainter}>
      <h3 className={styles.Info}>{name}</h3>
      <h3>{value}</h3>
    </div>
  );
};
