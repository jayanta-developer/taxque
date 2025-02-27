import React from "react";
import "./style.css";

//images
import pageBg from "../../assets/images/otherPageBg.svg";
import callIcon from "../../assets/images/callIcon.svg";
import messageIcon from "../../assets/images/messageIcon.svg";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import MapComponent from "../../components/Map";

//data
import { AppBtn } from "../../components/Buttons";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}

export default function ContactUs({ setCurrentNav, currentNav }: NavProps) {
  setCurrentNav("");
  return (
    <>
      <div className="contactPage">
        <div className="subPageHeroSection">
          <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
          <img src={pageBg} className="pageBg" />
          <p className="navigateText">
            Home <span>{">"} Contact Us</span>
          </p>
          <p className="hrMainText">Feel Free To Get In Touch</p>
        </div>
        <div className="contactMainSection">
          <div className="contactInfoBox">
            <p className="contactHeader">
              We provide expert support for all your tax and accounting needs —
              contact us!
            </p>
            <p className="contactSubHeader">
              At TaxQue, we're here to make tax and accounting simple,
              efficient, and stress-free for you. Whether you have inquiries
              about GST, Income Tax, ROC Compliance, or business registrations,
              our team of experts is ready to assist you.We're committed to
              helping your business stay compliant and financially healthy.
              Let's work together for your success!
            </p>

            <div className="hrLine"></div>
            <div className="contact_Box">
              <img src={callIcon} alt="" />
              <p>+00 1234567890</p>
            </div>
            <div className="contact_Box">
              <img src={callIcon} alt="" />
              <p>+00 9876543210</p>
            </div>
            <div className="contact_Box">
              <img src={messageIcon} alt="" />
              <p>support@taxque.com</p>
            </div>
            <div className="contact_Box">
              <img src={messageIcon} alt="" />
              <p>info@taxque.com</p>
            </div>
          </div>

          <div className="contactInputBox">
            <p className="contactHeader">We’re Here To Get In Touch</p>
            <div className="inputBox">
              <p className="inputLabel">Full Name *</p>
              <input type="text" />
            </div>
            <div className="inputBox">
              <p className="inputLabel">Phone *</p>
              <input type="text" />
            </div>
            <div className="inputBox">
              <p className="inputLabel">Email Address *</p>
              <input type="text" />
            </div>
            <div className="inputBox">
              <p className="inputLabel">City/Pincode *</p>
              <input type="text" />
            </div>
            <div className="inputBox">
              <p className="inputLabel">State</p>
              <input type="text" />
            </div>
            <div className="inputBox">
              <p className="inputLabel">Message *</p>
              <textarea />
            </div>
            <AppBtn btnText="Submit Now" />
          </div>
        </div>
        <div className="mapOverBox">
          <div className="mapBox">
            <MapComponent
              latitude={19.083854114163447}
              longitude={72.87657759583577}
              description={"Harayana"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
