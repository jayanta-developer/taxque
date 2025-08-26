import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import "./style.css";


//images
import pageBg from "../../assets/images/otherPageBg.svg";
import MobileImg from "../../assets/images/MobileImg.png";
import subBg from "../../assets/images/subBg.svg";
import rightArrow from "../../assets/images/rightArrow.svg";
import GRatingImg from "../../assets/images/GRatingImg.svg";
import reviewTemImg from "../../assets//images/reviewTemImg.svg";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { AppBtn } from "../../components/Buttons";
import { ProductCard } from "../../components/Tools";

import { FetchService, ServiceDataType } from "../../store/serviceSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { FetchCategory } from "../../store/categorySlice";


interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}

export default function ServiceList({ setCurrentNav, currentNav }: NavProps) {
  const { slug } = useParams();
  const Navigate = useNavigate();
  setCurrentNav("Services");
  const dispatch = useDispatch<AppDispatch>();
  const { data, status } = useSelector((state: RootState) => state.service);
  const category = useSelector((state: RootState) => state.category);

  const currentCategory = category?.data.find((val) => val?.Slug === slug)




  let Product_list: ServiceDataType[] = [];

  if (data.length) {
    Product_list = data.filter((pr) => pr?.category?.id === currentCategory?._id);
  }

  useEffect(() => {
    dispatch(FetchService());
    dispatch(FetchCategory());
    if (data?.length < 0) {
      dispatch(FetchService());
    }
    if (category?.data?.length < 0) {
      dispatch(FetchCategory());
    }
  }, []);

  return (
    <>
      <div className="servicesPage">
        <Helmet>
          <title>{currentCategory?.metaTitle || currentCategory?.title}</title>
          <meta name="description" content={currentCategory?.metaDescription || 'Default description'} />
        </Helmet>

        <div className="subPageHeroSection">
          <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
          <img src={pageBg} className="pageBg" />

          <p className="navigateText">
            <span onClick={() => Navigate("/")} className="navHomeT">Home</span>
            <span className="navSeparator"> &gt; </span>
            <span className="navPageT">{currentCategory?.category}</span>
          </p>



          <p className="hrMainText">Category Related Service</p>
        </div>
        <div className="serviceMainSection">
          {Product_list?.filter(
            (el): el is ServiceDataType => el !== undefined
          ).map((el, i) => (
            <ProductCard key={i} {...el} />
          ))}
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
