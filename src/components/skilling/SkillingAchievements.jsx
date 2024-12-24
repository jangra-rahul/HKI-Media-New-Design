import React from "react";
import top_icon from "../../assets/images/png/top_icon.png";
import Achievements_img from "../../assets/images/png/Achievements_img.png";
import Achievements_img1 from "../../assets/images/png/animatica_img1.png";
import Achievements_img2 from "../../assets/images/png/animatica_img2.png";
import red_arrow from "../../assets/images/svg/red_arrow.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SkillingAchievements = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="bg-black  py-5">
      <div
        className="container pb-5 custom_AchievementSection_margin  rounded-2 p-4 position-relative"
        style={{ backgroundColor: "#171717" }}
      >
        <h4 className="mt-4 text-white fs_44 fw-bold ff_s mb-0 text-center">
          Achievements
        </h4>
        <p className=" fs_24 fw-semibold ff_n mb-0 text-white text-center">
          Revolutionizing India’s Animation Frontier
        </p>
        <div className="row  align-items-center justify-content-between mt-5">
          <div className="col-md-6 mt-4 position-relative">
            <img
              className="d-md-block d-none position-absolute "
              style={{ top: "-130px", right: "-30px" }}
              src={red_arrow}
              alt="red_arrow"
            />
            <ul className="ps-md-4 ps-2">
              <li className="list_type fs_16 ff_n clr_darkgray fw-bold mb-0 text-white">
                Over 2,000 Students Trained in 2023-24:{" "}
                <span className=" clr_darkgray fw-normal">
                  We have made a significant impact in empowering the next
                  generation of media professionals through our robust training
                  programs.
                </span>
              </li>
              <li className="list_type fs_16 mt-4 ff_n clr_darkgray fw-bold mb-0 text-white">
                Skilling & Upskilling 10,200+ Artists:{" "}
                <span className=" clr_darkgray fw-normal">
                  In collaboration with MESC, we are on track to skill and
                  upskill over 10,200 students in film production and animation
                  this year, directly contributing to India's creative economy.
                </span>
              </li>
              <li className="list_type fs_16 mt-4 ff_n clr_darkgray fw-bold mb-0 text-white">
                Expansion with 20 AVGC-XR CoEs:{" "}
                <span className=" clr_darkgray fw-normal">
                  With 20 planned Centers of Excellence (CoEs) across North
                  India, we are taking a giant leap toward empowering youth with
                  futuristic skills for the digital age.
                </span>
              </li>
              <li className="list_type fs_16 mt-4 ff_n clr_darkgray fw-bold mb-0 text-white">
                National Affiliations:{" "}
                <span className=" clr_darkgray fw-normal">
                  Proudly recognized under Startup India, Skill India, and
                  affiliated with NSDC, MESC, UPSDM, TCIL, and ICASA.
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-6 animatica_slider pe-4 mt-4 ps-md-5">
            <Slider className="row" {...settings}>
              <div>
                <img
                  className="w-100 p-3"
                  src={Achievements_img}
                  alt="Achievements_img"
                />
              </div>
              <div>
                <img
                  className="w-100 p-3"
                  src={Achievements_img1}
                  alt="Achievements_img"
                />
              </div>
              <div>
                <img
                  className="w-100 p-3"
                  src={Achievements_img2}
                  alt="Achievements_img"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillingAchievements;
