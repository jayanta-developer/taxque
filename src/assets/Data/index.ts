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
    summery: "Everything in Business Income plus capital gain income.",
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


export const jobData = [
  {
    title: "Accounting and Taxation Analyst",
    role: "Manager",
    location: "Chennai",
    jobType: "Full Time",
    summary:
      "The key responsibilities are to understand Client requirements and suggest suitable solutions through our services, maintain a good relationship with the Clients and build the existing database.",
    requirements: [
      "Law Degree with 1 to 2 years of legal practice experience.",
      "Should be able to speak Tamil, English and Hindi Fluently. Knowledge of Native languages are added advantage.",
      "Excellent communication and interpersonal skills for client consultations and teamwork.",
      "Self-motivated, with effective time management and the ability to meet deadlines.",
      "Tech-savvy with an interest in leveraging technology for legal solutions.",
    ],
    responsibilities: [
      "Provide expert legal advice and consultation to clients across diverse subject matters.",
      "Understand client requirements and deliver effective legal solutions to address their needs.",
      "Introduce our comprehensive legal services based on initial consultations, prioritizing revenue growth and quality work.",
      "Draft and review a variety of commercial documents, ensuring accuracy and compliance.",
      "Collaborate with external counsels for litigation management, adhering to strict schedules.",
      "Demonstrate a strong sense of autonomy, working efficiently without constant supervision.",
      "Continuously update legal knowledge and adapt to evolving industry trends.",
    ],
    Skill: [
      "Time Management: Adept at handling multiple assignments within tight deadlines in a fast-paced environment.",
      "Problem-Solving: Strong analytical skills to address complex legal issues and devise innovative solutions.",
      "Technology Integration: Comfortable leveraging legal tech tools to enhance services and streamline processes.",
      "Self-Motivation: Initiative to work independently, manage tasks efficiently, and stay productive without constant supervision.",
      "Should be able to speak Tamil, English and Hindi Fluently. Knowledge of Native languages are added advantage.",
      "Excellent communication and interpersonal skills for client consultations and teamwork.",
      "Self-motivated, with effective time management and the ability to meet deadlines.",
      "Tech-savvy with an interest in leveraging technology for legal solutions",
    ],
  },
  {
    title: "Legal Consultant - Money Recovery",
    role: "Consultant",
    location: "Chennai",
    jobType: "Full Time",
    summary:
      "The key responsibilities are to handle a wide range of legal matters, including money recovery, property possession, criminal cases, financial frauds (cyber cases), and property registrations.",
    requirements: [
      "Law Degree with 1 to 2 years of legal practice experience.",
      "Should be able to speak Tamil, English and Hindi Fluently. Knowledge of Native languages are added advantage.",
      "Excellent communication and interpersonal skills for client consultations and teamwork.",
      "Self-motivated, with effective time management and the ability to meet deadlines.",
      "Tech-savvy with an interest in leveraging technology for legal solutions.",
    ],
    responsibilities: [
      "Provide expert legal advice and consultation to clients across diverse subject matters.",
      "Understand client requirements and deliver effective legal solutions to address their needs.",
      "Introduce our comprehensive legal services based on initial consultations, prioritizing revenue growth and quality work.",
      "Draft and review a variety of commercial documents, ensuring accuracy and compliance.",
      "Collaborate with external counsels for litigation management, adhering to strict schedules.",
      "Demonstrate a strong sense of autonomy, working efficiently without constant supervision.",
      "Continuously update legal knowledge and adapt to evolving industry trends.",
    ],
    Skill: [
      "Time Management: Adept at handling multiple assignments within tight deadlines in a fast-paced environment.",
      "Problem-Solving: Strong analytical skills to address complex legal issues and devise innovative solutions.",
      "Technology Integration: Comfortable leveraging legal tech tools to enhance services and streamline processes.",
      "Self-Motivation: Initiative to work independently, manage tasks efficiently, and stay productive without constant supervision.",
      "Should be able to speak Tamil, English and Hindi Fluently. Knowledge of Native languages are added advantage.",
      "Excellent communication and interpersonal skills for client consultations and teamwork.",
      "Self-motivated, with effective time management and the ability to meet deadlines.",
      "Tech-savvy with an interest in leveraging technology for legal solutions",
    ],
  },
  {
    title: "Head – Learning and Development",
    role: "ROC Expert",
    location: "Chennai",
    jobType: "Full Time",
    summary:
      "You will be responsible for creating and maintaining structures and support for training and professional development, leading training initiatives, coordinating with stakeholders, driving process improvements, and developing a digital repository of training materials to foster a culture of continuous learning within the organization.",
    requirements: [
      "Law Degree with 1 to 2 years of legal practice experience.",
      "Should be able to speak Tamil, English and Hindi Fluently. Knowledge of Native languages are added advantage.",
      "Excellent communication and interpersonal skills for client consultations and teamwork.",
      "Self-motivated, with effective time management and the ability to meet deadlines.",
      "Tech-savvy with an interest in leveraging technology for legal solutions.",
    ],
    responsibilities: [
      "Provide expert legal advice and consultation to clients across diverse subject matters.",
      "Understand client requirements and deliver effective legal solutions to address their needs.",
      "Introduce our comprehensive legal services based on initial consultations, prioritizing revenue growth and quality work.",
      "Draft and review a variety of commercial documents, ensuring accuracy and compliance.",
      "Collaborate with external counsels for litigation management, adhering to strict schedules.",
      "Demonstrate a strong sense of autonomy, working efficiently without constant supervision.",
      "Continuously update legal knowledge and adapt to evolving industry trends.",
    ],
    Skill: [
      "Time Management: Adept at handling multiple assignments within tight deadlines in a fast-paced environment.",
      "Problem-Solving: Strong analytical skills to address complex legal issues and devise innovative solutions.",
      "Technology Integration: Comfortable leveraging legal tech tools to enhance services and streamline processes.",
      "Self-Motivation: Initiative to work independently, manage tasks efficiently, and stay productive without constant supervision.",
      "Should be able to speak Tamil, English and Hindi Fluently. Knowledge of Native languages are added advantage.",
      "Excellent communication and interpersonal skills for client consultations and teamwork.",
      "Self-motivated, with effective time management and the ability to meet deadlines.",
      "Tech-savvy with an interest in leveraging technology for legal solutions",
    ],
  },
  {
    title: "Training and Development Role",
    role: "Trainer",
    location: "Chennai",
    jobType: "Full Time",
    summary:
      "You will be responsible for creating and maintaining structures and support for training and professional development, leading training initiatives, coordinating with stakeholders, driving process improvements, and developing a digital repository of training materials to foster a culture of continuous learning within the organization.",
    requirements: [
      "Law Degree with 1 to 2 years of legal practice experience.",
      "Should be able to speak Tamil, English and Hindi Fluently. Knowledge of Native languages are added advantage.",
      "Excellent communication and interpersonal skills for client consultations and teamwork.",
      "Self-motivated, with effective time management and the ability to meet deadlines.",
      "Tech-savvy with an interest in leveraging technology for legal solutions.",
    ],
    responsibilities: [
      "Provide expert legal advice and consultation to clients across diverse subject matters.",
      "Understand client requirements and deliver effective legal solutions to address their needs.",
      "Introduce our comprehensive legal services based on initial consultations, prioritizing revenue growth and quality work.",
      "Draft and review a variety of commercial documents, ensuring accuracy and compliance.",
      "Collaborate with external counsels for litigation management, adhering to strict schedules.",
      "Demonstrate a strong sense of autonomy, working efficiently without constant supervision.",
      "Continuously update legal knowledge and adapt to evolving industry trends.",
    ],
    Skill: [
      "Time Management: Adept at handling multiple assignments within tight deadlines in a fast-paced environment.",
      "Problem-Solving: Strong analytical skills to address complex legal issues and devise innovative solutions.",
      "Technology Integration: Comfortable leveraging legal tech tools to enhance services and streamline processes.",
      "Self-Motivation: Initiative to work independently, manage tasks efficiently, and stay productive without constant supervision.",
      "Should be able to speak Tamil, English and Hindi Fluently. Knowledge of Native languages are added advantage.",
      "Excellent communication and interpersonal skills for client consultations and teamwork.",
      "Self-motivated, with effective time management and the ability to meet deadlines.",
      "Tech-savvy with an interest in leveraging technology for legal solutions",
    ],
  },
  {
    title: "Financial Analyst and Legal Consultant",
    role: "Consultant",
    location: "Chennai",
    jobType: "Full Time",
    summary:
      "We are looking for a dynamic Senior Legal Consultant - Talk to Experts to lead our legal team, drive business growth, and cultivate client relationships. This role combines traditional legal responsibilities with a strategic focus on identifying business opportunities, overseeing client acquisition, and ensuring high-quality service delivery. The ideal candidate is proactive, solution-oriented, and committed to both legal excellence and business development.",
    requirements: [
      "Law Degree with 1 to 2 years of legal practice experience.",
      "Should be able to speak Tamil, English and Hindi Fluently. Knowledge of Native languages are added advantage.",
      "Excellent communication and interpersonal skills for client consultations and teamwork.",
      "Self-motivated, with effective time management and the ability to meet deadlines.",
      "Tech-savvy with an interest in leveraging technology for legal solutions.",
    ],
    responsibilities: [
      "Provide expert legal advice and consultation to clients across diverse subject matters.",
      "Understand client requirements and deliver effective legal solutions to address their needs.",
      "Introduce our comprehensive legal services based on initial consultations, prioritizing revenue growth and quality work.",
      "Draft and review a variety of commercial documents, ensuring accuracy and compliance.",
      "Collaborate with external counsels for litigation management, adhering to strict schedules.",
      "Demonstrate a strong sense of autonomy, working efficiently without constant supervision.",
      "Continuously update legal knowledge and adapt to evolving industry trends.",
    ],
    Skill: [
      "Time Management: Adept at handling multiple assignments within tight deadlines in a fast-paced environment.",
      "Problem-Solving: Strong analytical skills to address complex legal issues and devise innovative solutions.",
      "Technology Integration: Comfortable leveraging legal tech tools to enhance services and streamline processes.",
      "Self-Motivation: Initiative to work independently, manage tasks efficiently, and stay productive without constant supervision.",
      "Should be able to speak Tamil, English and Hindi Fluently. Knowledge of Native languages are added advantage.",
      "Excellent communication and interpersonal skills for client consultations and teamwork.",
      "Self-motivated, with effective time management and the ability to meet deadlines.",
      "Tech-savvy with an interest in leveraging technology for legal solutions",
    ],
  },
  {
    title: "Business Advisor And SEO Specialist",
    role: "Business Specialist",
    location: "Chennai",
    jobType: "Full Time",
    summary:
      "The key responsibilities include providing guidance to companies & clients regarding corporate governance and ensuring that they comply with legal and regulatory requirements.",
    requirements: [
      "Law Degree with 1 to 2 years of legal practice experience.",
      "Should be able to speak Tamil, English and Hindi Fluently. Knowledge of Native languages are added advantage.",
      "Excellent communication and interpersonal skills for client consultations and teamwork.",
      "Self-motivated, with effective time management and the ability to meet deadlines.",
      "Tech-savvy with an interest in leveraging technology for legal solutions.",
    ],
    responsibilities: [
      "Provide expert legal advice and consultation to clients across diverse subject matters.",
      "Understand client requirements and deliver effective legal solutions to address their needs.",
      "Introduce our comprehensive legal services based on initial consultations, prioritizing revenue growth and quality work.",
      "Draft and review a variety of commercial documents, ensuring accuracy and compliance.",
      "Collaborate with external counsels for litigation management, adhering to strict schedules.",
      "Demonstrate a strong sense of autonomy, working efficiently without constant supervision.",
      "Continuously update legal knowledge and adapt to evolving industry trends.",
    ],
    Skill: [
      "Time Management: Adept at handling multiple assignments within tight deadlines in a fast-paced environment.",
      "Problem-Solving: Strong analytical skills to address complex legal issues and devise innovative solutions.",
      "Technology Integration: Comfortable leveraging legal tech tools to enhance services and streamline processes.",
      "Self-Motivation: Initiative to work independently, manage tasks efficiently, and stay productive without constant supervision.",
      "Should be able to speak Tamil, English and Hindi Fluently. Knowledge of Native languages are added advantage.",
      "Excellent communication and interpersonal skills for client consultations and teamwork.",
      "Self-motivated, with effective time management and the ability to meet deadlines.",
      "Tech-savvy with an interest in leveraging technology for legal solutions",
    ],
  },
];


