import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/tava-01.jpg";
import ava02 from "../../assets/all-images/tava-02.jpg";
import ava03 from "../../assets/all-images/tava-03.jpg";
import ava04 from "../../assets/all-images/tava-04.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I recently rented a car from this service for a weekend getaway and was thoroughly impressed with the experience. The car was in great condition and the rental process was quick and easy. I highly recommend this car rental service!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Sarah K.</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I've been using this car rental service for business travel for the past few months and have had nothing but positive experiences. The staff is always friendly and accommodating, and the cars are always clean and well-maintained. Highly recommended!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">John M.</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I've rented cars from many different services over the years, but this one stands out as the best. The prices are competitive and the customer service is outstanding. I recently had a flat tire while on the road and the staff went above and beyond to assist me. I will definitely be renting from this service again!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Tom B.</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "I was a little hesitant to try a new car rental service, but I'm so glad I did. The staff was extremely helpful and the rental process was a breeze. I rented a luxury sedan for a special occasion and it was the perfect touch to make my night unforgettable. Thank you!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Maria S.</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
