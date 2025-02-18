import React from "react";
import { FaChevronRight, FaArrowRightLong } from "react-icons/fa6";
import "./Button.scss";

type ButtonProps = {
  text: string;
  background?: string;
};

const Button: React.FC<ButtonProps> = ({ text, background }) => {
  return (
      <button className={`button ${background}`}>
        {text}
        <div className="rows">
          <div className="row">
            <FaChevronRight />
          </div>
          <div className="hover-row">
            <FaArrowRightLong />
          </div>
        </div>
      </button>
  );
};

export default Button;

