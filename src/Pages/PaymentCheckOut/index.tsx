import React, { useState, useEffect } from "react";
import "./style.css";
import { toast } from "react-toastify";
const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID;

//images
import smPageBG from "../../assets/images/smPageBG.svg";
import paymentBg from "../../assets/images/paymentBg.svg";
import GreenTik from "../../assets/images/GreenTik.svg";
import rightArrow from "../../assets/images/rightArrow.svg";
import { baseURL } from "../../App";
//data
import { CityList, cityPin } from "../../assets/Data";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { AppBtn } from "../../components/Buttons";
import MyCarousel from "../../components/Carousel";
import Subscribe from "../../components/Subscribe";
import { useNavigate } from "react-router-dom";
import { DropBox, GoTop } from "../../components/Tools";

import { GetUser, CreateContactUser } from "../../store/userSlice";
import {
  FetchService,
  ServiceDataType,
  priceDataProps,
} from "../../store/serviceSlice";
import { FetchCategory } from "../../store/categorySlice";
import { RootState, AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";

interface NavProps {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}
export default function PaymentCheckOut({
  setCurrentNav,
  currentNav,
}: NavProps) {
  const Navigate = useNavigate();
  const selectedProductId = localStorage.getItem("selectedProduct");
  const checkoutProduct = localStorage.getItem("checkoutProduct");
  const PriceId = localStorage.getItem("planPriceId");
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.service);
  const categoryDB = useSelector((state: RootState) => state.category);
  const user = useSelector((state: RootState) => state.user);
  const [currentPriceData, setCurrentPriceData] = useState<priceDataProps>();
  const [featureView, setFeatureView] = useState(false);
  const [Product, setProduct] = useState<ServiceDataType>();
  //user state
  const [contactUser, setContactUser] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
  });
  const [cityDrop, setCityDrop] = useState<string>("");
  const [policyCheck, setPolicyCheck] = useState<boolean>();
  const [planDrop, setPlanDrop] = useState<string>();

  const planArray = Product?.priceData?.map((val) => val.title) || [];

  const userId = localStorage.getItem("userId");
  const serviceId = localStorage.getItem("planServiceId");
  const amount = currentPriceData?.price?.replace(/,/g, "") ?? "0";
  const serviceName = localStorage.getItem("planServiceName");

  const handleBuy = async () => {
    try {
      const res = await fetch(baseURL + "/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, serviceId, amount }),
      });

      const { order } = await res.json();

      if (!order || !order.id) {
        alert("Failed to create payment order.");
        return;
      }
      const options: any = {
        key: RAZORPAY_KEY,
        amount: order?.amount,
        currency: order?.currency,
        name: "TexQue",
        description: `Buy ${serviceName}`,
        order_id: order?.id,
        handler: async function (response: any) {
          const verifyRes = await fetch(baseURL + "/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              userId,
              serviceId,
              purchasePlan: planDrop
            }),
          });

          const PaymentData = await verifyRes.json();

          if (PaymentData.success) {
            // alert("Payment Successful!");
            Navigate("/user-profile");
            GoTop();
            const invoiceRes = await fetch(baseURL + "/send-invoice", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ userId, serviceName, amount }),
            });
            const invoiceData = await invoiceRes.json();
            console.log("Invoice:", invoiceData.invoice);
          } else {
            alert("Payment failed!");
          }
        },
        prefill: {
          name: user?.data[0]?.name,
          email: user?.data[0]?.email,
          contact: "9999999999",
        },
        method: {
          upi: true,
        },
        theme: {
          color: "#fa8a05",
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment failed to initialize:", error);
      alert("Something went wrong while initiating the payment.");
    }
  };

  // create contact user
  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactUser((prv) => ({
      ...prv,
      [name]: value,
    }));
  };
  const PostContactUser = () => {
    if (!policyCheck) {
      toast.warn("Please check the Terms and Policy box!");
      return;
    }
    if (
      !contactUser?.name ||
      !contactUser.email ||
      !contactUser.phone ||
      !contactUser.pincode ||
      !cityDrop
    ) {
      toast.warn("Please fill all the fields !");
      return;
    }

    dispatch(
      CreateContactUser({
        name: contactUser?.name,
        email: contactUser?.email,
        phone: contactUser?.phone,
        city: cityDrop,
        pincode: contactUser?.pincode,
        date: new Date().toLocaleDateString("en-GB").slice(0, 8),
      })
    );
  };

  //Handel change plan------------------------
  useEffect(() => {
    if (!Product?.priceData?.length) return;
    const initialData = Product.priceData.find((pd) => pd._id === PriceId);
    if (!initialData) {
      return;
    }
    setCurrentPriceData(initialData);
  }, [Product?.priceData, PriceId]);

  useEffect(() => {
    if (!Product?.priceData?.length) return;
    const updatedData = Product.priceData.find((pd) => pd.title === planDrop);
    if (!updatedData) {
      return;
    }
    setCurrentPriceData(updatedData);
  }, [planDrop, Product?.priceData]);

  //pincode----------------
  useEffect(() => {
    const selectedPin = cityPin.find((val) => val.city === cityDrop);
    setContactUser((prv) => ({
      ...prv,
      ["pincode"]: selectedPin?.pincode || "",
    }));
  }, [cityDrop]);
  //find current product-------
  useEffect(() => {
    setProduct(data?.find((pr) => pr?._id === selectedProductId));
  }, [data, Product]);

  useEffect(() => {
    if (!userId) return;
    dispatch(GetUser({ _id: userId }));
    if (user.data?.length < 0) {
      dispatch(GetUser({ _id: userId }));
    }
  }, [userId]);

  useEffect(() => {
    dispatch(FetchService());
    if (data?.length < 0) {
      dispatch(FetchService());
    }
  }, []);

  useEffect(() => {
    dispatch(FetchService());
    if (categoryDB?.data?.length < 0) {
      dispatch(FetchService());
    }
  }, []);
  return (
    <>
      <div className="SMHeroBox">
        <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />
        <img src={smPageBG} className="smPageBG" />
      </div>
      <div className="PaymentMainSection">
        <img src={paymentBg} alt="" className="paymentPageBg" />
        <div className="paymentCheckBox">
          <div className="paymentBox">
            <h2>Your Information</h2>
            <div className="inputBox">
              <p className="inputLabel">Full Name *</p>
              <input
                name="name"
                type="text"
                value={contactUser.name}
                onChange={handleUserChange}
              />
            </div>
            <div className="inputBox">
              <p className="inputLabel">Phone</p>
              <input
                type="text"
                name="phone"
                value={contactUser.phone}
                onChange={handleUserChange}
              />
            </div>
            <div className="inputBox">
              <p className="inputLabel">Email Address</p>
              <input
                type="text"
                name="email"
                value={contactUser.email}
                onChange={handleUserChange}
              />
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

            <div className="tikBox">
              <input
                type="checkBox"
                onChange={(e) => setPolicyCheck(e.target.checked)}
              />
              <p>I Agree to Terms & Conditions and Privacy Policy</p>
            </div>

            {policyCheck ? (
              <AppBtn btnText="Submit Now" onClick={PostContactUser} />
            ) : (
              <div className="desibalBtn">
                <p>Submit Now</p>
              </div>
            )}
          </div>

          <div className="paymentBox">
            <div className="planTopBox">
              <h3>Your Current Plan</h3>
              <DropBox
                width="200px"
                list={planArray}
                setDropVal={setPlanDrop}
                defaultVal={currentPriceData?.title || "Choose Price Plan"}
              />
            </div>
            <p className="serviceTitle">ECA Assisted - Standard</p>
            <p className="pcbasPrice">
              Basic Price: {currentPriceData?.basicPrice} <span></span>
            </p>
            <p className="pcPrice">
              ₹ {currentPriceData?.price} <samp>/month</samp>
            </p>
            <div className="pcSummerySection">
              {featureView ? (
                <>
                  {currentPriceData?.fetures?.map((ft, i) => (
                    <div key={i} className="pcFeturesPera">
                      <img src={GreenTik} />
                      <p>{ft}</p>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {currentPriceData?.fetures?.slice(0, 2)?.map((ft, i) => (
                    <div key={i} className="pcFeturesPera">
                      <img src={GreenTik} />
                      <p>{ft}</p>
                    </div>
                  ))}
                </>
              )}
            </div>
            <p
              className="seemoreText"
              onClick={() => setFeatureView(!featureView)}
            >
              {featureView ? "Show less" : " Show More"}
            </p>
            <div className="finalPriceBox">
              <div className="fppBox">
                <p>Today's Total</p>
                <span>₹ {currentPriceData?.price} </span>
              </div>
              <p className="tpsummaryText">
                Annual plans function the same as monthly plans with a 25%
                discount applied.
              </p>
              {user?.data[0]?.purchase?.some(
                (item) => item.productId === serviceId
              ) ? (
                <AppBtn
                  btnText="Go To Your Dashboard"
                  width="255px"
                  onClick={() => {
                    Navigate("/user-profile");
                    GoTop();
                  }}
                />
              ) : checkoutProduct === selectedProductId ? (
                <AppBtn
                  btnText="Go For Final Payment"
                  width="232px"
                  onClick={handleBuy}
                />
              ) : (
                <div className="desibalBtn">
                  <p>Go For Final Payment</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/*Price plane Box*/}
        {/* <div className="productPageMainSection">
          <PriceSection product={Product} />
        </div> */}

        {/* -Our services section-- */}
        <div className="serviceSection">
          <p className="sectionHeader">Our Services</p>
          <div className="serviceCardBox">
            <MyCarousel data={categoryDB?.data} cardName="ServicesCard" />
          </div>
          <div className="btnBox">
            <AppBtn
              btnText="More Services"
              width="200px"
              height="50px"
              icon={rightArrow}
              onClick={() => {
                Navigate("/services");
                GoTop();
              }}
            />
          </div>
        </div>

        {/* subscribe section */}
        <Subscribe />
      </div>

      <Footer />
    </>
  );
}
