import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";


//images
import pageBg from "../../assets/images/otherPageBg.svg";
import rightArrow from "../../assets/images/rightArrow.svg";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { TeamCard } from "../../components/Tools";
import { AppBtn } from "../../components/Buttons";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}


import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { FetchTeam } from "../../store/teamSlice"

export default function Teams({ setCurrentNav, currentNav }: NavProps) {
  const Navigate = useNavigate();
  setCurrentNav("Home");
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.team);




  useEffect(() => {
    dispatch(FetchTeam());
    if (data?.length < 0) {
      dispatch(FetchTeam());
    }
  }, []);
  return (
    <>
      <div className="BlogPage teamPage">
        <div className="subPageHeroSection">
          <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
          <img src={pageBg} className="pageBg" />

          <p className="navigateText">
            <span onClick={() => Navigate("/")} className="navHomeT">Home</span>
            <span className="navSeparator"> &gt; </span>
            <span className="navPageT">Team</span>
          </p>

          <p className="hrMainText">Meet Taxque's Dynamic Team</p>
        </div>
        <div className="TeamMainSection">
          <p className="teamSectionTitle">Behind The Scenes, Meet Our Team</p>
          {data?.map((el, i) => (
            <TeamCard {...el} key={i} />
          ))}
        </div>
        <div className="btnBox">
          <AppBtn
            btnText="Load More"
            width="200px"
            height="50px"
            icon={rightArrow}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
