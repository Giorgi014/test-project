import React from "react";
import StripePayments from "../StripePayments/StripePayments";
import "./Main.scss";
import Growth from "../Growth/Growth";

const Main: React.FC = () => {
  return (
    <main>
      <Growth />
      <StripePayments />
    </main>
  );
};

export default Main;
