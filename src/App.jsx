import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage/Subline";
//import LandingPage from "./pages/LandingPage/LandingPage";
//import LandingPage from "./pages/LandingPage/BlickWith3d";
//import LandingPage from "./pages/LandingPage/CardAnimated";
import ResumePage from "./pages/Resume/Resume4";
import Aboutmain from "./pages/about/Aboutmain";
import ProjectsPage from "./pages/projects/projects";
import AboutTattooShop from "./pages/projects/AboutTattooShop";
import AboutWaveyvig from "./pages/projects/AboutWaveyvig";
import Experience from "./pages/Experience/Experience";
import ContactUs from "./pages/Contact/ContactUs";

import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <Routes>
      {/* Landing page at root */}
      <Route path="/" element={<LandingPage />} />

      {/* Nested routes inside MainLayout */}
      <Route path="/" element={<MainLayout />}>
        <Route path="about" element={<Aboutmain />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="abouttattooshop" element={<AboutTattooShop />} />
        <Route path="aboutwaveyvig" element={<AboutWaveyvig />} />
        <Route path="experience" element={<Experience />} />
        <Route path="" element={<Navigate to="about" replace />} /> {/* Default redirect */}
      </Route>

      {/* Catch-all route */}
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
  );
}

export default App;
