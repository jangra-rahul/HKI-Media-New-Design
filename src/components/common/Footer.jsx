import React from "react";
import facebook_icon from "../../assets/images/svg/facebook_icon.svg";
import youtub_icon from "../../assets/images/svg/youtub_icon.svg";
import x_icon from "../../assets/images/svg/x_icon.svg";
import insta_icon from "../../assets/images/svg/insta_icon.svg";
import msg_icon from "../../assets/images/svg/msg_icon.svg";
import right_icon from "../../assets/images/svg/right_icon.svg";
import insta_img1 from "../../assets/images/svg/insta_img1.svg";
import insta_img2 from "../../assets/images/svg/insta_img2.svg";
import insta_img3 from "../../assets/images/svg/insta_img3.svg";
import insta_img4 from "../../assets/images/svg/insta_img4.svg";
import insta_img5 from "../../assets/images/svg/insta_img5.svg";
import insta_img6 from "../../assets/images/svg/insta_img6.svg";

const Footer = () => {
  return (
    <div className="footer_bg pt-md-5 pt-4">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <h4 className=" fs_18 ff_s fw-bold text-white mb-0">Contact Us</h4>
            <p className=" fs_n ff_n fs_14 clr_darkgray mt-3 mb-0">
              Ground Floor, Plot No 251, Udyog{" "}
              <br className="d-md-block d-none"></br>Vihar Phase 4, Sector 18,
              Gurugram
            </p>
            <h5 className="fs_16 mb-0 mt-3 fw-bold ff_s text-white">
              <span className=" clr_theme">Call : </span> +1 587 785 4578
            </h5>
            <h5 className="fs_16 mb-0 mt-2 fw-bold ff_s text-white">
              <span className=" clr_theme">Mail :</span> Support@hkimedia.com
            </h5>
            <div className="d-flex align-items-center gap-2 mt-4">
              <img src={facebook_icon} alt="facebook_icon" />
              <img src={insta_icon} alt="facebook_icon" />
              <img src={x_icon} alt="facebook_icon" />
              <img src={youtub_icon} alt="facebook_icon" />
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <h4 className=" fs_18 ff_s fw-bold text-white mb-0">
              Important Links
            </h4>
            <ul className="ps-0 mt-2">
              <li className="mt-2">
                <a className="fs_14 fw-normal ff_n clr_darkgray" href="#">
                  About
                </a>
              </li>
              <li className="mt-2">
                <a className="fs_14 fw-normal ff_n clr_darkgray" href="#">
                  Home
                </a>
              </li>
              <li className="mt-2">
                <a className="fs_14 fw-normal ff_n clr_darkgray" href="#">
                  Latest Video
                </a>
              </li>
              <li className="mt-2">
                <a className="fs_14 fw-normal ff_n clr_darkgray" href="#">
                  Our Team
                </a>
              </li>
              <li className="mt-2">
                <a className="fs_14 fw-normal ff_n clr_darkgray" href="#">
                  Help(FAQ)
                </a>
              </li>
              <li className="mt-2">
                <a className="fs_14 fw-normal ff_n clr_darkgray" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <h4 className=" fs_18 ff_s fw-bold text-white mb-0">Newsletter</h4>
            <p className=" fs_n ff_n fs_14 clr_darkgray mt-3 mb-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <div className="d-flex mt-3 align-items-center">
              <input
                className="w-100 text-white border-0"
                style={{ padding: "12px 20px" }}
                type="text"
                placeholder="Enter Your Email"
              />
              <button
                style={{ padding: "10px 20px 14px 20px" }}
                className=" bg_theme border-0"
              >
                <img width={20} height={20} src={msg_icon} alt="msg_icon" />
              </button>
            </div>
            <p
              style={{ cursor: "pointer" }}
              className=" fs_14 ff_s fw-bold mt-3 mb-0 clr_theme"
            >
              Subscribe Now &nbsp;
              <img src={right_icon} alt="right_icon" />
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <h4 className=" fs_18 ff_s fw-bold text-white mb-0">Instagram</h4>
            <div className="d-flex mt-3 align-items-center gap-2">
              <img src={insta_img1} alt="insta_img1" />
              <img src={insta_img2} alt="insta_img1" />
              <img src={insta_img3} alt="insta_img1" />
            </div>
            <div className="d-flex mt-2 align-items-center gap-2">
              <img src={insta_img4} alt="insta_img1" />
              <img src={insta_img5} alt="insta_img1" />
              <img src={insta_img6} alt="insta_img1" />
            </div>
          </div>
        </div>
        <div
          className=" mt-5 mb-3"
          style={{ border: "0.83px solid #292929" }}
        ></div>
        <div className="d-md-flex text-center text-md-start pb-3 justify-content-between align-items-center">
          <p className="fs_14 mb-0  fw-bolder clr_darkgray ff_n">
            © Copyright 2024 <span className="text-white">Hki </span>
            <span className=" clr_theme">Media</span> - All Rights Reserved.
          </p>
          <div className="d-flex align-items-center justify-content-center justify-content-md-start mt-2 mt-md-0 gap-3">
            <a className="p-0 fs_14 ff_n clr_darkgray" href="#">
              Terms of Use
            </a>
            <a className="p-0 fs_14 ff_n text-white" href="#">
              Privacy Policy{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
