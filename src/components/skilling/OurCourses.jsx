import React from "react";
import article_img1 from "../../assets/images/png/artical_img1.png";
import article_img2 from "../../assets/images/png/artical_img2.png";
import article_img3 from "../../assets/images/png/artical_img3.png";

const OurCourses = () => {
  return (
    <div className="partners_bg py-5">
      <div className="container">
        <h4 className=" fs_35 ff_s fw-bold text-white fw-bold text-center">
          Our Courses
        </h4>
        <div className="row">
          <div className="col-md-4 mt-4">
            <div className="card p-2 rounded-4">
              <img src={article_img1} alt="article_img1" />
              <div className="p-2">
                <h3 className=" fs_24 ff_s fw-bold clr_theme text-center">
                  Film Production
                </h3>
                <p className="mb-0 fs_16 ff_n clr_darkgray text-center">
                  Including key roles like Actor, Director of Photography (DOP),
                  Prosthetic Artist, and Editor, we offer comprehensive training
                  to equip students with industry-ready skills.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4  mt-4">
            <div className="card p-2 rounded-4">
              <img src={article_img2} alt="article_img1" />
              <div className="p-2">
                <h3 className=" fs_24 ff_s fw-bold clr_theme text-center">
                  Digital Media
                </h3>
                <p className="mb-0 fs_16 ff_n clr_darkgray text-center">
                  Courses designed for emerging job roles such as Social Media
                  Influencers, Graphic Designers, and SEO Executives, ensuring
                  students are ready for the digital future.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4  mt-4">
            <div className="card p-2 rounded-4">
              <img src={article_img3} alt="article_img1" />
              <div className="p-2">
                <h3 className=" fs_24 ff_s fw-bold clr_theme text-center">
                  AVGC-XR
                </h3>
                <p className="mb-0 fs_16 ff_n clr_darkgray text-center">
                  Including key roles like Actor, Director of Photography (DOP),
                  Prosthetic Artist, and Editor, we offer comprehensive training
                  to equip students with industry-ready skills.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button className=" bg-white px-4 py-2 rounded-1 clr_theme border-0 fw-bold ff_n ">
              View All Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
