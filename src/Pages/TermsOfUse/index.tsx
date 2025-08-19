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

export default function TermsOfUse({ setCurrentNav, currentNav }: NavProps) {
  setCurrentNav("");
  return (
    <>
      <div className="SMHeroBox">
        <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
        <img src={smPageBG} className="smPageBG" />
      </div>
      <div className="policyMainBox">
        <p className="sectionHeader">Terms and Conditions</p>
        <p className="policySubText">
          These Terms and Conditions ("Terms") govern the use of the TaxQue
          platform, website ("Site"), mobile applications, and services provided
          by ARB FinTech LLP ("TaxQue," "we," "our," or "us"). By accessing our
          Site, using our services, or registering an account, you ("User,"
          "you," or "your") agree to be bound by these Terms and our Privacy
          Policy. If you do not agree with these Terms, you must immediately
          cease using our platform and services.
        </p>

        <div className="noticeBox">
          <p className="policyNoteHText">General Provisions</p>

          <ul>
            <li>
              <b>Business Overview :</b> TaxQue, operated by ARB FinTech LLP, is
              a technology-driven platform providing tax, compliance, and
              financial services, including but not limited to Goods and
              Services Tax (GST) filings, income tax return preparation, company
              incorporation, accounting, and regulatory compliance assistance.
            </li>
            <li>
              <b>Applicability : </b>
              These Terms apply to all Users, including individuals, businesses,
              or entities accessing our Site, mobile applications, or services,
              whether through free or paid plans.
            </li>
            <li>
              <b>3 Tax Compliance :</b>
              All fees charged by TaxQue are subject to Goods and Services Tax
              (GST) as per Indian tax laws. GST invoices and Input Tax Credit
              (ITC) will be provided upon submission of a valid GSTIN at the
              time of payment.
            </li>
            <li>
              <b>Government Fees :</b>
              Fees, levies, or charges imposed by government authorities for
              specific services (e.g., filing fees, stamp duties) will be
              communicated upfront, charged separately, and remitted to the
              respective authorities on your behalf.
            </li>
            <li>
              <b>Amendments to Terms :</b>
              TaxQue reserves the right to modify these Terms at any time.
              Revised Terms will be posted on the Site and communicated via
              email or platform notifications. Continued use of our services
              after such changes constitutes acceptance of the updated Terms.
            </li>
            <li>
              <b>6 Service Availability : </b>
              Services are available to Users in India and, where applicable, to
              non-residents subject to compliance with Indian laws and
              regulations. TaxQue may restrict access to certain services based
              on geographic or regulatory limitations.
            </li>
          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">Use of the Platform</p>
          <p className="policyNoteText">
            By accessing or using the TaxQue platform, you agree to the
            following
          </p>

          <ul>
            <li>
              <b>Eligibility :</b> You must be at least 18 years old and legally
              capable of entering into contracts under Indian law to use our
              services. Businesses or entities must be duly registered and
              authorized to avail of our services
            </li>
            <li>
              <b>Accurate Information :</b> Provide accurate, complete, and
              up-to-date information during registration and throughout your use
              of our services. You are responsible for updating your account
              details, including contact information, GSTIN, and payment
              details, as needed.
            </li>
            <li>
              <b>Account Security :</b> Provide accurate, complete, and
              up-to-date information during registration and throughout your use
              of our services. You are responsible for updating your account
              details, including contact information, GSTIN, and payment
              details, as needed.
            </li>
            <li>
              Maintain the confidentiality of your login credentials (username,
              password, OTPs, etc.).
            </li>
            <li>Ensure all activities under your account are authorized.</li>
            <li>
              Notify TaxQue immediately at info@taxque.in of any unauthorized
              access, security breach, or suspicious activity.
            </li>
            <li>
              TaxQue is not liable for losses resulting from your failure to
              secure your account. 2.4 Prohibited Activities: You agree not to:
            </li>
            <li>
              Engage in unauthorized, unethical, or illegal activities,
              including hacking, phishing, data mining, or attempting to bypass
              platform security measures.
            </li>
            <li>
              Use automated tools (e.g., bots, scrapers) to access, extract, or
              manipulate platform resources.
            </li>
            <li>
              Share, duplicate, resell, or distribute TaxQue’s services, tools,
              or resources without prior written consent.
            </li>
            <li>
              Use the platform to facilitate money laundering, tax evasion, or
              other illegal financial activities.
            </li>
            <li>
              Overload or disrupt the platform’s functionality (e.g., through
              denial-of-service attacks).
            </li>
            <li>
              {" "}
              <b>5 Compliance with Laws :</b> You must comply with all
              applicable Indian laws, including but not limited to the Income
              Tax Act, 1961, GST Act, 2017, and the Information Technology Act,
              2000, while using our platform.
            </li>
            <li>
              {" "}
              <b>Consequences of Violation :</b> Non-compliance with these
              guidelines may result in:
            </li>
            <li>Immediate suspension or termination of your account. </li>
            <li>Legal action, including claims for damages</li>
            <li>Reporting to relevant authorities for illegal activities.</li>
          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">User Responsibilities and Conduct</p>

          <ul>
            <li>
              <b>Accuracy of Information :</b> You are solely responsible for
              the accuracy, completeness, and timeliness of all information,
              documents, and data provided to TaxQue for service delivery.
              Errors, omissions, or delays in providing information may result
              in service delays, additional fees, or rejection by government
              authorities.
            </li>
            <li>
              <b> Service Scope :</b> TaxQue’s obligations are limited to delivering services as per the agreed scope, based on the information and instructions you provide. We are not responsible for outcomes resulting from incomplete or inaccurate submissions.

            </li>
            <li>
              <b>3 Content Guidelines :</b> You agree not to post, upload, or share content through TaxQue’s communication tools (e.g., chat, email, or forms) that is:
            </li>
            <li>Illegal, fraudulent, or misleading</li>
            <li>Offensive, defamatory, or harmful to others.
            </li>
            <li>Infringing on intellectual property, privacy, or other rights.</li>
            <li> <b>Tax and Legal Compliance</b> You are responsible for ensuring your tax filings, compliance activities, and financial transactions comply with applicable laws. TaxQue provides tools and services to facilitate compliance but does not assume liability for your legal obligations.</li>
            <li> <b>Backup of Data</b> : You are responsible for maintaining backups of all documents and data submitted to TaxQue. While we employ robust security measures, we are not liable for data loss due to unforeseen events.
            </li>
          </ul>
        </div>


        <div className="noticeBox">
          <p className="policyNoteHText">Cancellations and Refunds</p>
          <p className="policyNoteHText">Cancellation Policy :</p>

          <ul>
            <li>
              Cancellation requests must be submitted in writing to info@taxque.in before service processing begins
            </li>
            <li>
              A cancellation fee of 20% of the service fee (excluding government fees and taxes) will be deducted.

            </li>
            <li>
              No cancellations are permitted once service processing has commenced.
              5.2 Refund Process:

            </li>
            <li>Approved refunds will be processed within 4-5 weeks from the date of approval, subject to deductions for cancellation fees, taxes, and non-refunded government charges.
            </li>
            <li>Refunds will be issued via the original payment method or as agreed with TaxQue.
              5.3 Non-Refundable Cases: No refunds will be provided for:
            </li>
            <li>Services already processed, completed, or submitted to government authorities.
            </li>
            <li> Government fees, levies, or charges remitted to authorities</li>
            <li>Delays, rejections, or issues caused by government platforms, third-party systems, or user errors
            </li>
            <li>Force majeure events, including natural disasters, cyberattacks, or government restrictions</li>
            <li> <b>Discretionary Refunds :</b> TaxQue may, at its sole discretion, offer partial refunds or credits in exceptional cases, subject to review.
            </li>
          </ul>
        </div>



        <div className="noticeBox">
          <p className="policyNoteHText">Intellectual Property Rights</p>

          <ul>
            <li>
              <b>Ownership</b>
              All content, materials, tools, software, templates, and resources on the TaxQue platform, including text, graphics, logos, and proprietary algorithms, are the exclusive property of ARB FinTech LLP and are protected by Indian and international intellectual property laws, including the Copyright Act, 1957, and Trademarks Act, 1999
            </li>
            <li>
              A cancellation fee of 20% of the service fee (excluding government fees and taxes) will be deducted.

            </li>
            <li>
              <b>Restrictions / You may not</b>
              Copy, reproduce, modify, distribute, or create derivative works from TaxQue’s intellectual property without prior written consent

            </li>
            <li>Reverse-engineer, decompile, or attempt to extract the platform’s source code or algorithms.

            </li>
            <li>Use TaxQue’s brand, logo, or trademarks for commercial purposes without authorization.
            </li>
            <li> <b>User Content :</b>Any data, documents, or content you submit to TaxQue remains your property. By submitting such content, you grant TaxQue a non-exclusive, royalty-free, worldwide license to use, process, store, and transmit it solely for the purpose of delivering the requested services and complying with legal obligations.
            </li>
            <li> <b>Feedback :</b> Any feedback, suggestions, or ideas you provide about the platform or services may be used by TaxQue without obligation or compensation to you</li>
          </ul>
        </div>



        <div className="noticeBox">
          <p className="policyNoteHText">Privacy and Data Protection</p>

          <ul>
            <li>
              <b>Privacy Policy</b>
              Our Privacy Policy, available on the Site, governs the collection, use, storage, and protection of your personal and financial data. By using our platform, you consent to the data practices outlined therein.
            </li>
            <li> <b>Data Security :</b>TaxQue employs industry-standard encryption, firewalls, and security protocols to safeguard your data. However, no system is entirely immune to risks, and you assume responsibility for securing your account credentials and devices.
            </li>
            <li> <b>3 Data Sharing :</b>TaxQue may share your data with</li>
            <li>Government authorities or regulatory bodies as required for service delivery (e.g., GSTN, MCA, Income Tax Department).
            </li>
            <li>Third-party service providers (e.g., payment gateways, cloud storage) under strict confidentiality agreements</li>

            <li>Law enforcement or courts in response to legal requests or investigations.
              7.4 Data Retention: We retain your data only for as long as necessary to deliver services, comply with legal obligations, or resolve disputes, as detailed in the Privacy Policy.
            </li>

          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">Limitation of Liability
          </p>

          <ul>
            <li>
              <b>Scope of Liability :</b>
              TaxQue’s liability for any claim arising from our services is limited to the amount of fees paid for the specific service in question.</li>
            <li> <b>Exclusions :</b>TaxQue is not liable for any direct, indirect, incidental, consequential, or punitive damages, including but not limited to </li>
            <li>Losses due to inaccurate, incomplete, or delayed information provided by you.
            </li>
            <li>Delays, errors, or rejections on government platforms or third-party systems.
            </li>
            <li>Legal, financial, or regulatory outcomes beyond our control (e.g., tax assessments, penalties).
            </li>
            <li>Data loss, security breaches, or service interruptions caused by force majeure events, cyberattacks, or user negligence.
            </li>
            <li> <b>No Warranty : </b> Services are provided on an "as-is" and "as-available" basis. TaxQue does not guarantee: </li>
            <li>Uninterrupted or error-free access to the platform</li>
            <li>Specific outcomes from services (e.g., tax refunds, compliance approvals). </li>
            <li>Accuracy of third-party data or government platform performance.
            </li>
            <li> <b>Indemnity :</b> You agree to indemnify, defend, and hold TaxQue, its affiliates, employees, and partners harmless from any claims, losses, damages, or liabilities arising from:
            </li>
            <li>Your breach of these Terms or applicable laws</li>
            <li>Misuse of the platform or services.
            </li>
            <li>Inaccurate or fraudulent information provided by you.
            </li>




          </ul>
        </div>


        <div className="noticeBox">
          <p className="policyNoteHText">Termination of Services
          </p>

          <ul>
            <li> <b>Termination by TaxQue :</b>We may suspend or terminate your access to the platform and services, with or without notice, if you:
            </li>
            <li>Breach these Terms or engage in illegal, unethical, or fraudulent activities.
            </li>
            <li>Fail to make timely payments for services.
            </li>
            <li>Misuse, disrupt, or attempt to harm the platform, its users, or third parties.
            </li>
            <li>Provide false, misleading, or fraudulent information.
            </li>
            <li> <b>Termination by User :</b>You may terminate your account by contacting info@taxque.in. Termination does not relieve you of obligations to pay outstanding fees or comply with these Terms.
            </li>
            <li> <b>Effect of Termination: </b>Upon termination</li>
            <li>Your access to the platform and services ceases immediately.
            </li>
            <li>	No refunds will be issued for terminated services or unused portions of subscriptions.
            </li>
            <li>	TaxQue may retain your data as required by law or for record-keeping purposes, as outlined in the Privacy Policy.
            </li>


          </ul>
        </div>



        <div className="noticeBox">
          <p className="policyNoteHText">Governing Law and Dispute Resolution
          </p>

          <ul>
            <li> <b>Applicable Law :</b>These Terms are governed by and construed in accordance with the laws of India.
            </li>
            <li> <b>Jurisdiction :</b>Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts in Patna, Bihar, India.
            </li>

            <li> <b>Dispute Resolution</b> </li>
            <li>Both parties agree to attempt resolution through good-faith negotiations for at least 30 days before pursuing legal action.
            </li>
            <li>If negotiations fail, disputes may be resolved through arbitration in Patna, Bihar, under the Arbitration and Conciliation Act, 1996, at TaxQue’s discretion.
              10.4 Class Action Waiver: You agree to resolve disputes individually and not as part of a class action or collective proceeding.
            </li>


          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">Contact Information</p>
          <ul>
            <li> For queries, feedback, grievances, or support, please contact</li>
            <li> <b>TaxQue by ARB FinTech LLP</b></li>
            <li> <b>Contact Person :</b> Md Afzal</li>
            <li> <b>Email :</b> info@taxque.in</li>
            <li> <b>Address :</b> Surbhi Vihar, Mithapur, Patna, Bihar 800001, India</li>
            <li> <b>Grievance Redressal :</b> Grievances will be addressed within 7-14 business days. Escalated issues may be referred to our compliance team</li>
          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">Miscellaneous</p>
          <ul>
            <li> <b>Entire Agreement :</b> These Terms, along with the Privacy Policy and any service-specific agreements, constitute the entire agreement between you and TaxQue regarding the use of our platform and services.
            </li>
            <li> <b>Severability :</b> If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions remain in full force and effect.
            </li>
            <li> <b>Waiver :</b> No waiver of any term by TaxQue shall be deemed a continuing waiver of such term or any other term.
            </li>
            <li> <b>Force Majeure :</b> TaxQue is not liable for failure to perform its obligations due to events beyond its reasonable control, including natural disasters, cyberattacks, government actions, or third-party system failures.
            </li>
            <li> <b>Assignment :</b> You may not assign your rights or obligations under these Terms without TaxQue’s prior written consent. TaxQue may assign its rights or obligations to affiliates or successors without notice.
            </li>
            <li> <b>Notices :</b> All notices from TaxQue will be sent via email, platform notifications, or the Site. Notices from you must be sent to info@taxque.in.
            </li>
            <li> <b>Third-Party Services :</b>  The platform may integrate with third-party services (e.g., payment gateways, government portals). TaxQue is not responsible for the performance, availability, or terms of such services.
            </li>
            <li>  <b>Language :</b> These Terms are provided in English. Any translations are for convenience only, and the English version prevails in case of discrepancies</li>
            <li> <b>Effective Date :</b> January 20, 2025</li>

          </ul>
        </div>





        {/* <div className="termsListBox">
          <div className="policyPoint">
            <img src={policyPointIcon} alt="" />
            <p>
              The terms ‘We’, ‘Us’& ‘Our’ shall mean the Website and/or the
              Company, as the context so requires.
            </p>
          </div>
          <div className="policyPoint">
            <img src={policyPointIcon} alt="" />
            <p>
              For the purpose of this Privacy Policy (“Policy”), wherever the
              context so requires,
            </p>
          </div>
          <div className="policyPoint">
            <img src={policyPointIcon} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur. Ac nisl gravida posuere
              dui volutpat adipiscing facilisis nulla. Sit maecenas.
            </p>
          </div>
          <div className="policyPoint">
            <img src={policyPointIcon} alt="" />
            <p>
              The Parties expressly agree that the Company retains the sole and
              exclusive right to amend or modify the Policy and the
              aforementioned Terms without any prior permission or intimation to
              the User, and the
            </p>
          </div>
          <div className="policyPoint">
            <img src={policyPointIcon} alt="" />
            <p>
              The term ‘You’ &‘User’ shall mean any legal person or entity
              accessing or using the services provided on this Website, who is
              competent to enter into binding contracts, as per the provisions
              of the Indian Contract Act, 1872
            </p>
          </div>
          <div className="policyPoint">
            <img src={policyPointIcon} alt="" />
            <p>
              The terms ‘Party’ & ‘Parties’ shall respectively be used to refer
              to the User and the Company individually and collectively, as the
              context so requires.
            </p>
          </div>
          <div className="policyPoint">
            <img src={policyPointIcon} alt="" />
            <p>
              The User is aware that the Company/Website may automatically track
              certain information about the User based upon the User’s IP
              address and the User’s behaviour on the Website, and the User
              expressly consents to the same.
            </p>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
}
