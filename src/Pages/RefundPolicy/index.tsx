import React from "react";
import "./style.css";

//Images
import smPageBG from "../../assets/images/smPageBG.svg";
import policyPointIcon from "../../assets/images/policyPointIcon.svg";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}

export default function RefundPolicy({ setCurrentNav, currentNav }: NavProps) {
  setCurrentNav("");
  return (
    <>
      <div className="SMHeroBox">
        <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
        <img src={smPageBG} className="smPageBG" />
      </div>
      <div className="policyMainBox">
        <p className="sectionHeader">Refund Policy</p>
        <p className="policySubText">
          At Taxque, we prioritize delivering top-notch services to our valued
          customers. We are aware that sometimes unexpected situations might
          necessitate a refund request. To provide you with a transparent
          understanding of our refund process, we have outlined our refund
          policy below.
        </p>

        <div className="policyBox">
          <div className="policyPoint">
            <img src={policyPointIcon} alt="" />
            <p>
              The Refund shall be only considered in the event there is a clear,
              visible deficiency with the service or product purchased from
              VakilSearch.
            </p>
          </div>
          <div className="policyPoint">
            <img src={policyPointIcon} alt="" />
            <p>
              In the event a customer has paid for a service and then requests
              for a refund only because there was a change in mind, the refund
              shall not be considered as there is no fault, defect, or onus on
              VakilSearch.
            </p>
          </div>
          <div className="policyPoint">
            <img src={policyPointIcon} alt="" />
            <p>
              efund requests shall not be entertained after the work has been
              shared with you in the event of change of mind. However, we shall
              give you the option of using the amount paid for by you.
            </p>
          </div>
          <div className="policyPoint">
            <img src={policyPointIcon} alt="" />
            <p>
              We make every effort to provide the service to you as per the
              specifications and timelines mentioned against each service or
              product purchased by you from VakilSearch, however if, due to any
              reason.
            </p>
          </div>
        </div>

        <p className="policyNoteHText">1.  Commencement Delay</p>
        <p className="policyNoteText">
          In the event that the TaxBuddy team fails to initiate the assigned
          activity within 24 hours of your payment, we will promptly provide a
          full refund. Your satisfaction is our priority, and we aim to ensure a
          swift start to your requested service.
        </p>

        <p className="policyNoteHText">2. Government Deadline Compliance</p>
        <p className="policyNoteText">
          In the case of the TaxBuddy team not meeting the specified completion
          date set by the Government of India, you are eligible for a full
          refund. We understand the importance of adhering to
          government-regulated timelines, and if we fail in this regard, we are
          committed to reimbursing your payment. <br />
          At TaxBuddy, we take customer satisfaction seriously and aim to offer
          the utmost transparency and convenience regarding our refund policy.
          If you find yourself in a situation where a refund is warranted and
          meet the eligibility criteria defined above, please don't hesitate to
          contact us. We are here to assist you promptly and ensure your
          financial well-being.
        </p>

        <div className="noticeBox">
          <p className="policyNoteHText">Refund Process & Timeline :</p>
          <p className="policyNoteText">
            At TaxBuddy, we understand that there might be situations where a
            customer needs to request a refund for our services. Initiating a
            refund is a straightforward process aimed at ensuring your
            satisfaction with our services. To request a refund, please reach
            out to our dedicated customer support team within 30 days of your
            service purchase. Our support team is here to assist you in this
            process. When contacting us, kindly provide one of the reasons
            mentioned in Point 2 of our refund policy. Furthermore, any
            additional relevant information about the issue you've encountered
            is greatly appreciated. Once we receive your request, our customer
            support team will promptly review it with the utmost care and
            consideration. Your satisfaction is our priority, and we will
            determine if a refund is appropriate based on the details you
            provide.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
