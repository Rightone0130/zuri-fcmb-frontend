import { useState, ChangeEvent } from "react";
import { Input } from "../../atom/input";
import { Cta } from "../../atom/CTA";

interface AuthFormProps {
  loadingState: boolean;
  submitHandler: (data: any) => void;
}
export const AuthForm: React.FC<AuthFormProps> = ({ submitHandler, loadingState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    submitHandler({ email, password });
  };
  return (
    <form>
      <Input
        name="email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        placeholder="enter email"
      />
      <Input
        name="password"
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        placeholder="enter password"
      />
      <Cta text={"sign up"} handler={handleSubmit} disabled={loadingState} />
    </form>
  );
};
