import React from "react";
import "./style.css";

//Images
import smPageBG from "../../assets/images/smPageBG.svg";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { openMail } from "../../components/Tools"


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
          This Privacy Policy ("Policy") governs how TaxQue by ARB FinTech LLP
          ("TaxQue," "we," "our," or "us") collects, uses, stores, processes,
          and discloses information collected from users ("Users," "you," or
          "your") of the TaxQue website, mobile applications, and services
          (collectively, the "Platform"). This Policy applies to all products,
          services, and features offered by TaxQue and forms an integral part of
          our Terms and Conditions. By using the Platform, you consent to the
          data practices described in this Policy.
        </p>

        <div className="noticeBox">
          <p className="policyNoteHText">Information We Collect</p>
          <ul>
            <li>
              We collect information to provide, improve, and personalize our
              services. Information is collected in the following categories:
            </li>
            <li>
              {" "}
              <b>Personal Information :</b> We collect personal identification
              information that you voluntarily provide when interacting with the
              Platform, such as
            </li>
            <li>
              Name, email address, phone number, mailing address, and date of
              birth.
            </li>
            <li>
              Financial details, including GSTIN, PAN, bank account information,
              or payment details for tax filings or transactions.
            </li>
            <li>
              Government-issued identification (e.g., Aadhaar number, if
              required for compliance, subject to applicable laws).{" "}
            </li>
            <li>
              Login credentials (e.g., username, password) for Platform access.
              This information is collected during registration, service
              requests, payment processing, customer support interactions, or
              other activities on the Platform.
            </li>
            <li>
              <b>Non-Personal Information :</b> We collect non-personal
              information automatically when you interact with the Platform,
              including:
            </li>
            <li>
              Device information (e.g., device type, operating system, browser
              type, IP address).{" "}
            </li>
            <li>
              Usage data (e.g., pages visited, features used, time spent on the
              Platform).
            </li>
            <li>
              Technical details (e.g., internet service provider, referral URLs,
              clickstream data).
            </li>
            <li>
              {" "}
              <b>Cookies and Tracking Technologies :</b>
            </li>
            <li>
              The Platform uses cookies, web beacons, and similar technologies
              to enhance user experience, track usage, and improve services.
            </li>
            <li>
              Cookies may store session data, preferences, or analytics
              information.
            </li>
            <li>
              You can manage cookie preferences through your browser settings,
              but disabling cookies may limit access to certain Platform
              features.
            </li>
            <li>
              <b>Third-Party Data :</b> We may receive information about you
              from third parties, such as government portals (e.g., GSTN, MCA),
              payment gateways, or analytics providers, to facilitate services
              or comply with legal obligations.
            </li>
          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">How We Use Your Information</p>
          <ul>
            <li>
              TaxQue uses collected information for the following purposes:
            </li>
            <li>
              <b>Service Delivery :</b> : To process tax filings, compliance
              requests, financial transactions, and other services you request
            </li>
            <li>
              <b>Account Management :</b> To create, maintain, and secure your
              account, including authentication and password recovery.
            </li>
            <li>
              <b>Customer Support :</b> To respond to inquiries, resolve issues,
              and provide assistance via email, phone, or chat.
            </li>
            <li>
              <b>Personalization :</b>To tailor content, recommendations, and
              user experience based on your preferences and usage patterns.
            </li>
            <li>
              <b>Platform Improvement :</b>To analyze usage trends, monitor
              performance, and enhance Platform functionality and services.
            </li>
            <li>
              <b>Communication :</b>: To send transactional emails (e.g.,
              service updates, payment confirmations), respond to inquiries, or
              provide company news, promotions, or surveys (with your consent,
              where required).
            </li>
            <li>
              <b>Compliance and Legal Obligations :</b>: To comply with
              applicable laws, regulations, or government requests (e.g., tax
              audits, KYC requirements).
            </li>
            <li>
              <b>Fraud Prevention :</b>To detect, prevent, and investigate
              fraudulent or unauthorized activities on the Platform.
            </li>
          </ul>
        </div>
        <div className="noticeBox">
          <p className="policyNoteHText">How We Share Your Information</p>
          <ul>
            <li>
              We do not sell, trade, or rent your personal information to third
              parties. However, we may share information in the following cases:
            </li>
            <li>
              <b>Service Providers :</b>With trusted third-party vendors (e.g.,
              payment gateways, cloud storage providers, analytics tools) who
              assist in operating the Platform or delivering services, under
              strict confidentiality agreements.
            </li>
            <li>
              <b>2 Government Authorities :</b>With regulatory bodies (e.g.,
              GSTN, Income Tax Department, MCA) to process filings, comply with
              legal obligations, or respond to lawful requests from law
              enforcement or courts.
            </li>
            <li>
              <b>Business Transfers :</b>In the event of a merger, acquisition,
              or sale of assets, your information may be transferred to the
              acquiring entity, subject to equivalent privacy protections.
            </li>
            <li>
              <b>Aggregated Data : </b>We may share anonymized or aggregated
              data (e.g., usage statistics) with partners or for research
              purposes, ensuring it cannot be linked to you.
            </li>
            <li>
              <b>With Your Consent :</b> We may share information for other
              purposes if you provide explicit consent (e.g., for marketing
              campaigns or surveys).
            </li>
          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">How We Protect Your Information</p>
          <ul>
            <li>
              <b>Security Measures :</b> We implement industry-standard security
              practices to protect your information, including:
            </li>
            <li>
              Encryption of sensitive data (e.g., SSL/TLS for data transmission,
              AES-256 for stored data).{" "}
            </li>
            <li>
              Firewalls, access controls, and secure servers to prevent
              unauthorized access.{" "}
            </li>
            <li>Regular security audits and vulnerability assessments.</li>
            <li>
              <b>User Responsibility : </b>You are responsible for maintaining
              the confidentiality of your login credentials and securing your
              devices. TaxQue is not liable for breaches caused by your
              negligence or unauthorized account access.
            </li>
            <li>
              <b>Limitations :</b>: While we strive to protect your data, no
              system is entirely immune to risks. We cannot guarantee absolute
              security against cyberattacks or unforeseen events.
            </li>
          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">Your Data Protection Rights</p>
          <ul>
            <li>
              Under applicable Indian laws, including the Digital Personal Data
              Protection Act, 2023, you have the following rights:
            </li>
            <li>
              <b>Access :</b>Request details of the personal information we hold
              about you.
            </li>
            <li>
              <b>Correction :</b>Request correction of inaccurate or incomplete
              information.
            </li>
            <li>
              <b>Deletion :</b> Request deletion of your personal information,
              subject to legal retention obligations.
            </li>
            <li>
              <b>Restriction :</b>Request restriction of processing for specific
              purposes.
            </li>
            <li>
              <b>Data Portability :</b>Request a copy of your data in a
              structured, machine-readable format.
            </li>
            <li>
              <b>Objection :</b>Object to processing for marketing or
              non-essential purposes.
            </li>
            <li>
              <b>Withdraw Consent :</b> Withdraw consent for data processing
              (where consent is the basis), without affecting prior lawful
              processing.
            </li>
            <li>
              To exercise these rights, contact us at <a style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }} onClick={() => openMail("info@taxque.in")}>info@taxque.in</a>. Requests
              will be processed within 30 days, subject to verification and
              legal requirements.
            </li>
          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">Data Retention</p>
          <ul>
            <li>
              <b>Retention Period: </b>We retain your personal information only
              for as long as necessary to:
            </li>
            <li>
              Fulfill the purposes outlined in this Policy (e.g., service
              delivery, account management).
            </li>
            <li>
              Comply with legal obligations (e.g., tax records for 7 years under
              GST laws).
            </li>
            <li>Resolve disputes or enforce agreements.</li>
            <li>
              <b>Deletion :</b>After the retention period, your data is securely
              deleted or anonymized, unless required for legal or archival
              purposes.
            </li>
          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">Third-Party Links and Services</p>
          <ul>
            <li>
              <b>1 External Websites :</b> The Platform may contain links to
              third-party websites (e.g., government portals, payment gateways).
              We are not responsible for the privacy practices or content of
              these sites. We recommend reviewing their privacy policies before
              sharing information.
            </li>
            <li>
              <b>Third-Party Integrations :</b>Services integrated with the
              Platform (e.g., analytics tools, payment processors) may collect
              data subject to their own privacy policies. We ensure such
              providers adhere to equivalent data protection standards.{" "}
            </li>
          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">Cookies and Advertising</p>
          <ul>
            <li>
              <b>Cookie Usage :</b>Cookies are used to:
            </li>
            <li>Maintain user sessions and authentication.</li>
            <li>Store preferences (e.g., language, theme).</li>
            <li>Track usage for analytics and performance monitoring.</li>
            <li>
              <b>Types of Cookies :</b>
            </li>
            <li>
              <b>Essential Cookies :</b>Required for core Platform functionality
              (e.g., login, navigation).
            </li>
            <li>
              <b>Analytics Cookies :</b> Track usage patterns to improve
              services.
            </li>
            <li>
              <b>Marketing Cookies :</b>Deliver personalized ads or content
              (with your consent).
            </li>
            <li>
              <b>3 Third-Party Advertising :</b>We may use third-party ad
              networks (e.g., Google AdSense) to display ads. These networks may
              use cookies (e.g., Google’s DART cookie) to serve ads based on
              your browsing history. You can opt out of personalized ads via:
            </li>
            <li>Google’s Ads Settings: <a href="http://www.google.com/settings/ads">http://www.google.com/settings/ads</a></li>
            <li>
              Network Advertising Initiative:
              <a href="http://www.networkadvertising.org/choices">http://www.networkadvertising.org/choices</a>
            </li>
            <li>
              <b>Cookie Management :</b>You can disable cookies via browser
              settings or opt out of non-essential cookies through our cookie
              consent tool (if available). Disabling cookies may affect Platform
              functionality.
            </li>
          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">Children’s Privacy</p>
          <ul>
            <li>
              <b>Age Restriction :</b>The Platform is not intended for users
              under 18 years of age. We do not knowingly collect or process
              personal information from individuals under 18. 9
            </li>
            <li>
              <b>Parental Consent :</b>: If we become aware of data collected
              from a minor, we will delete it unless parental consent is
              provided and verified. Contact us at <a style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }} onClick={() => openMail("info@taxque.in")}>info@taxque.in</a> if you believe
              we have collected a minor’s data
            </li>
          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">International Data Transfers</p>
          <ul>
            <li>
              <b>Geographic Scope :</b>The Platform primarily operates in India,
              and your data is stored on servers located in India or
              jurisdictions with equivalent data protection standards.
            </li>
            <li>
              <b>Cross-Border Transfers :</b>If data is transferred
              internationally (e.g., to cloud providers), we ensure compliance
              with Indian data protection laws and use safeguards like Standard
              Contractual Clauses or Binding Corporate Rules
            </li>
          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">Compliance with Laws</p>
          <ul>
            <li>
              <b>Indian Laws :</b>We comply with applicable Indian laws,
              including the Information Technology Act, 2000, IT (Reasonable
              Security Practices and Procedures) Rules, 2011, and the Digital
              Personal Data Protection Act, 2023.
            </li>
            <li>
              <b>Regulatory Requests :</b>We may disclose your information to
              government authorities, law enforcement, or courts to comply with
              legal obligations or protect our rights, without prior notice
              where required by law.
            </li>
          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText">Changes to This Privacy Policy</p>
          <ul>
            <li>
              <b>Updates :</b>TaxQue reserves the right to update this Policy at
              any time to reflect changes in our practices, legal requirements,
              or Platform features.
            </li>
            <li>
              <b>Notification :</b>: We will notify you of material changes via
              email, Platform notifications, or by updating the “Effective Date”
              at the bottom of this Policy.
            </li>
            <li>
              <b>Acceptance :</b> Continued use of the Platform after changes
              constitutes acceptance of the updated Policy. We encourage you to
              review this Policy periodically.
            </li>
          </ul>
        </div>
        <div className="noticeBox">
          <p className="policyNoteHText">Grievance Redressal</p>
          <ul>
            <li>
              <b>Grievance Officer :</b>For concerns about data privacy or this
              Policy, contact our Grievance Officer:
            </li>
            <li>
              <b>Name :</b>Md Afzal
            </li>
            <li>
              <b>Email :</b><a style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }} onClick={() => openMail("info@taxque.in")}>info@taxque.in</a>
            </li>
            <li>
              <b>Address :</b>Surbhi Vihar, Mithapur, Patna, Bihar 800001, India
            </li>
            <li>
              <b>Response Time :</b>Grievances will be addressed within 7-14
              business days. Escalated issues may be referred to our compliance
              team for resolution
            </li>
          </ul>
        </div>

        <div className="noticeBox">
          <p className="policyNoteHText"> Contact Us</p>
          <ul>
            <li>
              For questions, feedback, or concerns about this Privacy Policy or
              our data practices, please contact:
            </li>
            <li>
              <b>TaxQue by ARB FinTech LLP</b>
            </li>
            <li>
              <b>Contact Person :</b>Md Afzal
            </li>
            <li>
              <b>Email :</b> <a style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }} onClick={() => openMail("info@taxque.in")}>info@taxque.in</a>
            </li>
            <li>
              <b>Address :</b>Surbhi Vihar, Mithapur, Patna, Bihar 800001, India{" "}
            </li>
            <li>
              <b>Effective Date :</b>January 20, 2025
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
