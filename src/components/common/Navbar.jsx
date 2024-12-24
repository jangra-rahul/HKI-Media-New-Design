import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import logo from "../../assets/images/svg/Logo.svg";
import dowload_icon from "../../assets/images/svg/dowmload_icon.svg";
import cross_icon from "../../assets/images/png/cross_icpon.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-white py-3">
      <div className="container text-black">
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/">
            <img src={logo} alt="websitelogo" className="logo" />
          </Link>

          <ul className="d-none d-lg-flex align-items-center gap-xl-5 gap-4 mb-0">
            <li>
              <Link
                className={`fs_16 ff_s fw-bold link_hover ${
                  isActive("/") ? "active_link" : "text-black"
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`fs_16 ff_s fw-bold link_hover ${
                  isActive("/hki-animatica") ? "active_link" : "text-black"
                }`}
                to="/hki-animatica"
              >
                HKI Animatica
              </Link>
            </li>
            <li>
              <Link
                className={`fs_16 ff_s fw-bold link_hover ${
                  isActive("/skilling") ? "active_link" : "text-black"
                }`}
                to="/skilling"
              >
                Skilling
              </Link>
            </li>
            <li>
              <Link
                className={`fs_16 ff_s fw-bold link_hover ${
                  isActive("/entertainment") ? "active_link" : "text-black"
                }`}
                to="/entertainment"
              >
                Entertainment
              </Link>
            </li>
            <li>
              <a className="fs_16 ff_s text-black fw-bold link_hover" href="#">
                Advertisement
              </a>
            </li>
            {/* <li>
            <a className="fs_16 ff_s text-black fw-bold link_hover" href="#">
              Entertainment
            </a>
          </li> */}
          </ul>

          {/* Button */}
          <button className="cummon_btn fs_16 border-0 text-white ff_s fw-bold d-none d-lg-block">
            Media Matrix App <img src={dowload_icon} alt=" dowload_icon" />
          </button>

          {/* Hamburger Menu for small screens */}

          <div
            onClick={handleSidebarToggle}
            className="navmanu d-block d-lg-none bg-transparent border-0"
          >
            <div className="navdot"></div>
            <div className="navdot custom_margin"></div>
            <div className="navdot"></div>
          </div>
        </div>

        {/* Sidebar */}
        <Offcanvas
          show={showSidebar}
          onHide={handleSidebarToggle}
          placement="end"
          className="bg-dark text-white "
        >
          <div className="position-relative p-lg-4 ">
            <img
              onClick={handleSidebarToggle}
              className=" position-absolute end-0 custom_position me-4"
              width={"30px"}
              height={"30px"}
              src={cross_icon}
              alt="cross_icon"
            />
            <Offcanvas.Header className="text-white">
              <Offcanvas.Title>
                <img src={logo} alt="websitelogo" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="list-unstyled">
                <li>
                  <Link
                    className={`fs_16 ff_s fw-bold link_hover ${
                      isActive("/") ? "active_link" : "text-white"
                    }`}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    className={`fs_16 ff_s fw-bold link_hover ${
                      isActive("/hki-animatica") ? "active_link" : "text-white"
                    }`}
                    to="/hki-animatica"
                  >
                    HKI Animatica
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    className={`fs_16 ff_s fw-bold link_hover ${
                      isActive("/skilling") ? "active_link" : "text-white"
                    }`}
                    to="/skilling"
                  >
                    Skilling
                  </Link>
                </li>
                <li className="mt-3">
                  <a className="fs_16 ff_s text-white fw-bold" href="#">
                    Advertisement
                  </a>
                </li>
                <li className="mt-3">
                  <a className="fs_16 ff_s text-white fw-bold" href="#">
                    Entertainment
                  </a>
                </li>
              </ul>
              <button className="cummon_btn fs_16 border-0 text-white ff_s fw-bold mt-4">
                Media Matrix App <img src={dowload_icon} alt=" dowload_icon" />
              </button>
            </Offcanvas.Body>
          </div>
        </Offcanvas>
      </div>
    </div>
  );
};

export default Navbar;
