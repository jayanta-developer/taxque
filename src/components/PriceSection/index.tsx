import { useEffect, useState } from "react";
import YellowBg from "../../assets/images/YellowBg.svg";
import "./style.css";

import { PriceCard } from "../Tools";
import { priceDataProps } from "../../store/productSlice";

export default function PriceSection({ product }: any) {
  const [priceTab, setPriceTab] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="pricePlaneBox PriceplaneSection">
      <p className="sectionHeader">{product?.title} Pricing Plans</p>
      <div className="priceSelectTab">
        {product?.priceData?.map((val: priceDataProps, i: number) => (
          <div
            key={i}
            onClick={() => setPriceTab(i)}
            className={priceTab === i ? "psTabe psTabeActive" : "psTabe"}
          >
            <p>{val?.title}</p>
          </div>
        ))}
      </div>
      <div id="priceBox" className="priceCardBox">
        <img src={YellowBg} className="yellowBg" />
        {product?.priceData?.map((el: any, i: number) => (
          <PriceCard
            {...el}
            priceTabe={priceTab}
            index={i}
            key={i}
            isMobile={isMobile}
            id={product?._id}
            productName={product?.title}
          />
        ))}
      </div>
    </div>
  );
}
