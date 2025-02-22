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

import BlogImg1 from "../../assets/images/BlogImg1.png";
import BlogImg2 from "../../assets/images/BlogImg2.png";
import BlogImg3 from "../../assets/images/BlogImg3.png";

import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import user4 from "../../assets/images/user4.png";

import featuresIcon from "../images/featuresIcon.png";

interface paraType {
  title: string;
  id: string;
}

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
    title: "Expert Professionals",
    summery:
      "Our team consists of experienced tax consultants and chartered accountants.",
  },
  {
    icon: tailoredIcon,
    title: "Tailored Solutions",
    summery:
      "We understand that every business is unique. Our solutions are customized to fit your specific needs.",
  },
  {
    icon: timelyIcom,
    title: "Timely Service",
    summery: "We prioritize deadlines and ensure compliance without delays.",
  },
  {
    icon: securityIcon,
    title: "Data Security",
    summery:
      "Your financial data is handled with the utmost care and confidentiality.",
  },
];

export const priceCardData = [
  {
    title: "Standard Plan",
    basicPrice: "1274",
    price: "1274",
    summery: "Perfect for Small Teams, Startups, and Growing Businesses",
    fetures: [
      "Single & Multiple Employers",
      "Single & Multiple House Property",
      "Multiple Capital Gain Income",
      "Income from Other Sources",
      "Agriculture Income",
    ],
    MostPopular: false,
  },
  {
    title: "Business Plan",
    basicPrice: "4025",
    price: "2655",
    summery:
      "Everything in Business Income plus capital gain income & relief u/s 89.",
    fetures: [
      "F&O Income/Loss (Non Audit)",
      "Speculative Income",
      "Single & Multiple House Property",
      "Income from Other Sources",
      "Agriculture Income",
    ],
    MostPopular: true,
  },
  {
    title: "Premium Plan",
    basicPrice: "9485",
    price: "7968",
    summery: "Provides maximum tax benefit on your Indian income.",
    fetures: [
      "Salary Income",
      "House Property Income",
      "Interest & Other Sources Income",
      "Easy ITR preparation & e-filing",
      "Tax Payment Assistance",
    ],
    MostPopular: false,
  },
];

export const BlogData = [
  {
    title: "Legal Framework of Share holder Agreements in India",
    summery:
      "Properties are most budget friendly so you have are opportunity to find are the best the best...",
    date: "March 17, 2020",
    userName: "Vignesh",
    imgUrl: BlogImg1,
  },
  {
    title: "How Shareholders Agreement Defines Stakeholders Roles",
    summery:
      "Properties are most budget friendly so you have are opportunity to find are the best the best...",
    date: "March 17, 2020",
    userName: "Vignesh",
    imgUrl: BlogImg2,
  },
  {
    title: "Directorate General of Foreign Trade (DGFT) Portal",
    summery:
      "Properties are most budget friendly so you have are opportunity to find are the best the best...",
    date: "March 17, 2020",
    userName: "Vignesh",
    imgUrl: BlogImg3,
  },
  {
    title: "Legal Framework of Share holder Agreements in India",
    summery:
      "Properties are most budget friendly so you have are opportunity to find are the best the best...",
    date: "March 17, 2020",
    userName: "Vignesh",
    imgUrl: BlogImg1,
  },
  {
    title: "How Shareholders Agreement Defines Stakeholders Roles",
    summery:
      "Properties are most budget friendly so you have are opportunity to find are the best the best...",
    date: "March 17, 2020",
    userName: "Vignesh",
    imgUrl: BlogImg2,
  },
];

export const ChipData = [
  "Partnership",
  "Income Certificate",
  "Form 61A",
  "Form 16",
  "Aadhar",
  "Limited Liability Partnership",
  "ESI Rate",
  "Trademark Status",
  "Experience Certificate",
  "Police Clearance Certificate",
  "Income Tax Return",
  "PAN Card Download",
  "Unified Portal",
  "Partnership",
  "Copyright Registration",
  "Trade License",
  "Rent Receipt",
  "PAN Card Correction",
];

