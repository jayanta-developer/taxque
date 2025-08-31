import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";


//images
import pageBg from "../../assets/images/otherPageBg.svg";
import rightArrow from "../../assets/images/rightArrow.svg";
import arrowLine from "../../assets/images/arrowLine.svg";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { JobCard } from "../../components/Tools";

//data
import { AppBtn } from "../../components/Buttons";
import Subscribe from "../../components/Subscribe";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}

//Redux
import { FetchJob } from "../../store/jobSlice"
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";

export default function Careers({ setCurrentNav, currentNav }: NavProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.job);

  const Navigate = useNavigate();
  setCurrentNav("");




  useEffect(() => {
    dispatch(FetchJob());
    if (data?.length < 0) {
      dispatch(FetchJob());
    }
  }, []);
  return (
    <>
      <div className="teamPage careerPage">
        <div className="subPageHeroSection">
          <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
          <img src={pageBg} className="pageBg" />

          <p className="navigateText">
            <span onClick={() => Navigate("/")} className="navHomeT">Home</span>
            <span className="navSeparator"> &gt; </span>
            <span className="navPageT">Careers</span>
          </p>



          <p className="hrMainText">DO YOU HAVE IT IN YOU?</p>
        </div>
        <div className="careersMainSection">
          <div className="joinTeamSection">
            <div className="jtsimg">
              <p>Join our team</p>
              <img src={arrowLine} />
            </div>
            <div className="jtsTextBox">
              <p>
                Looking for a career, collaborative team and unlimited
                opportunities to grow? You’ve come to the right place. At
                Taxque, you’ll be part of a leading legal-tech team that values
                expert insights, bold ideas and intellectual courage. You will
                find your place in an environment built on strong relationships
                where every associate is empowered to make an impact and is
                valued for their contributions. We invite you to apply at
                <span> hr@Taxque.com</span> or choose the opportunities that
                suit you best from the given list of open positions.
              </p>
            </div>
          </div>

          <div className="careerCardMainBox">
            <p className="sectionHeader">Career opportunities</p>
            <div className="careerCardBox">
              {data?.map((el, i) => (
                <JobCard {...el} key={i} />
              ))}
            </div>
            <div className="btnBox">
              <AppBtn btnText="Load more" icon={rightArrow} />
            </div>
          </div>
        </div>
        <Subscribe />
      </div>
      <Footer />
    </>
  );
}
