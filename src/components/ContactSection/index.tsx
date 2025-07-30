import { useState, useEffect } from "react";
import "./style.css";

import { AppBtn } from "../Buttons";
import { DropBox } from "../../components/Tools"


//data
import { CityList, cityPin } from "../../assets/Data";

//Images
import { Image } from "../../assets/images";

import type { ServiceDataType } from "../../store/categorySlice";

import { toast } from "react-toastify";
import { RootState, AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { CreateContactUser } from "../../store/userSlice"

export default function ContactSection({ subjectList }: any) {
  const dispatch = useDispatch<AppDispatch>();

  const [cityDrop, setCityDrop] = useState<string>("");
  const [subjectDrop, setSubjectDrop] = useState<string>("");

  const newList: string[] = []
  if (subjectList) {
    subjectList?.map((el: ServiceDataType) => {
      newList.push(el?.title)
    })
  }

  const [contactUser, setContactUser] = useState({
    name: "",
    email: "",
    pincode: "",
    phone: ""
  });

  // create contact user
  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactUser((prv) => ({
      ...prv,
      [name]: value,
    }));
  };

  //handle post contact user
  const handlePostUser = () => {
    if (
      !contactUser.name ||
      !contactUser.email ||
      !contactUser.pincode ||
      !contactUser.phone ||
      !cityDrop ||
      !subjectDrop
    ) {
      toast.warn("Please fill all the fields!")
      return
    } else {
      dispatch(CreateContactUser({
        name: contactUser.name,
        email: contactUser.email,
        phone: contactUser.phone,
        city: cityDrop,
        pincode: contactUser.pincode,
        date: new Date().toLocaleDateString("en-GB"),
      }))
    }
  }


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

        <div className="BoxInput">
          <input value={contactUser.name} placeholder="Full Name" name="name" onChange={handleUserChange} type="text" />
          <img className="inputUserIcon" src={Image.inputUserIcon} alt="" />
        </div>
        <div className="BoxInput">
          <input value={contactUser.email} placeholder="Email Address" name="email" onChange={handleUserChange} type="text" />
          <img className="inputMailIcon" src={Image.inputMailIcon} alt="" />
        </div>
        <div className="BoxInput">
          <input value={contactUser.phone} placeholder="Phone Number" name="phone" onChange={(e) => {
            const val = e.target.value;
            if (/^\d{0,10}$/.test(val)) {
              handleUserChange(e);
            }
          }} type="phone" />
          <img className="inputMailIcon" src={Image.inputPhoneIcon} alt="" />
        </div>
        <DropBox
          list={CityList}
          setDropVal={setCityDrop}
          defaultVal="Select city"
        />
        <div className="BoxInput">
          <input value={contactUser.pincode} placeholder="Pin Code" name="pincode" onChange={handleUserChange} type="text" />
          <img className="pincodeIcon" src={Image.pincodeIcon} alt="" />
        </div>
        <DropBox
          list={newList}
          setDropVal={setSubjectDrop}
          defaultVal="Select A Service"
        />
        <AppBtn onClick={handlePostUser} width="150px" height="40px" btnText="Submit Now" />
      </div>
    </>
  );
}
