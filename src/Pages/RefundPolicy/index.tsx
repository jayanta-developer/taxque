import React from "react";
import "./style.css";

//Images
import smPageBG from "../../assets/images/smPageBG.svg";
import policyPointIcon from "../../assets/images/policyPointIcon.svg";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { openMail } from "../../components/Tools"


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
          At TaxQue by ARB FinTech LLP ("TaxQue," "we," "our," or "us"), we are
          committed to delivering high-quality tax, compliance, and financial
          services through our website, mobile applications, and platform
          (collectively, the "Platform"). Our goal is to ensure User
          satisfaction with every interaction. This Refund Policy outlines the
          conditions under which refunds or service changes may be requested,
          the process for submitting requests, and circumstances where refunds
          are not applicable. This policy forms an integral part of our Terms
          and Conditions and applies to all Users ("User," "you," or "your") of
          the Platform.
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

        <div className="noticeBox">
          <p className="policyNoteHText">Our Commitment to Satisfaction</p>

          <ul>
            <li>
              {" "}
              <b>Resolution First :</b>: If you are dissatisfied with any aspect
              of our services, we encourage you to contact us immediately. We
              will make every effort to address your concerns, resolve issues,
              or, where applicable, offer a refund or credit for future TaxQue
              services.
            </li>
            <li>
              {" "}
              <b>Contact Channels :</b>You can raise concerns by
            </li>

            <li>
              Logging into the Platform with the email address associated with
              your payment and submitting a "Not Satisfied" request under the
              relevant service engagement.
            </li>
            <li>
              Emailing us at <a style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }} onClick={() => openMail("info@taxque.in")}>info@taxque.in</a> with details of your issue,
              including transaction ID, service details, and a description of
              the concern.
            </li>
            <li>
              {" "}
              <b>Response Time :</b> We aim to acknowledge your request within
              2-3 business days and resolve it within 7-14 business days,
              depending on the complexity of the issue.
            </li>
          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">Refund Eligibility</p>

          <ul>
            <li>
              {" "}
              <b>30-Day Refund Window :</b>: You may request a refund within 30
              calendar days from the date of payment for a service, subject to
              the conditions below.
            </li>
            <li>
              {" "}
              <b>Contact Channels :</b>You can raise concerns by
            </li>
            <li>
              {" "}
              <b>Service Fulfillment :</b> TaxQue considers its service
              obligation fulfilled once
            </li>
            <li>
              You are granted access to the Platform for the requested service
              (e.g., tax filing tools, compliance dashboards).
            </li>
            <li>
              {" "}
              The requested service is completed or submitted to the relevant
              authority (e.g., GST filing, company incorporation).
            </li>
            <li>
              {" "}
              <b>Cancellation Fee :</b> All refund requests are subject to a 20%
              cancellation fee to cover administrative and processing costs,
              unless otherwise specified.
            </li>
            <li>
              {" "}
              <b>Non-Refundable Components :</b> The following are
              non-refundable
            </li>
            <li>
              Government fees, levies, or charges (e.g., filing fees, stamp
              duties) remitted to authorities.{" "}
            </li>
            <li>
              Taxes, including Goods and Services Tax (GST), applied to service
              fees.
            </li>
            <li>
              Services already processed, completed, or submitted to government
              or third-party platforms.
            </li>
          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">Change of Service</p>
          <ul>
            <li>
              {" "}
              <b>Service Change Request :</b>If you wish to change the service
              ordered (e.g., switch from GST filing to income tax filing), you
              must submit a request within 7 calendar days from the date of
              payment.
            </li>
            <li>
              {" "}
              <b>Process :</b> Log into the Platform and select "Get Help" to
              initiate a service change request, or email <a style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }} onClick={() => openMail("info@taxque.in")}>info@taxque.in</a> with
              transaction details and the desired service.{" "}
            </li>
            <li>
              You are granted access to the Platform for the requested service
              (e.g., tax filing tools, compliance dashboards).
            </li>
            <li>
              {" "}
              If approved, the original service fee (minus any non-refundable
              components) will be credited toward the new service. Additional
              fees may apply if the new service is priced higher.
            </li>
            <li>
              {" "}
              <b>Limitations :</b> Service changes are not permitted once the
              original service has been processed, completed, or submitted to a
              government authority.
            </li>
          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">Requesting a Refund</p>
          <ul>
            <li>
              {" "}
              <b>Submission Process :</b>To request a refund
            </li>
            <li>
              {" "}
              <b>Process :</b> Log into the Platform and select "Get Help" to
              initiate a service change request, or email <a style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }} onClick={() => openMail("info@taxque.in")}>info@taxque.in</a> with
              transaction details and the desired service.{" "}
            </li>
            <li>
              Log into the Platform, navigate to the relevant service
              engagement, and submit a "Not Satisfied" or "Refund Request" form.
            </li>
            <li> Alternatively, email <a style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }} onClick={() => openMail("info@taxque.in")}>info@taxque.in</a> with:</li>
            <li>Transaction ID or payment confirmation details. </li>
            <li>
              Description of the service and reason for the refund request.
            </li>
            <li>
              Supporting documentation, if applicable (e.g., screenshots of
              issues).
            </li>
          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">Processing Time</p>
          <ul>
            <li>Refund requests are reviewed within 5-7 business days</li>
            <li>
              Approved refunds are processed within 3-5 weeks from the date of
              approval, subject to verification and deduction of applicable fees
              (e.g., 20% cancellation fee, taxes, government charges).{" "}
            </li>
            <li>
              Refunds will be issued via the original payment method (e.g., bank
              transfer, UPI, card) or as agreed with TaxQue.
            </li>
            <li>
              {" "}
              <b>Discretionary Refunds :</b>In exceptional cases, TaxQue may, at
              its sole discretion, offer partial refunds, credits, or
              alternative resolutions, even if the request falls outside the
              standard eligibility criteria.
            </li>
          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">User Responsibilities</p>
          <ul>
            <li>
              {" "}
              <b>Accurate Information :</b> : You are solely responsible for
              providing accurate, complete, and timely information required for
              service delivery (e.g., financial data, supporting documents).
              TaxQue is not liable for delays, rejections, or additional costs
              due to.
            </li>
            <li>
              Approved refunds are processed within 3-5 weeks from the date of
              approval, subject to verification and deduction of applicable fees
              (e.g., 20% cancellation fee, taxes, government charges).{" "}
            </li>
            <li>
              Incomplete, incorrect, or delayed submission of information.{" "}
            </li>
            <li>Errors in data provided by you.</li>
            <li>
              {" "}
              <b>Penalties and Taxes :</b> You are responsible for any
              penalties, taxes, or additional costs incurred during or after the
              service, including those arising from:
            </li>
            <li>Inaccurate or fraudulent information</li>
            <li>Government assessments or audits. </li>
            <li>Non-compliance with applicable laws </li>
            <li>
              {" "}
              <b>Outcome Liability :</b> TaxQue does not guarantee specific
              outcomes (e.g., tax refunds, application approvals) and is not
              liable for costs or consequences resulting from government
              decisions or legal outcomes beyond our control.
            </li>
          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">Factors Outside Our Control</p>
          <ul>
            <li>
              TaxQue is not responsible for delays, rejections, or issues
              arising from factors beyond our control, including but not limited
              to:
            </li>
            <li>
              <b>Government Actions :</b> Rejections of applications (e.g., GST
              filings, trademark registrations) due to legal or regulatory
              reasons unrelated to TaxQue’s service.{" "}
            </li>
            <li>
              Delays or errors on government platforms (e.g., GSTN, MCA, Income
              Tax portals).{" "}
            </li>
            <li>Changes in government policies, procedures, or fees. </li>
            <li>
              {" "}
              <b>Third-Party Services :</b> Delays or failures in third-party
              systems (e.g., payment gateways, cloud providers).
            </li>
            <li>
              Issues with external entities involved in service delivery (e.g.,
              banks, registrars).
            </li>
            <li>
              {" "}
              <b>User-Related Issues :</b> Failure to provide required documents
              or information in a timely manner.
            </li>
            <li>Non-compliance with government or regulatory requirements.</li>
          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">Force Majeure</p>
          <ul>
            <li>
              {" "}
              <b>Exemptions :</b>: TaxQue shall not be liable for delays,
              interruptions, or inability to fulfill its obligations due to
              force majeure events, including but not limited to:{" "}
            </li>
            <li>Natural disasters (e.g., earthquakes, floods). </li>
            <li>Pandemics or public health emergencies.</li>
            <li>Government actions, regulatory changes, or restrictions. </li>
            <li>Wars, acts of terrorism, or civil unrest. </li>
            <li>Labor strikes, cyberattacks, or infrastructure failures.</li>
            <li>
              {" "}
              <b>Impact :</b> In such cases, refund requests related to delays
              or service interruptions will not be entertained, but TaxQue will
              make reasonable efforts to resume services or offer alternative
              solutions when feasible.
            </li>
          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">Dispute Resolution</p>
          <ul>
            <li>
              {" "}
              <b>Good-Faith Resolution :</b>: : If you disagree with a refund
              decision, we encourage you to contact us to discuss the issue. We
              will attempt to resolve disputes through good-faith negotiations
              within 14 business days.
            </li>
            <li> <b>Escalation :</b> : If the issue remains unresolved, you may escalate the matter to our Grievance Officer (details below).
              8.3 Legal Recourse: Disputes not resolved through negotiation are subject to the governing law and jurisdiction outlined in our Terms and Conditions (courts in Patna, Bihar, India). </li>
          </ul>

        </div>



        <div className="noticeBox">
          <p className="policyNoteHText">Contact Information</p>
          <ul>
            <li>For refund requests, questions, or assistance, please contact:
            </li>
            <li><b>TaxQue by ARB FinTech LLP</b></li>
            <li><b>Contact Person :
            </b>Md Afzal</li>
            <li><b>Email : </b><a style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }} onClick={() => openMail("info@taxque.in")}>info@taxque.in</a></li>
            <li><b>Address :</b>Surbhi Vihar, Mithapur, Patna, Bihar 800001, India</li>
            <li><b>Grievance Officer :</b> Md Afzal (<a style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }} onClick={() => openMail("info@taxque.in")}>info@taxque.in</a>)</li>
            <li><b>Response Time :</b>Refund and grievance inquiries will be acknowledged within 2-3 business days and resolved within 7-14 business days, depending on the issue.
            </li>
          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">Miscellaneous</p>
          <ul>
            <li><b>Alignment with Terms :</b> This Refund Policy is subject to and governed by our Terms and Conditions. In case of any conflict, the Terms and Conditions prevail.
            </li>
            <li><b>Updates :</b> TaxQue reserves the right to update this Refund Policy at any time. Changes will be communicated via the Platform, email, or by updating the “Effective Date” below. Continued use of the Platform constitutes acceptance of the updated policy</li>
            <li><b>Consumer Protection :</b> This policy complies with applicable Indian laws, including the Consumer Protection Act, 2019, and related regulations.
            </li>
            <li><b>Severability :</b>If any provision of this policy is found to be invalid or unenforceable, the remaining provisions remain in full force and effect. </li>
            <li><b>Effective Date :</b>January 20, 2025</li>
          </ul>

        </div>
      </div>
      <Footer />
    </>
  );
}
