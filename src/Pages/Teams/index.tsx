import React from "react";
import "./style.css";

//images
import pageBg from "../../assets/images/otherPageBg.svg";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}

export default function Teams({ setCurrentNav, currentNav }: NavProps) {
  return (
    <>
      <div className="BlogPage teamPage">
        <div className="subPageHeroSection">
          <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
          <img src={pageBg} className="pageBg" />
          <p className="navigateText">
            Home <span>{">"} Team</span>
          </p>
          <p className="hrMainText">Meet Taxque's Dynamic Team</p>
        </div>
        <div className="TeamMainSection">
          <p className="sectionHeader">Behind the scenes, Meet Our Team</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
