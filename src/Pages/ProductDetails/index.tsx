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

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { FeaturesCard, BenefitsCard } from "../../components/Tools";
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
export default function ProductDetails({
  setCurrentNav,
  currentNav,
}: NavProps) {
  setCurrentNav("Services");
  const [activeSection, setActiveSection] = useState<string>("");

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
          console.log(entry);
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

  return (
    <>
      <div className="productPage">
        <div className="productHeroSection">
          <img src={appBg} className="appBg" alt="" />
          <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
          <img src={homeBg} className="homeBg" alt="" />

          <div className="productHeroMainSection">
            <div className="productInfoSection">
              <div className="productHeader">
                <img src={GSTIcon} />
                <p>GST Compliance and Filing</p>
              </div>
              <div className="productFeatures">
                <div className="checkBox">
                  <img src={greenTik2} alt="" />
                  <p>
                    <span>Affordable & Transparent:</span> Registration starting
                    at ₹999 + Govt Fee with no hidden charges.
                  </p>
                </div>
                <div className="checkBox">
                  <img src={greenTik2} alt="" />
                  <p>
                    <span>Comprehensive Compliance:</span> SPICe-INC-32,
                    eMoA-INC-33, eAOA-INC-34 filings, DSC, PAN, and TAN—all
                    handled seamlessly.
                  </p>
                </div>
                <div className="checkBox">
                  <img src={greenTik2} alt="" />
                  <p>
                    <span>Post-Incorporation Benefits:</span> Includes free MSME
                    registration, GST filing support, and banking setup.
                  </p>
                </div>
                <div className="checkBox">
                  <img src={greenTik2} alt="" />
                  <p>
                    <span>Trusted by Startups:</span> Rated #1 for Pvt Ltd
                    Registration, with 100% MCA-compliant filings.
                  </p>
                </div>
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
        </div>

        <div className="productPageMainSection">
          {/* -Price plane Box */}
          <PriceSection />

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

            {/* Overview section */}
            <div
              id="overview"
              className="paraSubSection overViewSection privateLC"
            >
              <p className="privateSHeader">Overview</p>
              <p>
                Starting a private limited company in India is a preferred
                option for entrepreneurs aiming to establish professional and
                recognised businesses. Governed by the Companies Act, 2013, and
                regulated by the Ministry of Corporate Affairs (MCA), this
                business structure offers benefits like limited liability,
                enhanced credibility, and growth opportunities.
              </p>
              <p>
                The process involves submitting the SPICe+ form, obtaining
                Digital Signature Certificates (DSC) for directors, and securing
                Director Identification Numbers (DIN). Once approved by the
                Registrar of Companies (RoC), your business receives a
                Certificate of Incorporation, making it a separate legal entity.
                This allows the company to own assets, sign contracts, and
                operate independently.
              </p>
              <p>
                After incorporation, compliance is vital for smooth operations.
                This includes registering for GST, applying for PAN and TAN, and
                filing annual returns and audits. These requirements not only
                meet statutory obligations but also build trust with investors
                and stakeholders.
              </p>
              <p>
                A private limited company is the ideal choice for entrepreneurs
                seeking scalability, structured growth, and funding
                opportunities. While the process may involve challenges like
                name approvals or regulatory steps, expert guidance ensures a
                seamless experience.
              </p>
              <p>
                At Vakilsearch, we handle every step of the registration
                process, from documentation to compliance, so you can focus on
                growing your business confidently and efficiently.
              </p>
            </div>

            {/* PrivateLimitedCompany */}
            <div
              id="PrivateLimitedCompany"
              className="paraSubSection privateLC"
            >
              <p className="privateSHeader">
                What Is a <b>Private Limited Company?</b>
              </p>

              <p className="prNText">
                A private limited company (commonly abbreviated as Pvt Ltd) is
                considered a separate legal entity from its owners, offering a
                secure framework for operations while safeguarding the personal
                assets of its members. This business structure, governed by the
                <b> Companies Act, 2013,</b> is popular among entrepreneurs and
                small to medium-sized businesses (SMEs) for its combination of
                <b> limited liability protection, ownership control,</b> and
                <b> scalability.</b>
              </p>
              <p className="prNText">
                <b>For instance,</b> startups like Swiggy began as private
                limited companies due to their ability to secure venture capital
                funding while maintaining limited liability for founders.
              </p>
              <p className="prNText">
                Unlike public companies, a private limited company restricts the
                transfer of shares and operates with a focused group of
                stakeholders. This makes it ideal for businesses seeking
                <b> operational independence, confidentiality,</b> and{" "}
                <b>long-term growth.</b>
              </p>
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
                    <li className="prNText">
                      <b>Restricts the Transfer of Shares:</b> Shareholders
                      cannot freely transfer their shares to the public or
                      external parties. This restriction ensures that ownership
                      remains within a close group of trusted individuals,
                      protecting the company’s stability.
                    </li>
                    <li className="prNText">
                      <b>Limits the Number of Members: </b> A private limited
                      company can have a maximum of 200 members, excluding
                      current and former employees who hold shares. This limit
                      ensures the company remains a private entity. (Exception:
                      A One Person Company (OPC) can have only one member.)
                    </li>
                    <li className="prNText">
                      <b>Prohibits Public Invitations: </b> The company is not
                      allowed to invite the public to subscribe to its shares,
                      debentures, or other securities. This makes private
                      limited companies more focused on raising capital
                      privately, such as through friends, family, or
                      institutional investors.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="plcNoteSection">
                <h2 style={{ marginBottom: "10px" }}>Companies Act, 2013</h2>
                <p className="prNText">
                  The Companies Act 2013 (No. 18 of 2013) is the primary source
                  of Indian company law. It received presidential assent on 29
                  August 2013 and largely replaced the Companies Act 1956. The
                  Act was implemented in stages. Section 1 came into force on 30
                  August 2013. 98 sections became effective on 12 September 2013
                  with some changes. Another 183 sections were enforced from 1
                  April 2014.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div
              id="Keyfeatures"
              className="paraSubSection privateLC keyFeaturesSection"
            >
              <p className="privateSHeader">
                What Are the <b>Key Features </b>and Benefits of a Private
                Limited Company?
              </p>
              <p className="prNText">
                A Private Limited Company provides an ideal business structure
                that combines legal protections, operational flexibility, and
                growth opportunities, making it a preferred choice for
                entrepreneurs and small to medium-sized businesses. Here are the
                10 key features and 7 benefits of a Private Limited Company.
              </p>
              <div className="keyFeatureCardBox">
                {keyFeatureData?.map((el, i) => (
                  <FeaturesCard
                    icon={el.icon}
                    title={el.title}
                    summary={el.summery}
                    key={i}
                  />
                ))}
              </div>
            </div>

            {/* Benefits section */}
            <div id="Benefits" className="privateLC BenefitsSection">
              <p className="privateSHeader">
                <b>Benefits</b> of a Private Limited Company
              </p>
              <p className="prNText">
                A Private Limited Company offers a range of advantages, making
                it a preferred choice for entrepreneurs and growing businesses.
                From ease of raising capital to legal protections, here’s why
                businesses opt for this structure:
              </p>
              <div className="benefiteCardBox">
                {benefitData?.map((el, i) => (
                  <BenefitsCard {...el} index={i} key={i} />
                ))}
              </div>
            </div>

            {/* Difference section */}
            <div id="Difference" className="privateLC DifferenceSection">
              <p className="privateSHeader">
                <b>Difference </b> Between Private Limited Company and Other
                Business Structures
              </p>
              <p className="prNText">
                The main difference between a Private Limited Company (Pvt Ltd)
                and other business structures lies in the level of legal
                protection, ownership flexibility, and compliance requirements
                they offer. A Pvt Ltd company is often preferred for its ability
                to limit personal liability, attract investors, and ensure
                operational continuity. In contrast, structures like Sole
                Proprietorship, Partnership, and Limited Liability Partnership
                (LLP) have their own unique features and limitations.
              </p>
              <p className="prNText">
                This table highlights the key differences between Private
                Limited Companies and other business structures to help you
                choose the one that fits your business needs best.
              </p>
              <div className="tableOuterBox productViewDifTable">
                <div className="pricePanaleTableBox">
                  <div className="PRow PheaderRow headerRow">
                    <div className="tableSel" style={{ width: "16%" }}>
                      <p className="tableHeaderText">Key Feature</p>
                    </div>
                    <div className="tableSel" style={{ width: "16%" }}>
                      <p className="tableHeaderText">Private Limited Company</p>
                    </div>
                    <div className="tableSel" style={{ width: "16%" }}>
                      <p className="tableHeaderText">Public Limited Company</p>
                    </div>
                    <div className="tableSel" style={{ width: "16%" }}>
                      <p className="tableHeaderText">
                        LLP (Limited Liability Partnership)
                      </p>
                    </div>
                    <div className="tableSel" style={{ width: "16%" }}>
                      <p className="tableHeaderText">Sole Proprietorship</p>
                    </div>
                    <div className="tableSel" style={{ width: "16%" }}>
                      <p className="tableHeaderText">Partnership Firm</p>
                    </div>
                  </div>

                  {DifferenceTableData?.map((el, i) => (
                    <div className="PRow NHeaderRow" key={i}>
                      <div className="tableSel" style={{ width: "16%" }}>
                        <p className="tableNText">{el.KeyFeature}</p>
                      </div>
                      <div className="tableSel" style={{ width: "16%" }}>
                        <p className="tableNText">{el.PrivateLimitedCompany}</p>
                      </div>
                      <div className="tableSel" style={{ width: "16%" }}>
                        <p className="tableNText">{el.PublicLimitedCompany}</p>
                      </div>
                      <div className="tableSel" style={{ width: "16%" }}>
                        <p className="tableNText">{el.LLP}</p>
                      </div>
                      <div className="tableSel" style={{ width: "16%" }}>
                        <p className="tableNText">{el.SoleProprietorship}</p>
                      </div>
                      <div className="tableSel" style={{ width: "16%" }}>
                        <p className="tableNText">{el.PartnershipFirm}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
