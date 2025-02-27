import "./style.css";

//images
import UPRightArrow from "../../assets/images/right-up.svg";
import GreenTik from "../../assets/images/GreenTik.svg";
import avatarIcom from "../../assets/images/Avatar.svg";
import watchIcom from "../../assets/images/timeIcon.svg";
import facebookIcon from "../../assets/images/facebookIcon.svg";
import twittercon from "../../assets/images/twitterIcon.svg";
import linkdinIcon from "../../assets/images/linkdinIcon.svg";
import roleLine from "../../assets/images/hrLine2.svg";
import locationIcon from "../../assets/images/locationYicon.svg";
import watchYIcom from "../../assets/images/watchYicon.svg";
import blackArrowIcon from "../../assets/images/blackArrowIcon.svg";

//components
import { AppBtn, AppHoloBtn } from "../Buttons";

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

interface MemberCardProps {
  name: string;
  possession: string;
  img: string;
  summary?: string;
}
interface FeaturesProps {
  title: string;
  summary: string;
  icon: string;
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
      <p className="svrCardSummery">{summery.slice(0, 100)}...</p>
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
          <div key={i} className="pcFeturesPera">
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

export const MemberCard = ({ name, possession, img }: MemberCardProps) => {
  return (
    <div className="userCard">
      <img src={img} className="ucAvatarImg" />
      <div className="mbCardInfo">
        <p className="mbName">{name}</p>
        <p className="mbpos">{possession}</p>
        <div className="mbIconBox">
          <img src={facebookIcon} />
          <img src={twittercon} />
          <img src={linkdinIcon} />
        </div>
      </div>
    </div>
  );
};

export const BlogRowCard = ({
  title,
  summery,
  date,
  userName,
  imgUrl,
}: BlogCardProps) => {
  return (
    <div className="blogRowCard">
      <img src={imgUrl} className="blogImg" />
      <div className="BlogTextBox">
        <div className="blogBUserInfoBox">
          <div className="buABox">
            <img src={avatarIcom} />
            <p>{userName}</p>
          </div>

          <div className="buABox">
            <img src={watchIcom} />
            <p>{date}</p>
          </div>
        </div>

        <p className="BlogTitle">{title}</p>
        <p className="BlogSummery">{summery}</p>
        <img src={UPRightArrow} className="UpRArrow" />
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
            <img src={facebookIcon} />
            <img src={twittercon} />
            <img src={linkdinIcon} />
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

export const FeaturesCard = ({ icon, title, summary }: FeaturesProps) => {
  return (
    <div className="featuresCard">
      <img src={icon} alt="" />
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
          <img src={locationIcon} />
          <p>{location}</p>
        </div>
        <div className="buABox">
          <img src={watchYIcom} />
          <p>{jobType}</p>
        </div>
      </div>
      <p className="jobCardSummary">{summary.slice(0, 102)}...</p>
      <AppHoloBtn btnText="Apply Now" icon={blackArrowIcon} width="60%" />
    </div>
  );
};
