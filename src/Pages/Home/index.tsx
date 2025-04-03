import "./style.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//images
import homeBg from "../../assets/images/homeBg.svg";
import rightArrow from "../../assets/images/rightArrow.svg";
import heroImg from "../../assets/images/homeBGframe.svg";
import GRatingImg from "../../assets/images/GRatingImg.svg";
import Reffer from "../../assets/images/refferlIcon.png";
import taxImg from "../../assets/images/taxImg.svg";
import GreenBg from "../../assets/images/GreenBg.svg";
import taxQueImg from "../../assets/images/TaxQueImg.png";
import reviewTemImg from "../../assets//images/reviewTemImg.svg";

//data
import { BlogData } from "../../assets/Data";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import MyCarousel from "../../components/Carousel";
import Subscribe from "../../components/Subscribe";
import BNCarousel from "../../components/CBannerCarosel";
import WCTQCarousel from "../../components/WCTQCarosel";
import PriceSection from "../../components/PriceSection";
import HomeCarousel from "../../components/HomeCarousel";

import { AppBtn } from "../../components/Buttons";
import { GoTop } from "../../components/Tools";

import { FetchService } from "../../store/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { FetchProdcut } from "../../store/productSlice";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}

export default function Home({ setCurrentNav, currentNav }: NavProps) {
  setCurrentNav("Home");
  const Navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { data, status } = useSelector((state: RootState) => state.category);
  const Product = useSelector((state: RootState) => state.product);
  console.log(Product.data);

  useEffect(() => {
    dispatch(FetchService());
    if (data?.length < 0) {
      dispatch(FetchService());
    }
  }, []);
  useEffect(() => {
    dispatch(FetchProdcut());
    if (Product.data?.length < 0) {
      dispatch(FetchProdcut());
    }
  }, []);
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
            <div className="pcBRBox">
              <div className="gRatingBox">
                <img src={GRatingImg} alt="" />
              </div>
              <p
                className="viewPackage refferIconBox"
                onClick={() => {
                  Navigate("/reffer");
                  GoTop();
                }}
              >
                <img src={Reffer} alt="" />
                Refer And Earn
              </p>
            </div>
          </div>

          <div className="hrImgBox">
            <img style={{ width: "100%", height: "100%" }} src={heroImg} />
            <HomeCarousel />
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
          <MyCarousel data={data} cardName="ServicesCard" />
        </div>
        <div className="btnBox">
          <AppBtn
            btnText="More Services"
            width="200px"
            height="50px"
            icon={rightArrow}
            onClick={() => {
              Navigate("/services");
              GoTop();
            }}
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
          <AppBtn
            btnText="Know About Us"
            icon={rightArrow}
            width="225px"
            onClick={() => {
              Navigate("/about");
              GoTop();
            }}
          />
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
      <PriceSection
        priceData={Product?.data[0]?.priceData}
        title={Product?.data[0]?.title}
      />

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
