import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
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

