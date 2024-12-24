import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import HkiAnimatica from "./pages/HkiAnimatica";
import Skilling from "../src/pages/Skilling";
import EntertainmentPage from "../src/pages/EntertainmentPage";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hki-animatica" element={<HkiAnimatica />} />
        <Route path="/skilling" element={<Skilling />} />
        <Route path="/entertainment" element={<EntertainmentPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
