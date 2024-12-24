import React from "react";
import animatica_img from "../../assets/images/png/animatica_img.png";
import red_arrow from "../../assets/images/svg/red_arrow.svg";

const AnimaticaFuture = () => {
  return (
    <div className="bg-black py-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-5 text-center text-md-start">
            <h2
              data-aos="fade-up"
              data-aos-duration="2000"
              className="fs_35 ff_s fw-bold text-white"
            >
              Unleash the Future of <br></br>
              <span className=" clr_theme">AVGC-XR</span> with Us
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="fs_16 ff_n clr_darkgray mb-0 mt-3"
            >
              HKI Animatica, an innovative initiative by HKI Media, is setting
              new benchmarks in the Animation, Visual Effects, Gaming, Comics,
              and Extended Reality (AVGC-XR) industry. Designed as a
              franchise-ready model, HKI Animatica combines cutting-edge
              animation production with a robust education ecosystem, delivering
              high-quality content while bridging talent gaps in the industry.
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="fs_16 ff_n clr_darkgray mb-0 mt-3"
            >
              As India gears towards becoming a global AVGC-XR leader, HKI
              Animatica offers you a chance to join this revolution by owning a
              piece of the future.
            </p>
          </div>
          <div className="col-md-5 mt-4 mt-md-0 position-relative">
            <img
              data-aos="fade-up"
              data-aos-duration="2000"
              className="d-md-block d-none position-absolute"
              style={{ top: "50px", left: "-150px" }}
              src={red_arrow}
              alt="red_arrow"
            />
            <img
              data-aos="fade-up"
              data-aos-duration="2000"
              className="w-100"
              src={animatica_img}
              alt="animatica_img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimaticaFuture;
