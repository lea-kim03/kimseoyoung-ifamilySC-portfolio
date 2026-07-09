import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import ResumeCareer from "./pages/ResumeCareer.jsx";
import CoverLetter from "./pages/CoverLetter.jsx";
import Portfolio from "./pages/Portfolio.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume-career" element={<ResumeCareer />} />
        <Route path="/cover-letter" element={<CoverLetter />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}
