import React from "react";
import "./style.css";

//images
import UPRightArrow from "../../assets/images/right-up.svg";

interface serviceCardProp {
  icon: string;
  img: string;
  title: string;
  summery: string;
}

interface TaxQueCardProp {
  icon: string;
  title: string;
  summery: string;
}

export const ServiceCard: React.FC<serviceCardProp> = ({
  icon,
  img,
  title,
  summery,
}) => {
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

export const TaxQueCard: React.FC<TaxQueCardProp> = ({
  icon,
  title,
  summery,
}) => {
  return (
    <div className="taxQueCard">
      <img src={icon} />
      <p>{title}</p>
      <samp>{summery}</samp>
    </div>
  );
};
