import { useState } from "react";
import "./style.css";

import { AppBtn } from "../Buttons";
import { DropBox } from "../../components/Tools"

//dataType
import type { LocationData } from "../../store/statusTypes"

//data
import { locationList } from "../../assets/Data";

//Images
import { Image } from "../../assets/images";

import type { CategoryDataType } from "../../store/categorySlice";

import { toast } from "react-toastify";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { CreateContactUser } from "../../store/userSlice"

export default function ContactSection({ subjectList }: any) {
  const dispatch = useDispatch<AppDispatch>();
  const [subjectDrop, setSubjectDrop] = useState<string>("");

  const newList: string[] = []
  if (subjectList) {
    subjectList?.map((el: CategoryDataType) => {
      newList.push(el?.title)
    })
  }

  const [contactUser, setContactUser] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // city/pin search
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<LocationData[]>([]);
  const [selected, setSelected] = useState<LocationData | null>(null);
  console.log(selected);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setQuery(input);

    if (!input.trim()) {
      setFiltered([]);
      return;
    }

    // Detect if user typing number (PIN) or text (City/State)
    if (/^\d+$/.test(input)) {
      // Filter by PIN
      const match = locationList.filter((loc) =>
        loc.pin.startsWith(input)
      );
      setFiltered(match);
    } else {
      // Filter by City or State name
      const match = locationList.filter(
        (loc) =>
          loc.city.toLowerCase().includes(input.toLowerCase()) ||
          loc.state.toLowerCase().includes(input.toLowerCase())
      );
      setFiltered(match);
    }
  };

  const handleSelect = (item: LocationData) => {
    setSelected(item);
    setQuery(`${item.city}, ${item.state} (${item.pin})`);
    setFiltered([]);
  };



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
      !contactUser.phone ||
      !selected?.city.length ||
      !subjectDrop
    ) {
      toast.warn("Please fill all the fields!")
      return
    } else {
      dispatch(CreateContactUser({
        name: contactUser.name,
        email: contactUser.email,
        phone: contactUser.phone,
        location: selected,
        date: new Date().toLocaleDateString("en-GB"),
      }))
    }
  }


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

        <div className="BoxInput cityPinInputBox">
          <input
            type="text"
            placeholder="Enter PIN code or City/State"
            value={query}
            onChange={handleChange}
          />
           <img className="pincodeIcon" src={Image.pincodeIcon} alt="" />


          {filtered.length > 0 && (
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: "5px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                background: "white",
                maxHeight: "200px",
                overflowY: "auto",
              }}
            >
              {filtered.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(item)}
                  style={{
                    padding: "8px",
                    cursor: "pointer",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  {item.city}, {item.state} - {item.pin}
                </li>
              ))}
            </ul>
          )}
        </div>

        <DropBox
          list={newList}
          setDropVal={setSubjectDrop}
          defaultVal="Select A Service"
        />

        <AppBtn onClick={handlePostUser} width="150px" height="40px" btnText="Submit Now" />
      </div >
    </>
  );
}
