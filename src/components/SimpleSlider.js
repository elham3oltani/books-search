import React from "react";
import Slider from "infinite-react-carousel";

const SimpleSlider = () => {
  const settings = {
    autoplaySpeed: 5000,
    autoplay: true,
    arrows: false,
    duration:400
  };
  return (
    <Slider {...settings} className="bg-slate-500 p-3 lg:text-lg text-xs sm:text-lg text-center text-white">
      <div>
        <h3>BUY 1, GET 1 50% OFF BOOKS FOR ALL AGES</h3>
      </div>
      <div>
        <h3>30% discount for JavaScript and React books</h3>
      </div>
      <div>
        <h3>FREE SHIPPING ON ORDERS OF $40 OR MORE</h3>
      </div>
    </Slider>
  );
};

export default SimpleSlider;
