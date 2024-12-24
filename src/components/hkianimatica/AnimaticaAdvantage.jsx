import React from "react";
import Advantage_icon from "../../assets/images/png/Advantage_img.png";
import { Accordion } from "react-bootstrap";
import width_arrow from "../../assets/images/svg/white_arrow.svg";
import "./animatica.css";

const AnimaticaAdvantage = () => {
  return (
    <div className="Advantage_bg py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 pe-md-5 position-relative">
            <img
              data-aos="fade-up"
              data-aos-duration="2000"
              className=" position-absolute"
              style={{ top: "0", right: "300px" }}
              src={width_arrow}
              alt="width_arrow"
            />
            <h3
              data-aos="fade-up"
              data-aos-duration="2000"
              className=" fs_35 ff_s text-white fw-bold"
            >
              The HKI Animatica <br></br> Franchise Advantage
            </h3>
            <Accordion defaultActiveKey="2" className="mt-4">
              <Accordion.Item
                data-aos="fade-up"
                data-aos-duration="2000"
                className="bg-white rounded-2 mt-3"
                eventKey="0"
              >
                <Accordion.Header className="rounded-2">
                  <h3 className="mb-0 fs_18 fw-semibold ff_n text-black">
                    State-of-the-Art Infrastructure
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0">
                  Utilize HKI’s expertise to turn creative ventures into
                  revenue-generating assets.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                data-aos="fade-up"
                data-aos-duration="2000"
                className="bg-white rounded-2 mt-3"
                eventKey="1"
              >
                <Accordion.Header className="rounded-2">
                  <h3 className="mb-0 fs_18 fw-semibold ff_n text-black">
                    Tailored Curriculum
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0">
                  Utilize HKI’s expertise to turn creative ventures into
                  revenue-generating assets.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                data-aos="fade-up"
                data-aos-duration="2000"
                className="bg-white rounded-2 mt-3"
                eventKey="2"
              >
                <Accordion.Header className="rounded-2">
                  <h3 className="mb-0 fs_18 fw-semibold ff_n text-black">
                    Proven Content Monetization Strategies
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0">
                  Utilize HKI’s expertise to turn creative ventures into
                  revenue-<br></br>generating assets.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                data-aos="fade-up"
                data-aos-duration="2000"
                className="bg-white rounded-2 mt-3 "
                eventKey="3"
              >
                <Accordion.Header className="rounded-2">
                  <h3 className="mb-0 fs_18 fw-semibold ff_n text-black">
                    Exclusive Access to the Media Matrix App
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                data-aos="fade-up"
                data-aos-duration="2000"
                className="bg-white rounded-2 mt-3"
                eventKey="4"
              >
                <Accordion.Header className="rounded-2">
                  <h3 className="mb-0 fs_18 fw-semibold ff_n text-black">
                    Support and Mentorship
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-md-5 mt-4 mt-md-0">
            <img className="w-100" src={Advantage_icon} alt="Advantage_icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimaticaAdvantage;
