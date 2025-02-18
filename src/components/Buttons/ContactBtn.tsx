import React from "react";
import { FaChevronRight, FaArrowRightLong } from "react-icons/fa6";
import "./ContactBtn.scss";

function ContactBtn() {
  return (
     <div className="btn">
          <button className="contact">
             Contact sales 
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
  )
}

export default ContactBtn