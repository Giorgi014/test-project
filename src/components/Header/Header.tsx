import React from "react";
import Backgound from "../../assets/bg.png";
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
          <Button text={"Contact sales "} background="primary" />
          <Button text={"Sign in"} background="secondary" />
        </div>
      </nav>
      <div className="financial-infrastructure">
        <h2>Financial infrastructure for the internet</h2>
        <p>
          Millions of companies of all sizes use Stripe online and in person to
          accept payments, send payouts, automate financial processes, and
          ultimately grow revenue.
        </p>
        <div className="email-address">
          <input type="text" placeholder="Email address"/>
          <Button text={"Start now"}/>
         <div className="resp-btn">
          <Button text={"Contact sales "} background="primary"/>
         </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
