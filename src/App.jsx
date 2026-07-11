import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import ResumeCareer from "./pages/ResumeCareer.jsx";
import CoverLetter from "./pages/CoverLetter.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import MedihealHome from "./pages/MedihealHome.jsx";
import MedihealCareer from "./pages/MedihealCareer.jsx";
import MedihealPortfolio from "./pages/MedihealPortfolio.jsx";

export default function App() {
  const isMedihealSite = window.location.pathname.includes("/mediheal");

  if (isMedihealSite) {
    return (
      <>
        <Header variant="mediheal" />
        <Routes>
          <Route path="/" element={<MedihealHome />} />
          <Route path="/career" element={<MedihealCareer />} />
          <Route path="/portfolio" element={<MedihealPortfolio />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume-career" element={<ResumeCareer />} />
        <Route path="/cover-letter" element={<CoverLetter />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/mediheal" element={<MedihealHome />} />
        <Route path="/mediheal/career" element={<MedihealCareer />} />
        <Route path="/mediheal/portfolio" element={<MedihealPortfolio />} />
      </Routes>
    </>
  );
}
