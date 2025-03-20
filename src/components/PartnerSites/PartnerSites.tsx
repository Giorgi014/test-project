import { Amazon, Saleforce, Google, Urbn, Shopify, Whatsapp, Bmw, Marriott } from "../Hub/Hub";
import "./PartnerSites.scss";


const PartnerSites = () => {
  return (
    <div className="partner-sites-container">
      <div className="partner-sites">
        <div className="upper-sites">
          <div className="site">
            <img src={Amazon} alt="Amazon" />
          </div>
          <div className="site">
            <img src={Saleforce} alt="Saleforce" />
          </div>
        </div>
        <div className="upper-sites">
          <div className="site">
            <img src={Google} alt="Google" />
          </div>
          <div className="site">
            <img src={Urbn} alt="Urbn" />
          </div>
        </div>
        <div className="down-sites">
          <div className="site">
            <img src={Shopify} alt="Shopify" />
          </div>
          <div className="site">
            <img src={Whatsapp} alt="Whatsapp" />
          </div>
        </div>
        <div className="down-sites">
          <div className="site">
            <img src={Bmw} alt="Bmw" />
          </div>
          <div className="site">
            <img src={Marriott} alt="Marriott" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSites;
