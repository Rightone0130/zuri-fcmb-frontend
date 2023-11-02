import { ChangeEvent, useState } from "react";
import BackBtn from "../../buttons/backBtn/backBtn";
import Input1 from "../../input/input1";
import "./form1.css";
import { useApiMutation } from "../../../hooks/ApiMutation";
import { useNavigate } from "react-router-dom";
import { Cta } from "../../atom/CTA";
type formType = {
  amount: any; //change to inter wen sending
  duration: string;
  interestRate: any; //change to inter wen sending
  type: string;
  yieldAmount?: number;
};
function Form1() {
  const [formValues, setFormValues] = useState<formType>({
    amount: "", //change to inter wen sending
    duration: "",
    interestRate: "", //change to inter wen sending
    type: "",
  });

  const [yields, setYeilds] = useState("0");
  const [loading, setLoading] = useState(false);
  const apiMutation = useApiMutation();
  const navigate = useNavigate();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if (name === "amount" || name === "interestRate") {
      let _value = value;
      _value = value.replace(/[^0-9]/g, "");
      setFormValues({ ...formValues, [name]: _value });
    } else setFormValues({ ...formValues, [name]: value });

    if (name === "interestRate" && formValues?.amount) {
      const amount = parseInt(formValues.amount);
      const interest = parseInt(formValues.interestRate);
      const yelding = amount + amount * (interest / 100);
      setYeilds(String(yelding));
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    formValues.amount = parseInt(formValues.amount);
    formValues.interestRate = parseInt(formValues.interestRate);
    formValues.yieldAmount = parseInt(yields);
    apiMutation("/loan/create-loan", formValues)
      .then(() => {
        navigate("/LoanOffer");
      })
      .catch(({ response }) => {
        setLoading(false);
        alert(response.data.error.message);
      });
  };

  return (
    <>
      <div className="form1MainContainer">
        <div className="backButtonContainer">
          <BackBtn />
        </div>

        <div className="form1Content">
          <div className="formTitle">Create Loan Offer</div>
          <form>
            <Input1
              name="type"
              value={formValues.type}
              onChange={handleChange}
              inputLabel="Name Loan"
              inputPlaceHolder="Name Loan"
            />
            <Input1
              name="amount"
              value={formValues.amount}
              onChange={handleChange}
              inputLabel="Loan Amount"
              inputPlaceHolder="Loan Amount"
            />
            <Input1
              name="duration"
              value={formValues.duration}
              onChange={handleChange}
              inputLabel="Duration"
              inputPlaceHolder="Set Loan Duration"
            />
            <Input1
              name="interestRate"
              value={formValues.interestRate}
              onChange={handleChange}
              inputLabel="Interest Rate"
              inputPlaceHolder="Set Interest"
            />

            <Input1
              name="yieldAmount"
              value={yields}
              inputLabel="Loan Yield Amount"
              inputPlaceHolder="NGN 0.00"
              disabled={true}
            />

            <Cta
              disabled={loading}
              text="send"
              handler={handleSubmit}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Form1;
