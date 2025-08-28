import "./App.css";
import LandingPage from "./pages/LandingPage/Subline";
import ResumePage from "./pages/Resume";
import Contact from "./pages/Contact";
import { Routes, Route, Navigate } from "react-router-dom";
import Aboutmain from "./pages/about/Aboutmain";
import MainLayout from "./layout/MainLayout";
import ProjectsPage from "./pages/projects/projects";
import AboutTattooShop from "./pages/projects/AboutTattooShop";
import AboutWaveyvig from "./pages/projects/AboutWaveyvig";
import Experience from "./pages/Experience/Experience";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route
          path="/about"
          element={
            <MainLayout>
              {" "}
              <Aboutmain />{" "}
            </MainLayout>
          }
        />
        <Route
          path="/projects"
          element={
            <MainLayout>
              {" "}
              <ProjectsPage />{" "}
            </MainLayout>
          }
        />
        <Route
          path="/resume"
          element={
            <MainLayout>
              {" "}
              <ResumePage />{" "}
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              {" "}
              <ContactUs />{" "}
            </MainLayout>
          }
        />
        <Route
          path="/abouttattooshop"
          element={
            <MainLayout>
              {" "}
              <AboutTattooShop />{" "}
            </MainLayout>
          }
        />
        <Route
          path="/AboutWaveyvig"
          element={
            <MainLayout>
              {" "}
              <AboutWaveyvig />{" "}
            </MainLayout>
          }
        />
        <Route
          path="/experience"
          element={
            <MainLayout>
              {" "}
              <Experience />{" "}
            </MainLayout>
          }
        />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
