import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";


//Images
import smPageBG from "../../assets/images/smPageBG.svg";
import locationIcon from "../../assets/images/locationYicon.svg";
import timeIcon from "../../assets/images/timeYicon.svg";
import managerIcon from "../../assets/images/directorYicon.svg";
import atatchIcon from "../../assets/images/atatchIcon.svg";
import rightArrow from "../../assets/images/rightArrow.svg";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { AppBtn, AppHoloBtn } from "../../components/Buttons";
import { ServiceCard } from "../../components/Tools";

//data
import { FetchService } from "../../store/categorySlice";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}
import { RootState, AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";

export default function CareerDetails({ setCurrentNav, currentNav }: NavProps) {
  const Navigate = useNavigate();
  setCurrentNav("");
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.category);

  useEffect(() => {
    dispatch(FetchService());
    if (data?.length < 0) {
      dispatch(FetchService());
    }
  }, []);

  return (
    <>
      <div className="SMHeroBox">
        <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
        <img src={smPageBG} className="smPageBG" />
      </div>
      <div className="productPageMainSection careermainSection">
        <p className="navigateText">
          <span onClick={() => Navigate("/")} className="navHomeT">Home</span>
          <span className="navSeparator"> &gt; </span>
          <span className="navPageT">Careers</span>
          <span className="navSeparator"> &gt; </span>
          <span className="navSubPageT">Accounting and Taxation Analyst</span>
        </p>
        <div className="productDetailBox">
          <div className="productInfoSection">
            <div className="productHeader">
              <p>Accounting and Taxation Analyst</p>
            </div>
            <div className="carBtnBox">
              <div className="carNavBtn">
                <img src={locationIcon} alt="" />
                <p>Chennai</p>
              </div>
              <div className="carNavBtn">
                <img src={timeIcon} alt="" />
                <p>Full time</p>
              </div>
              <div className="carNavBtn">
                <img src={managerIcon} alt="" />
                <p>Manager</p>
              </div>
            </div>
            <div className="carTextBox">
              <p className="carNText">
                A Legal Advisor provides expert legal guidance and support to an
                organization or individual, ensuring compliance with laws and
                regulations while mitigating legal risks. This role involves
                advising on legal matters, drafting and reviewing contracts, and
                representing the organization in legal proceedings
              </p>
              <p className="buletHeader">Requirements :</p>
              <ul className="ulBox">
                <li>
                  Law Degree with 1 to 2 years of legal practice experience.
                </li>
                <li>
                  Should be able to speak Tamil, English and Hindi Fluently.
                  Knowledge of Native languages are added advantage.
                </li>
                <li>
                  Excellent communication and interpersonal skills for client
                  consultations and teamwork.
                </li>
                <li>
                  Self-motivated, with effective time management and the ability
                  to meet deadlines.
                </li>
                <li>
                  Tech-savvy with an interest in leveraging technology for legal
                  solutions.
                </li>
              </ul>

              <p className="buletHeader">Responsibilities :</p>
              <ul className="ulBox">
                <li>
                  Provide expert legal advice and consultation to clients across
                  diverse subject matters.
                </li>
                <li>
                  Understand client requirements and deliver effective legal
                  solutions to address their needs.
                </li>
                <li>
                  Introduce our comprehensive legal services based on initial
                  consultations, prioritizing revenue growth and quality work.
                </li>
                <li>
                  Draft and review a variety of commercial documents, ensuring
                  accuracy and compliance.
                </li>
                <li>
                  Collaborate with external counsels for litigation management,
                  adhering to strict schedules.
                </li>
                <li>
                  Demonstrate a strong sense of autonomy, working efficiently
                  without constant supervision.
                </li>
                <li>
                  Continuously update legal knowledge and adapt to evolving
                  industry trends.
                </li>
              </ul>

              <p className="buletHeader">
                Skill Set & Personality Traits required :
              </p>
              <ul className="ulBox">
                <li>
                  Time Management: Adept at handling multiple assignments within
                  tight deadlines in a fast-paced environment.
                </li>
                <li>
                  Problem-Solving: Strong analytical skills to address complex
                  legal issues and devise innovative solutions.
                </li>
                <li>
                  Technology Integration: Comfortable leveraging legal tech
                  tools to enhance services and streamline processes.
                </li>
                <li>
                  Self-Motivation: Initiative to work independently, manage
                  tasks efficiently, and stay productive without constant
                  supervision.
                </li>
                <li>
                  Should be able to speak Tamil, English and Hindi Fluently.
                  Knowledge of Native languages are added advantage.
                </li>
                <li>
                  Excellent communication and interpersonal skills for client
                  consultations and teamwork.
                </li>
                <li>
                  Self-motivated, with effective time management and the ability
                  to meet deadlines.
                </li>
                <li>
                  Tech-savvy with an interest in leveraging technology for legal
                  solutions
                </li>
              </ul>
            </div>
          </div>

          <div className="sideBannerSection">
            <div className="contactBox">
              <p className="contactHeader">Apply for this Job</p>
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
                <p className="inputLabel">City *</p>
                <input type="text" />
              </div>
              <label htmlFor="attachFile">
                <div className="atachBtn">
                  <img src={atatchIcon} />
                  <p>Attach Your Resume</p>
                  <input id="attachFile" type="file" />
                </div>
              </label>

              <div className="checkBox">
                <input type="checkBox" />
                <p>I Agree to Terms & Privacy Policy</p>
              </div>
              <AppBtn btnText="Apply Now" icon={rightArrow} />
            </div>

            <div className="sideServiceBox">
              <p className="blogMtitle">Our Services</p>
              {data?.splice(0, 2).map((el, i) => (
                <ServiceCard {...el} key={i} />
              ))}
              <AppHoloBtn btnText="Explore All Services" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
