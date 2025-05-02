import React, { useState, useEffect } from "react";
import "./style.css";
//images
import smPageBG from "../../assets/images/smPageBG.svg";
import paymentBg from "../../assets/images/paymentBg.svg";
import GreenTik from "../../assets/images/GreenTik.svg";
import { baseURL } from "../../App";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { AppBtn } from "../../components/Buttons";
import PriceSection from "../../components/PriceSection";
import Subscribe from "../../components/Subscribe";
import { useNavigate } from "react-router-dom";
import { GoTop } from "../../components/Tools";

import { GetUser } from "../../store/userSlice";
import { FetchProdcut, ProductDataType } from "../../store/productSlice";
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
  const PriceId = localStorage.getItem("planPriceId");
  const dispatch = useDispatch<AppDispatch>();
  const { data, status } = useSelector((state: RootState) => state.product);
  const user = useSelector((state: RootState) => state.user);

  // console.log(data, status);
  const [featureView, setFeatureView] = useState(false);

  const [Product, setProduct] = useState<ProductDataType>();
  const PriceData = Product?.priceData?.find((pd) => pd._id === PriceId);

  const userId = localStorage.getItem("userId");
  const serviceId = localStorage.getItem("planServiceId");
  const amount = PriceData?.price?.replace(/,/g, "") ?? "0";
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
        // key: "rzp_live_r7KwJgrC6rE4Lo",
        key: "rzp_test_I1KZWb5UEAvCsr",
        amount: order?.amount,
        currency: order?.currency,
        name: "TexQue",
        description: `Buy ${serviceName}`,
        order_id: order?.id,
        handler: async function (response: any) {
          // console.log("Payment Response:", response);
          // console.log("Order ID:", response.razorpay_order_id);
          // console.log("Payment ID:", response.razorpay_payment_id);
          // console.log("Signature from Razorpay:", response.razorpay_signature);
          // console.log("Expected Signature:", response.expectedSignature);

          const verifyRes = await fetch(baseURL + "/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              userId,
              serviceId,
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

  useEffect(() => {
    dispatch(FetchProdcut());
    if (data?.length < 0) {
      dispatch(FetchProdcut());
    }
  }, []);
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
              <input type="text" />
            </div>
            <div className="inputBox">
              <p className="inputLabel">Phone</p>
              <input type="text" />
            </div>
            <div className="inputBox">
              <p className="inputLabel">Email Address</p>
              <input type="text" />
            </div>
            <div className="inputBox">
              <p className="inputLabel">Pincode</p>
              <input type="text" />
            </div>
            <div className="inputBox">
              <p className="inputLabel">City</p>
              <input type="text" />
            </div>

            <div className="tikBox">
              <input type="checkBox" />
              <p>I Agree to Terms & Conditions and Privacy Policy</p>
            </div>

            <AppBtn btnText="Submit Now" />
          </div>

          <div className="paymentBox">
            <h2>Your Current Plan</h2>
            <p className="serviceTitle">ECA Assisted -Standard</p>
            <p className="pcbasPrice">
              Basic Price: {PriceData?.basicPrice} <span></span>
            </p>
            <p className="pcPrice">
              ₹ {PriceData?.price} <samp>/month</samp>
            </p>
            <div className="pcSummerySection">
              {featureView ? (
                <>
                  {PriceData?.fetures?.map((ft, i) => (
                    <div key={i} className="pcFeturesPera">
                      <img src={GreenTik} />
                      <p>{ft}</p>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {PriceData?.fetures?.slice(0, 2)?.map((ft, i) => (
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
                <span>₹ {PriceData?.price} </span>
              </div>
              <p className="tpsummaryText">
                Annual plans function the same as monthly plans with a 25%
                discount applied.
              </p>
              <AppBtn
                btnText="Go For Final Payment"
                width="232px"
                onClick={handleBuy}
              />
            </div>
          </div>
        </div>

        <div className="productPageMainSection">
          {/*Price plane Box*/}
          <PriceSection product={Product} />
        </div>

        {/* subscribe section */}
        <Subscribe />
      </div>

      <Footer />
    </>
  );
}
