import "./input1.css";
import { ChangeEvent } from "react";
interface InputProps {
  name: string;
  value: string;
  inputPlaceHolder: string;
  inputLabel: string;
  inputType?: string;
  disabled?:boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Input1: React.FC<InputProps> = ({
  name,
  value,
  inputType,
  inputPlaceHolder,
  onChange,
  inputLabel,
  disabled
}) => {
  return (
    <div>
      <div className="inputLabel">{inputLabel}</div>
      <div className="inputContainer">
        <input
          readOnly={disabled}
          required
          placeholder={inputPlaceHolder}
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input1;
