import { useState } from "react";
import Button from "../Buttons/Button";
import { Backgound, Phone, Graphic, Logo} from "../Hub/Hub";
import { Link } from "react-router-dom";
import {
  IoSearchOutline,
  IoChevronDown,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import PartnerSites from "../PartnerSites/PartnerSites";
import "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header>
      <div className="bg-image">
        <img src={Backgound} alt="" />
      </div>
      <nav>
        <div className="navigation">
          <h1>stripe</h1>
          <ul className={menuOpen ? "open" : ""}>
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
        <div className="responsive-menu">
          {!menuOpen ? (
            <button className="open" onClick={() => setMenuOpen(true)}>
              <IoMenu />
            </button>
          ) : (
            <button className="close" onClick={() => setMenuOpen(false)}>
              <IoClose />
            </button>
          )}
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
      <PartnerSites />
    </header>
  );
};

export default Header;
