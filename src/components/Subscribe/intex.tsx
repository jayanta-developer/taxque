import React from "react";
import "./style.css";

//images
import rightArrow from "../../assets/images/rightArrow.svg";
import MobileImg from "../../assets/images/MobileImg.png";
import subBg from "../../assets/images/subBg.svg";

//components
import { AppBtn } from "../Buttons";

export default function Subscribe() {
  return (
    <>
      <div className="subscribeSection">
        <div className="subscribeInSection">
          <img className="subBg" src={subBg} />
          <img className="subMobileImg" src={MobileImg} />
          <p className="subTitle">
            Subscribe to Our Newsletter and Reduce your tax liability up to 26%
          </p>
          <p className="subSummery">
            We are India's most trusted tax filing platform. Our team goes
            through in-depth training to help you plan and minimize your tax
            liability.
          </p>
          <div className="emailInputBox">
            <input type="text" placeholder="Enter Your Email..." />
            <AppBtn
              btnText="Subscribe"
              icon={rightArrow}
              width="166px"
              height="52px"
            />
          </div>
        </div>
      </div>
    </>
  );
}
