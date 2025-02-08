import "./style.css";

//images
import FooterBg from "../../assets/images/FooterBg.png";
import FooterClogo from "../../assets/images/footerClog.svg";
import hrLine1 from "../../assets/images/hrLine1.svg";
import facebookIcom from "../../assets/images/facebook.svg";
import xIcom from "../../assets/images/xIcom.svg";
import Instagram from "../../assets/images/instagram.svg";

export default function Footer() {
  return (
    <div className="footer">
      <img className="footerBg" src={FooterBg} />
      <img className="footerClog" src={FooterClogo} />
      <img src={hrLine1} className="hrLine1" />
      <div className="footerTextBox">
        <div className="footerItemBox">
          <p className="footerHeaderText">Quick Links</p>
          <p className="footerSubText">Home</p>
          <p className="footerSubText">About Us </p>
          <p className="footerSubText">Pricing</p>
          <p className="footerSubText">Contact Us</p>
        </div>
        <div className="footerItemBox">
          <p className="footerHeaderText">Services</p>
          <p className="footerSubText">GST Compliance and Filing</p>
          <p className="footerSubText">Income Tax Services</p>
          <p className="footerSubText">ROC Compliance</p>
          <p className="footerSubText">Business Registration Services</p>
        </div>
        <div className="footerItemBox">
          <p className="footerHeaderText">Resources</p>
          <p className="footerSubText">Blog</p>
          <p className="footerSubText">Our Team</p>
          <p className="footerSubText">Career</p>
          <p className="footerSubText">Faq</p>
        </div>
        <div className="footerItemBox">
          <p className="footerHeaderText">Usage</p>
          <p className="footerSubText">Terms & Conditions</p>
          <p className="footerSubText">Privacy Policy</p>
          <p className="footerSubText">Refund Policy</p>
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
