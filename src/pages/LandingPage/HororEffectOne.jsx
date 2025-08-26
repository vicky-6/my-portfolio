import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook

const LandingPage = () => {
  const navigate = useNavigate(); // ✅ hook for navigation

  // background images
  const images = {
    about: "/aboutme8.jpg",
    projects:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.4&auto=format&fit=crop&w=1600&q=80",
    resume: "/resume3.jpg",
    contact: "/contact2.avif",
  };

  // Style for each column with background image and centered content
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

  // 🔥 Blink effect style
  const blinkStyle = {
    animation: "blink 0.15s infinite alternate",
  };

  // State to manage hover effect
  const [hovered, setHovered] = React.useState({});

  const handleMouseEnter = (key) => {
    setHovered((prev) => ({ ...prev, [key]: true }));
  };

  const handleMouseLeave = (key) => {
    setHovered((prev) => ({ ...prev, [key]: false }));
  };

  return (
    <>
      {/* Inject keyframes */}
      <style>
        {`
          @keyframes blink {
            0% { filter: brightness(1) contrast(1); }
            25% { filter: brightness(2) contrast(1.5); }
            50% { filter: brightness(0.2) contrast(2); }
            75% { filter: brightness(1.8) contrast(0.8); }
            100% { filter: brightness(1) contrast(1); }
          }
        `}
      </style>

      <Container fluid style={{ padding: 0 }}>
        {/* First Row */}
        <Row className="g-0">
          {/* About Me - takes 7/12 */}
          <Col
            md={7}
            style={{
              ...columnStyle(images.about),
              ...(hovered.about ? blinkStyle : {}),
            }}
            onClick={() => navigate("/about")}
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={() => handleMouseLeave("about")}
          >
            <h2>About Me</h2>
          </Col>

          {/* projects - takes 5/12 */}
          <Col
            md={5}
            style={{
              ...columnStyle(images.projects),
              ...(hovered.projects ? blinkStyle : {}),
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
          {/* Resume - takes 4/12 */}
          <Col
            md={4}
            style={{
              ...columnStyle(images.resume),
              ...(hovered.resume ? blinkStyle : {}),
            }}
            onClick={() => navigate("/resume")}
            onMouseEnter={() => handleMouseEnter("resume")}
            onMouseLeave={() => handleMouseLeave("resume")}
          >
            <h2>Resume</h2>
          </Col>

          {/* Contact - takes 8/12 */}
          <Col
            md={8}
            style={{
              ...columnStyle(images.contact),
              ...(hovered.contact ? blinkStyle : {}),
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
