import React, { useState } from "react";
import "./style.css";

//images
import pageBg from "../../assets/images/otherPageBg.svg";
import iconBox from "../../assets/images/iconBox.svg";
import plassIcon from "../../assets/images/plassIcon.svg";
import mainasIcon from "../../assets/images/mainasIcon.svg";
import MenuIcon from "../../assets/images/menuIconV2.png";
import backRoundArrow from "../../assets/images/backRoundArrow.png";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Subscribe from "../../components/Subscribe";

//data
import { servicesData, faqData } from "../../assets/Data";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}

export default function FAQ({ setCurrentNav, currentNav }: NavProps) {
  setCurrentNav("");
  const [faqSideNav, setFaqSideNav] = useState(false);
  const [faqNav, setFaqNav] = useState("General Questions");
  const [questionIndex, setQuestionIndex] = useState<number>(999999);

  console.log(faqNav);

  const handleQuestionIndex = (i: number) => {
    if (i === questionIndex) {
      setQuestionIndex(999999);
    } else {
      setQuestionIndex(i);
    }
  };
  return (
    <>
      <div className="BlogPage teamPage">
        <div className="subPageHeroSection">
          <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
          <div className="iconBox">
            <img src={pageBg} className="pageBg" />
          </div>
          <p className="navigateText">
            Home <span>{">"} F&Q</span>
          </p>
          <p className="hrMainText">Frequently Asked Tax Questions</p>
        </div>
        <div className="faqMainsection">
          <div
            className={
              faqSideNav
                ? "faqNavSection faqNavSectionActive"
                : " faqNavSection"
            }
          >
            <div
              onClick={() => {
                setFaqNav("General Questions");
                setFaqSideNav(false);
              }}
              className={
                faqNav === "General Questions"
                  ? "faqNavTab faqNavTabActive"
                  : "faqNavTab"
              }
            >
              <div className="icon_Box">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios-filled/50/q.png"
                  alt="q"
                  className="gqIcon"
                />
                <img src={iconBox} alt="" />
              </div>
              <p>General Questions</p>
            </div>
            {servicesData?.map((el, i) => (
              <div
                key={i}
                onClick={() => {
                  setFaqNav(el.title);
                  setFaqSideNav(false);
                }}
                className={
                  faqNav === el.title
                    ? "faqNavTab faqNavTabActive"
                    : "faqNavTab"
                }
              >
                <img className="faqIcon" src={el.icon} alt="" />
                <p>{el.title}</p>
              </div>
            ))}
          </div>
          <div className="faqSection">
            <img
              src={faqSideNav ? backRoundArrow : MenuIcon}
              className="faqHavIcon"
              alt=""
              onClick={() => setFaqSideNav(!faqSideNav)}
            />

            {/* General Questions */}
            {faqNav === "General Questions" && (
              <div className="faqQBox">
                <p className="faqHeader">Frequently Asks Questions</p>
                {faqData?.map((el, i) => (
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
            )}
          </div>
        </div>
        <Subscribe />
      </div>
      <Footer />
    </>
  );
}
