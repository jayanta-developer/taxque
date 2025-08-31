import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
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
import { FetchServiceById } from "../../store/serviceSlice";
import { RootState, AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";

export default function ServiceDetails({
  setCurrentNav,
  currentNav,
}: NavProps) {
  setCurrentNav("Services");
  const { slug } = useParams();

  const { Service, status } = useSelector((state: RootState) => state.service);

  const Category = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch<AppDispatch>();
  const [activeSection, setActiveSection] = useState<string>("");

  const [loding, setLoading] = useState(false);
  const [questionIndex, setQuestionIndex] = useState<number>(999999);
  const [navItems, setNavItems] = useState<string[]>([]);

  const handlePDClick = (props: string) => {
    setLoading(false);
    const section = document.getElementById(props);
    if (section) {
      const offset = 100;
      const topPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;
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
  useEffect(() => {
    if (!ParaSection || ParaSection.length === 0) return;

    let observer: IntersectionObserver | null = null;
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, threshold: 0.2 }
    );

    ParaSection.forEach((el) => {
      const section = document.getElementById(el?.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      if (observer) observer.disconnect();
    };
  }, [ParaSection, navItems]);

  useEffect(() => {
    if (!navItems.length) return; // wait until navItems exist

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.toUpperCase());
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navItems, Service]);

  const handleQuestionIndex = (i: number) => {
    if (i === questionIndex) {
      setQuestionIndex(999999);
    } else {
      setQuestionIndex(i);
    }
  };

  //Create Service Section array

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
    if (!Service) return;

    const newNavItems = sectionConfig
      .filter(({ key }) => {
        const value = (Service as Record<string, any>)[key];
        if (!value) return false;

        if (Array.isArray(value)) return value.length > 0;
        if (typeof value === "object") {
          return Object.values(value).some((v) => {
            if (Array.isArray(v)) return v.length > 0;
            if (typeof v === "string") return v.trim().length > 0;
            if (typeof v === "object" && v !== null)
              return Object.keys(v).length > 0;
            return false;
          });
        }
        if (typeof value === "string") return value.trim().length > 0;

        return false;
      })
      .map(({ label }) => label);

    setNavItems(newNavItems);
  }, [Service]);

  useEffect(() => {
    if (!slug) return;
    dispatch(FetchServiceById({ slug }));
    if (Service) {
      dispatch(FetchServiceById({ slug }));
    }
  }, [slug]);

  return (
    <>
      <div className="productPage">
        <Helmet>
          <title>{Service?.metaTitle || Service?.title}</title>
          <meta
            name="description"
            content={Service?.metaDescription || "Default description"}
          />
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
                    <p>{Service?.title}</p>
                  </div>
                  <div className="productFeatures">
                    {Service?.feturePoints?.map((fe, i: number) => (
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
                      onClick={() => handlePDClick("priceBox")}
                    >
                      <img src={viewIcon} alt="" />
                      View Package
                    </p>
                  </div>
                </div>
                <div className="productContactSection">
                  <ContactSection subjectList={Category.data} />
                </div>
              </div>
            </>
          ) : null}
        </div>

        <div className="productPageMainSection">
          {/*Price plane Box*/}
          <PriceSection product={Service} />

          {/* PeraSection */}
          <div className="paraSection">
            {/* Product Nav Bar */}
            <div className="paraNavOuterBox">
              <div className="paraNavSection">
                {navItems?.map((el, i) => (
                  <p
                    className={
                      activeSection === el.toUpperCase().replace(/\s+/g, "")
                        ? "productNavActive"
                        : ""
                    }
                    onClick={() =>
                      handlePDClick(el.toUpperCase().replace(/\s+/g, ""))
                    }
                    key={i}
                  >
                    {el === "What is"
                      ? `What is ${Service?.displayName || Service?.title}`
                      : el}
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
                <p className="privateSHeader">{Service?.overView?.title}</p>
                {Service?.overView?.summarys?.map((el, i) => (
                  <p key={i}>{el}</p>
                ))}
              </div>
            ) : null}

            {/* what Is----------------------------------------------- */}
            {navItems.includes("What is") ? (
              <div id="WHATIS" className="paraSubSection privateLC">
                <p className="privateSHeader">
                  What Is a <b>{Service?.title}</b>
                </p>

                {Service?.whatIs?.summarys?.map((sm, i) => (
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
                      {Service?.whatIs?.liList?.map((liVal, i) => (
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
                    {Service?.whatIs?.Notice?.noticeTitle}
                  </h2>
                  <p className="prNText">
                    {Service?.whatIs?.Notice?.noticeSummary}
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
                  {Service?.keyFeature?.title} <b> Private Limited Company?</b>
                </p>
                <p className="prNText">{Service?.keyFeature?.summarys}</p>
                <div className="keyFeatureCardBox">
                  {Service?.keyFeature?.keyFeatureItems?.map((el, i) => (
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
                  <b>Benefits</b> of a {Service?.title}
                </p>
                {Service?.benefits?.summarys?.map((sm, i) => (
                  <p className="prNText" key={i}>
                    {sm}
                  </p>
                ))}
                <div className="benefiteCardBox">
                  {Service?.benefits?.benefitsItems?.map((el, i) => (
                    <BenefitsCard {...el} index={i} key={i} />
                  ))}
                </div>
              </div>
            ) : null}
            {/* Difference section-------------------------------------------- */}
            {navItems.includes("Difference") ? (
              <div id="DIFFERENCE" className="privateLC DifferenceSection">
                <p className="privateSHeader">
                  <b>Difference </b> Between {Service?.title} and Other Business
                  Structures
                </p>
                {Service?.difference?.summarys?.map((sm, i) => (
                  <p className="prNText" key={i}>
                    {sm}
                  </p>
                ))}

                <div className="tableOuterBox productViewDifTable">
                  <div className="pricePanaleTableBox">
                    {/* Header Row */}
                    <div className="PRow PheaderRow headerRow">
                      {Service?.difference?.tableData?.headers?.map(
                        (val: string, i: number) => (
                          <div
                            key={i}
                            className="tableSel"
                            style={{ width: "-webkit-fill-available" }}
                          >
                            <p className="tableHeaderText">{val}</p>
                          </div>
                        )
                      )}
                    </div>

                    {/* Data Rows */}
                    {Service?.difference?.tableData?.rows?.map(
                      (row: any, i: number) => (
                        <div className="PRow NHeaderRow" key={i}>
                          {Service?.difference?.tableData?.headers?.map(
                            (header: string, j: number) => (
                              <div
                                className="tableSel"
                                key={j}
                                style={{ width: "-webkit-fill-available" }}
                              >
                                <p className="tableNText">{row[header]}</p>
                              </div>
                            )
                          )}
                        </div>
                      )
                    )}
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
                  {Service?.title}
                </p>
                {Service?.documentsRequired?.summarys?.map((sm, i) => (
                  <p className="prNText" key={i}>
                    {sm}
                  </p>
                ))}

                <div
                  style={{
                    width:
                      (Service?.documentsRequired?.tableData?.headers?.length ??
                        0) > 1
                        ? "100%"
                        : "45%",
                  }}
                  className="tableOuterBox productViewDifTable"
                >
                  <div className="pricePanaleTableBox">
                    {/* Header Row */}
                    <div className="PRow PheaderRow headerRow">
                      {Service?.documentsRequired?.tableData?.headers?.map(
                        (val: string, i: number) => (
                          <div
                            key={i}
                            className="tableSel"
                            style={{ width: "-webkit-fill-available" }}
                          >
                            <p className="tableHeaderText">{val}</p>
                          </div>
                        )
                      )}
                    </div>

                    {/* Data Rows */}
                    {Service?.documentsRequired?.tableData?.rows?.map(
                      (row: any, i: number) => (
                        <div className="PRow NHeaderRow" key={i}>
                          {Service?.documentsRequired?.tableData?.headers?.map(
                            (header: string, j: number) => (
                              <div
                                className="tableSel"
                                key={j}
                                style={{ width: "-webkit-fill-available" }}
                              >
                                <p className="tableNText">{row[header]}</p>
                              </div>
                            )
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            ) : null}

            {/* MCA Compliance----------------------------------------------- */}
            {navItems.includes("MCA Compliance") ? (
              <div id="MCACOMPLIANCE" className="privateLC DifferenceSection">
                <p className="privateSHeader">
                  <b>Mandatory MCA Compliance for </b>
                  {Service?.title}
                </p>
                {Service?.MCACompliance?.summarys?.map((sm, i) => (
                  <p className="prNText" key={i}>
                    {sm}
                  </p>
                ))}

                <div className="tableOuterBox productViewDifTable">
                  <div className="pricePanaleTableBox">
                    {/* Header Row */}
                    <div className="PRow PheaderRow headerRow">
                      {Service?.MCACompliance?.tableData?.headers?.map(
                        (val: string, i: number) => (
                          <div
                            key={i}
                            className="tableSel"
                            style={{ width: "-webkit-fill-available" }}
                          >
                            <p className="tableHeaderText">{val}</p>
                          </div>
                        )
                      )}
                    </div>

                    {/* Data Rows */}
                    {Service?.MCACompliance?.tableData?.rows?.map(
                      (row: any, i: number) => (
                        <div className="PRow NHeaderRow" key={i}>
                          {Service?.MCACompliance?.tableData?.headers?.map(
                            (header: string, j: number) => (
                              <div
                                className="tableSel"
                                key={j}
                                style={{ width: "-webkit-fill-available" }}
                              >
                                <p className="tableNText">{row[header]}</p>
                              </div>
                            )
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            ) : null}

            {/* Due Date */}
            {navItems.includes("Due Date") ? (
              <div id="DUEDATE" className="privateLC DifferenceSection">
                <p className="privateSHeader">
                  <b>Due Date for </b> {Service?.displayName}
                </p>
                {Service?.DueDate?.summarys?.map((sm, i) => (
                  <p className="prNText" key={i}>
                    {sm}
                  </p>
                ))}

                <div className="tableOuterBox productViewDifTable">
                  <div className="pricePanaleTableBox">
                    {/* Header Row */}
                    <div className="PRow PheaderRow headerRow">
                      {Service?.DueDate?.tableData?.headers?.map(
                        (val: string, i: number) => (
                          <div
                            key={i}
                            className="tableSel"
                            style={{ width: "-webkit-fill-available" }}
                          >
                            <p className="tableHeaderText">{val}</p>
                          </div>
                        )
                      )}
                    </div>

                    {/* Data Rows */}
                    {Service?.DueDate?.tableData?.rows?.map(
                      (row: any, i: number) => (
                        <div className="PRow NHeaderRow" key={i}>
                          {Service?.DueDate?.tableData?.headers?.map(
                            (header: string, j: number) => (
                              <div
                                className="tableSel"
                                key={j}
                                style={{ width: "-webkit-fill-available" }}
                              >
                                <p className="tableNText">{row[header]}</p>
                              </div>
                            )
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            ) : null}

            {/* Step */}
            {navItems.includes("Steps") ? (
              <div id="STEPS" className="privateLC DifferenceSection">
                <p className="privateSHeader">
                  <b>Steps</b>
                </p>
                {Service?.Steps?.map((stp, i) => (
                  <div key={i} className="stepSectionBox">
                    <p className="privateSHeader">
                      <b></b>
                      {stp.title}
                    </p>
                    {stp?.summary?.map((stpSum, j) => (
                      <p key={j} className="stepSummary">
                        {stpSum?.summary}
                      </p>
                    ))}
                    <ul className="stepUlSection">
                      {stp?.steps?.map((sstp, k) => (
                        <li key={k}>
                          Step{k + 1} : {sstp?.step}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : null}

            {/* ThresholdLimits---------- */}
            {navItems.includes("Threshold Limits") ? (
              <div id="THRESHOLDLIMITS" className="privateLC DifferenceSection">
                <p className="privateSHeader">
                  <b>Threshold Limits</b>
                </p>
                <p className="privateSHeader">
                  {Service?.ThresholdLimits?.title}
                </p>
                {Service?.ThresholdLimits?.summarys?.map((stpSum, j) => (
                  <p key={j} className="stepSummary">
                    {stpSum}
                  </p>
                ))}
              </div>
            ) : null}

            {/* FAQ section------------------------------------------ */}
            {navItems.includes("FAQ") ? (
              <div id="FAQ" className="faqQBox">
                <p className="faqHeader">Frequently Asks Questions</p>
                {Service?.FAQ?.map((el, i) => (
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
