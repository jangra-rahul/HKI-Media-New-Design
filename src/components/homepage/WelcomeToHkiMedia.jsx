import React from "react";
import welcome_img1 from "../../assets/images/png/welcome_img1.png";
import welcome_img2 from "../../assets/images/png/welcome_img2.png";
import welcome_img3 from "../../assets/images/png/welcome_img3.png";
import welcome_img4 from "../../assets/images/png/welcome_img4.png";
import welcome_img5 from "../../assets/images/png/welcome_img5.png";
import welcome_img6 from "../../assets/images/png/welcome_img6.png";

const WelcomeToHkiMedia = () => {
  return (
    <div className="bg-black py-5 py-3">
      <div className="container py-md-4 text-center">
        <h2 data-aos="fade-up" className="ff_s text-white fs_35 mb-0 fw-bold">
          Welcome to <span className=" clr_theme"> HKI Media</span>
        </h2>
        <h5
          data-aos="fade-up"
          className="ff_n fw-semibold mt-3 fs_24 mb-0 text-white"
        >
          Welcome to HKI Media: Redefining Creativity, Technology and the Media
          Industry
        </h5>
        <p
          data-aos="fade-up"
          className="ff_n fs_16 fw-normal clr_darkgray mt-mt-4 mt-3 mx-auto"
          style={{ maxWidth: "714px" }}
        >
          Sparking a revolution in the media industry. Were a game-changing
          startup with our sights set high, transforming the ndian media
          landscape with bold innovation and visionary thinking. With our finger
          on the pulse of the industry, were crafting a dynamic business
          blueprint thats got everyone buzzing. So, fasten your seatbelts—HKI
          Media is here to shake up the industry, ignite imaginations, and
          create a legacy of unforgettable stories, one creative masterpiece at
          a time.
        </p>
        <div className="row">
          <div className="col-lg-2 col-md-3 col-md-4 col-6 px-3 mt-4 ">
            <img
              data-aos="zoom-in"
              className="w-100"
              src={welcome_img1}
              alt="welcome_img1"
            />
          </div>
          <div className="col-lg-2 col-md-3 col-md-4 col-6 px-3 mt-4 ">
            <img
              data-aos="zoom-in"
              className="w-100"
              src={welcome_img2}
              alt="welcome_img2"
            />
          </div>
          <div className="col-lg-2 col-md-3 col-md-4 col-6 px-3 mt-4 ">
            <img
              data-aos="zoom-in"
              className="w-100"
              src={welcome_img3}
              alt="welcome_img3"
            />
          </div>

          <div className="col-lg-2 col-md-3 col-md-4 col-6 px-3 mt-4 ">
            <img
              data-aos="zoom-in"
              className="w-100"
              src={welcome_img4}
              alt="welcome_img4"
            />
          </div>
          <div className="col-lg-2 col-md-3 col-md-4 col-6 px-3 mt-4 ">
            <img
              data-aos="zoom-in"
              className="w-100"
              src={welcome_img5}
              alt="welcome_img5"
            />
          </div>
          <div className="col-lg-2 col-md-3 col-md-4 col-6 px-3 mt-4 ">
            <img
              data-aos="zoom-in"
              className="w-100"
              src={welcome_img6}
              alt="welcome_img6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeToHkiMedia;
