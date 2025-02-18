import React from "react";
import Backgound from "../../assets/bg.png";
import ContactBtn from "../Buttons/ContactBtn";
import Button from "../Buttons/Button";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="bg-image">
        <img src={Backgound} alt="" />
      </div>
      <nav>
        <div className="navigation">
          <h1>stripe</h1>
          <ul>
            <li>Products</li>
            <li>Solutions</li>
            <li>Developers</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="btns">
            <ContactBtn />
            <Button />
        </div>
      </nav>
    </header>
  );
};

export default Header;
