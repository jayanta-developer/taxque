import React from "react";
import "./style.css";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

//images
import smPageBG from "../../assets/images/smPageBG.svg";
import AvatarIcon from "../../assets/images/AvatarIcon2.png";
import UserBG from "../../assets/images/userBG2.jpg";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}

export default function UserPage({ setCurrentNav, currentNav }: NavProps) {
  setCurrentNav("");

  return (
    <>
      <div className="SMHeroBox">
        <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
        <img src={smPageBG} className="smPageBG" />
      </div>
      <div className="userBox">
        <div className="sideMenu">
          <h2>Products</h2>
          <div className="ProductList">
            <div>
              <p>Product name</p>
            </div>
            <div>
              <p>Product name</p>
            </div>
            <div>
              <p>Product name</p>
            </div>
          </div>
        </div>
        <div className="userMainSection">
          <div className="userNav">
            <p>My Account</p>/<span>Profile</span>
          </div>
          <div className="userInfoBox">
            <img src={UserBG} className="userBG" alt="" />
            <img src={AvatarIcon} />
            <h3>Jayanta dey</h3>
            <p>jayantadey398@gmail.com</p>
          </div>
          <div className="ProductInfoBox"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
