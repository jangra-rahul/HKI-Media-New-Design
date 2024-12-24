import React from "react";
import EntertainmentHero from "../components/entertainmentpage/EntertainmentHero";
import GalleryImage from "../components/entertainmentpage/GalleryImage";
import FaqsPage from "../components/entertainmentpage/FaqsPage";

const EntertainmentPage = () => {
  return (
    <div>
      <EntertainmentHero />
      <GalleryImage />
      <FaqsPage />
    </div>
  );
};

export default EntertainmentPage;
