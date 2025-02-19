import "./style.css";

import { AppBtn } from "../Buttons";

export default function ContactSection() {
  return (
    <>
      <div className="contactBox">
        <p className="contactHeader">We’re Here To Get In Touch</p>
        <div className="inputBox">
          <p className="inputLabel">Full Name *</p>
          <input type="text" />
        </div>
        <div className="inputBox">
          <p className="inputLabel">Phone *</p>
          <input type="text" />
        </div>
        <div className="inputBox">
          <p className="inputLabel">Email Address *</p>
          <input type="text" />
        </div>
        <div className="inputBox">
          <p className="inputLabel">Message *</p>
          <textarea />
        </div>
        <AppBtn btnText="Submit Now" />
      </div>
    </>
  );
}
