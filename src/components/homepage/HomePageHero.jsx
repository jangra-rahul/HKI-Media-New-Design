import React from "react";
import "./home.css";
import Navbar from "../common/Navbar";
import play_icon from "../../assets/images/svg/play_icon.svg";
import star_icon from "../../assets/images/svg/star_icon.svg";
import phone_icon from "../../assets/images/svg/phone_icon.svg";
import homeSlider1 from "../../assets/images/png/homeSlider1.png";
import homeSlider2 from "../../assets/images/png/homeSlider2.png";
import homeSlider3 from "../../assets/images/png/homeSlider3.png";
import red_arrow from "../../assets/images/svg/red_arrow.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

const HomePageHero = () => {
  return (
    <div className="d-flex flex-column  min-vh-100 hero_bg">
      <div>
        <Navbar />
      </div>
      <div className="container py-5 d-flex flex-grow-1 flex-column justify-content-center aliign-items-center">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 text-center text-md-start col-md-6">
            <img data-aos="fade-up" src={play_icon} alt="play_icon" />
            <p
              data-aos="fade-up"
              className="d-flex justify-content-center justify-content-md-start align-items-center mb-0 ff_s fs_10 fw-bold text-white gap-1 mt-3"
            >
              <span>User Choice</span> <img src={star_icon} alt="star_icon" />{" "}
              <span>5.0/5</span>
            </p>
            <h1
              data-aos="fade-up"
              className="fs_35 ff_s fw-bold text-white mt-2"
            >
              HKI Media
            </h1>
            <p
              data-aos="fade-up"
              className=" fs_23 mb-0 ff_n text-capitalize text-white"
            >
              Incubating talent, nurturing <br></br>revolutions - the great
              Indian digital leap
            </p>
            <button
              data-aos="fade-up"
              className=" cummon_btn mt-3 fs_14 border-0 text-white ff_s fw-bold gap-2 p-2 px-3"
            >
              <span> Contact Us </span>&nbsp; &nbsp;
              <img src={phone_icon} alt="phone_icon" />
            </button>
          </div>
          <div className="col-lg-4 col-md-5 mt-5 mt-md-0 col-sm-7 col-11  position-relative">
            <img
              className=" position-absolute "
              style={{ top: "120px", left: "-140px" }}
              src={red_arrow}
              alt="red_arrow"
            />
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className="mySwiper ps-5"
            >
              <SwiperSlide>
                <img className="w-100" src={homeSlider1} alt="homeSlider1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-100" src={homeSlider2} alt="homeSlider1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-100" src={homeSlider3} alt="homeSlider1" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageHero;
