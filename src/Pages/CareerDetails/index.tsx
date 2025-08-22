import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import parse from 'html-react-parser';
import { toast } from "react-toastify";


import "./style.css";


//Images
import smPageBG from "../../assets/images/smPageBG.svg";
import locationIcon from "../../assets/images/locationYicon.svg";
import timeIcon from "../../assets/images/timeYicon.svg";
import managerIcon from "../../assets/images/directorYicon.svg";
import atatchIcon from "../../assets/images/atatchIcon.svg";
import rightArrow from "../../assets/images/rightArrow.svg";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { AppBtn, AppHoloBtn } from "../../components/Buttons";
import { GoTop, ServiceCard, DropBox } from "../../components/Tools";

//data

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}


//Redux
import { RootState, AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { FetchService } from "../../store/categorySlice";
import { FetchJob } from "../../store/jobSlice"
import { CreateApplication } from "../../store/Application"

export default function CareerDetails({ setCurrentNav, currentNav }: NavProps) {
  const Navigate = useNavigate();
  setCurrentNav("");
  const selectedJodId = localStorage.getItem("selectedJodId")
  const dispatch = useDispatch<AppDispatch>();
  const { data, status } = useSelector((state: RootState) => state.job);
  const Application = useSelector((state: RootState) => state.application);
  const Category = useSelector((state: RootState) => state.category);
  const jobData = data.find((val) => val?._id === selectedJodId)

  //state
  const [applyPop, setApplyPop] = useState<boolean>(false);
  const [noticePeriod, setNoticePeriod] = useState<string>()
  const [policyCheck, setPolicyCheck] = useState(false)
  const [applicationLocVal, setApplicationLocVal] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    experienceYears: "",
    currentJobTitle: "",
    expectedSalary: "",
  })


  //variables
  const noticePList = [
    "Less than 15 days",
    "30 Days",
    "60 Days",
    "90 Days"
  ]

  //handle function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setApplicationLocVal((prv) => ({
      ...prv,
      [name]: value
    }))
  }

  const handlePopClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "grayBox") {
      setApplyPop(false);
    }
  };


  //Create application
  const postApplication = () => {

    if (!selectedJodId || !noticePeriod) {
      toast.warn("Please fill all the values !");
      return;
    }


    dispatch(CreateApplication({
      jobId: selectedJodId,
      fullName: applicationLocVal.fullName,
      email: applicationLocVal.email,
      phone: applicationLocVal.phone,
      address: applicationLocVal.address,
      experienceYears: applicationLocVal.experienceYears,
      currentJobTitle: applicationLocVal.currentJobTitle,
      expectedSalary: applicationLocVal.expectedSalary,
      noticePeriod: noticePeriod,
      resume: "https://resume/link"
    }))
  }



  useEffect(() => {
    if (applyPop) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [applyPop]);

  useEffect(() => {
    dispatch(FetchService());
    dispatch(FetchJob());
    if (Category?.data?.length < 0) {
      dispatch(FetchService());
    }
    if (data?.length < 0) {
      dispatch(FetchJob());
    }
  }, []);

  return (
    <>
      <div className="SMHeroBox">
        {/* pop */}
        <div
          id="grayBox"
          style={{ width: applyPop ? "100%" : "0%" }}
          className="grayBox"
          onClick={handlePopClose}
        >
          <div className="applyPopBox">
            <div className="contactBox">
              <p className="contactHeader">Apply for this Job</p>
              <div className="inputBox">
                <p className="inputLabel">Full Name *</p>
                <input type="text" name="fullName" value={applicationLocVal?.fullName} onChange={handleChange} />
              </div>
              <div className="inputBox">
                <p className="inputLabel">Email Address *</p>
                <input type="text" name="email" value={applicationLocVal?.email} onChange={handleChange} />
              </div>
              <div className="inputBox">
                <p className="inputLabel">Phone *</p>
                <input type="text" name="phone" value={applicationLocVal?.phone} onChange={handleChange} />
              </div>
              <div className="inputBox">
                <p className="inputLabel">Address *</p>
                <input type="text" name="address" value={applicationLocVal?.address} onChange={handleChange} />
              </div>
              <div className="inputBox">
                <p className="inputLabel">Work Experience / (in years) *</p>
                <input type="text" name="experienceYears" value={applicationLocVal?.experienceYears} onChange={handleChange} />
              </div>
              <div className="inputBox">
                <p className="inputLabel">Current Job Title</p>
                <input type="text" name="currentJobTitle" value={applicationLocVal?.currentJobTitle} onChange={handleChange} />
              </div>
              <div className="inputBox">
                <p className="inputLabel">Expected Salary</p>
                <input type="text" name="expectedSalary" value={applicationLocVal?.expectedSalary} onChange={handleChange} />
              </div>

              <p style={{ margin: "10px 0" }} className="inputLabel">Notice Period </p>
              <DropBox list={noticePList} setDropVal={setNoticePeriod} defaultVal="Select" />

              <label htmlFor="attachFile">
                <div className="atachBtn">
                  <img src={atatchIcon} />
                  <p>Attach Your Resume</p>
                  <input id="attachFile" type="file" />
                </div>
              </label>

              <div className="checkBox">
                <input type="checkBox" onChange={(e) => setPolicyCheck(e.target.checked)
                } />
                <p>I Agree to Terms & Privacy Policy</p>
              </div>
              <AppBtn btnText="Apply Now" icon={rightArrow} onClick={postApplication} />
            </div>
          </div>


        </div>



        <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
        <img src={smPageBG} className="smPageBG" />
      </div>
      <div className="productPageMainSection careermainSection">
        <p className="navigateText">
          <span onClick={() => Navigate("/")} className="navHomeT">Home</span>
          <span className="navSeparator"> &gt; </span>
          <span className="navPageT" onClick={() => Navigate("/careers")}>Careers</span>
          <span className="navSeparator"> &gt; </span>
          <span className="navSubPageT">{jobData?.metaTitle}</span>
        </p>
        <div className="productDetailBox">
          <div className="productInfoSection">
            <div className="productHeader">
              <p>{jobData?.title}</p>
            </div>
            <div className="carBtnBox">
              <div className="carBtn_Box"><div className="carNavBtn">
                <img src={locationIcon} alt="" />
                <p>{jobData?.location}</p>
              </div>
                <div className="carNavBtn">
                  <img src={timeIcon} alt="" />
                  <p>{jobData?.type}</p>
                </div>
                <div className="carNavBtn">
                  <img src={locationIcon} alt="" />
                  <p>{jobData?.jobLocation}</p>
                </div></div>
              <div>
                <AppBtn btnText="Apply Now" onClick={() => {
                  setApplyPop(true)
                  GoTop()
                }} />
              </div>
            </div>

            <div className="carTextBox">
              <p className="carNText">{parse(jobData?.description || "")}</p>
              {
                parse(jobData?.experience || "")
              }
            </div>

          </div>

          <div className="sideBannerSection">
            <div className="sideServiceBox">
              <p className="sideCategoryBoxH">Our Services</p>
              {
                Category?.data?.length ?
                  Category?.data?.slice(0, 2).map((el, i) => (
                    <ServiceCard
                      {...el}
                      key={i}

                    />
                  )) : null
              }

              <AppHoloBtn btnText="Explore All Services" onClick={() => {
                Navigate("/services")
                GoTop()
              }} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
