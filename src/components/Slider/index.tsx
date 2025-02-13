import React from "react";
import Slider from "react-slick";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// card
import { MemberCard } from "../../components/Tools";

function AppSlider({ data, cardName }: any) {
  console.log(data, cardName);

  var settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    centerMode: true,
    className: "center",
    centerPadding: "30px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data?.map((el: any, i: any) => (
          <MemberCard {...el} key={i} />
        ))}
      </Slider>
    </div>
  );
}

export default AppSlider;
