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
export const DifferenceTableData = [
  {
    KeyFeature: "Applicable Law",
    PrivateLimitedCompany: "Companies Act, 2013",
    PublicLimitedCompany: "Companies Act, 2013",
    LLP: "LLP Act, 2008",
    SoleProprietorship: "No specified Act",
    PartnershipFirm: "Partnership Act, 1932",
  },
  {
    KeyFeature: "Ownership Structure",
    PrivateLimitedCompany: "2–200 shareholders",
    PublicLimitedCompany: "Unlimited public shareholders",
    LLP: "2 or more partners",
    SoleProprietorship: "Single owner",
    PartnershipFirm: "2–50 partners",
  },
];
export const serviceProduct = [
  {
    title: "GST Compliance and Filing",
    coverImg: GSTImg,
    fetureTitle:
      "GST Registration Fees in India: Charges, Penalties & Payment Process",
    fetureSummary:
      "Stay on top of your GST obligations with our comprehensive compliance solutions. From timely filing to advisory services, we handle it all so you can focus on growing your business.",
    feturePoints: [
      {
        title: "Affordable & Transparent",
        summary:
          "GST registration in India is free of charge when applied for through the official GST portal (www.gst.gov.in).",
      },
      {
        title: "Comprehensive Compliance",
        summary:
          "GST registration in India is free of charge when applied for through the official GST portal (www.gst.gov.in).",
      },
      {
        title: "3. Post-Incorporation Benefits",
        summary:
          "GST registration in India is free of charge when applied for through the official GST portal (www.gst.gov.in).",
      },
      {
        title: "Trusted by Startups",
        summary:
          "GST registration in India is free of charge when applied for through the official GST portal (www.gst.gov.in).",
      },
    ],
    priceData: priceCardData,
    productDetails: [
      {
        navText: "Overview",
        title: "",
        summary: [
          "Starting a private limited company in India is a preferred option for entrepreneurs aiming to establish professional and recognised businesses. Governed by the Companies Act, 2013, and regulated by the Ministry of Corporate Affairs (MCA), this business structure offers benefits like limited liability, enhanced credibility, and growth opportunities.",
          "The process involves submitting the SPICe+ form, obtaining Digital Signature Certificates (DSC) for directors, and securing Director Identification Numbers (DIN). Once approved by the Registrar of Companies (RoC), your business receives a Certificate of Incorporation, making it a separate legal entity. This allows the company to own assets, sign contracts, and operate independently.",
          "The process involves submitting the SPICe+ form, obtaining Digital Signature Certificates (DSC) for directors, and securing Director Identification Numbers (DIN). Once approved by the Registrar of Companies (RoC), your business receives a Certificate of Incorporation, making it a separate legal entity. This allows the company to own assets, sign contracts, and operate independently.",
          "A private limited company is the ideal choice for entrepreneurs seeking scalability, structured growth, and funding opportunities. While the process may involve challenges like name approvals or regulatory steps, expert guidance ensures a seamless experience.",
          "At Vakilsearch, we handle every step of the registration process, from documentation to compliance, so you can focus on growing your business confidently and efficiently.",
        ],
      },
      {
        navText: "Private Limited Company",
        title: "What Is a Private Limited Company ?",
        summary: [
          "A private limited company (commonly abbreviated as Pvt Ltd) is considered a separate legal entity from its owners, offering a secure framework for operations while safeguarding the personal assets of its members. This business structure, governed by the Companies Act, 2013, is popular among entrepreneurs and small to medium-sized businesses (SMEs) for its combination of limited liability protection, ownership control, and scalability.",
          "For instance, startups like Swiggy began as private limited companies due to their ability to secure venture capital funding while maintaining limited liability for founders.",
          "Unlike public companies, a private limited company restricts the transfer of shares and operates with a focused group of stakeholders. This makes it ideal for businesses seeking operational independence, confidentiality, and long-term growth.",
        ],
        BulletPoints: [
          {
            title: "Restricts the Transfer of Shares",
            text: "Shareholders cannot freely transfer their shares to the public or external parties. This restriction ensures that ownership remains within a close group of trusted individuals, protecting the company’s stability.",
          },
          {
            title: "Limits the Number of Members",
            text: "A private limited company can have a maximum of 200 members, excluding current and former employees who hold shares. This limit ensures the company remains a private entity. (Exception: A One Person Company (OPC) can have only one member.)",
          },
          {
            title: "Prohibits Public Invitations",
            text: "The company is not allowed to invite the public to subscribe to its shares, debentures, or other securities. This makes private limited companies more focused on raising capital privately, such as through friends, family, or institutional investors.",
          },
        ],
        noticeBox: {
          title: "Companies Act, 2013",
          summary:
            "The Companies Act 2013 (No. 18 of 2013) is the primary source of Indian company law. It received presidential assent on 29 August 2013 and largely replaced the Companies Act 1956. The Act was implemented in stages. Section 1 came into force on 30 August 2013. 98 sections became effective on 12 September 2013 with some changes. Another 183 sections were enforced from 1 April 2014.",
        },
      },
      {
        navText: "Key Features",
        title:
          "What Are the Key Features and Benefits of a Private Limited Company?",
        summary: [
          "A Private Limited Company provides an ideal business structure that combines legal protections, operational flexibility, and growth opportunities, making it a preferred choice for entrepreneurs and small to medium-sized businesses. Here are the 10 key features and 7 benefits of a Private Limited Company.",
        ],
        keyFeatureCardData: keyFeatureData,
      },
      {
        navText: "Benefits of a Private Limited Company",
        title: "Benefits",
        summary: [
          "A Private Limited Company offers a range of advantages, making it a preferred choice for entrepreneurs and growing businesses. From ease of raising capital to legal protections, here’s why businesses opt for this structure:",
        ],
        benefiteCardData: benefitData,
      },
      {
        navText: "Difference",
        title:
          "Difference Between Private Limited Company and Other Business Structures",
        summary: [
          "The main difference between a Private Limited Company (Pvt Ltd) and other business structures lies in the level of legal protection, ownership flexibility, and compliance requirements they offer. A Pvt Ltd company is often preferred for its ability to limit personal liability, attract investors, and ensure operational continuity. In contrast, structures like Sole Proprietorship, Partnership, and Limited Liability Partnership (LLP) have their own unique features and limitations.",
          "This table highlights the key differences between Private Limited Companies and other business structures to help you choose the one that fits your business needs best.",
        ],
        tableData: {
          header: [
            "Key Feature",
            "Private Limited Company",
            "Public Limited Company",
            "LLP (Limited Liability Partnership)",
            "Sole Proprietorship",
            "Partnership Firm",
          ],
          row: [
            {
              KeyFeature: "Applicable Law",
              PrivateLimitedCompany: "Companies Act, 2013",
              PublicLimitedCompany: "Companies Act, 2013",
              LLP: "LLP Act, 2008",
              SoleProprietorship: "No specified Act",
              PartnershipFirm: "Partnership Act, 1932",
            },
            {
              KeyFeature: "Ownership Structure",
              PrivateLimitedCompany: "2–200 shareholders",
              PublicLimitedCompany: "Unlimited public shareholders",
              LLP: "2 or more partners",
              SoleProprietorship: "Single owner",
              PartnershipFirm: "2–50 partners",
            },
          ],
        },
      },
      {
        navText: "Documents Required",
        title:
          "What Are the Documents Required for Private Limited Company Registration?",
        summary: [
          "Registering a Private Limited Company in India involves submitting key documents that verify the identity and address of the people and entities involved. These documents are required to meet the regulations set by the Ministry of Corporate Affairs (MCA) and ensure the company complies with all legal standards.",
          "The type of documents you’ll need depends on your role—whether you’re an Indian director, a foreign director, or a corporate shareholder. In addition to personal identification and address proofs, documents like a registered office address, Digital Signature Certificate (DSC), and Director Identification Number (DIN) are mandatory for the company’s incorporation.",
          "To make it easier, the table below lists all the documents required for Private Limited Company registration, organized by category for quick reference.",
        ],
        tableData: {
          header: ["Category", "Document Type", "Specific Examples", "Purpose"],
          row: [
            {
              Category: "Applicable Law",
              DocumentType: "Companies Act, 2013",
              PublicLimitedCompany: "Companies Act, 2013",
              LLP: "LLP Act, 2008",
              SoleProprietorship: "No specified Act",
              PartnershipFirm: "Partnership Act, 1932",
            },
            {
              KeyFeature: "Ownership Structure",
              PrivateLimitedCompany: "2–200 shareholders",
              PublicLimitedCompany: "Unlimited public shareholders",
              LLP: "2 or more partners",
              SoleProprietorship: "Single owner",
              PartnershipFirm: "2–50 partners",
            },
          ],
        },
      },
    ],
  },
];

