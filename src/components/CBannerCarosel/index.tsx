import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";

import Clogo1 from "../../assets/images/CLogo1.svg";
import Clogo2 from "../../assets/images/CLogo2.svg";
import Clogo3 from "../../assets/images/CLogo3.svg";
import Clogo4 from "../../assets/images/CLogo4.svg";
import Clogo5 from "../../assets/images/CLogo5.svg";
import Clogo6 from "../../assets/images/CLogo6.svg";
import Clogo7 from "../../assets/images/CLogo7.svg";
import Clogo8 from "../../assets/images/CLogo8.svg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};

const BNCarousel = () => {
  const [deviceType, setDeviceType] = useState("desktop");

  const imgData = [
    Clogo1,
    Clogo2,
    Clogo3,
    Clogo4,
    Clogo5,
    Clogo6,
    Clogo7,
    Clogo8,
  ];

  useEffect(() => {
    const updateDeviceType = () => {
      if (window.innerWidth < 464) {
        setDeviceType("mobile");
      } else if (window.innerWidth < 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);

    return () => {
      window.removeEventListener("resize", updateDeviceType);
    };
  }, []);
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      // autoPlay={deviceType !== "mobile"}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="all .5s"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      arrows={true}
    >
      {imgData?.map((el, i) => (
        <img src={el} key={i} />
      ))}
    </Carousel>
  );
};

export default BNCarousel;
