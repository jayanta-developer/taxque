import React from "react";
import "./style.css";

//image
import pageBg from "../../assets/images/otherPageBg.svg";
import shareIcon1 from "../../assets/images/shareIcon1.svg";
import shareIcon2 from "../../assets/images/shareIcon2.svg";
import shareIcon3 from "../../assets/images/shareIcon3.svg";
import hiwBg from "../../assets/images/hiwBg.svg";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { AppBtn } from "../../components/Buttons";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}
export default function Reffer({ setCurrentNav, currentNav }: NavProps) {
  setCurrentNav("");
  return (
    <>
      <div className="refferPage">
        <div className="subPageHeroSection">
          <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
          <img src={pageBg} className="pageBg" />
          <p className="navigateText">
            Home <span>{">"} Reffer</span>
          </p>
          <p className="hrMainText">Refer a Friend & Get Rewarded</p>
        </div>
        <div className="refferMainSection">
          <div className="refferMainInputBox">
            <div className="reverInputBox">
              <p className="sectionHeader">
                Join Our Exciting Referral Program Today!
              </p>
              <p className="tpSubHeaderText">
                We invite you to refer your friends to Vakilsearch's 350+
                services, and get an Rs 250 as a token of gratitude for every
                successful referral.
              </p>

              <div className="contactBox">
                <p className="contactHeader">
                  Enter your basic details to generate your unique referral link
                </p>
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
                <AppBtn btnText="Submit Now" />
              </div>
            </div>
            <div className="reverShearBox">
              <p className="refShearHeader">Three Easy Steps</p>

              <div className="shareBox">
                <img src={shareIcon1} />
                <div className="shTextB">
                  <p>Share Link</p>
                  <samp>
                    Whenever someone purchase from your referral link, we will
                    notify you.
                  </samp>
                </div>
              </div>

              <div className="shareBox">
                <img src={shareIcon2} />
                <div className="shTextB">
                  <p>Refer a Friend</p>
                  <samp>
                    Refer a friend and they'll get 20% off their first purchase.
                  </samp>
                </div>
              </div>

              <div className="shareBox">
                <img src={shareIcon3} />
                <div className="shTextB">
                  <p>Earn Rewards</p>
                  <samp>
                    Get an Amazon voucher or Rs. 250/- for every successful
                    referral. Ex: earn Rs. 2500/- for 10 successful referrals
                  </samp>
                </div>
              </div>
            </div>
          </div>

          <p className="sectionHeader hiwHeader">How it works</p>
          <div className="hiwBox">
            <img src={hiwBg} />
            <div className="hiwBox1">
              <samp>You get</samp>
              <p>₹250</p>
              <span>
                Refer your friends to Vakilsearch and earn rewards when they
                purchase any of our services through your link.
              </span>
            </div>
            <div className="vrLine"></div>
            <div className="hiwBox1">
              <samp>Your friend will get</samp>
              <p>20%</p>
              <span>
                Your friend will get 20% discount on there 1st purchase.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
