import React from "react";
import "./style.css";

//Images
import smPageBG from "../../assets/images/smPageBG.svg";
// import YellowBg from "../../assets/images/YellowBg.svg";
import logCover from "../../assets/images/loginCover.png";
import GoogleIcon from "../../assets/images/google.svg";
import FacbookIcon from "../../assets/images/facebook1.svg";
import LinkdinIcon from "../../assets/images/linkedin1.svg";
import rightArrow from "../../assets/images/rightArrow.svg";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { AppBtn } from "../../components/Buttons";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}

export default function Login({ setCurrentNav, currentNav }: NavProps) {
  setCurrentNav("");
  return (
    <>
      <div className="SMHeroBox">
        <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
        <img src={smPageBG} className="smPageBG" />
      </div>
      <div className="logInSection">
        <div className="logBox">
          <div className="logImgBox">
            <img src={logCover} alt="" />
          </div>
          <div className="logInfoBox">
            <p className="LogHeader">Log In To Continue</p>
            <p className="LogSubHeader">Log In with your existing acoount.</p>
            <div className="logBtnBox">
              <div className="logBtn">
                <img src={GoogleIcon} alt="" />
                <p>Google</p>
              </div>
              <div className="logBtn">
                <img src={FacbookIcon} alt="" />
                <p>Facebook</p>
              </div>
              <div className="logBtn">
                <img src={LinkdinIcon} alt="" />
                <p>Linkedin</p>
              </div>
            </div>
            <div className="orBox">
              <div className="grayLine"></div>
              <p>Or continue with</p>
            </div>
            <div className="mailInputBox">
              <input type="email" name="email" placeholder="Enter your Email" />
            </div>
            <AppBtn
              height="50px"
              width="100%"
              btnText="Log In"
              icon={rightArrow}
            />
          </div>
        </div>
        {/* <img src={YellowBg} className="yellowBg" /> */}
      </div>
      <Footer />
    </>
  );
}