export const memberData = [
  {
    name: "Bhavna Ahuja",
    possession: "Managing Partner/CEO",
    img: user1,
    summary:
      "Bhavna Ahuja is a Harvard Business School graduate who worked at senior levels in the Indian Revenue Service for 13 years before resigning as Joint Commissioner at age 35.",
  },
  {
    name: "Saimon Jhonson",
    possession: "Tax Consultant",
    img: user2,
    summary:
      "Samir jayaswal is Starting as a Finance Associate to a Product Manager, followed by Taxation Manager and finally as Head of Operations, CA Brij's self-motivation led him to excel in every position.",
  },
  {
    name: "Samir Jayaswal",
    possession: "ROC Compliance Expert",
    img: user3,
    summary:
      "As the Founder of Fint, Srinivas Reddyhas dedicated his career to providing the Los Angeles County community with a higher standard of tax consulting services. Over the years.",
  },
  {
    name: "Kevin Pitersen",
    possession: "GST Specialist",
    img: user4,
    summary:
      "Saimon jhonson is the force that powers the development of SSBA. He holds a Masters in Computer Science and has over two decades of rich professional experience across Asia.",
  },
];

export const ParaSection: paraType[] = [
  {
    title: "Overview",
    id: "overview",
  },
  {
    title: "Private Limited Company",
    id: "plc",
  },
  {
    title: "Key Features",
    id: "KeyFeatures",
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
    title: "Why Vakilsearch",
    id: "WhyVakilsearch",
  },
  {
    title: "FAQ's",
    id: "FAQ",
  },
];

export const keyFeatureData = [
  {
    title: "Limited Liability Protection",
    summery:
      "Shareholders’ liability is limited to the unpaid amount of their shares. This safeguards personal assets from business liabilities.",
    icon: featuresIcon,
  },
  {
    title: "Separate Legal Entity",
    summery:
      "The company is treated as an independent entity, allowing it to own property, sue, and be sued in its own name.",
    icon: featuresIcon,
  },
  {
    title: "Perpetual Succession",
    summery:
      "The company continues to exist irrespective of changes in ownership or member status, ensuring continuity in business operations.",
    icon: featuresIcon,
  },
  {
    title: "Membership Flexibility",
    summery:
      "Requires at least 2 members and allows up to 200 members, making it suitable for small and medium-sized enterprises (SMEs).",
    icon: featuresIcon,
  },
  {
    title: "Restrictions on Share Transfers",
    summery:
      "Shares can only be transferred within the group, ensuring control over ownership and decision-making.",
    icon: featuresIcon,
  },
  {
    title: "No Minimum Paid-Up Capital",
    summery:
      "Entrepreneurs can register a private limited company in India without any mandatory requirement for minimum capital investment.",
    icon: featuresIcon,
  },
  {
    title: "Board of Directors",
    summery:
      "A private limited company must have at least 2 directors and can include up to 15 directors. If necessary, a special resolution can increase the limit.",
    icon: featuresIcon,
  },
  {
    title: "Privacy and Confidentiality",
    summery:
      "Private Limited Companies are not required to disclose sensitive information publicly, offering a competitive advantage in maintaining privacy.",
    icon: featuresIcon,
  },
  {
    title: " Eligibility for Foreign Direct Investment (FDI)",
    summery:
      "They can receive 100% FDI in most sectors without prior approval, enhancing global funding opportunities.",
    icon: featuresIcon,
  },
  {
    title: "Tax and Compliance Benefits",
    summery:
      "Smaller compliance burdens compared to public companies, with tax exemptions available for startups and small companies.",
    icon: featuresIcon,
  },
];

export const benefitData = [
  {
    title: "Ease of Raising Funds",
    summary:
      "Venture capitalists and private investors favor Private Limited Companies due to their structured ownership and legal protections.",
  },
  {
    title: "Enhanced Credibility",
    summary:
      "Registration under the Companies Act, 2013, increases trustworthiness with banks, clients, and investors.",
  },
  {
    title: "Attracts Talent",
    summary:
      "Ability to offer Employee Stock Ownership Plans (ESOPs) makes it attractive for skilled professionals.",
  },
  {
    title: "Operational Independence",
    summary:
      "Management has full control over business decisions without interference from external parties.",
  },
  {
    title: "Exemptions for Small Companies",
    summary:
      "Companies classified as “Small Companies” under Section 2(85) of the Companies Act enjoy reduced compliance and tax benefits.",
  },
  {
    title: "Continuity of Business",
    summary:
      "Perpetual succession ensures that the business operates seamlessly despite changes in ownership or the demise of a member.",
  },
  {
    title: "Legal and Financial Security",
    summary:
      "The separate legal identity and limited liability structure provide a secure foundation for long-term operations.",
  },
];
