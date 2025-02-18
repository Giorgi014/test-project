import React from "react";
import { FaChevronRight, FaArrowRightLong } from "react-icons/fa6";
import "./Button.scss";

function Button() {
  return (
    <div className="btn">
      <button className="sign-in">
        Sign in 
        <div className="rows">
          <div className="row">
            <FaChevronRight />
          </div>
          <div className="hover-row">
            <FaArrowRightLong />
          </div>
        </div>
      </button>
    </div>
  );
}

export default Button;
