import React, { useState, useEffect } from "react";
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

import { FetchProdcut, ProductDataType } from "../../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}

export default function ProductList({ setCurrentNav, currentNav }: NavProps) {
  const selectedCategoryId = localStorage.getItem("selectedCategory");
  setCurrentNav("Services");
  const dispatch = useDispatch<AppDispatch>();
  const { data, status } = useSelector((state: RootState) => state.product);

  let Product_list: ProductDataType[] = [];

  if (data.length) {
    Product_list = data.filter((pr) => pr?.category?.id === selectedCategoryId);
  }

  useEffect(() => {
    dispatch(FetchProdcut());
    if (data?.length < 0) {
      dispatch(FetchProdcut());
    }
  }, []);

  return (
    <>
      <div className="servicesPage">
        <div className="subPageHeroSection">
          <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
          <img src={pageBg} className="pageBg" />
          <p className="navigateText">
            Home <span>{">"} Services</span>
          </p>
          <p className="hrMainText">Services Related Products</p>
        </div>
        <div className="serviceMainSection">
          {Product_list?.filter(
            (el): el is ProductDataType => el !== undefined
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
