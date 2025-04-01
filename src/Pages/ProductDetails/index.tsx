import React, { useState, useEffect } from "react";
import "./style.css";

//images
import GSTIcon from "../../assets/images/gstIcon.svg";
import pvtOverver from "../../assets/images/pvtOverver.svg";
import greenTik2 from "../../assets/images/greenTikV2.svg";
import star from "../../assets/images/star.png";
import homeBg from "../../assets/images/homeBg.svg";
import appBg from "../../assets/images/appBG.svg";
import whatsappIcon from "../../assets/images/whatsappIcon.svg";
import viewIcon from "../../assets/images/viewIcon.png";
import InternalServerErrImg from "../../assets/images/intenalServerErr.jpg";
import NOData from "../../assets/images/NOData.jpg";
import plassIcon from "../../assets/images/plassIcon.svg";
import mainasIcon from "../../assets/images/mainasIcon.svg";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { FeaturesCard, BenefitsCard, Loader } from "../../components/Tools";
import Subscribe from "../../components/Subscribe";
import ContactSection from "../../components/ContactSection";
import { AppHoloBtn } from "../../components/Buttons";
import PriceSection from "../../components/PriceSection";

//data
import {
  ParaSection,
  keyFeatureData,
  benefitData,
  DifferenceTableData,
} from "../../assets/Data";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}
import { FetchProdcut, ProductDataType } from "../../store/productSlice";

