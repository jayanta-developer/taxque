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
import { FetchTeam } from "../../store/teamSlice"



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
            <p onClick={() => Navigate("/")} className="navHomeT">Home</p>
            <span className="navSeparator"> &gt; </span>
            <span className="navPageT">About Us</span>
          </p>

          <p className="hrMainText">Our Journey to Simplify Taxes For You</p>
        </div>
        {/* trust patnar */}
        <div className="trustPatnarSection">
          <div className="tpTextBox">
            <p className="tpHeaderText">
              Your Trusted Partner for Expert Income Tax Return Verification
            </p>
            <p className="tpSubHeaderText">
              Are you a business owner or salaried professional looking for tax
              guidance? Taxbuddy is here to offer the best tax filing service in
              India. With experts guiding you for better tax planning, assisted
              ITR filing, Resolving Income tax notices, and filing Tax appeals,
              you cannot go wrong with Taxbuddy. As an Indian taxpayer, you know
              the complexities of tax filing and the consequences of the
              smallest error in your returns. We make sure that you never miss a
              deadline, make a calculation error, or omit an item from your
              returns. Our platform covers diverse needs and facilitates tax
              filing for everyone. A One Person Company is an ideal choice for
              sole entrepreneurs who want to enjoy the benefits of limited
              liability while maintaining full control over their business.{" "}
            </p>
          </div>
          <div className="tpImgBox">
            <img src={trustPatnarImg} />
          </div>
        </div>
        <div className="storyLineSection">
          <p className="sectionHeader">Our Story Line</p>
          <p className="tpSubHeaderText oslSubText">
            We not just take care of our client's taxation needs but are
            committed to our mission of educating the masses about taxes to end
            their fear associated with taxes to make a winning experience for
            all.
          </p>
          <div className="oslMainBox">
            <div className="oslBox oslB1">
              <div className="oslImgBox">
                <img src={oslImg1} alt="" />
              </div>
              <div className="oslTextBox">
                <p className="tpSubHeaderText">
                  A Private Limited Company offers limited liability to its
                  shareholders and is one of the most common and trusted
                  business structures in India. We provide a seamless
                  registration process, handling everything from name approval,
                  document preparation, filing of forms, and obtaining the
                  certificate of incorporation. Our experts ensure that your
                  company is compliant with all legal requirements, including
                  the issuance of PAN and TAN.An LLP combines the benefits of a
                  partnership and a private limited company, providing
                  flexibility while limiting the liabilities of its partners.
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
                  GST registration is mandatory for businesses with a turnover
                  above the prescribed threshold. At TaxQue, we help you
                  navigate the GST registration process, ensuring that you meet
                  all the legal requirements and are able to collect and remit
                  GST effectively. We also provide guidance on GST filing,
                  return submission, and maintaining proper records.If you plan
                  to engage in international trade, obtaining an IEC is
                  mandatory. Our team helps you secure the IEC from the
                  Directorate General of Foreign Trade (DGFT), allowing you to
                  legally export and import goods and services across borders.
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
