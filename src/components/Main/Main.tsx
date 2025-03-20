import StripePayments from "../StripePayments/StripePayments";
import "./Main.scss";
import Growth from "../Growth/Growth";

const Main = () => {
  return (
    <main>
      <Growth />
      <StripePayments />
    </main>
  );
};

export default Main;
