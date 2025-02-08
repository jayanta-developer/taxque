import React from "react";
import "./style.css";

//images
import UPRightArrow from "../../assets/images/right-up.svg";
import GreenTik from "../../assets/images/GreenTik.svg";
import avatarIcom from "../../assets/images/Avatar.svg";
import watchIcom from "../../assets/images/timeIcon.svg";

//components
import { AppBtn } from "../Buttons";
import { data } from "react-router-dom";

interface serviceCardProps {
  icon: string;
  img: string;
  title: string;
  summery: string;
}

interface TaxQueCardProps {
  icon: string;
  title: string;
  summery: string;
}

interface PriceCardProps {
  title: string;
  basicPrice: string;
  price: string;
  summery: string;
  fetures: string[];
  MostPopular: boolean;
}

interface BlogCardProps {
  title: string;
  summery: string;
  date: string;
  userName: string;
  imgUrl: string;
}

export const ServiceCard = ({
  icon,
  img,
  title,
  summery,
}: serviceCardProps) => {
  return (
    <div className="serviceCard">
      <div className="svrCardHeader">
        <img src={icon} />
        <img className="svrUpArrow" src={UPRightArrow} />
        <p>{title}</p>
      </div>
      <div className="hrLine"></div>
      <p className="svrCardSummery">{summery}</p>
      <div className="sveCardImgBox">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export const TaxQueCard = ({ icon, title, summery }: TaxQueCardProps) => {
  return (
    <div className="taxQueCard">
      <img src={icon} />
      <p>{title}</p>
      <samp>{summery}</samp>
    </div>
  );
};

export const PriceCard = ({
  title,
  basicPrice,
  price,
  summery,
  fetures,
  MostPopular,
}: PriceCardProps) => {
  return (
    <div className="priceCard">
      <div
        style={{ display: MostPopular ? "flex" : "none" }}
        className="Mpopular"
      >
        <p>Most Popular</p>
      </div>
      <div className="pcHeroSection">
        <p className="pcTitle">{title}</p>
        <p className="pcbasPrice">
          Basic Price: ₹{basicPrice} <span></span>
        </p>
        <p className="pcPrice">
          ₹ {price} <samp>/month</samp>
        </p>
        <p className="psSummery">{summery}</p>
        <AppBtn btnText="Get started Now" width="100%" />
      </div>
      <div className="pcSummerySection">
        {fetures.map((el: string, i: number) => (
          <div className="pcFeturesPera">
            <img src={GreenTik} />
            <p key={i}>{el}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const BlogCard = ({
  title,
  summery,
  date,
  userName,
  imgUrl,
}: BlogCardProps) => {
  return (
    <div className="blogCard">
      <img src={imgUrl} className="blogImg" />
      <div className="BlogTextBox">
        <div className="BlogUserOutBox">
          <div className="BlogUserBox">
            <div className="buABox">
              <img src={avatarIcom} />
              <p>{userName}</p>
            </div>
            <div className="buABox">
              <img src={watchIcom} />
              <p>{date}</p>
            </div>
          </div>
        </div>
        <p className="BlogTitle">{title}</p>
        <p className="BlogSummery">{summery}</p>
        <img src={UPRightArrow} className="UpRArrow" />
      </div>
    </div>
  );
};
