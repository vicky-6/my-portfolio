import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  // background images
  const images = {
    about: "/aboutme8.jpg",
    projects:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.4&auto=format&fit=crop&w=1600&q=80",
    resume: "/resume3.jpg",
    contact: "/contact2.avif",
  };

  const columnStyle = (bgImage) => ({
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "300px",
    color: "white",
    textAlign: "center",
    padding: "20px",
    cursor: "pointer",
    transition: "transform 0.3s",
  });

  // 🎃 Glitch horror animation
  const glitchStyle = {
    animation: "horrorGlitch 0.25s infinite",
  };

  const [hovered, setHovered] = React.useState({});

  const handleMouseEnter = (key) => {
    setHovered((prev) => ({ ...prev, [key]: true }));
  };

  const handleMouseLeave = (key) => {
    setHovered((prev) => ({ ...prev, [key]: false }));
  };

  return (
    <>
      {/* Keyframes for glitch */}
      <style>
        {`
          @keyframes horrorGlitch {
            0% { filter: brightness(1) contrast(1); transform: translate(0,0) skew(0deg); }
            10% { filter: brightness(2) contrast(1.5) hue-rotate(0deg); transform: translate(-3px,2px) skew(-2deg); }
            20% { filter: brightness(0.3) contrast(2) hue-rotate(45deg); transform: translate(3px,-2px) scale(1.05); }
            30% { filter: brightness(1.5) contrast(0.8) hue-rotate(90deg); transform: skew(3deg); }
            40% { filter: brightness(2) contrast(1.2) hue-rotate(180deg); transform: translate(-2px,1px) scale(0.98); }
            50% { filter: brightness(0.2) contrast(3) hue-rotate(-45deg); transform: translate(4px,-3px) skew(-4deg); }
            60% { filter: brightness(1.8) contrast(0.7) hue-rotate(270deg); transform: translate(-4px,3px) scale(1.1); }
            70% { filter: brightness(2.2) contrast(1.5) hue-rotate(360deg); transform: translate(1px,-1px); }
            80% { filter: brightness(0.4) contrast(2.5) hue-rotate(-90deg); transform: skew(5deg); }
            90% { filter: brightness(2.5) contrast(1) hue-rotate(30deg); transform: translate(-2px,2px) scale(1.02); }
            100% { filter: brightness(1) contrast(1); transform: translate(0,0) skew(0deg); }
          }
        `}
      </style>

      <Container fluid style={{ padding: 0 }}>
        {/* First Row */}
        <Row className="g-0">
          <Col
            md={7}
            style={{
              ...columnStyle(images.about),
              ...(hovered.about ? glitchStyle : {}),
            }}
            onClick={() => navigate("/about")}
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={() => handleMouseLeave("about")}
          >
            <h2>About Me</h2>
          </Col>

          <Col
            md={5}
            style={{
              ...columnStyle(images.projects),
              ...(hovered.projects ? glitchStyle : {}),
            }}
            onClick={() => navigate("/projects")}
            onMouseEnter={() => handleMouseEnter("projects")}
            onMouseLeave={() => handleMouseLeave("projects")}
          >
            <h2>projects</h2>
          </Col>
        </Row>

        {/* Second Row */}
        <Row className="g-0">
          <Col
            md={4}
            style={{
              ...columnStyle(images.resume),
              ...(hovered.resume ? glitchStyle : {}),
            }}
            onClick={() => navigate("/resume")}
            onMouseEnter={() => handleMouseEnter("resume")}
            onMouseLeave={() => handleMouseLeave("resume")}
          >
            <h2>Resume</h2>
          </Col>

          <Col
            md={8}
            style={{
              ...columnStyle(images.contact),
              ...(hovered.contact ? glitchStyle : {}),
            }}
            onClick={() => navigate("/contact")}
            onMouseEnter={() => handleMouseEnter("contact")}
            onMouseLeave={() => handleMouseLeave("contact")}
          >
            <h2>Contact</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
