import React from "react";
import Atlas from "../../assets/atlas.png";
import Atlas1 from "../../assets/atlas_home_rocketrides_English_US.svg.png";
import Payments from "../../assets/bluesvg-7.png";
import Payments1 from "../../assets/Figure-2.png";
import Checkout from "../../assets/purple-8.png";
import Checkout1 from "../../assets/Figure-3.png";
import Invoicing from "../../assets/greensvg-9.png";
import Invoicing1 from "../../assets/Figure-4.png";
import Button from "../Buttons/Button";
import "./Growth.scss";

const Growth: React.FC = () => {
  return (
    <article className="growth-container">
      <section className="growth">
        <section className="growth-info">
          <p className="growth-text">Built for growth</p>
          <h2>Take your startup farther, faster</h2>
          <p className="startups-text">
            Startups build on Stripe to launch faster, adapt as they grow, and
            automate workflows to do more with less. Build your own API-based
            integration or use our low- to no-code solutions, which are simple
            enough for easy implementation and powerful enough to scale as fast
            and as far as you need.
          </p>
        </section>
        <section className="growth-carts">
          <div className="left-side">
            <div className="growth-cart">
              <div className="atlas">
                <img src={Atlas1} alt="" />
              </div>
              <div className="growth-content">
                <div className="growth-icons">
                  <img src={Atlas} alt="" />
                  <p>Atlas</p>
                </div>
                <h2>Incorporate your company</h2>
                <p>
                  Form a legal entity, issue stock, and start accepting
                  payments.
                </p>
                <Button text="Learn about Atlas" background="forth" />
              </div>
            </div>
            <div className="growth-cart">
              <div className="checkout">
                <img src={Checkout1} alt="" />
              </div>
              <div className="growth-content">
                <div className="growth-icons">
                  <img src={Checkout} alt="" />
                  <p>Checkout</p>
                </div>
                <h2>Sell to consumers</h2>
                <p>
                  Launch a B2C business with a prebuilt payment page that’s
                  optimized for conversion.
                </p>
                <Button text="Start with Checkout" background="forth" />
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="growth-cart">
              <div className="payment">
                <img src={Payments1} alt="" />
              </div>
              <div className="growth-content">
                <div className="growth-icons">
                  <img src={Payments} alt="" />
                  <p>Payment Links</p>
                </div>
                <h2>Validate your idea</h2>
                <p>
                  Test your product idea by launching payments with little to no
                  code.
                </p>
                <Button text="Try Payment Links" background="forth" />
              </div>
            </div>

            <div className="growth-cart">
              <div className="invoicing">
                <img src={Invoicing1} alt="" />
              </div>
              <div className="growth-content">
                <div className="growth-icons">
                  <img src={Invoicing} alt="" />
                  <p>Invoicing</p>
                </div>
                <h2>Sell to businesses</h2>
                <p>
                  Launch a B2B business and collect one-time or recurring
                  payments from customers.
                </p>
                <Button text="Explore Invoicing" background="forth" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </article>
  );
};

export default Growth;
