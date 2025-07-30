import "./style.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import parse from 'html-react-parser';
import truncate from 'truncate-html';

//images
import { Image } from "../../assets/images";


//components
import { AppOrangeBtn, AppHoloBtn, AppBtn } from "../Buttons";

import { ServiceDataType } from "../../store/categorySlice";
import { BlogDataType } from "../../store/blogSlice";

interface TaxQueCardProps {
  icon: string;
  title: string;
  summery: string;
}

import { ProductDataType } from "../../store/productSlice";
interface PriceCardProps {
  title: string;
  basicPrice: string;
  price: string;
  summary: string;
  fetures: string[];
  MostPopular: boolean;
  priceTabe: Number;
  index: Number;
  isMobile: boolean;
  productName: string;
  id: string;
  priceId: string;
}

interface MemberCardProps {
  name: string;
  possession: string;
  img: string;
  summary?: string;
}
interface FeaturesProps {
  title: string;
  summary: string;
}
interface BenefitsProps {
  title: string;
  summary: string;
  index: number;
}
interface jobcardProps {
  title: string;
  role: string;
  location: string;
  jobType: string;
  summary: string;
  requirements?: string[];
  responsibilities?: string[];
  Skill?: string[];
}


export const ServiceCard = ({
  imageUrl,
  title,
  summary,
  _id,
}: ServiceDataType) => {
  const Navigate = useNavigate();
  const categroyId = _id || "noId";

  const handleCategoryClick = () => {
    localStorage.setItem("selectedCategory", categroyId);
    Navigate("/products");
    GoTop();
  };
  const truncatedHTML = truncate(summary, 100, { byWords: false });

  return (
    <div className="serviceCard">
      <div className="svrCardHeader">
        <img src={Image.ITNIcon} />
        <p
          onClick={handleCategoryClick}
        >{title}</p>
      </div>
      <div className="hrLine"></div>
      <p className="svrCardSummery">
        {parse(truncatedHTML)}
      </p>
      <AppHoloBtn onClick={handleCategoryClick} btnText="Red More" height="30px" width="130px" />
      <div className="sveCardImgBox">
        <img src={imageUrl} alt="" />
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
  summary,
  fetures,
  MostPopular,
  priceTabe,
  index,
  isMobile,
  productName,
  id,
  priceId,
}: PriceCardProps) => {
  const Navigate = useNavigate();

  const handleBuyClick = () => {
    Navigate("/services/product-details/payment-checkout");
    GoTop();
    localStorage.setItem("planServiceId", id);
    localStorage.setItem("planServiceName", productName);
    localStorage.setItem("planPriceId", priceId);
  };

  return (
    <div
      style={{
        display: isMobile ? (priceTabe === index ? "block" : "none") : "block",
      }}
      className={MostPopular ? "priceCard priceCardActive" : "priceCard"}
    >
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
        <p className="psSummery">{summary}</p>
        {MostPopular ? (
          <AppHoloBtn
            btnText="Get started Now"
            width="100%"
            onClick={handleBuyClick}
          />
        ) : (
          <AppOrangeBtn
            btnText="Get started Now"
            width="100%"
            onClick={handleBuyClick}
          />
        )}
      </div>
      <div className="pcSummerySection">
        {fetures.map((el: string, i: number) => (
          <div key={i} className="pcFeturesPera">
            <img src={Image.GreenTik} />
            <p key={i}>{el}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const BlogCard = ({
  title,
  date,
  blogText,
  imageUrl,
  _id,
}: BlogDataType) => {
  const Navigate = useNavigate();

  return (
    <div className="blogCard">
      <img src={imageUrl} className="blogImg" />
      <div className="BlogTextBox">
        <div className="BlogUserOutBox">
          <div className="BlogUserBox">
            <div className="buABox">
              <img src={Image.avatarIcom} />
              <p>Amit</p>
            </div>
            <div className="buABox">
              <img src={Image.watchIcom} />
              <p>{date}</p>
            </div>
          </div>
        </div>
        <p className="BlogTitle">{title}</p>
        <p className="BlogSummery">
          {blogText[0]?.summarys[0]?.summary.slice(0, 100)}
          {blogText[0]?.summarys[0]?.summary?.length > 100 ? "..." : "."}
        </p>
      </div>
      <img
        src={Image.UPRightArrow}
        className="UpRArrow"
        onClick={() => {
          if (_id) {
            localStorage.setItem("blogId", _id);
          }
          Navigate("/blog-details");
          GoTop();
        }}
      />
    </div>
  );
};

export const MemberCard = ({ name, possession, img }: MemberCardProps) => {
  return (
    <div className="userCard">
      <img src={img} className="ucAvatarImg" />
      <div className="mbCardInfo">
        <p className="mbName">{name}</p>
        <p className="mbpos">{possession}</p>
        <div className="mbIconBox">
          <img src={Image.facebookIcon} />
          <img src={Image.twittercon} />
          <img src={Image.linkdinIcon} />
        </div>
      </div>
    </div>
  );
};

export const BlogRowCard = ({
  title,
  blogText,
  date,
  imageUrl,
  _id,
}: BlogDataType) => {
  const Navigate = useNavigate();
  const truncatedHTML = truncate(blogText[0]?.summarys[0]?.summary, 200, { byWords: false });

  return (
    <div className="blogRowCard">
      <img src={imageUrl} className="blogImg" />
      <div className="BlogTextBox">
        <div className="blogBUserInfoBox">
          <div className="buABox">
            <img src={Image.avatarIcom} />
            {/* <p>Amit</p> */}
          </div>

          <div className="buABox">
            <img src={Image.watchIcom} />
            <p>{date}</p>
          </div>
        </div>

        <p
          onClick={() => {
            if (_id) {
              localStorage.setItem("blogId", _id);
            }
            Navigate("/blog-details");
            GoTop();
          }}
          className="BlogTitle">{title}</p>
        <p className="BlogSummery">
          {parse(truncatedHTML)}
          {/* {blogText[0]?.summarys[0]?.summary?.length > 200 ? "..." : "."} */}
        </p>
        <img
          src={Image.UPRightArrow}
          className="UpRArrow"
          onClick={() => {
            if (_id) {
              localStorage.setItem("blogId", _id);
            }
            Navigate("/blog-details");
            GoTop();
          }}
        />
      </div>
    </div>
  );
};
export const GoTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const TeamCard = ({
  name,
  possession,
  img,
  summary,
}: MemberCardProps) => {
  return (
    <div className="teamCard">
      <div className="userCard">
        <img src={img} className="ucAvatarImg" />
        <div className="mbCardInfo">
          <div className="mbIconBox">
            <img src={Image.facebookIcon} />
            <img src={Image.twittercon} />
            <img src={Image.linkdinIcon} />
          </div>
        </div>
      </div>
      <div className="teamNote">
        <p className="mbName">{name}</p>
        <p className="mbpos">{possession}</p>
        <p className="mbposSummary">{summary}</p>
      </div>
    </div>
  );
};

export const FeaturesCard = ({ title, summary }: FeaturesProps) => {
  return (
    <div className="featuresCard">
      <img src={Image.featuresIcon} alt="" />
      <p className="fecTitle">{title}</p>
      <div className="fcHrLine"></div>
      <p className="fecSummery">{summary}</p>
    </div>
  );
};

export const BenefitsCard = ({ title, summary, index }: BenefitsProps) => {
  return (
    <div className="benefiteCard">
      <p className="fecTitle">
        {index + 1}. {title}
      </p>
      <p className="fecSummery">{summary}</p>
    </div>
  );
};
export const JobCard = ({
  title,
  role,
  location,
  jobType,
  summary,
}: jobcardProps) => {
  const Navigate = useNavigate();

  return (
    <div className="jobCard">
      <div className="roleBox">
        <div className="roleLabel">
          <p>{role}</p>
        </div>
        <div className="hrYline"></div>
      </div>
      <p className="jobCardTitle">{title}</p>
      <div className="jcInfobox">
        <div className="buABox">
          <img src={Image.locationIcon} />
          <p>{location}</p>
        </div>
        <div className="buABox">
          <img src={Image.watchYIcom} />
          <p>{jobType}</p>
        </div>
      </div>
      <p className="jobCardSummary">{summary.slice(0, 102)}...</p>
      <AppHoloBtn
        btnText="Apply Now"
        icon={Image.blackArrowIcon}
        width="60%"
        onClick={() => {
          Navigate("/career-details");
          GoTop();
        }}
      />
    </div>
  );
};

export const ProductCard = ({
  title,
  feturePoints,
  priceData,
  _id,
}: ProductDataType) => {
  const Navigate = useNavigate();
  const ProductStanderPrice = priceData?.length ? priceData[0]?.price : "2999";
  const ProductBasicPrice = priceData?.length
    ? priceData[0]?.basicPrice
    : "4599";
  const ProductId = _id ? _id : "noId";

  const handleClickProductCard = () => {
    localStorage.setItem("selectedProduct", ProductId);
    Navigate("/services/product-details");
    GoTop();
  }

  return (
    <div className="serviceCard productCard">
      <div className="svrCardHeader">
        <img src={Image.ITNIcon} />
        <p
          onClick={handleClickProductCard}
        >{title}</p>
      </div>
      <div className="hrLine"></div>

      <div className="pcRatingBox">
        <p className="pcbasPrice">
          Basic Price: {ProductBasicPrice} <span></span>
        </p>
        <div className="pcRating">
          <p>4.8</p>
          <div className="ratingBOx">
            <img src={Image.star} />
            <img src={Image.star} />
            <img src={Image.star} />
            <img src={Image.star} />
          </div>
        </div>
      </div>
      <div className="pcPrict">
        <span>Price: </span>
        <p>
          {" "}
          ₹{ProductStanderPrice} <samp>/month</samp>
        </p>
      </div>
      <div className="pcFeturesBox">
        {feturePoints?.map((el, i) => (
          <div key={i} className="checkBox">
            <img src={Image.greenTik2} alt="" />
            <p>{el?.title}</p>
          </div>
        ))}
      </div>
      <div className="pcBtnBox">
        <AppHoloBtn
          btnText="Choose Plan"
          height="40px"
          width="30%"
          onClick={handleClickProductCard}
        />
      </div>
    </div>
  );
};

export const Reloader = (del: number) => {
  setTimeout(() => {
    window.location.reload();
  }, del);
};

interface loadingProps {
  loding: boolean;
}
export const Loader = ({ loding }: loadingProps) => {
  useEffect(() => {
    const element = document.querySelector(".mainBoxActive") as HTMLElement;

    if (element) {
      if (loding) {
        element.style.overflow = "hidden";
      } else {
        element.style.overflow = "scroll";
      }
    }
  }, [loding]);

  return (
    <div className={loding ? "loaderBox ActiveloaderBox" : "loaderBox"}>
      {/* <img src={loaderImg} alt="loader" /> */}
      <h3>Loading..</h3>
    </div>
  );
};

interface dropProps {
  setDropVal: any;
  list?: Number[] | String[];
  defaultVal: string;
  width?: string;
}
export const DropBox = ({ setDropVal, list, defaultVal, width }: dropProps) => {
  return (
    <select
      style={{ width: width || "100%" }}
      className="DropBox"
      onChange={(e) => setDropVal(e.target.value)}
    >
      <option>{defaultVal}</option>
      {list?.map((el, i: number) => (
        <option key={i}>{String(el)}</option>
      ))}
    </select>
  );
};
