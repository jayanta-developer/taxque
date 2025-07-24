import { useState, useEffect } from "react";
import "./style.css";

import { AppBtn } from "../Buttons";
import { DropBox } from "../../components/Tools"

//data
import { CityList, cityPin } from "../../assets/Data";


export default function ContactSection() {
  const [cityDrop, setCityDrop] = useState<string>("");

  const [contactUser, setContactUser] = useState({
    name: "",
    email: "",
    pincode: "",
  });

  // create contact user
  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactUser((prv) => ({
      ...prv,
      [name]: value,
    }));
  };


  //pincode----------------
  useEffect(() => {
    const selectedPin = cityPin.find((val) => val.city === cityDrop);
    setContactUser((prv) => ({
      ...prv,
      ["pincode"]: selectedPin?.pincode || "",
    }));
  }, [cityDrop]);

  return (
    <>
      <div className="contactBox">
        <p className="contactHeader">We’re Here To Get In Touch</p>
        <div className="inputBox">
          <p className="inputLabel">Full Name *</p>
          <input value={contactUser.name} name="name" onChange={handleUserChange} type="text" />
        </div>
        <div className="inputBox">
          <p className="inputLabel">Email Address *</p>
          <input value={contactUser.email} name="email" onChange={handleUserChange} type="text" />
        </div>
        <div className="inputBox">
          <p className="inputLabel">City</p>
          <DropBox
            list={CityList}
            setDropVal={setCityDrop}
            defaultVal="Select city"
          />
        </div>
        <div className="inputBox">
          <p className="inputLabel">Pincode</p>
          <input
            type="text"
            name="pincode"
            value={contactUser.pincode}
            onChange={handleUserChange}
          />
        </div>

        {/* <div className="inputBox">
          <p className="inputLabel">Message *</p>
          <textarea />
        </div> */}
        <AppBtn btnText="Submit Now" />
      </div>
    </>
  );
}
