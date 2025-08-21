import "./style.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleReviewsWidget from "google-reviews-widget"

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
import { FetchBlog } from "../../store/blogSlice";
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
  const { data } = useSelector((state: RootState) => state.category);
  const blogData = useSelector((state: RootState) => state.blog);
  const Product = useSelector((state: RootState) => state.product);
  const [currentDisplayPrice, setCurrentDisplayPrice] = useState<string>()



  //Get Display Price Plane
  const displyaPricePlane = Product.data.find((val) => val.display === currentDisplayPrice)
  useEffect(() => {
    const currentDate = new Date()
    if (Product.data.length) {
      const dateListObject = Product.data
        .filter(pd => pd?.display)
        .map(pd => new Date(pd.display as string));
      const pastDates = dateListObject.filter(olddate => olddate <= currentDate);

      const latestDate = pastDates.reduce((latest, dt) => {
        return dt > latest ? dt : latest;
      }, new Date(0));

      setCurrentDisplayPrice(latestDate.toISOString());
    }
  })
  console.log(displyaPricePlane);



  useEffect(() => {
    dispatch(FetchService());
    if (data?.length < 0) {
      dispatch(FetchService());
    }
  }, []);
  useEffect(() => {
    dispatch(FetchProdcut());
    if (Product?.data?.length < 0) {
      dispatch(FetchProdcut());
    }
  }, []);
  useEffect(() => {
    dispatch(FetchBlog());
    if (blogData?.data?.length < 0) {
      dispatch(FetchBlog());
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
              Welcome to TaxQue
              Simplifying Taxes for You!
            </p>
            <p className="hrSummeryText">
              Simplifying finances since 2019, TaxQue is the trusted choice for businesses and individuals in need of expert taxation and compliance services. Our mission is to deliver solutions that are accurate, timely, and hassle-free.
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

          {/* <GoogleReviewsWidget instanceId="WS9xqXio4p5JMvdWAftD" /> */}


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
            Our Commitment
          </p>
          <p className="taxSummery">
            Your success is our priority. At TaxQue by ARB Fintech LLP, we are committed to building lasting relationships by delivering exceptional service with integrity and professionalism. We aim to make your experience effortless and rewarding, whether you’re filing taxes, registering a business, or seeking financial advice.
          </p>
          <p className="taxSummery">
            We take pride in simplifying complex processes, allowing you to focus on growing your business and achieving your dreams with confidence.
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
      <PriceSection product={displyaPricePlane} />

      {/* Review section */}
      <div className="reviewSection">
        <p className="sectionHeader">Success Stories & Reviews</p>
        <img src={GRatingImg} className="grating" />
        <img src={reviewTemImg} className="gratingTemImg" />
      </div>

      {/* Blog section */}
      <div className="pricePlaneBox BlogSection">
        <p className="sectionHeader">Our Latest News</p>
        <MyCarousel data={blogData?.data} cardName="BlogCard" />
      </div>
      {/* Subscribe section */}
      <Subscribe />
      <Footer />
    </>
  );
}
