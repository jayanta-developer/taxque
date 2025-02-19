import React from "react";
import "./style.css";
//images
import smPageBG from "../../assets/images/smPageBG.svg";
import GSTIcon from "../../assets/images/gstIcon.svg";
import GSTImg from "../../assets/images/GSTCardImg.png";
import YellowBg from "../../assets/images/YellowBg.svg";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { PriceCard } from "../../components/Tools";
import Subscribe from "../../components/Subscribe/intex";
import ContactSection from "../../components/ContactSection";

//data
import { priceCardData } from "../../assets/Data/intex";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}
export default function ProductDetails({
  setCurrentNav,
  currentNav,
}: NavProps) {
  setCurrentNav("Services");

  return (
    <>
      <div className="productPage">
        <div className="SMHeroBox">
          <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
          <img src={smPageBG} className="smPageBG" />
        </div>

        <div className="productPageMainSection">
          <p className="navigateText">
            Services <span>{">"}</span> GST{" "}
            <span>{">"} GST Compliance and Filing</span>
          </p>
          <div className="productDetailBox">
            <div className="productInfoSection">
              <div className="productHeader">
                <img src={GSTIcon} />
                <p>GST Compliance and Filing</p>
              </div>
              <div className="productInfoBox">
                <img src={GSTImg} className="productBannder" />
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

                <p className="piSubTitleText">
                  3. Post-Incorporation Benefits:
                </p>
                <p className="piNText">
                  GST registration in India is free of charge when applied for
                  through the official GST portal (www.gst.gov.in).
                </p>

                <p className="piSubTitleText">4. Trusted by Startups:</p>
                <p className="piNText">
                  GST registration in India is free of charge when applied for
                  through the official GST portal (www.gst.gov.in).
                </p>
              </div>
            </div>
            <div className="sideBannerSection">
              <ContactSection />
            </div>
          </div>

          {/* -Price plane Box */}
          <div className="pricePlaneBox PriceplaneSection">
            <p className="sectionHeader">GST Compliance and Filing</p>
            <div className="priceCardBox">
              <img src={YellowBg} className="yellowBg" />
              {priceCardData?.map((el, i) => (
                <PriceCard {...el} key={i} />
              ))}
            </div>
          </div>
        </div>
        {/* subscribe section */}
        <Subscribe />
      </div>
      <Footer />
    </>
  );
}
