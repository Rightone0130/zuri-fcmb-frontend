import "./buttontype2.css";

interface BtnProps {
  handler: () => void;
    text: string;
    disabled?:boolean
}

const Buttontype2: React.FC<BtnProps> = ({ handler, text, disabled }) => {
  return (
    <>
      <div className="buttonType2Container">
        <button disabled={disabled} type="button" onClick={handler}>{text}</button>
      </div>
    </>
  );
};

export default Buttontype2;
