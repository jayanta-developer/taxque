import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";


//images
import smPageBG from "../../assets/images/smPageBG.svg";
import GSTIcon from "../../assets/images/gstIcon.svg";
import GSTImg from "../../assets/images/GSTCardImg.png";
import priceLabelBox from "../../assets/images/priceLabelIcon.svg";
import greenTik from "../../assets/images/greenTikV2.svg";
import grayTik from "../../assets/images/grayTick.svg";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { AppBtn } from "../../components/Buttons";
import Subscribe from "../../components/Subscribe";

//data

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}
export default function ProductPayment({
  setCurrentNav,
  currentNav,
}: NavProps) {
  const Navigate = useNavigate();



  return (
    <>
      <div className="productPage productPaymentPage">
        <div className="SMHeroBox">
          <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
          <img src={smPageBG} className="smPageBG" />
        </div>

        <div className="productPageMainSection">

          <p className="navigateText">
            <span onClick={() => Navigate("/")} className="navHomeT">Home</span>
            <span className="navSeparator"> &gt; </span>
            <span className="navPageT">Pricing</span>
            <span className="navSeparator"> &gt; </span>
            <span className="navSubPageT">GST Compliance and Filing</span>
          </p>


          <div className="productDetailBox">
            <div className="productInfoSection">
              <div className="productHeader">
                <p>ECA Assisted -Standard</p>
              </div>
              <p className="pcbasPrice">
                Basic Price: ₹1274 <span></span>
              </p>
              <p className="pcPrice">
                ₹2599 <samp>/month</samp>
              </p>
              <p className="piNText">
                Stay on top of your GST obligations with our comprehensive
                compliance solutions. From timely filing to advisory services,
                we handle it all so you can focu
              </p>
              <div className="priceHeaderLabelBox">
                <img src={priceLabelBox} />
                <p className="piSubTitleText">
                  Lowest Tax Filing Fees in India
                </p>
              </div>
              <p className="piNText">
                GST registration in India is free of charge when applied for
                through the official GST portal (www.gst.gov.in).{" "}
              </p>
              <div className="priceHeaderLabelBox">
                <img src={priceLabelBox} />
                <p className="piSubTitleText">
                  Eliable and Secure ITR Filing Platform
                </p>
              </div>
              <p className="piNText">
                GST registration in India is free of charge when applied for
                through the official GST portal (www.gst.gov.in).{" "}
              </p>
              <div className="priceHeaderLabelBox">
                <img src={priceLabelBox} />
                <p className="piSubTitleText">
                  Tax Filing for all - Business Owners, Salaried Persons
                </p>
              </div>
              <p className="piNText">
                GST registration in India is free of charge when applied for
                through the official GST portal (www.gst.gov.in).
              </p>
            </div>
            <div className="sideBannerSection">
              <div className="contactBox">
                <p className="contactHeader">We’re Here To Get In Touch</p>
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
                <div className="inputBox">
                  <p className="inputLabel">Message *</p>
                  <textarea />
                </div>
                <div className="checkBox">
                  <input type="checkBox" />
                  <p>I Agree to Terms & Conditions and Privacy Policy</p>
                </div>
                <AppBtn btnText="Submit Now" />
              </div>
            </div>
          </div>
          <div className="productDetailBox">
            <div className="productCoverBox">
              <div className="productHeader">
                <img src={GSTIcon} />
                <p>GST Compliance and Filing</p>
              </div>
              <img src={GSTImg} className="productBannder" />
            </div>
            <div className="productNInfoBoxBox">
              <p className="productInfoHeader">
                GST Registration Fees in India: Charges, Penalties & Payment
                Process
              </p>
              <p className="piNText">
                Stay on top of your GST obligations with our comprehensive
                compliance solutions. From timely filing to advisory services,
                we handle it all so you can focus on growing your business.
              </p>

              <p className="piSubTitleText">1. Affordable & Transparent:</p>
              <p className="piNText">
                GST registration in India is free of charge when applied for
                through the official GST portal (www.gst.gov.in).{" "}
              </p>

              <p className="piSubTitleText">2. Comprehensive Compliance:</p>
              <p className="piNText">
                GST registration in India is free of charge when applied for
                through the official GST portal (www.gst.gov.in).
              </p>
            </div>
          </div>
        </div>
        {/* Price chart Box  */}
        <div className="pricePlaneBox">
          <p className="sectionHeader">See features includes</p>
          <div className="tableOuterBox">
            <div className="pricePanaleTableBox">
              <div className="PRow PheaderRow">
                <div className="tableSel" style={{ minWidth: "30%" }}>
                  <p></p>
                </div>
                <div className="tableSel" style={{ minWidth: "23%" }}>
                  <p className="tableHeaderText">Standard</p>
                </div>
                <div className="tableSel" style={{ minWidth: "23%" }}>
                  <p className="tableHeaderText">NRI</p>
                </div>
                <div className="tableSel" style={{ minWidth: "23%" }}>
                  <p className="tableHeaderText">Business Income</p>
                </div>
              </div>
              {/*  */}
              <div className="PRow">
                <div className="tableSel textAS" style={{ minWidth: "30%" }}>
                  <p>Price</p>
                </div>
                <div className="tableSel" style={{ minWidth: "23%" }}>
                  <p className="tableHeaderText PrmTextColor">₹ 1274</p>
                </div>
                <div className="tableSel" style={{ minWidth: "23%" }}>
                  <p className="tableHeaderText PrmTextColor">₹ 2655</p>
                </div>
                <div className="tableSel" style={{ minWidth: "23%" }}>
                  <p className="tableHeaderText PrmTextColor">₹ 7968</p>
                </div>
              </div>
              <div className="PRow">
                <div className="tableSel textAS" style={{ minWidth: "30%" }}>
                  <p>Interest & Other Sources Income</p>
                </div>
                <div className="tableSel" style={{ minWidth: "23%" }}>
                  <img src={greenTik} />
                </div>
                <div className="tableSel" style={{ minWidth: "23%" }}>
                  <img src={grayTik} />{" "}
                </div>
                <div className="tableSel" style={{ minWidth: "23%" }}>
                  <img src={greenTik} />{" "}
                </div>
              </div>
              <div className="PRow">
                <div className="tableSel textAS" style={{ minWidth: "30%" }}>
                  <p>Expanded set of self-help tools</p>
                </div>
                <div className="tableSel" style={{ minWidth: "23%" }}>
                  <img src={grayTik} />
                </div>
                <div className="tableSel" style={{ minWidth: "23%" }}>
                  <img src={greenTik} />{" "}
                </div>
                <div className="tableSel" style={{ minWidth: "23%" }}>
                  <img src={greenTik} />{" "}
                </div>
              </div>
              <div className="PRow">
                <div className="tableSel textAS" style={{ minWidth: "30%" }}>
                  <p>Examination of previous year ITR</p>
                </div>
                <div className="tableSel" style={{ minWidth: "23%" }}>
                  <img src={greenTik} />
                </div>
                <div className="tableSel" style={{ minWidth: "23%" }}>
                  <img src={greenTik} />{" "}
                </div>
                <div className="tableSel" style={{ minWidth: "23%" }}>
                  <img src={grayTik} />{" "}
                </div>
              </div>
              <div className="PRow">
                <div className="tableSel textAS" style={{ minWidth: "30%" }}>
                  <p>26AS Data Import</p>
                </div>
                <div className="tableSel" style={{ minWidth: "23%" }}>
                  <img src={greenTik} />
                </div>
                <div className="tableSel" style={{ minWidth: "23%" }}>
                  <img src={grayTik} />{" "}
                </div>
                <div className="tableSel" style={{ minWidth: "23%" }}>
                  <img src={greenTik} />{" "}
                </div>
              </div>
              <div className="PRow">
                <div className="tableSel textAS" style={{ minWidth: "30%" }}>
                  <p>Tax Payment Assistance</p>
                </div>
                <div className="tableSel" style={{ minWidth: "23%" }}>
                  <img src={grayTik} />
                </div>
                <div className="tableSel" style={{ minWidth: "23%" }}>
                  <img src={greenTik} />{" "}
                </div>
                <div className="tableSel" style={{ minWidth: "23%" }}>
                  <img src={greenTik} />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* subscribe section */}
        <Subscribe />

        <Footer />
      </div>
    </>
  );
}
