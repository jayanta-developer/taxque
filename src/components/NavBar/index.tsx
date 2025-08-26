import { useEffect, useState, useRef, useContext } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

//images
import { Image } from "../../assets/images";

//components
import { AppBtn } from "../Buttons";
import { GoTop, Reloader } from "../Tools";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../../Util/context/AuthContext";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}

import { FetchService } from "../../store/serviceSlice";
import { FetchCategory } from "../../store/categorySlice"
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { setLabel } from "../../store/stateSlice";


export default function NavBar({ currentNav }: NavProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.service);
  const category = useSelector((state: RootState) => state.category);

  const [nav, setNav] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);
  const { user } = useContext(AuthContext)!;
  const [userDrop, setUserDrop] = useState(false);
  const [categoryPop, setCategoryPop] = useState<boolean>(false);

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
      icon: Image.homeIcon,
    },
    {
      title: "Services",
      url: "/services",
      icon: Image.serviceIcon,
    },
    {
      title: "About Us",
      url: "/about",
      icon: Image.aboutUsIcon,
    },
    {
      title: "Guide",
      url: "/learn",
      icon: Image.blogIcon,
    },
    {
      title: "Contact Us",
      url: "/contact-us",
      icon: Image.contaceUsIcon,
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



  //handle go Category page
  const handleCategoryClick = (categroyId: string, slug: string) => {
    navigate(`/category/${slug}`)
    GoTop();
  };

  useEffect(() => {
    dispatch(FetchService());
    dispatch(FetchCategory());
    if (data?.length < 0) {
      dispatch(FetchService());
    }
    if (category?.data?.length < 0) {
      dispatch(FetchCategory());
    }
  }, []);

  return (
    <>
      <div ref={divRef} className="navBar">
        <div className="clogoBox">
          <img src={Image.Clogo} onClick={() => navigate("/")} />
        </div>
        <ToastContainer />

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
              src={Image.backRoundArrow}
              className="mobileNavBackBtn"
              onClick={() => setNav(false)}
            />
          </div>
        </div>

        <div className="navItemBox">
          {/* Desktop nav*/}

          <p className={currentNav === "Home" ? "navItemText navItemTextActive" : "navItemText"}
            onClick={() => navigatePage("/")}>
            Home
            <samp className="nl1"></samp>
            <samp className="nl2"></samp>
          </p>

          <p
            id="ServicesItem"
            className={currentNav === "Services" ? "navItemText navItemTextActive" : "navItemText"}
            onMouseOver={(e) => {
              if (e.currentTarget.id === "ServicesItem") {
                setCategoryPop(true);
              }
            }}
            onMouseOut={(e) => {
              if (e.currentTarget.id === "ServicesItem") {
                setCategoryPop(false);
              }
            }}
            onClick={(e) => {
              const target = e.target as HTMLElement;
              if (target.id === "ServicesItem") {
                navigatePage("/categorys");
              }
            }}
          >
            Category
            <samp className="nl1"></samp>
            <samp className="nl2"></samp>
            <div
              id="ServicesPop"
              style={{ display: categoryPop ? "flex" : "none" }}
              className="navManHoverBox"
              onMouseOver={(e) => {
                if (e.currentTarget.id === "ServicesPop") {
                  setCategoryPop(true);
                }
              }}
              onMouseOut={(e) => {
                if (e.currentTarget.id === "ServicesPop") {
                  setCategoryPop(false);
                }
              }}
            >
              {
                category.data?.map((subM, i) => (
                  <div onClick={() => handleCategoryClick(subM?._id || "", subM?.Slug || "")} className="categoryItemBox" key={i}>
                    <p>{subM?.title}</p>
                    <img src={Image.rightArrowV2} alt="" />
                  </div>

                ))
              }

            </div>
          </p>

          <p className={currentNav === "About Us" ? "navItemText navItemTextActive" : "navItemText"}
            onClick={() => navigatePage("/about")}  >
            About Us
            <samp className="nl1"></samp>
            <samp className="nl2"></samp>
          </p>

          <p className={currentNav === "Guide" ? "navItemText navItemTextActive" : "navItemText"}
            onClick={() => navigatePage("/learn")} >
            Guide
            <samp className="nl1"></samp>
            <samp className="nl2"></samp>
          </p>
          <p className={currentNav === "Contact Us" ? "navItemText navItemTextActive" : "navItemText"}
            onClick={() => navigatePage("/contact-us")}>
            Contact Us
            <samp className="nl1"></samp>
            <samp className="nl2"></samp>
          </p>

          <img onClick={() => dispatch(setLabel(true))} className="navSearchBtn" src={Image.searchIcon} alt="" />

          {user ? (
            <div
              className="UserProfileTab"
              onClick={() => setUserDrop(!userDrop)}
            >
              <img src={Image.userIcon} alt="" />
              <div
                style={{ display: userDrop ? "flex" : "none" }}
                className="dropBox"
              >
                <div
                  className="dropItem"
                  onClick={() => navigate("/user-profile")}
                >
                  <p>Profile</p>
                </div>
                <div className="dropItem" onClick={handleLogOut}>
                  <p>LogOut</p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <AppBtn
                btnText="Log In"
                icon={Image.rightArrow}
                onClick={() => navigate("/login")}
              />
              <img
                src={Image.avatarIcon}
                className="LogInIconM"
                onClick={() => navigate("/login")}
              />
            </>
          )}

          <img
            src={Image.MenuIcon}
            className="meneIcon"
            onClick={() => setNav(true)}
          />
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
