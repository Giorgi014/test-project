import React from "react";
import Button from "../Buttons/Button";
import { Green, Purple, Green1, Purple1 } from "../Hub/Hub";
import "./StripePayments.scss";

const StripePayments: React.FC = () => {
  return (
    <article className="stripe-payments">
      <section className="stripe-payments-content">
        <div className="explore-stripe-payments">
          <h2>Ready to get started?</h2>
          <p>
            Explore Stripe Payments, or create an account instantly and start
            accepting payments. You can also contact us to design a custom
            package for your business.
          </p>
          <div className="btns">
            <Button text={"Start now "} background="third" />
            <Button text={"Contact sales"} background="forth" />
          </div>
        </div>
        <section className="pay-and-integration">
          <div className="pay">
            <div className="pay-icons">
              <img src={Green} alt="" className="green" />
              <img src={Purple} alt="" className="purple" />
            </div>
            <h2>Always know what you pay</h2>
            <p>Integrated per-transaction pricing with no hidden fees.</p>
            <Button text={"Pricing details "} background="forth" />
          </div>
          <div className="integration">
            <div className="integration-icons">
              <img src={Green1} alt="" className="green1" />
              <img src={Purple1} alt="" className="purple1" />
            </div>
            <h2>Start your integration</h2>
            <p>Get up and running with Stripe in as little as 10 minutes.</p>
            <Button text={"API reference "} background="forth" />
          </div>
        </section>
      </section>
      <section className="design-containers">
        <div className="left-container">
          <div className="green-container"></div>
          <div className="purple-container"></div>
        </div>
        <div className="right-container">
          <div className="purple-container"></div>
          <div className="green-container"></div>
        </div>
      </section>
    </article>
  );
};

export default StripePayments;
