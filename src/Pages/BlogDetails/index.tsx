import React from "react";
import "./style.css";

//images
import smPageBG from "../../assets/images/smPageBG.svg";
import BlogImg from "../../assets/images/BlogImg1.png";
import avatarIcom from "../../assets/images/Avatar.svg";
import watchIcom from "../../assets/images/timeIcon.svg";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { AppHoloBtn } from "../../components/Buttons";
import ContactSection from "../../components/ContactSection";
import MyCarousel from "../../components/Carousel";
import Subscribe from "../../components/Subscribe";
import { ServiceCard } from "../../components/Tools";

//data
import { BlogData, servicesData, ChipData } from "../../assets/Data";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}
export default function BlogDetails({ setCurrentNav, currentNav }: NavProps) {
  return (
    <>
      <div className="productPage blogDetailsPage">
        <div className="SMHeroBox">
          <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
          <img src={smPageBG} className="smPageBG" />
        </div>

        <div className="productPageMainSection">
          <p className="navigateText">
            Home <span>{">"}</span> Blog{" "}
            <span>
              {">"} GST Registration Fees in India: Charges, Penalties & Payment
              Process{" "}
            </span>
          </p>
        </div>
        <div className="productDetailBox">
          <div className="productInfoSection">
            <img src={BlogImg} alt="" className="blogCoverImg" />

            <div className="blogBUserInfoBox">
              <div className="buABox">
                <img src={avatarIcom} />
                <p>Vignesh</p>
              </div>

              <div className="buABox">
                <img src={watchIcom} />
                <p>25 Mar , 2024</p>
              </div>
            </div>

            <h1 className="blogMtitle">
              GST Registration Fees in India: Charges, Penalties & Payment
              Process
            </h1>

            <p className="blogNText">
              Selecting the right lawyer to draft a shareholder agreement is
              vital for ensuring legal compliance and protecting the interests
              of all shareholders. This article highlights the key qualities to
              look for, including expertise in corporate law, experience in
              drafting agreements, industry-specific knowledge, and strong
              negotiation skills. It also covers the drafting process, the
              benefits of working with an experienced lawyer, and how they can
              mitigate legal risks and ensure long-term business stability.
            </p>

            <p className="blogSubHeader">
              What is the New GST Registration Fees?
            </p>
            <p className="blogNText">
              GST registration in India is free of charge when applied for
              through the official GST portal (www.gst.gov.in). There are no
              government fees for registration. However, businesses may incur
              costs if you hire professionals, such as Chartered Accountants or
              tax consultants, to assist with the process.
              <br /> These professional fee for GST registration typically range
              between ₹1,000/- to ₹5,000/-, depending on the complexity of the
              application.An appeal under any law simply means a formal
              application to have a decision made by a lower court or some other
              lower power, annulled. They tend to be made in legal issues for
              example in handling a legal conflict.
            </p>

            <div className="noticeBox">
              <p>
                Renewal of GST registration itself does not attract any
                additional fee. GST registration is valid for life long meaning
                that once a business has registered, it only needs to file
                returns regularly and remain GST compliant, there are no renewal
                fees needed.
              </p>
            </div>
            <p className="blogSubHeader">
              What are the GST Registration Fees by CA?
            </p>
            <ul className="bdUlPoints">
              <li>
                GST Return Filing: Fees range from ₹1,000 to ₹5,000, depending
                on the complexity and volume of transactions.
              </li>
              <li>
                Consultancy Services: Charges apply for compliance assistance,
                registration, and audit services. These fees vary based on the
                scope of work.
              </li>
              <li>A fine of 10% of the tax due, with a minimum of ₹10,000</li>
              <li>
                For cases involving tax evasion, the penalty is 100% of the
                unpaid tax.
              </li>
            </ul>
          </div>
          <div className="sideBannerSection">
            <ContactSection />
            <div className="sideServiceBox">
              <p className="blogMtitle">Our Services</p>
              {servicesData?.splice(0, 2).map((el, i) => (
                <ServiceCard {...el} key={i} />
              ))}
              <AppHoloBtn btnText="Explore All Services" />
            </div>
          </div>
        </div>
        {/* Blog section */}
        <div className="pricePlaneBox BlogSection">
          <p className="sectionHeader">Our Latest News</p>
          <MyCarousel data={BlogData} />
        </div>
        {/* email section */}
        <Subscribe />

        {/* Popular tag section */}
        <div className="PopularSection">
          <div className="PopulariNSection">
            <p className="sectionHeader">Popular Services</p>
            <div className="ChipBox">
              {ChipData?.map((el, i) => (
                <div key={i} className="chip">
                  <p>{el}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
