// import React,{useEffect} from "react";
import "./style.css";
import { useLocation } from "react-router-dom";

//images
import Clogo from "../../assets/images/logo.svg";
import rightArrow from "../../assets/images/rightArrow.svg";
//components
import { AppBtn } from "../Buttons";

export default function NavBar() {
  const location = useLocation();
  const currentUrl = location.pathname.toUpperCase().replace(" ", "");

  const NavItem: string[] = [
    "/",
    "Services",
    "About Us",
    "Pricing",
    "Blog",
    "Contact Us",
  ];

  return (
    <>
      <div className="navBar">
        <div className="clogoBox">
          <img src={Clogo} />
        </div>

        <div className="navItemBox">
          {NavItem?.map((el, i) => (
            <p
              className={
                currentUrl.includes(el.toUpperCase())
                  ? "navItemText navItemTextActive"
                  : "navItemText"
              }
              key={i}
            >
              {el === "/" ? "Home" : el}
              <samp
                style={{
                  display: currentUrl.includes(el.toUpperCase())
                    ? "block"
                    : "none",
                }}
                className="nl1"
              ></samp>
              <samp
                style={{
                  display: currentUrl.includes(el.toUpperCase())
                    ? "block"
                    : "none",
                }}
                className="nl2"
              ></samp>
            </p>
          ))}

          <AppBtn btnText="Log In" icon={rightArrow} />
        </div>
      </div>
    </>
  );
}
