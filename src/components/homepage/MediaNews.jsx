// import React from "react";
// import video_icon from "../../assets/images/png/video_icon.png";
// import play_icon from "../../assets/images/png/play_icon.png";
// import video_icon1 from "../../assets/images/png/video_icon1.png";

// const MediaNews = () => {
//   return (
//     <div className="py-5 partners_bg">
//       <div className="container">
//         <h3 className=" fs_35 fw-bold ff_s text-white text-center">
//           Media & News
//         </h3>
//         <p className=" fs_24 ff_n fw-semibold text-center text-white mb-0 mt-1">
//           Welcome to HKI Media: Redefining Creativity, Technology and the Media
//           Industry
//         </p>
//         <div className="d-flex mt-4 justify-content-center gap-3">
//           <button className="video_btn px-5 fw-semibold py-2">
//             Video News
//           </button>
//           <button className="article_btn px-5 py-2 fs_16 fw-semibold ff_n text-white rounded-1">
//             Article
//           </button>
//         </div>
//         <div className="row">
//           <div className="col-4 mt-5">
//             <div className="position-relative">
//               <img
//                 className="position-absolute top-50 start-50 translate-middle"
//                 src={play_icon}
//                 alt="play_icon"
//               />
//               <img className="w-100" src={video_icon} alt="video_icon" />
//             </div>
//           </div>
//           <div className="col-4 mt-5">
//             <div className="position-relative">
//               <img
//                 className="position-absolute top-50 start-50 translate-middle"
//                 src={play_icon}
//                 alt="play_icon"
//               />
//               <img className="w-100" src={video_icon1} alt="video_icon" />
//             </div>
//           </div>
//           <div className="col-4 mt-5">
//             <div className="position-relative">
//               <img
//                 className="position-absolute top-50 start-50 translate-middle"
//                 src={play_icon}
//                 alt="play_icon"
//               />
//               <img className="w-100" src={video_icon} alt="video_icon" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MediaNews;

import React, { useState } from "react";
import video_icon from "../../assets/images/png/video_icon.png";
import play_icon from "../../assets/images/png/play_icon.png";
import video_icon1 from "../../assets/images/png/video_icon1.png";
import article_img1 from "../../assets/images/png/artical_img1.png";
import article_img2 from "../../assets/images/png/artical_img2.png";
import article_img3 from "../../assets/images/png/artical_img3.png";

const MediaNews = () => {
  const [activeTab, setActiveTab] = useState("video");

  return (
    <div className="py-5 partners_bg">
      <div className="container">
        <h3 className="fs_35 fw-bold ff_s text-white text-center">
          Media & News
        </h3>
        <p className="fs_24 ff_n fw-semibold text-center text-white mb-0 mt-1">
          Welcome to HKI Media: Redefining Creativity, Technology and the Media
          Industry
        </p>
        <div className="d-flex mt-4 justify-content-center gap-3">
          {/* Video News Button */}
          <button
            className={`video_btn px-5 fw-semibold py-2 ${
              activeTab === "video" ? "active-tab" : ""
            }`}
            onClick={() => setActiveTab("video")}
          >
            Video News
          </button>

          {/* Article Button */}
          <button
            className={`article_btn px-5 py-2 fs_16 fw-semibold ff_n text-white rounded-1 ${
              activeTab === "article" ? "active-tab" : ""
            }`}
            onClick={() => setActiveTab("article")}
          >
            Article
          </button>
        </div>

        {/* Conditional Rendering Based on Active Tab */}
        {activeTab === "video" && (
          <div className="row">
            <div className="col-4 mt-md-5 mt-4">
              <div className="position-relative">
                <img
                  className="position-absolute top-50 start-50 translate-middle"
                  src={play_icon}
                  alt="play_icon"
                />
                <img className="w-100" src={video_icon} alt="video_icon" />
              </div>
            </div>
            <div className="col-4 mt-md-5 mt-4">
              <div className="position-relative">
                <img
                  className="position-absolute top-50 start-50 translate-middle"
                  src={play_icon}
                  alt="play_icon"
                />
                <img className="w-100" src={video_icon1} alt="video_icon" />
              </div>
            </div>
            <div className="col-4 mt-md-5 mt-4">
              <div className="position-relative">
                <img
                  className="position-absolute top-50 start-50 translate-middle"
                  src={play_icon}
                  alt="play_icon"
                />
                <img className="w-100" src={video_icon} alt="video_icon" />
              </div>
            </div>
          </div>
        )}

        {activeTab === "article" && (
          <div className="row">
            <div className="col-md-4 mt-md-5 mt-4">
              <div className="card p-2 rounded-4">
                <img src={article_img1} alt="article_img1" />
                <div className="p-2">
                  <p className="mb-0 fs_16 ff_n clr_darkgray">
                    How India's New OTT Guidelines Are Reshaping the
                    Entertainment Industry
                  </p>
                  <h5 className="fs_16 ff_s clr_theme fw-bold mt-3">
                    View More →
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-md-5 mt-4">
              <div className="card p-2 rounded-4">
                <img src={article_img2} alt="article_img1" />
                <div className="p-2">
                  <p className="mb-0 fs_16 ff_n clr_darkgray">
                    Film Subsidies 2024: How the Government Plans to Support
                    Indian Filmmakers
                  </p>
                  <h5 className="fs_16 ff_s clr_theme fw-bold mt-3">
                    View More →
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-md-5 mt-4">
              <div className="card p-2 rounded-4">
                <img src={article_img3} alt="article_img1" />{" "}
                <div className="p-2">
                  <p className="mb-0 fs_16 ff_n clr_darkgray">
                    Government Partners with Streaming Platforms to Promote
                    Indian Culture Glob..
                  </p>
                  <h5 className="fs_16 ff_s clr_theme fw-bold mt-3">
                    View More →
                  </h5>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaNews;