export const CityList = [
  "Connaught Place",
  "Karol Bagh",
  "Chanakyapuri",
  "South Extension",
  "Lajpat Nagar",
  "Saket",
  "Dwarka",
  "Vasant Kunj",
  "Rohini",
  "Mayur Vihar",
  "Okhla",
  "New Friends Colony",
  "Rajouri Garden",
  "Patel Nagar",
  "Tilak Nagar",
]
export const cityPin = [
  { city: "Connaught Place", pincode: "110001" },
  { city: "Karol Bagh", pincode: "110005" },
  { city: "Chanakyapuri", pincode: "110021" },
  { city: "South Extension", pincode: "110049" },
  { city: "Lajpat Nagar", pincode: "110024" },
  { city: "Saket", pincode: "110017" },
  { city: "Dwarka", pincode: "110075" },
  { city: "Vasant Kunj", pincode: "110070" },
  { city: "Rohini", pincode: "110085" },
  { city: "Mayur Vihar", pincode: "110091" },
  { city: "Okhla", pincode: "110020" },
  { city: "New Friends Colony", pincode: "110025" },
  { city: "Rajouri Garden", pincode: "110027" },
  { city: "Patel Nagar", pincode: "110008" },
  { city: "Tilak Nagar", pincode: "110018" }
]
