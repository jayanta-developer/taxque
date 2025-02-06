import React from "react";
import "./style.css";

//images
import homeBg from "../../assets/images/homeBg.svg";
import rightArrow from "../../assets/images/rightArrow.svg";
import heroImg from "../../assets/images/heroImg.svg";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { AppBtn } from "../../components/Buttons";

export default function Home() {
  return (
    <>
      <div className="heroBox">
        <NavBar />
        <img src={homeBg} className="homeBg" alt="" />
        <div className="heroMainSection">
          <div className="hrTextBox">
            <p className="hrMainText">
              Simplifying Your Tax and Compliance Journey.
            </p>
            <p className="hrSummeryText">
              Our expertise spans across crucial areas like GST, Income Tax, ROC
              Compliance, and Business Registrations, ensuring a seamless
              financial experience for you.
            </p>
            <AppBtn
              btnText="Get An Appointment"
              icon={rightArrow}
              width="254px"
            />
          </div>

          <div className="hrImgBox">
            <img src={heroImg} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