export const faqData = [
  {
    question:
      "What is the due date by which a taxpayer should get his accounts audited?",
    answer:
      "A person who has to follow section 44AB and does not get his accounts audited or submit the report as per section 44AB for any year or years may face a penalty from the Assessing Officer.",
  },
  {
    question:
      "What is the penalty for not getting the accounts audited as required by section 44AB?",
    answer:
      "A person who has to follow section 44AB and does not get his accounts audited or submit the report as per section 44AB for any year or years may face a penalty from the Assessing Officer.",
  },
  {
    question: "How many tax audit reports can a Chartered Accountant sign?",
    answer:
      "A person who has to follow section 44AB and does not get his accounts audited or submit the report as per section 44AB for any year or years may face a penalty from the Assessing Officer.",
  },
  {
    question: "Who is exempt from undergoing a tax audit?",
    answer:
      "A person who has to follow section 44AB and does not get his accounts audited or submit the report as per section 44AB for any year or years may face a penalty from the Assessing Officer.",
  },
  {
    question: "When is the apt time to start tax planning?",
    answer:
      "A person who has to follow section 44AB and does not get his accounts audited or submit the report as per section 44AB for any year or years may face a penalty from the Assessing Officer.",
  },
  {
    question: "I know nothing about taxes; how can I start tax planning?",
    answer:
      "A person who has to follow section 44AB and does not get his accounts audited or submit the report as per section 44AB for any year or years may face a penalty from the Assessing Officer.",
  },
  {
    question: "Apart from 80C, what other ways can I save on taxes?",
    answer:
      "A person who has to follow section 44AB and does not get his accounts audited or submit the report as per section 44AB for any year or years may face a penalty from the Assessing Officer.",
  },
  {
    question:
      "What are some common mistakes people make when trying to save on taxes?",
    answer:
      "A person who has to follow section 44AB and does not get his accounts audited or submit the report as per section 44AB for any year or years may face a penalty from the Assessing Officer.",
  },
];
