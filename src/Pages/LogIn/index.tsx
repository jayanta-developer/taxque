import React, { useState, useRef, useContext } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

//Images
import smPageBG from "../../assets/images/smPageBG.svg";
import logCover from "../../assets/images/loginCover.png";
import GoogleIcon from "../../assets/images/google.svg";
import FacbookIcon from "../../assets/images/facebook1.svg";
import LinkdinIcon from "../../assets/images/linkedin1.svg";
import rightArrow from "../../assets/images/rightArrow.svg";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { AppBtn } from "../../components/Buttons";
import { AuthContext } from "../../Util/context/AuthContext";
import { toast } from "react-toastify";

//service
import {
  sendOTP,
  verifyOTP,
  googleLogin,
  facebookLogin,
  linkedInLogin,
} from "../../Util/services/authService";

import { CreateUser, FindUser } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { GoTop } from "../../components/Tools";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}

export default function Login({ setCurrentNav, currentNav }: NavProps) {
  const dispatch = useDispatch<AppDispatch>();
  // const { data, status } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  setCurrentNav("");
  const [userName, setUserName] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  const [optInputBox, setOtpInputBox] = useState(false);
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const { setUser } = useContext(AuthContext)!;

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input field
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // If all digits are entered, handle OTP submission
    if (newOtp.join("").length === 6) {
      // handleSubmit(newOtp.join(""));
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpInputBox = () => {
    if (!userName.length || !inputEmail.length) {
      toast.warn("User name and enail id required !");
      return;
    }

    if (inputEmail?.length) {
      setOtpInputBox(true);
      handleSendOTP();
    }
  };

  const handleVerifyOtp = () => {
    handleVerifyOTP();
  };

  ////Send otp
  const handleSendOTP = async () => {
    try {
      await sendOTP(inputEmail);
    } catch (error) {
      alert("Error sending OTP");
    }
  };

  const handleVerifyOTP = async () => {
    const OTPstring = otp.join("");
    try {
      const res = await verifyOTP(inputEmail, OTPstring);
      //check user alredy exist
      try {
        const response = await dispatch(
          FindUser({ email: inputEmail })
        ).unwrap();

        if (!response) {
          await handleCreateUser(res.data.token);
          toast.success("LogIn successfully!");
          localStorage.setItem("user", JSON.stringify(res.data.token));
          setUser(res.data.token);
          setTimeout(() => {
            navigate("/");
            GoTop();
          }, 600);
        } else {
          toast.success("LogIn successfully!");
          localStorage.setItem("user", JSON.stringify(res.data.token));
          setUser(res.data.token);
          setTimeout(() => {
            navigate("/");
          }, 600);
        }
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      toast.error("Invalid OTP");
    }
  };

  //Create user-----------------------------------------------------------------------
  const handleCreateUser = async (token: any) => {
    try {
      const response = await dispatch(
        CreateUser({
          name: userName,
          email: inputEmail,
          token,
        })
      ).unwrap(); // `unwrap()` extracts the fulfilled/rejected value

      console.log("User created successfully:", response);
    } catch (error: any) {
      console.error("Error creating user:", error?.error?.code);
    }
  };

  return (
    <>
      <div className="SMHeroBox">
        <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
        <img src={smPageBG} className="smPageBG" />
      </div>
      <div className="logInSection">
        <div className="logBox">
          <div className="logImgBox">
            <img src={logCover} alt="" />
          </div>
          <div className="logInfoBox">
            <p className="LogHeader">Log In To Continue</p>
            <p className="LogSubHeader">Log In with your existing acoount.</p>
            <div className="logBtnBox">
              <div
                className="logBtn"
                // onClick={googleLogin}
              >
                <img src={GoogleIcon} alt="" />
                <p>Google</p>
              </div>
              <div
                className="logBtn"
                // onClick={facebookLogin}
              >
                <img src={FacbookIcon} alt="" />
                <p>Facebook</p>
              </div>
              <div
                className="logBtn"
                // onClick={linkedInLogin}
              >
                <img src={LinkdinIcon} alt="" />
                <p>Linkedin</p>
              </div>
            </div>
            <div className="orBox">
              <div className="grayLine"></div>
              <p>Or continue with</p>
            </div>
            {!optInputBox ? (
              <>
                <div className="mailInputBox">
                  <input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    type="name"
                    name="name"
                    placeholder="Enter full Name"
                  />
                </div>
                <div className="mailInputBox">
                  <input
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                  />
                </div>
                <AppBtn
                  height="50px"
                  width="100%"
                  btnText="Log In"
                  icon={rightArrow}
                  onClick={handleOtpInputBox}
                />
              </>
            ) : (
              <>
                <div className="otpInputBox">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => {
                        inputRefs.current[index] = el;
                      }}
                      type="text"
                      value={digit}
                      maxLength={1}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      style={{
                        width: "40px",
                        height: "40px",
                        textAlign: "center",
                        fontSize: "20px",
                        border: "2px solid #ccc",
                        borderRadius: "5px",
                      }}
                    />
                  ))}
                </div>

                <AppBtn
                  height="50px"
                  width="100%"
                  btnText="Verify Accout"
                  onClick={handleVerifyOtp}
                />
              </>
            )}
          </div>
        </div>
        {/* <img src={YellowBg} className="yellowBg" /> */}
      </div>
      <Footer />
    </>
  );
}
