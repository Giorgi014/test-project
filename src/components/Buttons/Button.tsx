import { FaArrowRightLong } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import "./Button.scss";

type ButtonProps = {
  text: string;
  background?: string;
};

const Button = ({ text, background }: ButtonProps) => {
  return (
      <button className={`button ${background}`}>
        {text}
        <div className="rows">
          <div className="row">
            <FaAngleRight />
          </div>
          <div className="hover-row">
            <FaArrowRightLong />
          </div>
        </div>
      </button>
  );
};

export default Button;

