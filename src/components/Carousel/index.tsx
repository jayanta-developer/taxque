import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import { BlogCard, ServiceCard, MemberCard } from "../Tools";

import type { CategoryDataType } from "../../store/categorySlice";
import type { BlogDataType } from "../../store/blogSlice";
import type { TeamDataType } from "../../store/teamSlice";

interface MyCarouselProps {
  data: BlogDataType[] | CategoryDataType[] | TeamDataType[];
  cardName: "BlogCard" | "ServicesCard" | "memberCard";
}

const MyCarousel: React.FC<MyCarouselProps> = ({ data, cardName }) => {
  const [deviceType, setDeviceType] = useState("desktop");

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: cardName === "memberCard" ? 4 : 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

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

    updateDeviceType(); // Set on initial render
    window.addEventListener("resize", updateDeviceType);

    return () => {
      window.removeEventListener("resize", updateDeviceType);
    };
  }, []);
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={cardName === "memberCard" ? false : true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      // autoPlay={deviceType !== "mobile"}
      // autoPlay={true}
      autoPlaySpeed={3000}
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
      {data?.map((el, i) =>
        cardName === "BlogCard" ? (
          <BlogCard {...(el as BlogDataType)} key={i} />
        ) : cardName === "ServicesCard" ? (
          <ServiceCard {...(el as CategoryDataType)} key={i} />
        ) : cardName === "memberCard" ? (
          <MemberCard {...(el as TeamDataType)} key={i} />
        ) : null
      )}
    </Carousel>
  );
};

export default MyCarousel;
