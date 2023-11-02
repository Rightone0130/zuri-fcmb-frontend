import {ChangeEvent} from "react"
import styles from "./styles.module.css";
interface InputProps {
  name: string;
  value: string;
  placeholder: string;
  onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <input
      className={styles.InputC}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
