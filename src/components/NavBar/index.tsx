import { useEffect, useState } from "react";
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";

//images
import Clogo from "../../assets/images/logo.svg";
import rightArrow from "../../assets/images/rightArrow.svg";
import MenuIcon from "../../assets/images/menuIcon.png";
import homeIcon from "../../assets/images/homeIcon.svg";
import serviceIcon from "../../assets/images/serviceIcon.png";
import aboutUsIcon from "../../assets/images/aboutUsIcon.svg";
import pricIngIcon from "../../assets/images/pricingIcon.png";
import blogIcon from "../../assets/images/blogIcon.png";
import contaceUsIcon from "../../assets/images/contact-us.png";
import backRoundArrow from "../../assets/images/backRoundArrow.png";
import avatarIcon from "../../assets/images/avatarIcon.png";
import searchIcon from "../../assets/images/SearchIcon.svg";

//components
import { AppBtn } from "../Buttons";

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentUrl = location.pathname.toUpperCase().replace(" ", "");
  const [nav, setNav] = useState(false);

  const closeNav = (e: any) => {
    if (e.target.id === "grayBox") {
      setNav(false);
    }
  };
  interface navItemType {
    url: string;
    icon: string;
  }
  const NavItem: navItemType[] = [
    {
      url: "/",
      icon: homeIcon,
    },
    {
      url: "Services",
      icon: serviceIcon,
    },
    {
      url: "About Us",
      icon: aboutUsIcon,
    },
    {
      url: "Pricing",
      icon: pricIngIcon,
    },
    {
      url: "Blog",
      icon: blogIcon,
    },
    {
      url: "Contact Us",
      icon: contaceUsIcon,
    },
  ];

  const navigatePage = (url: string) => {
    navigate(url.toLowerCase());
    setNav(false);
  };

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
      setNav(true);
    } else {
      document.body.style.overflow = "";
      setNav(false);
    }
  }, [nav]);
  return (
    <>
      <div className="navBar">
        <div className="clogoBox">
          <img src={Clogo} />
        </div>

        {/* Mobile nav */}
        <div
          id="grayBox"
          style={{ width: nav ? "100%" : "0%" }}
          className="grayBox"
          onClick={closeNav}
        >
          <div className="MobileMenu">
            {NavItem?.map((el, i) => (
              <div className="mobileNavItem">
                <img src={el?.icon} />
                <p key={i} onClick={() => navigatePage(el?.url)}>
                  {" "}
                  {el.url === "/" ? "Home" : el.url}
                </p>
              </div>
            ))}
            <img
              src={backRoundArrow}
              className="mobileNavBackBtn"
              onClick={() => setNav(false)}
            />
          </div>
        </div>

        <div className="navItemBox">
          {/* Desktop nav*/}
          {NavItem?.map((el, i) => (
            <p
              className={
                currentUrl.includes(el?.url?.toUpperCase())
                  ? "navItemText navItemTextActive"
                  : "navItemText"
              }
              onClick={() => navigatePage(el?.url)}
              key={i}
            >
              {el?.url === "/" ? "Home" : el?.url}
              <samp
                style={{
                  display: currentUrl.includes(el.url.toUpperCase())
                    ? "block"
                    : "none",
                }}
                className="nl1"
              ></samp>
              <samp
                style={{
                  display: currentUrl.includes(el.url.toUpperCase())
                    ? "block"
                    : "none",
                }}
                className="nl2"
              ></samp>
            </p>
          ))}
          <img src={searchIcon} />
          <AppBtn btnText="Log In" icon={rightArrow} />
          <img src={avatarIcon} className="LogInIconM" />
          <img
            src={MenuIcon}
            className="meneIcon"
            onClick={() => setNav(true)}
          />
        </div>
      </div>
    </>
  );
}
