import { useEffect, useState } from "react";
import YellowBg from "../../assets/images/YellowBg.svg";
import { priceCardData } from "../../assets/Data";

import { PriceCard } from "../Tools";

export default function PriceSection() {
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
      <p className="sectionHeader">Income Tax Return Filing Pricing Plans</p>
      <div className="priceSelectTab">
        <div
          onClick={() => setPriceTab(0)}
          className={priceTab === 0 ? "psTabe psTabeActive" : "psTabe"}
        >
          <p>Standard</p>
        </div>
        <div
          onClick={() => setPriceTab(1)}
          className={priceTab === 1 ? "psTabe psTabeActive" : "psTabe"}
        >
          <p>Business</p>
        </div>
        <div
          onClick={() => setPriceTab(2)}
          className={priceTab === 2 ? "psTabe psTabeActive" : "psTabe"}
        >
          <p>Premium</p>
        </div>
      </div>
      <div id="priceBox" className="priceCardBox">
        <img src={YellowBg} className="yellowBg" />
        {priceCardData?.map((el, i) => (
          <PriceCard
            {...el}
            priceTabe={priceTab}
            index={i}
            key={i}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
}
