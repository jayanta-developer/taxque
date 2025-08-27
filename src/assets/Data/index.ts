import gstIcon from "../../assets/images/gstIcon.svg";
import ITSIcon from "../../assets/images/ITSIcon.svg";
import ROCIcon from "../../assets/images/ROCicon.svg";
import BRIcon from "../../assets/images/BRIcon.svg";
import ITNIcon from "../../assets/images/ITNIcon.svg";
import PTFIcon from "../../assets/images/PTFIcon.svg";
import ITRFIcom from "../../assets/images/ITRFIcon.svg";
import TPSIcon from "../../assets/images/TPSIcon.svg";
import HPTIcon from "../../assets/images/HPTIcon.svg";

import GSTImg from "../../assets/images/GSTCardImg.png";
import ITSImg from "../../assets/images/ITSCardImg.png";
import ROCImg from "../../assets/images/ROCCardImg.png";
import BRImg from "../../assets/images/BRCardImg.png";
import ITNImg from "../../assets/images/ITNIimg.png";
import PTFImg from "../../assets/images/PTFImg.png";
import ITRFImg from "../../assets/images/ITRFImg.png";
import TPSImg from "../../assets/images/TPSImg.png";
import HPTImg from "../../assets/images/HPTImg.png";

import expertIcon from "../../assets/images/ExpertIcon.svg";
import tailoredIcon from "../../assets/images/tailoredIcon.svg";
import timelyIcom from "../../assets/images/timelyIcon.svg";
import securityIcon from "../../assets/images/securityIcon.svg";


interface paraType {
  title: string;
  id: string;
}
import type { LocationData } from "../../store/statusTypes"

export const servicesData = [
  {
    icon: gstIcon,
    img: GSTImg,
    title: "GST Compliance And Filing",
    summery:
      "Stay on top of your GST obligations with our comprehensive complian",
  },
  {
    icon: ITSIcon,
    img: ITSImg,
    title: "Income Tax Services",
    summery:
      "We provide end-to-end solutions for your income tax needs, includin",
  },
  {
    icon: ROCIcon,
    img: ROCImg,
    title: "ROC Compliance",
    summery: "Our experts ensure that your company meets all ROC requireme",
  },
  {
    icon: BRIcon,
    img: BRImg,
    title: "Business Registration",
    summery:
      "Starting a new business? Let us handle the legal formalities for you",
  },
  {
    icon: ITNIcon,
    img: ITNImg,
    title: "Income Tax Notice",
    summery: "You don’t need to stress over it. TaxBuddy is here to help",
  },
  {
    icon: PTFIcon,
    img: PTFImg,
    title: "Professional Tax Filing",
    summery:
      "Are you struggling with the complex and time-consuming professional tax filing process?",
  },
  {
    icon: ITRFIcom,
    img: ITRFImg,
    title: "Income Tax Returns filing",
    summery:
      "Filing income tax is always considered a complex process. However, it is not as tedious as it sounds. The Income Tax Department is rigorously working to make the filing process smooth and easy",
  },
  {
    icon: TPSIcon,
    img: TPSImg,
    title: "Tax Planning & Saving",
    summery:
      "Tax Planning Optimizer is an effective tool that helps you maximize your tax savings. You can plan your investments and save taxes using recommendations provided by the tool",
  },
  {
    icon: HPTIcon,
    img: HPTImg,
    title: "House Property tax",
    summery:
      "Owning a house is a dream of many, and we all save to fulfill this dream. However, owning a house property comes with tax compliance",
  },
];

export const TaxQueData = [
  {
    icon: expertIcon,
    title: "Unmatched Expertise",
    summery:
      "Our team of seasoned professionals delivers deep knowledge in accounting, taxation, and legal services",
  },
  {
    icon: tailoredIcon,
    title: "Customer-Centric Approach",
    summery:
      "We prioritize your needs with personalized support and prompt responses.",
  },
  {
    icon: timelyIcom,
    title: "Nationwide Reach",
    summery: "Serving clients across India, we understand both local and national compliance requirements",
  },
  {
    icon: securityIcon,
    title: "Technology-Driven",
    summery:
      "Our secure, user-friendly platform ensures seamless and efficient service delivery.",
  },
  {
    icon: expertIcon,
    title: "Affordable & Transparent",
    summery:
      "We provide high-value services at competitive prices with no hidden costs",
  },
];



export const ParaSection: paraType[] = [
  {
    title: "Overview",
    id: "overview",
  },
  {
    title: "Private Limited Company",
    id: "PrivateLimitedCompany",
  },
  {
    title: "Key Features",
    id: "Keyfeatures",
  },
  {
    title: "Benefits",
    id: "Benefits",
  },
  {
    title: "Difference",
    id: "Difference",
  },
  {
    title: "Documents Required",
    id: "DocumentsRequired",
  },
  {
    title: "MCA Compliance",
    id: "MCACompliance",
  },
  {
    title: "FAQ's",
    id: "FAQ",
  },
];



export const locationList: LocationData[] = [
  { state: "West Bengal", city: "Kolkata", pin: "700001" },
  { state: "West Bengal", city: "Howrah", pin: "711101" },
  { state: "Maharashtra", city: "Mumbai", pin: "400001" },
  { state: "Delhi", city: "New Delhi", pin: "110001" },
  { state: "Delhi", city: "New Delhi", pin: "7110001" },
];
