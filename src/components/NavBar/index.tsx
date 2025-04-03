import { useEffect, useState, useRef, useContext } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

//images
import Clogo from "../../assets/images/logo.svg";
import rightArrow from "../../assets/images/rightArrow.svg";
import MenuIcon from "../../assets/images/menuIcon.png";
import homeIcon from "../../assets/images/homeIcon.svg";
import serviceIcon from "../../assets/images/serviceIcon.png";
import aboutUsIcon from "../../assets/images/aboutUsIcon.svg";
import blogIcon from "../../assets/images/blogIcon.png";
import contaceUsIcon from "../../assets/images/contact-us.png";
import backRoundArrow from "../../assets/images/backRoundArrow.png";
import avatarIcon from "../../assets/images/avatarIcon.png";
import logOutIcon from "../../assets/images/logout.png";
import searchIcon from "../../assets/images/SearchIcon.svg";

//components
import { AppBtn } from "../Buttons";
import { GoTop, Reloader } from "../Tools";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../../Util/context/AuthContext";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}

export default function NavBar({ currentNav }: NavProps) {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);
  const [searchTab, setSearchTab] = useState(false);
  const { user } = useContext(AuthContext)!;

  const closeNav = (e: any) => {
    if (e.target.id === "grayBox") {
      setNav(false);
    }
  };
  interface navItemType {
    title: string;
    url: string;
    icon: string;
  }
  const NavItem: navItemType[] = [
    {
      title: "Home",
      url: "/",
      icon: homeIcon,
    },
    {
      title: "Services",
      url: "/services",
      icon: serviceIcon,
    },
    {
      title: "About Us",
      url: "/about",
      icon: aboutUsIcon,
    },
    {
      title: "Blog",
      url: "/blog",
      icon: blogIcon,
    },
    {
      title: "Contact Us",
      url: "/contact-us",
      icon: contaceUsIcon,
    },
  ];

  const navigatePage = (url: string) => {
    navigate(url.toLowerCase());
    setNav(false);
  };

  //Log out
  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    Reloader(500);
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if ((e.target as HTMLElement)?.id !== "searchInput") setSearchTab(false);
    });
  }, []);

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
      setNav(true);
    } else {
      document.body.style.overflow = "";
      setNav(false);
    }
  }, [nav]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust threshold for visibility percentage
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);
  return (
    <>
      <div ref={divRef} className="navBar">
        <ToastContainer />
        <div className="clogoBox">
          <img src={Clogo} onClick={() => navigate("/")} />
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
              <div
                key={i}
                className="mobileNavItem"
                onClick={() => navigatePage(el?.url)}
              >
                <img src={el?.icon} />
                <p key={i}>{el.title}</p>
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
                currentNav === el.title
                  ? "navItemText navItemTextActive"
                  : "navItemText"
              }
              onClick={() => navigatePage(el?.url)}
              key={i}
            >
              {el?.title}
              <samp
                style={{
                  display: currentNav === el.title ? "block" : "none",
                }}
                className="nl1"
              ></samp>
              <samp
                style={{
                  display: currentNav === el.title ? "block" : "none",
                }}
                className="nl2"
              ></samp>
            </p>
          ))}
          <img
            id="searchInput"
            src={searchIcon}
            onClick={() => setSearchTab(!searchTab)}
            style={{ cursor: "pointer" }}
          />
          {user ? (
            <>
              <AppBtn btnText="LogOut" onClick={handleLogOut} />
              <img
                src={logOutIcon}
                className="LogInIconM"
                onClick={handleLogOut}
              />
            </>
          ) : (
            <>
              <AppBtn
                btnText="Log In"
                icon={rightArrow}
                onClick={() => navigate("/login")}
              />
              <img
                src={avatarIcon}
                className="LogInIconM"
                onClick={() => navigate("/login")}
              />
            </>
          )}

          <img
            src={MenuIcon}
            className="meneIcon"
            onClick={() => setNav(true)}
          />

          {/* searchInput */}
          <div
            id="searchInput"
            className="searchInputBox"
            style={{ display: searchTab ? "block" : "none" }}
          >
            <input id="searchInput" type="text" placeholder="Search..." />
            <img src={searchIcon} />
          </div>
        </div>

        <img
          style={{ display: isVisible ? "none" : "block" }}
          className="goTopIcon"
          src="https://img.icons8.com/carbon-copy/100/fe8903/circled-up.png"
          alt="goTop img"
          onClick={GoTop}
        />
      </div>
    </>
  );
}
