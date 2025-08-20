import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import parse from 'html-react-parser';
import "./style.css";

//images
import pvtOverver from "../../assets/images/pvtOverver.svg";
import greenTik2 from "../../assets/images/greenTikV2.svg";
import star from "../../assets/images/star.png";
import homeBg from "../../assets/images/homeBg.svg";
import appBg from "../../assets/images/appBG.svg";
import whatsappIcon from "../../assets/images/whatsappIcon.svg";
import viewIcon from "../../assets/images/viewIcon.png";
import InternalServerErrImg from "../../assets/images/intenalServerErr.jpg";
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
import { ParaSection } from "../../assets/Data";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}
import { FetchProdcut, ProductDataType } from "../../store/productSlice";
import { FetchService } from "../../store/categorySlice"

import { RootState, AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";

export default function ProductDetails({
  setCurrentNav,
  currentNav,
}: NavProps) {
  const selectedProductId = localStorage.getItem("selectedProduct");
  setCurrentNav("Services");
  const { data, status } = useSelector((state: RootState) => state.product);
  const Service = useSelector((state: RootState) => state.category)
  const dispatch = useDispatch<AppDispatch>();
  const [activeSection, setActiveSection] = useState<string>("");

  const [loding, setLoading] = useState(false);
  const [Product, setProduct] = useState<ProductDataType>();
  const [questionIndex, setQuestionIndex] = useState<number>(999999);
  const [navItems, setNavItems] = useState<string[]>([]);


  const handlePDClick = (props: string) => {
    setLoading(false)
    const section = document.getElementById(props);
    if (section) {
      const offset = 100;
      const topPosition = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
    // scrollToSection(props?.id);
    setActiveSection(props);
  };

  const openWhatsapp = () => {
    const url = `https://wa.me/9091385148`;
    window.open(url, "_blank");
  };



  // section Observe function 
  // useEffect(() => {
  //   if (!ParaSection || ParaSection.length === 0) return;

  //   let observer: IntersectionObserver | null = null;
  //   observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           console.log("Intersecting:", entry.target.id);
  //           setActiveSection(entry.target.id);
  //         }
  //       });
  //     },
  //     { root: null, threshold: 0.2 }
  //   );

  //   ParaSection.forEach((el) => {
  //     const section = document.getElementById(el?.id);
  //     if (section) {
  //       console.log("Observing:", el?.id);
  //       observer.observe(section);
  //     }
  //   });

  //   return () => {
  //     if (observer) observer.disconnect();
  //   };
  // }, [ParaSection, navItems]);


  useEffect(() => {
    if (!navItems.length) return; // wait until navItems exist

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Visible section:", entry?.target?.id);
          setActiveSection(entry.target.id);

        }
      });
    }, { threshold: 0.5 });

    navItems.forEach((item) => {
      const el = document.getElementById(item.toUpperCase());
      console.log(el);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navItems, Product]);



  const handleQuestionIndex = (i: number) => {
    if (i === questionIndex) {
      setQuestionIndex(999999);
    } else {
      setQuestionIndex(i);
    }
  };



  //Create Product Section array

  const sectionConfig: { key: string; label: string }[] = [
    { key: "overView", label: "Overview" },
    { key: "whatIs", label: "What is" },
    { key: "keyFeature", label: "Key Features" },
    { key: "benefits", label: "Benefits" },
    { key: "difference", label: "Difference" },
    { key: "documentsRequired", label: "Documents Required" },
    { key: "MCACompliance", label: "MCA Compliance" },
    { key: "Eligibility", label: "Eligibility" },
    { key: "DueDate", label: "Due Date" },
    { key: "Steps", label: "Steps" },
    { key: "ThresholdLimits", label: "Threshold Limits" },
    { key: "FAQ", label: "FAQ" },

  ];


  useEffect(() => {
    if (!Product) return;

    const newNavItems = sectionConfig
      .filter(({ key }) => {
        const value = (Product as Record<string, any>)[key];
        if (!value) return false;

        if (Array.isArray(value)) return value.length > 0;
        if (typeof value === "object") {
          return Object.values(value).some(v => {
            if (Array.isArray(v)) return v.length > 0;
            if (typeof v === "string") return v.trim().length > 0;
            if (typeof v === "object" && v !== null) return Object.keys(v).length > 0;
            return false;
          });
        }
        if (typeof value === "string") return value.trim().length > 0;

        return false;
      })
      .map(({ label }) => label);

    setNavItems(newNavItems);
  }, [Product]);


  useEffect(() => {
    dispatch(FetchProdcut());
    dispatch(FetchService());
    if (data?.length < 0) {
      dispatch(FetchProdcut());
    }
    if (Service.data?.length < 0) {
      dispatch(FetchService());
    }
  }, []);

  useEffect(() => {
    setProduct(data?.find((pr) => pr._id === selectedProductId));
  }, [data, Product]);

  return (
    <>
      <div className="productPage">
        <Helmet>
          <title>{Product?.metaTitle || Product?.title}</title>
          <meta name="description" content={Product?.metaDescription || 'Default description'} />
        </Helmet>


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
                          <span>{fe.title} : </span>
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
                    // onClick={() =>
                    //   handlePDClick({
                    //     title: "price",
                    //     id: "priceBox",
                    //   })
                    // }
                    >
                      <img src={viewIcon} alt="" />
                      View Package
                    </p>
                  </div>
                </div>
                <div className="productContactSection">
                  <ContactSection subjectList={Service.data} />
                </div>
              </div>
            </>
          ) : null}
        </div>

        <div className="productPageMainSection">
          {/*Price plane Box*/}
          <PriceSection product={Product} />

          {/* PeraSection */}
          <div className="paraSection">
            {/* Product Nav Bar */}
            <div className="paraNavOuterBox">
              <div className="paraNavSection">
                {navItems?.map((el, i) => (
                  <p
                    className={
                      activeSection === el.toUpperCase().replace(/\s+/g, "") ? "productNavActive" : ""}
                    onClick={() => handlePDClick(el.toUpperCase().replace(/\s+/g, ""))}
                    key={i}>
                    {el === "What is" ? `What is ${Product?.displayName || Product?.title}` : el}
                  </p>
                ))}
              </div>
            </div>



            {/* Overview section--------------------------------------------------- */}
            {navItems.includes("Overview") ? (
              <div
                id="OVERVIEW"
                className="paraSubSection overViewSection privateLC"
              >
                <p className="privateSHeader">{Product?.overView?.title}</p>
                {Product?.overView?.summarys?.map((el, i) => (
                  <p key={i}>{el}</p>
                ))}
              </div>
            ) : null}


            {/* what Is----------------------------------------------- */}
            {navItems.includes("What is") ? (
              <div
                id="WHATIS"
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
                        <li key={i} className="prNText">
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
            ) : null}

            {/* Key Features--------------------------------------------------------- */}
            {navItems.includes("Key Features") ? (
              <div
                id="KEYFEATURES"
                className="paraSubSection privateLC keyFeaturesSection"
              >
                <p className="privateSHeader">
                  {Product?.keyFeature?.title} <b> Private Limited Company?</b>
                </p>
                <p className="prNText">{Product?.keyFeature?.summarys}</p>
                <div className="keyFeatureCardBox">
                  {Product?.keyFeature?.keyFeatureItems?.map((el, i) => (
                    <FeaturesCard
                      title={el.title}
                      summary={el.summary}
                      key={i}
                    />
                  ))}
                </div>
              </div>
            ) : null}
            {/* Benefits section ----------------------------------------------------*/}
            {navItems.includes("Benefits") ? (
              <div id="BENEFITS" className="privateLC BenefitsSection">
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
            ) : null}
            {/* Difference section-------------------------------------------- */}
            {navItems.includes("Difference") ? (
              <div id="DIFFERENCE" className="privateLC DifferenceSection">
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
                    {/* Header Row */}
                    <div className="PRow PheaderRow headerRow">
                      {Product?.difference?.tableData?.headers?.map((val: string, i: number) => (
                        <div key={i} className="tableSel" style={{ width: "-webkit-fill-available" }}>
                          <p className="tableHeaderText">{val}</p>
                        </div>
                      ))}
                    </div>

                    {/* Data Rows */}
                    {Product?.difference?.tableData?.rows?.map((row: any, i: number) => (
                      <div className="PRow NHeaderRow" key={i}>
                        {Product?.difference?.tableData?.headers?.map((header: string, j: number) => (
                          <div className="tableSel" key={j} style={{ width: "-webkit-fill-available" }}>
                            <p className="tableNText">{row[header]}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
            {/* Document upload------------------------------------------------- */}
            {navItems.includes("Documents Required") ? (
              <div
                id="DOCUMENTSREQUIRED"
                className="privateLC DifferenceSection"
              >
                <p className="privateSHeader">
                  <b>What Are the Documents Required for </b>
                  {Product?.title}
                </p>
                {Product?.documentsRequired?.summarys?.map((sm, i) => (
                  <p className="prNText" key={i}>
                    {sm}
                  </p>
                ))}

                <div className="tableOuterBox productViewDifTable">
                  <div className="pricePanaleTableBox">
                    {/* Header Row */}
                    <div className="PRow PheaderRow headerRow">
                      {Product?.documentsRequired?.tableData?.headers?.map((val: string, i: number) => (
                        <div key={i} className="tableSel" style={{ width: "-webkit-fill-available" }}>
                          <p className="tableHeaderText">{val}</p>
                        </div>
                      ))}
                    </div>

                    {/* Data Rows */}
                    {Product?.documentsRequired?.tableData?.rows?.map((row: any, i: number) => (
                      <div className="PRow NHeaderRow" key={i}>
                        {Product?.documentsRequired?.tableData?.headers?.map((header: string, j: number) => (
                          <div className="tableSel" key={j} style={{ width: "-webkit-fill-available" }}>
                            <p className="tableNText">{row[header]}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}

            {/* MCA Compliance----------------------------------------------- */}
            {navItems.includes("MCA Compliance") ? (
              <div id="MCACOMPLIANCE" className="privateLC DifferenceSection">
                <p className="privateSHeader">
                  <b>Mandatory MCA Compliance for </b>
                  {Product?.title}
                </p>
                {Product?.MCACompliance?.summarys?.map((sm, i) => (
                  <p className="prNText" key={i}>
                    {sm}
                  </p>
                ))}

                <div className="tableOuterBox productViewDifTable">
                  <div className="pricePanaleTableBox">
                    {/* Header Row */}
                    <div className="PRow PheaderRow headerRow">
                      {Product?.MCACompliance?.tableData?.headers?.map((val: string, i: number) => (
                        <div key={i} className="tableSel" style={{ width: "-webkit-fill-available" }}>
                          <p className="tableHeaderText">{val}</p>
                        </div>
                      ))}
                    </div>

                    {/* Data Rows */}
                    {Product?.MCACompliance?.tableData?.rows?.map((row: any, i: number) => (
                      <div className="PRow NHeaderRow" key={i}>
                        {Product?.MCACompliance?.tableData?.headers?.map((header: string, j: number) => (
                          <div className="tableSel" key={j} style={{ width: "-webkit-fill-available" }}>
                            <p className="tableNText">{row[header]}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}

            {/* Due Date */}
            {navItems.includes("Due Date") ? (
              <div id="DUEDATE" className="privateLC DifferenceSection">
                <p className="privateSHeader">
                  <b>Due Date for </b>   {Product?.displayName}
                </p>
                {Product?.DueDate?.summarys?.map((sm, i) => (
                  <p className="prNText" key={i}>
                    {sm}
                  </p>
                ))}

                <div className="tableOuterBox productViewDifTable">
                  <div className="pricePanaleTableBox">
                    {/* Header Row */}
                    <div className="PRow PheaderRow headerRow">
                      {Product?.DueDate?.tableData?.headers?.map((val: string, i: number) => (
                        <div key={i} className="tableSel" style={{ width: "-webkit-fill-available" }}>
                          <p className="tableHeaderText">{val}</p>
                        </div>
                      ))}
                    </div>

                    {/* Data Rows */}
                    {Product?.DueDate?.tableData?.rows?.map((row: any, i: number) => (
                      <div className="PRow NHeaderRow" key={i}>
                        {Product?.DueDate?.tableData?.headers?.map((header: string, j: number) => (
                          <div className="tableSel" key={j} style={{ width: "-webkit-fill-available" }}>
                            <p className="tableNText">{row[header]}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}


            {/* Step */}
            {navItems.includes("Steps") ? (
              <div id="STEPS" className="privateLC DifferenceSection">
                <p className="privateSHeader"><b>Steps</b></p>
                {Product?.Steps?.map((stp, i) => (
                  <div key={i} className="stepSectionBox">
                    <p className="privateSHeader"><b></b>{stp.title}</p>
                    {
                      stp?.summary?.map((stpSum, j) => (
                        <p key={j} className="stepSummary">{stpSum?.summary}</p>
                      ))
                    }
                    <ul className="stepUlSection">
                      {
                        stp?.steps?.map((sstp, k) => (
                          <li key={k}>Step{k + 1} :  {sstp?.step}</li>
                        ))
                      }
                    </ul>
                  </div>
                ))
                }
              </div>
            ) : null}

            {/* ThresholdLimits---------- */}
            {navItems.includes("Threshold Limits") ? (
              <div id="THRESHOLDLIMITS" className="privateLC DifferenceSection">
                <p className="privateSHeader"><b>Threshold Limits</b></p>
                <p className="privateSHeader">{Product?.ThresholdLimits?.title}</p>
                {
                  Product?.ThresholdLimits?.summarys?.map((stpSum, j) => (
                    <p key={j} className="stepSummary">{stpSum}</p>
                  ))
                }
              </div>
            ) : null}


            {/* FAQ section------------------------------------------ */}
            {navItems.includes("FAQ") ? (
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
                    <p className="faqanswer">{parse(el?.answer)}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        {/* subscribe section */}
        <Subscribe />
      </div>
      <Footer />
    </>
  );
}
