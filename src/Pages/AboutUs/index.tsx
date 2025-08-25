import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

//images
import pageBg from "../../assets/images/otherPageBg.svg";
import MobileImg from "../../assets/images/MobileImg.png";
import subBg from "../../assets/images/subBg.svg";
import rightArrow from "../../assets/images/rightArrow.svg";
import trustPatnarImg from "../../assets/images/trustPatnarImg.svg";
import oslImg1 from "../../assets/images/oslImg1.png";
import oslImg2 from "../../assets/images/oslImg2.png";
import arrow from "../../assets/images/arrow.png";
import taxQueImg from "../../assets/images/TaxQueImg.png";
import reviewTemImg from "../../assets//images/reviewTemImg.svg";
import GRatingImg from "../../assets/images/GRatingImg.svg";
import YellowBg from "../../assets/images/YellowBg.svg";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { AppBtn } from "../../components/Buttons";
import WCTQCarousel from "../../components/WCTQCarosel";
import MyCarousel from "../../components/Carousel";

//data
// import { memberData } from "../../assets/Data";
interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { FetchTeam } from "../../store/teamSlice";

export default function AboutUs({ setCurrentNav, currentNav }: NavProps) {
  setCurrentNav("About Us");
  const Navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { data, status } = useSelector((state: RootState) => state.team);

  useEffect(() => {
    dispatch(FetchTeam());
    if (data?.length < 0) {
      dispatch(FetchTeam());
    }
  }, []);
  return (
    <>
      <div className="servicesPage aboutPage">
        <div className="subPageHeroSection">
          <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
          <img src={pageBg} className="pageBg" />

          <p className="navigateText">
            <p onClick={() => Navigate("/")} className="navHomeT">
              Home
            </p>
            <span className="navSeparator"> &gt; </span>
            <span className="navPageT">About Us</span>
          </p>

          <p style={{ textAlign: "center" }} className="hrMainText">
            Welcome to TaxQue – India’s Largest
            <br /> Business Services Platform
          </p>
        </div>
        {/* trust patnar */}
        <div className="trustPatnarSection">
          <div className="tpTextBox">
            <p className="tpHeaderText">
              India’s Largest Business Services Platform
            </p>
            <p className="tpSubHeaderText">
              At TaxQue by ARB Fintech LLP, we are dedicated to empowering
              businesses and individuals with seamless, reliable, and innovative
              solutions for their accounting, tax, and compliance needs. Founded
              in 2019 by Md Afzal, TaxQue has grown from a humble proprietorship
              into a trusted name, serving clients across India. With our
              corporate office in Patna, we manage all business activities from
              this vibrant hub, while ARB Fintech LLP, which fully owns the
              TaxQue brand, maintains its registered office in Vaishali, Bihar.
              TaxQue is a registered trademark fully owned by ARB Fintech LLP,
              reflecting our evolution into a leading business services
              platform.
            </p>
          </div>
          <div className="tpImgBox">
            <img src={trustPatnarImg} />
          </div>
        </div>
        <div className="storyLineSection">
          <p className="sectionHeader">Our Story Line</p>
          <p className="aboutSummary">
            TaxQue began in 2019 as a proprietorship, driven by Md Afzal’s
            vision to simplify the complexities of taxation, compliance, and
            business management for entrepreneurs and professionals across
            India. Starting with a small but ambitious team, we quickly gained
            traction by addressing the challenges of navigating regulatory
            landscapes. In 2021, we took a significant step forward by
            incorporating as TaxQue LLP, a legal entity registered in Jalandhar,
            Punjab, solidifying our foundation and expanding our capabilities.
          </p>
          <p className="aboutSummary">
            In 2022, we applied for trademarks under the ownership of ARB
            Fintech LLP, which has its registered office in Vaishali, Bihar. By
            2023, the TaxQue brand became fully owned by ARB Fintech LLP,
            operating as TaxQue by ARB Fintech LLP. This transition strengthened
            our position, enabling us to leverage advanced resources and
            technology to better serve our clients. To streamline operations and
            enhance accessibility, we established our corporate office in Patna,
            where all TaxQue business activities are now managed, serving
            clients nationwide with efficiency and dedication.
          </p>
          <p className="aboutSummary">
            From our origins in Jalandhar to our current base in Patna, TaxQue
            by ARB Fintech LLP has evolved into India’s largest business
            services platform, supporting thousands of clients with unparalleled
            expertise. Whether you’re a startup, a small business, or an
            established enterprise, we are here to simplify your journey and
            fuel your success.
          </p>
          <div className="oslMainBox">
            <div className="oslBox oslB1">
              <div className="oslImgBox">
                <img src={oslImg1} alt="" />
              </div>
              <div className="oslTextBox">
                <p className="tpSubHeaderText">
                  Our mission is to provide comprehensive, accessible, and
                  high-quality accounting, tax, and legal solutions that empower
                  our clients to thrive in a dynamic business environment. We
                  are committed to:
                  <ul style={{ marginTop: "10px" }}>
                    <li>
                      <b>Simplifying Complexity:</b> Streamlining intricate
                      processes like tax filing, compliance, and business
                      registration through intuitive technology and expert
                      guidance.
                    </li>
                    <li>
                      <b>Empowering Clients:</b> Equipping businesses and
                      individuals with tailored solutions and actionable
                      insights to make informed financial decisions.
                    </li>
                    <li>
                      <b>Ensuring Accessibility:</b> Offering 24/7 online
                      services that eliminate the need for physical visits,
                      making professional support available to clients across
                      India, from bustling cities to remote towns.
                    </li>
                    <li>
                      <b>Delivering Excellence:</b> Maintaining the highest
                      standards of professionalism, integrity, and accuracy in
                      every service we provide.
                    </li>
                    <li>
                      <b>Driving Innovation:</b> Continuously enhancing our
                      platform with cutting-edge tools and personalized support
                      to meet the evolving needs of our clients
                    </li>
                    <li>
                      <b>Building Trust:</b> Cultivating long-term relationships
                      by prioritizing transparency, affordability, and customer
                      satisfaction in all our interactions.
                    </li>
                    <p className="aboutSummary">
                      Through these principles, we strive to be the go-to
                      partner for businesses and individuals, helping them
                      navigate challenges and seize opportunities with
                      confidence.
                    </p>
                  </ul>
                </p>
              </div>
            </div>
            <div className="oslLineBox">
              <div className="divLine">
                <img src={arrow} className="oslDlIMg1" />
                <img src={arrow} className="oslDlIMg2" />
                <p className="dlLabelText1">Vision</p>
                <p className="dlLabelText2">Mission</p>
                <img className="grb1" src={YellowBg} />
                <img className="grb2" src={YellowBg} />
              </div>
            </div>

            <div className="oslBox oslB2">
              <div className="oslTextBox">
                <p className="tpSubHeaderText">
                  To become India’s most trusted and forward-thinking business
                  services platform, revolutionizing the way businesses and
                  individuals manage their financial, tax, and compliance
                  obligations. We envision a future where every entrepreneur,
                  small business owner, and professional can access world-class
                  services effortlessly, leveraging technology to eliminate
                  barriers of complexity, cost, and geography. By fostering
                  innovation, transparency, and excellence, we aim to empower
                  our clients to achieve sustainable growth and financial
                  success, setting a benchmark for reliability and customer
                  satisfaction in the industry.
                </p>
              </div>
              <div className="oslImgBox">
                <img src={oslImg2} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* --tax que section -- */}
        <div className="taxQueSection">
          <img src={taxQueImg} className="taxQueImg" />
          <p className="sectionHeader">Why Choose TaxQue?</p>
          <div className="taxQueCardBox">
            <WCTQCarousel />
          </div>
        </div>

        <div className="storyLineSection">
          <p className="sectionHeader">Our Commitment</p>
          <p className="aboutSummary">
            Your success is our priority. At TaxQue by ARB Fintech LLP, we are
            committed to building lasting relationships by delivering
            exceptional service with integrity and professionalism. We aim to
            make your experience effortless and rewarding, whether you’re filing
            taxes, registering a business, or seeking financial advice.
          </p>
          <p className="aboutSummary">
            We take pride in simplifying complex processes, allowing you to
            focus on growing your business and achieving your dreams with
            confidence.
          </p>

          <p className="aboutSummary">
            <b>Get in Touch :</b>
            <br />
            We are excited to be part of your journey and are committed to
            serving you with the passion and excellence that define TaxQue by
            ARB Fintech LLP. Have questions or need assistance? Visit
            www.taxque.in or contact us today to request a quote.
          </p>
        </div>

        <div className="memberSection">
          <img className="grb1" src={YellowBg} />
          <p className="sectionHeader">Leadership & Management</p>
          {/* <AppSlider data={memberData} cardName="memberCard" /> */}
          <MyCarousel data={data} cardName="memberCard" />
          <div className="btnBox">
            <AppBtn btnText="Explore" width="200px" height="40px" />
          </div>
        </div>

        {/* Review section */}
        <div className="reviewSection">
          <p className="sectionHeader">Success Stories & Reviews</p>
          <img src={GRatingImg} className="grating" />
          <img src={reviewTemImg} className="gratingTemImg" />
        </div>

        {/* Subscribe section */}
        <div className="subscribeSection">
          <div className="subscribeInSection">
            <img className="subBg" src={subBg} />
            <img className="subMobileImg" src={MobileImg} />
            <p className="subTitle">
              Subscribe to Our Newsletter and Reduce your tax liability up to
              26%
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
        <Footer />
      </div>
    </>
  );
}
