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
    transition: "all 0.6s ease-in-out",
    position: "relative",
    overflow: "hidden",
  });

  const [hovered, setHovered] = React.useState({});

  const handleMouseEnter = (key) => {
    setHovered((prev) => ({ ...prev, [key]: true }));
  };

  const handleMouseLeave = (key) => {
    setHovered((prev) => ({ ...prev, [key]: false }));
  };

  return (
    <>
      {/* Soft hover styles */}
      <style>
        {`
          .soft-hover::after {
            content: "";
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(255, 255, 255, 0.15);
            opacity: 0;
            transition: opacity 0.6s ease;
          }

          .soft-hover:hover::after {
            opacity: 1;
          }

          .soft-hover:hover {
            transform: scale(1.05);
            filter: brightness(1.1) saturate(1.2);
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.4);
          }

          .soft-hover h2 {
            transition: color 0.5s ease;
          }

          .soft-hover:hover h2 {
            color: #ffdf6c; /* soft golden glow */
          }
        `}
      </style>

      <Container fluid style={{ padding: 0 }}>
        {/* First Row */}
        <Row className="g-0">
          <Col
            md={7}
            className="soft-hover"
            style={columnStyle(images.about)}
            onClick={() => navigate("/about")}
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={() => handleMouseLeave("about")}
          >
            <h2>About Me</h2>
          </Col>

          <Col
            md={5}
            className="soft-hover"
            style={columnStyle(images.projects)}
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
            className="soft-hover"
            style={columnStyle(images.resume)}
            onClick={() => navigate("/resume")}
            onMouseEnter={() => handleMouseEnter("resume")}
            onMouseLeave={() => handleMouseLeave("resume")}
          >
            <h2>Resume</h2>
          </Col>

          <Col
            md={8}
            className="soft-hover"
            style={columnStyle(images.contact)}
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
