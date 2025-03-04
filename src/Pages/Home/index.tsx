import "./style.css";

//images
import homeBg from "../../assets/images/homeBg.svg";
import rightArrow from "../../assets/images/rightArrow.svg";
import heroImg from "../../assets/images/heroImg.svg";
import GRatingImg from "../../assets/images/GRatingImg.svg";

import taxImg from "../../assets/images/taxImg.svg";
import GreenBg from "../../assets/images/GreenBg.svg";
import taxQueImg from "../../assets/images/TaxQueImg.png";
import reviewTemImg from "../../assets//images/reviewTemImg.svg";

//data
import { servicesData, BlogData } from "../../assets/Data";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import MyCarousel from "../../components/Carousel";
import Subscribe from "../../components/Subscribe";
import BNCarousel from "../../components/CBannerCarosel";
import WCTQCarousel from "../../components/WCTQCarosel";
import PriceSection from "../../components/PriceSection";

import { AppBtn } from "../../components/Buttons";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}

export default function Home({ setCurrentNav, currentNav }: NavProps) {
  setCurrentNav("Home");

  return (
    <>
      <div className="heroBox">
        <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
        <img src={homeBg} className="homeBg" alt="" />
        {/*-Hero section --  */}
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
            <div className="gRatingBox">
              <img src={GRatingImg} alt="" />
            </div>
          </div>

          <div className="hrImgBox">
            <img src={heroImg} />
          </div>
        </div>
      </div>
      <div className="ClogoBox">
        <BNCarousel />
      </div>
      {/* -Our services section-- */}
      <div className="serviceSection">
        <p className="sectionHeader">Our Services</p>
        <div className="serviceCardBox">
          <MyCarousel data={servicesData} cardName="ServicesCard" />
        </div>
        <div className="btnBox">
          <AppBtn
            btnText="More Services"
            width="200px"
            height="50px"
            icon={rightArrow}
          />
        </div>
      </div>
      {/* -Tax section */}
      <div className="texSection">
        <img className="greenBg" src={GreenBg} alt="" />
        <div className="taxImgBox">
          <img src={taxImg} />
        </div>
        <div className="taxTextBox">
          <p className="taxTitle">
            Your Trusted Partner for Expert Income Tax Return Verification
          </p>
          <p className="taxSummery">
            Are you a business owner or salaried professional looking for tax
            guidance? Taxbuddy is here to offer the best tax filing service in
            India. With experts guiding you for better tax planning, assisted
            ITR filing, Resolving Income tax notices, and filing Tax appeals,
            you cannot go wrong with Taxbuddy. As an Indian taxpayer, you know
            the complexities of tax filing and the consequences of the smallest
            error in your returns. We make sure that you never miss a deadline,
            make a calculation error, or omit an item from your returns. Our
            platform covers diverse needs and facilitates tax filing for
            everyone.
          </p>
          <AppBtn btnText="Know About Us" icon={rightArrow} width="225px" />
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
      {/* -Price plane Box */}
      <PriceSection />

      {/* Review section */}
      <div className="reviewSection">
        <p className="sectionHeader">Success Stories & Reviews</p>
        <img src={GRatingImg} className="grating" />
        <img src={reviewTemImg} className="gratingTemImg" />
      </div>

      {/* Blog section */}
      <div className="pricePlaneBox BlogSection">
        <p className="sectionHeader">Our Latest News</p>
        <MyCarousel data={BlogData} cardName="BlogCard" />
      </div>
      {/* Subscribe section */}
      <Subscribe />
      <Footer />
    </>
  );
}
