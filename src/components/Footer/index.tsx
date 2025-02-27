import "./style.css";
import { useNavigate } from "react-router-dom";

//images
import FooterBg from "../../assets/images/FooterBg.png";
import FooterClogo from "../../assets/images/footerClog.svg";
import hrLine1 from "../../assets/images/hrLine1.svg";
import facebookIcom from "../../assets/images/facebook.svg";
import xIcom from "../../assets/images/xIcom.svg";
import Instagram from "../../assets/images/instagram.svg";

import { GoTop } from "../Tools";

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (url: string) => {
    navigate(url);
    GoTop();
  };

  return (
    <div className="footer">
      <img className="footerBg" src={FooterBg} />
      <img
        className="footerClog"
        src={FooterClogo}
        onClick={() => handleNavigation("/")}
      />
      <img src={hrLine1} className="hrLine1" />
      <div className="footerTextBox">
        <div className="footerItemBox">
          <p className="footerHeaderText">Quick Links</p>
          <p className="footerSubText" onClick={() => handleNavigation("/")}>
            Home
          </p>
          <p
            className="footerSubText"
            onClick={() => handleNavigation("/about")}
          >
            About Us{" "}
          </p>
          <p className="footerSubText">Pricing</p>
          <p
            className="footerSubText"
            onClick={() => handleNavigation("/contact-us")}
          >
            Contact Us
          </p>
        </div>
        <div className="footerItemBox">
          <p
            className="footerHeaderText"
            onClick={() => handleNavigation("/services")}
          >
            Services
          </p>
          <p className="footerSubText">GST Compliance and Filing</p>
          <p className="footerSubText">Income Tax Services</p>
          <p className="footerSubText">ROC Compliance</p>
          <p className="footerSubText">Business Registration Services</p>
        </div>
        <div className="footerItemBox">
          <p className="footerHeaderText">Resources</p>
          <p
            className="footerSubText"
            onClick={() => handleNavigation("/blog")}
          >
            Blog
          </p>
          <p
            className="footerSubText"
            onClick={() => handleNavigation("/team")}
          >
            Our Team
          </p>
          <p
            className="footerSubText"
            onClick={() => handleNavigation("/careers")}
          >
            Career
          </p>
          <p className="footerSubText" onClick={() => handleNavigation("/f&q")}>
            Faq
          </p>
        </div>
        <div className="footerItemBox">
          <p className="footerHeaderText">Usage</p>
          <p
            className="footerSubText"
            onClick={() => handleNavigation("/terms-of-use")}
          >
            Terms & Conditions
          </p>
          <p
            className="footerSubText"
            onClick={() => handleNavigation("/privacy-policy")}
          >
            Privacy Policy
          </p>
          <p
            className="footerSubText"
            onClick={() => handleNavigation("/refund-policy")}
          >
            Refund Policy
          </p>
        </div>
      </div>
      <div className="mediaBox">
        <img src={hrLine1} className="hrLine" />
        <div className="mediaIcomBox">
          <img src={facebookIcom} />
          <img src={xIcom} />
          <img src={Instagram} />
        </div>
      </div>
      <p className="copyRithText">
        Copyright © 2025 TaxQue. All rights reserved.
      </p>
    </div>
  );
}
