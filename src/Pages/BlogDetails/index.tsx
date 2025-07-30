import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import parse from 'html-react-parser';


//images
import smPageBG from "../../assets/images/smPageBG.svg";
import avatarIcom from "../../assets/images/Avatar.svg";
import watchIcom from "../../assets/images/timeIcon.svg";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { AppHoloBtn } from "../../components/Buttons";
import ContactSection from "../../components/ContactSection";
import MyCarousel from "../../components/Carousel";
import Subscribe from "../../components/Subscribe";
import { ServiceCard, GoTop } from "../../components/Tools";

import { FetchBlog } from "../../store/blogSlice";
import { FetchService } from "../../store/categorySlice";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}
export default function BlogDetails({ setCurrentNav, currentNav }: NavProps) {
  const dispatch = useDispatch<AppDispatch>();
  const Navigate = useNavigate();
  const selectedBlogId = localStorage.getItem("blogId");
  const { data, status } = useSelector((state: RootState) => state.blog);
  const categoryData = useSelector((state: RootState) => state.category);
  const blogData = data.find((val) => val._id === selectedBlogId);


  useEffect(() => {
    dispatch(FetchBlog());
    if (data?.length < 0) {
      dispatch(FetchBlog());
    }
  }, []);
  useEffect(() => {
    dispatch(FetchService());
    if (categoryData?.data?.length < 0) {
      dispatch(FetchService());
    }
  }, []);
  return (
    <>
      <div className="productPage blogDetailsPage">
        <div className="SMHeroBox">
          <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
          <img src={smPageBG} className="smPageBG" />
        </div>

        <div className="productPageMainSection">


          <p className="navigateText">
            <span onClick={() => Navigate("/")} className="navHomeT">Home</span>
            <span className="navSeparator"> &gt; </span>
            <span onClick={() => Navigate("/learn")} className="navPageT">{blogData?.category}</span>
            <span className="navSeparator"> &gt; </span>
            <span className="navSubPageT">{blogData?.title}</span>
          </p>

        </div>
        <div className="productDetailBox">
          <div className="productInfoSection">
            <img src={blogData?.imageUrl} alt="" className="blogCoverImg" />

            <div className="blogBUserInfoBox">
              <div className="buABox">
                <img src={avatarIcom} />
                <p>Amit</p>
              </div>

              <div className="buABox">
                <img src={watchIcom} />
                <p>{blogData?.date}</p>
              </div>
            </div>

            <h1 className="blogMtitle blogMainTitle">{blogData?.title}</h1>

            {blogData?.blogText?.map((el, i) => (
              <div key={i}>
                <h1 className="blogMtitle">{el.title}</h1>
                {el?.summarys?.map((sm, ind: number) => (
                  <p className="blogNText" key={ind}>
                    {parse(sm?.summary)}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className="sideBannerSection">
            <ContactSection />

            {categoryData?.data?.length && (
              <div className="sideServiceBox">
                <p className="blogMtitle">Our Services</p>
                {categoryData?.data?.slice(0, 2).map((el, i) => (
                  <ServiceCard {...el} key={i} />
                ))}
                <AppHoloBtn
                  btnText="Explore All Services"
                  onClick={() => {
                    Navigate("/services");
                    GoTop();
                  }}
                />
              </div>
            )}
          </div>
        </div>
        {/* Blog section */}
        <div className="pricePlaneBox BlogSection">
          <p className="sectionHeader">Our Latest News</p>
          <MyCarousel data={data} cardName="BlogCard" />
        </div>
        {/* email section */}
        <Subscribe />

        {/* Popular tag section */}
        <div className="PopularSection">
          <div className="PopulariNSection">
            <p className="sectionHeader">Popular Services</p>
            <div className="ChipBox">
              {categoryData?.data?.slice(0, 20).map((el, i) => (
                <div
                  onClick={() => {
                    localStorage.setItem("selectedCategory", el?._id || "noId");
                    Navigate("/products");
                    GoTop();
                  }}
                  key={i} className="chip">
                  <p>{el?.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
