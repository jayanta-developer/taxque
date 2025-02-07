import React from "react";
import "./style.css";

//images
import homeBg from "../../assets/images/homeBg.svg";
import rightArrow from "../../assets/images/rightArrow.svg";
import heroImg from "../../assets/images/heroImg.svg";
import GRatingImg from "../../assets/images/GRatingImg.svg";
import Clogo1 from "../../assets/images/CLogo1.svg";
import Clogo2 from "../../assets/images/CLogo2.svg";
import Clogo3 from "../../assets/images/CLogo3.svg";
import Clogo4 from "../../assets/images/CLogo4.svg";
import Clogo5 from "../../assets/images/CLogo5.svg";
import Clogo6 from "../../assets/images/CLogo6.svg";
import Clogo7 from "../../assets/images/CLogo7.svg";
import Clogo8 from "../../assets/images/CLogo8.svg";
import taxImg from "../../assets/images/taxImg.svg";
import GreenBg from "../../assets/images/GreenBg.svg";
import taxQueImg from "../../assets/images/TaxQueImg.png";
import expertIcon from "../../assets/images/ExpertIcon.svg";

//data
import { servicesData, TaxQueData } from "../../assets/Data/intex";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import { AppBtn } from "../../components/Buttons";
import { ServiceCard, TaxQueCard } from "../../components/Tools/intex";

export default function Home() {
  return (
    <>
      <div className="heroBox">
        <NavBar />
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
        <div className="ClogoBox">
          <img src={Clogo1} />
          <img src={Clogo2} />
          <img src={Clogo3} />
          <img src={Clogo4} />
          <img src={Clogo5} />
          <img src={Clogo6} />
          <img src={Clogo7} />
          <img src={Clogo8} />
        </div>
        {/* -Our services section-- */}
        <div className="serviceSection">
          <p className="sectionHeader">Our Services</p>
          <div className="serviceCardBox">
            {servicesData?.map((el, i) => (
              <ServiceCard
                key={i}
                icon={el.icon}
                img={el.img}
                title={el.title}
                summery={el.summery}
              />
            ))}
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
                Are you a business owner or salaried professional looking for
                tax guidance? Taxbuddy is here to offer the best tax filing
                service in India. With experts guiding you for better tax
                planning, assisted ITR filing, Resolving Income tax notices, and
                filing Tax appeals, you cannot go wrong with Taxbuddy. As an
                Indian taxpayer, you know the complexities of tax filing and the
                consequences of the smallest error in your returns. We make sure
                that you never miss a deadline, make a calculation error, or
                omit an item from your returns. Our platform covers diverse
                needs and facilitates tax filing for everyone.
              </p>
              <AppBtn btnText="Know About Us" icon={rightArrow} width="225px" />
            </div>
          </div>
        </div>

        {/* --tax que section -- */}
        <div className="taxQueSection">
          <img src={taxQueImg} className="taxQueImg" />
          <p className="sectionHeader">Why Choose TaxQue?</p>
          <div className="taxQueCardBox">
            {TaxQueData?.map((el, i) => (
              <TaxQueCard
                icon={el.icon}
                title={el.title}
                summery={el.summery}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
