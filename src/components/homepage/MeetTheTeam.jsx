import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import team1 from "../../assets/images/png/team1.png";
import team2 from "../../assets/images/png/team2.png";
import team3 from "../../assets/images/png/team3.png";
import team4 from "../../assets/images/png/team4.png";
import icon from "../../assets/images/png/icon.png";
import dot from "../../assets/images/png/dot.png";
import red_arrow from "../../assets/images/svg/red_arrow.svg";
import yellow_arrow from "../../assets/images/png/yellow_icon.png";

const MeetTheTeam = () => {
  return (
    <div className="team_bg py-5">
      <div className="container-fluid py-md-5 px-md-0 overflow-hidden">
        <div className="row align-items-center">
          <div className="col-md-4 ps-md-5 ">
            <h3
              data-aos="fade-up"
              className="text-white ps-lg-5 ms-lg-4 fs_35 ff_s fw-bold "
            >
              Meet The <br></br> <span className="clr_theme">Team</span>
            </h3>
          </div>
          <div className="col-md-8 mt-4 position-relative">
            <img
              className=" position-absolute d-md-block d-none"
              style={{ top: "-50px", left: "275px" }}
              src={icon}
              alt=" icon"
            />
            <img
              className=" position-absolute d-md-block d-none"
              style={{ top: "90px", left: "-80px" }}
              src={dot}
              alt=" icon"
            />
            <img
              className=" position-absolute d-md-block d-none"
              style={{ bottom: "20px", left: "-140px" }}
              src={red_arrow}
              alt=" icon"
            />
            <img
              className=" position-absolute d-md-block d-none"
              style={{ bottom: "-40px", left: "-180px" }}
              src={yellow_arrow}
              alt=" icon"
            />

            <Swiper
              grabCursor={true} // Enables grab cursor
              spaceBetween={30} // Space between slides
              slidesPerView={3.5}
              breakpoints={{
                992: {
                  slidesPerView: 3.5, // For screens larger than 992px but less than 1200px
                },
                768: {
                  slidesPerView: 2.5, // For screens larger than 768px but less than 992px
                },
                568: {
                  slidesPerView: 2.5, // For screens larger than 568px but less than 768px
                },
                320: {
                  slidesPerView: 1.5, // For screens larger than 568px but less than 768px
                },
              }}
              modules={[EffectCards, Autoplay]}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              // Number of slides visible at a time
              pagination={{ clickable: true }} // Enables pagination dots
              navigation={true} // Enables next/prev buttons
            >
              {/* Add Swiper slides */}
              <SwiperSlide>
                <div
                  className="card h-100 "
                  style={{ borderRadius: "12px", padding: "12px" }}
                >
                  <img src={team1} alt="team1" />
                  <div className="text-center pt-3">
                    <h5 className=" fs_14 fw-bold clr_theme ff_n mb-0">
                      Clara Dupont
                    </h5>
                    <p className="fs_12 ff_n mt-1 fw-semibold clr_darkgray mb-0">
                      Senior Instructor
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="card h-100"
                  style={{ borderRadius: "12px", padding: "12px" }}
                >
                  <img src={team2} alt="team2" />
                  <div className="text-center pt-3">
                    <h5 className=" fs_14 fw-bold clr_theme ff_n mb-0">
                      Sophie Muller
                    </h5>
                    <p className="fs_12 ff_n mt-1 fw-semibold clr_darkgray mb-0">
                      Language Coach
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="card h-100"
                  style={{ borderRadius: "12px", padding: "12px" }}
                >
                  <img src={team3} alt="team3" />
                  <div className="text-center pt-3">
                    <h5 className=" fs_14 fw-bold clr_theme ff_n mb-0">
                      Marc Becker
                    </h5>
                    <p className="fs_12 ff_n mt-1 fw-semibold clr_darkgray mb-0">
                      AI Language Specialist
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="card h-100"
                  style={{ borderRadius: "12px", padding: "12px" }}
                >
                  <img src={team4} alt="team4" />
                  <div className="text-center pt-3">
                    <h5 className=" fs_14 fw-bold clr_theme ff_n mb-0">
                      Jacob Jones
                    </h5>
                    <p className="fs_12 ff_n mt-1 fw-semibold clr_darkgray mb-0">
                      Curriculum Developer
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="card h-100"
                  style={{ borderRadius: "12px", padding: "12px" }}
                >
                  <img src={team1} alt="team1" />
                  <div className="text-center pt-3">
                    <h5 className=" fs_14 fw-bold clr_theme ff_n mb-0">
                      Clara Dupont
                    </h5>
                    <p className="fs_12 ff_n mt-1 fw-semibold clr_darkgray mb-0">
                      Senior Instructor
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="card h-100"
                  style={{ borderRadius: "12px", padding: "12px" }}
                >
                  <img src={team2} alt="team2" />
                  <div className="text-center pt-3">
                    <h5 className=" fs_14 fw-bold clr_theme ff_n mb-0">
                      Sophie Muller
                    </h5>
                    <p className="fs_12 ff_n mt-1 fw-semibold clr_darkgray mb-0">
                      Language Coach
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
