import React, { useEffect, useState } from "react";
import "./style.css";

//images
import pageBg from "../../assets/images/otherPageBg.svg";
// import downArrow from "../../assets/images/down-arrow.svg";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { BlogRowCard } from "../../components/Tools";

import { FetchBlog } from "../../store/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";

//data
import { BlogData } from "../../assets/Data";
interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}

export default function BlogPage({ setCurrentNav, currentNav }: NavProps) {
  setCurrentNav("Blog");
  const dispatch = useDispatch<AppDispatch>();
  const { data, status } = useSelector((state: RootState) => state.blog);
  const [blogType, setBlogType] = useState<string>();
console.log(status);

  interface BlogMenuType {
    title: string;
    subMenu: string[];
  }
  const BlogMenu: BlogMenuType[] = [
    {
      title: "Business",
      subMenu: ["Item 1", "Item 2", "Item 3", "Item 4"],
    },
    {
      title: "Latest News",
      subMenu: ["Item 1", "Item 2", "Item 3", "Item 4"],
    },
    {
      title: "Award News",
      subMenu: ["Item 1", "Item 2", "Item 3", "Item 4"],
    },

    {
      title: "Regional News",
      subMenu: ["Item 1", "Item 2", "Item 3", "Item 4"],
    },
  ];

  const filterBlogData = blogType?.length
    ? data?.filter((val) => val.category === blogType)
    : data;

  useEffect(() => {
    dispatch(FetchBlog());
    if (data?.length < 0) {
      dispatch(FetchBlog());
    }
  }, []);

  return (
    <>
      <div className="BlogPage">
        <div className="subPageHeroSection">
          <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
          <img src={pageBg} className="pageBg" />
          <p className="navigateText">
            Home <span>{">"} Blog</span>
          </p>
          <p className="hrMainText">News & Press Releases</p>
        </div>
        <div className="blogMainSection">
          <p className="sectionHeader">
            Explore {!blogType?.length ? "All Categorys" : blogType}
          </p>
          <div className="blogNavBox">
            <div className="blogCatagoribox">
              <div
                className="bcRow bcHeaderRow"
                onClick={() => setBlogType(undefined)}
              >
                <p>All Blog Catagoris</p>
              </div>
              {BlogMenu?.map((el, i) => (
                <div
                  className={
                    blogType === el?.title ? "bcRow bcRowActive" : "bcRow"
                  }
                  onClick={() => {
                    setBlogType(el?.title);
                  }}
                  key={i}
                >
                  <p>{el?.title}</p>
                  {/* <img src={downArrow} className="dropArrow" /> */}
                </div>
              ))}
            </div>
          </div>
          <div className="blogInfoBox">
            {filterBlogData?.map((el, i) => (
              <React.Fragment key={i}>
                <BlogRowCard {...el} />
                {i !== BlogData.length - 1 && (
                  <div
                    style={{ display: "block" }}
                    className="blogCardBottomLine"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