import { RootState, AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";

export default function ProductDetails({
  setCurrentNav,
  currentNav,
}: NavProps) {
  const selectedProductId = localStorage.getItem("selectedProduct");
  setCurrentNav("Services");
  const { data, status } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch<AppDispatch>();
  const [activeSection, setActiveSection] = useState<string>("");
  const [loding, setLoading] = useState(false);
  const [Product, setProduct] = useState<ProductDataType>();
  const [questionIndex, setQuestionIndex] = useState<number>(999999);

  interface paraType {
    title: string;
    id: string;
  }

  const handlePDClick = (props: paraType) => {
    const section = document.getElementById(props.id);
    if (section) {
      const offset = 100;
      const topPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
    scrollToSection(props?.id);
  };

  const openWhatsapp = () => {
    const url = `https://wa.me/9091385148`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: "-100px 0px 0px 0px", threshold: 0.6 }
    );

    ParaSection.forEach((el) => {
      const section = document.getElementById(el?.id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 100;
      const topPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
    setActiveSection(id);
  };

  const handleQuestionIndex = (i: number) => {
    if (i === questionIndex) {
      setQuestionIndex(999999);
    } else {
      setQuestionIndex(i);
    }
  };

  useEffect(() => {
    dispatch(FetchProdcut());
    if (data?.length < 0) {
      dispatch(FetchProdcut());
    }
  }, []);

  useEffect(() => {
    setProduct(data.find((pr) => pr._id === selectedProductId));
  }, [data, Product]);

  return (
    <>
      <div className="productPage">
        {/* Loader */}
        <Loader loding={loding || status === "loading" ? true : false} />

        <div className="productHeroSection">
          <img src={appBg} className="appBg" alt="" />
          <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
          <img src={homeBg} className="homeBg" alt="" />
          {status === "error" ? (
            <div className="nodataBox inSerErr">
              <img src={InternalServerErrImg} alt="" />
            </div>
          ) : status === "idle" ? (
            <>
              <div className="productHeroMainSection">
                <div className="productInfoSection">
                  <div className="productHeader">
                    <p>{Product?.title}</p>
                  </div>
                  <div className="productFeatures">
                    {Product?.feturePoints?.map((fe, i: number) => (
                      <div key={i} className="checkBox">
                        <img src={greenTik2} alt="" />
                        <p>
                          <span>{fe.title}:</span>
                          {fe.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="pcBRBox">
                    <AppHoloBtn
                      btnText="Chat With Us"
                      width="200px"
                      height="40px"
                      icon={whatsappIcon}
                      onClick={openWhatsapp}
                    />

                    <div className="pcRating">
                      <p>Review: </p>
                      <p>4.8</p>
                      <div className="ratingBOx">
                        <img src={star} />
                        <img src={star} />
                        <img src={star} />
                        <img src={star} />
                      </div>
                    </div>

                    <p
                      className="viewPackage"
                      onClick={() =>
                        handlePDClick({
                          title: "price",
                          id: "priceBox",
                        })
                      }
                    >
                      <img src={viewIcon} alt="" />
                      View Package
                    </p>
                  </div>
                </div>
                <div className="productContactSection">
                  <ContactSection />
                </div>
              </div>
            </>
          ) : null}
        </div>

        <div className="productPageMainSection">
          {/*Price plane Box*/}
          <PriceSection priceData={Product?.priceData} title={Product?.title}/>

          {/* PeraSection */}
          <div className="paraSection">
            <div className="paraNavOuterBox">
              <div className="paraNavSection">
                {ParaSection?.map((el, i) => (
                  <p
                    className={
                      activeSection === el?.id ? "productNavActive" : ""
                    }
                    onClick={() => handlePDClick(el)}
                    key={i}
                  >
                    {el?.title}
                  </p>
                ))}
              </div>
            </div>

            {/* Overview section--------------------------------------------------- */}
            <div
              id="overview"
              className="paraSubSection overViewSection privateLC"
            >
              <p className="privateSHeader">{Product?.overView?.title}</p>
              {Product?.overView?.summarys?.map((el, i) => (
                <p key={i}>{el}</p>
              ))}
            </div>

            {/* PrivateLimitedCompany----------------------------------------------- */}
            <div
              id="PrivateLimitedCompany"
              className="paraSubSection privateLC"
            >
              <p className="privateSHeader">
                What Is a <b>{Product?.title}</b>
              </p>

              {Product?.whatIs?.summarys?.map((sm, i) => (
                <p className="prNText" key={i}>
                  {sm}
                </p>
              ))}

              <div className="cplPVCBox">
                <img src={pvtOverver} alt="" />
                <div className="pvcTextBox">
                  <p className="prNText">
                    Definition as per the Companies Act, 2013{" "}
                  </p>
                  <p className="prNText">
                    Section 2(68) of the <b>Companies Act, 2013,</b> defines a
                    Private Limited Company as an entity that:
                  </p>
                  <ul>
                    {Product?.whatIs?.liList?.map((liVal, i) => (
                      <li className="prNText">
                        <b>{liVal.title}:</b>
                        {liVal.summary}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="plcNoteSection">
                <h2 style={{ marginBottom: "10px" }}>
                  {Product?.whatIs?.Notice?.noticeTitle}
                </h2>
                <p className="prNText">
                  {Product?.whatIs?.Notice?.noticeSummary}
                </p>
              </div>
            </div>

            {/* Key Features--------------------------------------------------------- */}
            <div
              id="Keyfeatures"
              className="paraSubSection privateLC keyFeaturesSection"
            >
              <p className="privateSHeader">
                {Product?.keyFeature?.title} <b> Private Limited Company?</b>
              </p>
              <p className="prNText">{Product?.keyFeature?.summarys}</p>
              <div className="keyFeatureCardBox">
                {Product?.keyFeature?.keyFeatureItems?.map((el, i) => (
                  <FeaturesCard title={el.title} summary={el.summary} key={i} />
                ))}
              </div>
            </div>

            {/* Benefits section */}
            <div id="Benefits" className="privateLC BenefitsSection">
              <p className="privateSHeader">
                <b>Benefits</b> of a {Product?.title}
              </p>
              {Product?.benefits?.summarys?.map((sm, i) => (
                <p className="prNText" key={i}>
                  {sm}
                </p>
              ))}
              <div className="benefiteCardBox">
                {Product?.benefits?.benefitsItems?.map((el, i) => (
                  <BenefitsCard {...el} index={i} key={i} />
                ))}
              </div>
            </div>

            {/* Difference section-------------------------------------------- */}
            <div id="Difference" className="privateLC DifferenceSection">
              <p className="privateSHeader">
                <b>Difference </b> Between {Product?.title} and Other Business
                Structures
              </p>
              {Product?.difference?.summarys?.map((sm, i) => (
                <p className="prNText" key={i}>
                  {sm}
                </p>
              ))}

              <div className="tableOuterBox productViewDifTable">
                <div className="pricePanaleTableBox">
                  <div className="PRow PheaderRow headerRow">
                    <div className="tableSel" style={{ width: "16.6%" }}>
                      <p className="tableHeaderText">Key Feature</p>
                    </div>
                    <div className="tableSel" style={{ width: "16.6%" }}>
                      <p className="tableHeaderText">Private Limited Company</p>
                    </div>
                    <div className="tableSel" style={{ width: "16.6%" }}>
                      <p className="tableHeaderText">Public Limited Company</p>
                    </div>
                    <div className="tableSel" style={{ width: "16.6%" }}>
                      <p className="tableHeaderText">
                        LLP (Limited Liability Partnership)
                      </p>
                    </div>
                    <div className="tableSel" style={{ width: "16.6%" }}>
                      <p className="tableHeaderText">Sole Proprietorship</p>
                    </div>
                    <div className="tableSel" style={{ width: "16.6%" }}>
                      <p className="tableHeaderText">Partnership Firm</p>
                    </div>
                  </div>

                  {Product?.difference?.tableData?.map((el, i) => (
                    <div className="PRow NHeaderRow" key={i}>
                      <div className="tableSel" style={{ width: "16.6%" }}>
                        <p className="tableNText">{el.KeyFeature}</p>
                      </div>
                      <div className="tableSel" style={{ width: "16.6%" }}>
                        <p className="tableNText">{el.PrivateLC}</p>
                      </div>
                      <div className="tableSel" style={{ width: "16.6%" }}>
                        <p className="tableNText">{el.PublicLC}</p>
                      </div>
                      <div className="tableSel" style={{ width: "16.6%" }}>
                        <p className="tableNText">{el.LLP}</p>
                      </div>
                      <div className="tableSel" style={{ width: "16.6%" }}>
                        <p className="tableNText">{el.SoleProprietorship}</p>
                      </div>
                      <div className="tableSel" style={{ width: "16.6%" }}>
                        <p className="tableNText">{el.PartnershipFirm}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Document upload------------------------------------------------- */}
            <div id="DocumentsRequired" className="privateLC DifferenceSection">
              <p className="privateSHeader">
                <b>What Are the Documents Required for</b>
                {Product?.title}
              </p>
              {Product?.documentsRequired?.summarys?.map((sm, i) => (
                <p className="prNText" key={i}>
                  {sm}
                </p>
              ))}

              <div className="tableOuterBox productViewDifTable">
                <div className="pricePanaleTableBox">
                  <div className="PRow PheaderRow headerRow">
                    <div className="tableSel" style={{ width: "25%" }}>
                      <p className="tableHeaderText">Category</p>
                    </div>
                    <div className="tableSel" style={{ width: "25%" }}>
                      <p className="tableHeaderText">Document Type</p>
                    </div>
                    <div className="tableSel" style={{ width: "25%" }}>
                      <p className="tableHeaderText">Specific Examples</p>
                    </div>
                    <div className="tableSel" style={{ width: "25%" }}>
                      <p className="tableHeaderText">Purpose</p>
                    </div>
                  </div>

                  {Product?.documentsRequired?.tableData?.map((el, i) => (
                    <div className="PRow NHeaderRow" key={i}>
                      <div className="tableSel" style={{ width: "25%" }}>
                        <p className="tableNText">{el.category}</p>
                      </div>
                      <div className="tableSel" style={{ width: "25%" }}>
                        <p className="tableNText">{el.documentType}</p>
                      </div>
                      <div className="tableSel" style={{ width: "25%" }}>
                        <p className="tableNText">{el.specificExamples}</p>
                      </div>
                      <div className="tableSel" style={{ width: "25%" }}>
                        <p className="tableNText">{el.Purpose}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* MCA Compliance----------------------------------------------- */}
            <div id="MCACompliance" className="privateLC DifferenceSection">
              <p className="privateSHeader">
                <b>Mandatory MCA Compliance for</b>
                {Product?.title}
              </p>
              {Product?.MCACompliance?.summarys?.map((sm, i) => (
                <p className="prNText" key={i}>
                  {sm}
                </p>
              ))}

              <div className="tableOuterBox productViewDifTable">
                <div className="pricePanaleTableBox">
                  <div className="PRow PheaderRow headerRow">
                    <div className="tableSel" style={{ width: "25%" }}>
                      <p className="tableHeaderText">Aspect</p>
                    </div>
                    <div className="tableSel" style={{ width: "25%" }}>
                      <p className="tableHeaderText">Compliance Requirement</p>
                    </div>
                    <div className="tableSel" style={{ width: "25%" }}>
                      <p className="tableHeaderText">Frequency</p>
                    </div>
                    <div className="tableSel" style={{ width: "25%" }}>
                      <p className="tableHeaderText">Why It’s Important</p>
                    </div>
                  </div>

                  {Product?.MCACompliance?.tableData?.map((el, i) => (
                    <div className="PRow NHeaderRow" key={i}>
                      <div className="tableSel" style={{ width: "25%" }}>
                        <p className="tableNText">{el.aspect}</p>
                      </div>
                      <div className="tableSel" style={{ width: "25%" }}>
                        <p className="tableNText">{el.complianceRequirement}</p>
                      </div>
                      <div className="tableSel" style={{ width: "25%" }}>
                        <p className="tableNText">{el.frequency}</p>
                      </div>
                      <div className="tableSel" style={{ width: "25%" }}>
                        <p className="tableNText">{el.WhyImportant}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ section------------------------------------------ */}
            <div id="FAQ" className="faqQBox">
              <p className="faqHeader">Frequently Asks Questions</p>
              {Product?.FAQ?.map((el, i) => (
                <div
                  key={i}
                  className={
                    questionIndex === i ? "qaBox qaBoxActive" : "qaBox"
                  }
                >
                  <img
                    src={questionIndex === i ? mainasIcon : plassIcon}
                    className="questionColapsIcon"
                    alt=""
                    onClick={() => handleQuestionIndex(i)}
                  />
                  <p className="faqquestion">{el?.question}</p>
                  <p className="faqanswer">{el?.answer}</p>
                </div>
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
