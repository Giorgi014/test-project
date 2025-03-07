import React from "react";
import Amazon from "../../assets/amazon.png";
import Saleforce from "../../assets/salesforce.png";
import Google from "../../assets/google.png";
import Urbn from "../../assets/urbn.png";
import Shopify from "../../assets/shopify.png";
import Whatsapp from "../../assets/whatsapp.png";
import Bmw from "../../assets/bmw.png";
import Marriott from "../../assets/mariot.png";
import "./PartnerSites.scss";


const PartnerSites:React.FC = () => {
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
