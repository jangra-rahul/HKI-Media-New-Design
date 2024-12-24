// import React from "react";
// import "./skilling.css";
// import Navbar from "../common/Navbar";

// const SkillingHero = () => {
//   return (
//     <>
//       <div className="d-flex flex-column  min-vh-100 skilling_bg">
//         <div>
//           <Navbar />
//         </div>
//         {/* <div className="container py-5 d-flex flex-grow-1 flex-column justify-content-md-end justify-content-center mb-md-5 aliign-items-center">
//           kokdocdo
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default SkillingHero;
import React, { useState, useEffect } from "react";
import "./skilling.css";
import Navbar from "../common/Navbar";

// Import background images
import skillingBg1 from "../../assets/images/png/skilling_bg.png";
import skillingBg2 from "../../assets/images/png/skilling_bg1.png";
import skillingBg3 from "../../assets/images/png/skilling_bg2.png";

const SkillingHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // List of imported images
  const backgroundImages = [skillingBg1, skillingBg3, skillingBg2];

  // Update the image index every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 2000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [backgroundImages.length]);

  return (
    <>
      <div
        className="d-flex flex-column min-vh-100 skilling_bg"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          transition: "background-image 1s ease-in-out", // Smooth transition
        }}
      >
        <div>
          <Navbar />
        </div>
        <div className="container py-5 d-flex flex-grow-1 flex-column justify-content-md-end justify-content-center mb-md-5 align-items-center">
          <h1 className="text-white">Welcome to Skilling Platform</h1>
        </div>
      </div>
    </>
  );
};

export default SkillingHero;
