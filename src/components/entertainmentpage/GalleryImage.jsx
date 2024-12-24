import React from "react";
import "../hkianimatica/animatica.css";
import grid_1 from "../../assets/images/png/grid1.png";
import grid_2 from "../../assets/images/png/grid2.png";
import grid_3 from "../../assets/images/png/grid3.png";
import grid_4 from "../../assets/images/png/grid4.png";
import grid_5 from "../../assets/images/png/grid5.png";

const GalleryImage = () => {
  return (
    <div className="Advantage_bg py-5">
      <div className="container">
        <h3
          data-aos="fade-up"
          data-aos-duration="2000"
          className=" fs_35 fw-bold ff_s text-white text-center mb-0"
        >
          Our Image gallery
        </h3>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-7 ">
                <img
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="w-100 h-100"
                  src={grid_1}
                  alt="grid_1"
                />
              </div>
              <div className="col-md-5 mt-3 mt-md-0">
                <img
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="w-100 h-100"
                  src={grid_2}
                  alt="grid_2"
                />
              </div>
              <div className="col-md-5 mt-3">
                <img
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="w-100 h-100"
                  src={grid_4}
                  alt="grid_4"
                />
              </div>
              <div className="col-md-7 mt-3">
                <img
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="w-100"
                  src={grid_5}
                  alt="grid_5"
                />
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-3 mt-md-0">
            <img
              data-aos="fade-up"
              data-aos-duration="2000"
              className=" w-100 object-fit-cover rounded-4"
              height={410}
              src={grid_3}
              alt="grid_3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;
