import React from "react";
import Send from "../../assets/send.png";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer>
      <section className="footer-container">
        <div className="footer-head-content">
         <div className="footer-head">
         <h2>stripe</h2>
          <span>
            <img src={Send} alt="" /> <p>United States (English)</p>
          </span>
         </div>
          <p className="copyright">© 2024 Stripe, Inc.</p>
        </div>
        <div className="footer-content">
          <ul>
            <li className="products-and-pricing"><Link to="/">Products & Pricing</Link></li>
            <li><Link to="/">Pricing</Link></li>
            <li><Link to="/">Atlas</Link></li>
            <li><Link to="/">Billing</Link></li>
            <li><Link to="/">Capital</Link></li>
            <li><Link to="/">Checkout</Link></li>
            <li><Link to="/">Climate</Link></li>
            <li><Link to="/">Connect</Link></li>
            <li><Link to="/">Data Pipeline</Link></li>
            <li><Link to="/">Elements</Link></li>
            <li><Link to="/">Financial Connections</Link></li>
            <li><Link to="/">Identity</Link></li>
            <li><Link to="/">Invoicing</Link></li>
            <li><Link to="/">Issuing</Link></li>
            <li><Link to="/">Link</Link></li>
            <li><Link to="/">Payments</Link></li>
            <li><Link to="/">Payment Links</Link></li>
            <li><Link to="/">Payouts</Link></li>
            <li><Link to="/">Radar</Link></li>
            <li><Link to="/">Revenue Recognition</Link></li>
            <li><Link to="/">Sigma</Link></li>
            <li><Link to="/">Tax</Link></li>
            <li><Link to="/">Terminal</Link></li>
            <li><Link to="/">Treasury</Link></li>
          </ul>
        </div>
        <div className="footer-content">
          <ul>
            <li className="solution"><Link to="/">Solutions</Link></li>
            <li><Link to="/">Startups</Link></li>
            <li><Link to="/">Enterprises</Link></li>
            <li><Link to="/">SaaS</Link></li>
            <li><Link to="/">Platforms</Link></li>
            <li><Link to="/">Ecommerce</Link></li>
            <li><Link to="/">Marketplaces</Link></li>
            <li><Link to="/">Crypto</Link></li>
            <li><Link to="/">Creator economy</Link></li>
            <li><Link to="/">Embedded finance</Link></li>
            <li><Link to="/">Global businesses</Link></li>
            <li><Link to="/">Finance automation</Link></li>
          </ul>
          <ul className="solutions">
          <li><Link to="/">Integrations & Custom Solutions</Link></li>
            <li><Link to="/">Stripe App Marketplace</Link></li>
            <li><Link to="/">Partner ecosystem</Link></li>
            <li><Link to="/">Professional services</Link></li>
          </ul>
            <ul className="developers">
              <li><Link to="/">Developers</Link></li>
            </ul>
            <ul>
              <li><Link to="/">Documentation</Link></li>
              <li><Link to="/">API reference</Link></li>
              <li><Link to="/">API status</Link></li>
              <li><Link to="/">API changelog</Link></li>
              <li><Link to="/">Stripe Apps</Link></li>
          </ul>
        </div>
        <div className="footer-content">
          <ul>
            <li className="resources"><Link to="/">Resources</Link></li>
            <li><Link to="/">Guides</Link></li>
            <li><Link to="/">Customer stories</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">Annual conference</Link></li>
            <li><Link to="/">Privacy & terms</Link></li>
            <li><Link to="/">Prohibited & restricted businesses</Link></li>
            <li><Link to="/">Licenses</Link></li>
            <li><Link to="/">Sitemap</Link></li>
            <li><Link to="/">Cookie settings</Link></li>
            <li><Link to="/">Your privacy choices</Link></li>
          </ul>
          <ul className="company">
          <li><Link to="/">Company</Link></li>
          </ul>
          <ul className="jobs">
            <li><Link to="/">Jobs</Link></li>
            <li><Link to="/">Newsroom</Link></li>
            <li><Link to="/">Stripe Press</Link></li>
          </ul>
            <ul className="support">
              <li><Link to="/">Support</Link></li>
            </ul>
            <ul className="contact">
              <li><Link to="/">Contact sales</Link></li>
              <li><Link to="/">Support center</Link></li>
              <li><Link to="/">Support plans</Link></li>
              <li><Link to="/">CA residents: +1 888 926 2289</Link></li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
