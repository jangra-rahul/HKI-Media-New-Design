import React from "react";
import HkiAnimaticaHero from "../components/hkianimatica/HkiAnimaticaHero";
import AnimaticaFuture from "../components/hkianimatica/AnimaticaFuture";
import AnimaticaWhyInvestHero from "../components/hkianimatica/AnimaticaWhyInvestHero";
import DynamicContent from "../components/hkianimatica/DynamicContent";
import AnimaticaAdvantage from "../components/hkianimatica/AnimaticaAdvantage";
import OurVision from "../components/hkianimatica/OurVision";
import FaqsPage from "../components/entertainmentpage/FaqsPage";
import HkianimaticaFaqs from "../components/hkianimatica/HkianimaticaFaqs";

const HkiAnimatica = () => {
  return (
    <div>
      <HkiAnimaticaHero />
      <AnimaticaFuture />

      <AnimaticaWhyInvestHero />
      <OurVision />
      <AnimaticaAdvantage />
      <DynamicContent />
      <HkianimaticaFaqs />
    </div>
  );
};

export default HkiAnimatica;
