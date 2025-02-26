import React from "react";
import "./style.css";

//Images
import smPageBG from "../../assets/images/smPageBG.svg";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}

export default function PrivacyPolicy({ setCurrentNav, currentNav }: NavProps) {
  setCurrentNav("");
  return (
    <>
      <div className="SMHeroBox">
        <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
        <img src={smPageBG} className="smPageBG" />
      </div>
      <div className="policyMainBox">
        <p className="sectionHeader">Privacy Policy</p>
        <p className="policySubText">
          At SSBA Innovations Ltd, which we'll refer to as "SSBA" for brevity,
          we hold a strong commitment to safeguarding personal information that
          pertains to our clients and other individuals. Our dedication extends
          to full compliance with the Information Technology Act, 2000, and any
          associated amendments, as well as all other pertinent laws in effect
          within India. Our highest priority is nurturing the trust and
          relationships we have with our clients.
        </p>

        <div className="noticeBox">
          <p className="policyNoteHText">To Whom This Privacy Policy Applies</p>
          <p className="policyNoteText">
            This privacy policy is relevant to a range of individuals and
            entities, including but not limited to the following:
          </p>
          <ul>
            <li>
               Clients: These are the individuals who have engaged with our
              services and entrusted us with their personal information.
            </li>
            <li>
              Advisers: This category includes professionals and experts who
              collaborate with us or provide guidance to our clients.
            </li>
            <li>
              Visitors: Anyone who accesses our website or app, whether they are
              casual visitors or registered users, falls under this
              classification.
            </li>
            <li>
              Service Providers: This pertains to entities and individuals who
              offer services to us or act on our behalf.
            </li>
            <li>
              Enquirers: People who inquire about our services, policies, or
              other related matters.
            </li>
            <li>
              Direct and/or Indirect Beneficiaries: Those who directly benefit
              from our services or individuals who indirectly gain advantages
              from our offerings.
            </li>
          </ul>
          <p className="policyNoteText">
            For the sake of brevity, we'll collectively refer to all of these
            categories as "you." This policy applies to all aspects of our
            website, app, and the various products and services we provide,
            which encompass, among other offerings, Income Tax Return filing,
            Tax Notices, Tax Scrutiny, Tax Planning Applications, and related
            ancillary products and services.
          </p>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">
            Functionality of This Privacy Policy
          </p>
          <p className="policyNoteText">
            This privacy policy serves the purpose of elucidating our
            privacy-related protocols and encompasses the following key facets:
          </p>
          <ul>
            <li>
              Information We May Collect About You: This section delineates the
              types of personal information that we may gather from you.
            </li>
            <li>
              Why We Collect Information About You: Here, we expound on the
              rationale behind the collection of your personal data.
            </li>
            <li>
              How We May Use Your Personal Information: This segment elucidates
              the various ways in which we might utilize your personal
              information.
            </li>
            <li>
              Consent: We discuss the role of consent in the processing of your
              personal data, in compliance with applicable laws.
            </li>
            <li>
              Sharing Your Personal Information: This section clarifies the
              circumstances under which we might share your personal
              information, ensuring adherence to confidentiality norms.
            </li>
            <li>
              Transmission, Storage, and Security of Your Personal Information:
              We outline our commitment to safeguarding your data and the
              measures we employ for this purpose.
            </li>
            <li>
              Retention of Your Personal Information: This part explains the
              duration for which we retain your personal information and the
              reasons for doing so.
            </li>
            <li>
              Your Rights: Here, you'll find information about your rights
              regarding your personal data in accordance with relevant legal
              provisions.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
