import React from "react";
import Slider from "react-slick";

import Slider1 from "../../../images/slider/slide1.jpg";
import Slider2 from "../../../images/slider/slide2.jpg";
import Slider3 from "../../../images/slider/slide3.jpg";

const FeaturedSlider = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: "notes-slider",
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div
            style={{
              background: `url(${Slider1})`,
              height: "380px",
              backgroundSize: "cover",
            }}
          ></div>
        </div>

        <div>
          <div
            style={{
              background: `url(${Slider2})`,
              height: "380px",
              backgroundSize: "cover",
            }}
          ></div>
        </div>

        <div>
          <div
            style={{
              background: `url(${Slider3})`,
              height: "380px",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default FeaturedSlider;
