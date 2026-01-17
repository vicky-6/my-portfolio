import React from "react";
import { Container } from "react-bootstrap";
import TextJump from "../../reuseableComponent/TextJumpOneByOne";
import TrueFocus from "../../reuseableComponent/TrueFocus";
import modern_cursor from "../../reuseableComponent/modern_cursor";

const About = () => {
  return (
    <>
      <div className="hero-section d-flex align-items-center">
        <Container
          fluid
          className="d-flex flex-column flex-lg-row align-items-center justify-content-center p-5"
        >
          {/* Right Image */}
          <div className="about-image me-lg-5 mb-4 mb-lg-0">
            <img
              src="vignesh-profile.jpeg"
              alt="My Photo"
              className="img-fluid rounded-circle"
            />
          </div>
          {/* Left Content */}
          <div className="text-dark mb-1 mb-lg-0 me-lg-4 text-center text-lg-start">
            <h1 className="display-4 mb-3">
              <TrueFocus />
            </h1>
            <p className="lead mb-4 fs-5">
              Dear Recruiter, I am{" "}
              <span className="fw-bold text-success ">VIGNESH S</span> from
              Theni, Tamil Nadu.
            </p>
            <p className="mb-2 fs-5">
              Successfully Completed my Bachelor of Engineering degree in 2020,{" "}
              <span className="fw-bold text-success">
                Lovely Professional University, Punjab.
              </span>
            </p>
            <p className="mb-2 fs-5">
              I have 4 years of professional experience as a{" "}
              <span className="fw-bold text-success"> QA Engineer</span>, and
              now I am transitioning into the role of a{" "}
              <span className="fw-bold text-success">
                Full Stack Developer{" "}
              </span>{" "}
              to pursue my passion for coding and problem-solving.
            </p>
            <p className="mb-2 fs-5">
              Passionate about building scalable web applications and modern
              digital solutions using Node.js, React.js, and Express.js.
              Continuously learning, coding, and creating impactful products
              that deliver real value.
            </p>
            <p>Thanks for reading about me!</p>
          </div>
          
        </Container>
      </div>

      
      <style>{`
        .hero-section {
          position: relative;
          overflow: hidden;
          height: calc(100vh - 56px);
          background: linear-gradient(135deg, #e0f7fa, #ffe0b2);
        }

        .hero-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(
              circle,
              rgba(255, 255, 255, 0.3),
              transparent 20%
            ),
            radial-gradient(
              circle,
              rgba(255, 255, 255, 0.2),
              transparent 20%
            ),
            radial-gradient(
              circle,
              rgba(255, 255, 255, 0.15),
              transparent 20%
            );
          background-repeat: repeat;
          background-size: 80px 80px;
          animation: moveStars 60s linear infinite;
          opacity: 0.9;
          z-index: 0;
        }

        @keyframes moveStars {
          from {
            background-position: 0 0, 0 0, 0 0;
          }
          to {
            background-position: 1000px 1000px, 1000px 1000px, 1000px 1000px;
          }
        }

        .about-image {
          max-width: 300px;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .hero-section {
            height: auto;
            padding: 20px 0;
          }
        }
      `}</style>
    </>
  );
};

export default About;
