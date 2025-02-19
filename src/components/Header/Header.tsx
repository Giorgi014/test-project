import React from "react";
import Backgound from "../../assets/bg.png";
import Phone from "../../assets/phone.png";
import Graphic from "../../assets/Container.svg";
import Logo from "../../assets/Vector.png";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import { IoSearchOutline, IoChevronDown } from "react-icons/io5";
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
            <li>
              <Link to={"Products"}>Products</Link>
            </li>
            <li>
              <Link to={"Solutions"}>Solutions</Link>
            </li>
            <li>
              <Link to={"Developers"}>Developers</Link>
            </li>
            <li>
              <Link to={"Resources"}>Resources</Link>
            </li>
            <li>
              <Link to={"Pricing"}>Pricing</Link>
            </li>
          </ul>
        </div>
        <div className="btns">
          <Button text={"Contact sales "} background="primary" />
          <Button text={"Sign in"} background="secondary" />
        </div>
      </nav>
      <article className="financial-infrastructure-container">
        <section className="financial-infrastructure">
          <h2>Financial infrastructure for the internet</h2>
          <p>
            Millions of companies of all sizes use Stripe online and in person
            to accept payments, send payouts, automate financial processes, and
            ultimately grow revenue.
          </p>
          <div className="email-address">
            <input type="text" placeholder="Email address" />
            <div className="start-btn">
              <Button text={"Start now"} />
            </div>
            <div className="resp-btn">
              <Button text={"Contact sales "} background="primary" />
            </div>
          </div>
        </section>
        <section className="hero-graphic-container">
          <div className="mobile">
            <img src={Phone} alt="" />
          </div>
          <div className="graphic-container">
            <div className="logo-and-search">
              <div className="logo">
                <img src={Logo} alt="" />
              </div>
              <div className="logo-text">
                <h3>ROCKET RIDES</h3>
                <div className="down-row">
                  <IoChevronDown />
                </div>
              </div>
              <div className="search">
                <input type="text" placeholder="Search" readOnly />
                <div className="search-icon">
                  <IoSearchOutline />
                </div>
              </div>
            </div>
            <div className="graphic">
              <img src={Graphic} alt="" />
            </div>
          </div>
        </section>
      </article>
    </header>
  );
};

export default Header;
