import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState({});
  const [completed, setCompleted] = useState({});

  // background images
  const images = {
    about: "/aboutme8.jpg",
    projects:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    resume: "/resume3.jpg",
    contact: "/contact2.avif",
  };

  const titles = {
    about: "About Me",
    projects: "Projects",
    resume: "Resume",
    contact: "Contact",
  };

  useEffect(() => {
    Object.keys(titles).forEach((key, index) => {
      let i = 0;
      const fullText = titles[key];
      setTimeout(() => {
        const interval = setInterval(() => {
          i++;
          setTypedText((prev) => ({
            ...prev,
            [key]: fullText.substring(0, i),
          }));
          if (i === fullText.length) {
            clearInterval(interval);
            setCompleted((prev) => ({ ...prev, [key]: true }));
          }
        }, 120); // 🔥 Adjust typing speed here
      }, index * 700); // 🔥 Adjust delay between sections
    });
  }, []);

  const columnStyle = (bgImage) => ({
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "220px", // ✅ shorter for mobile
    color: "white",
    textAlign: "center",
    padding: "20px",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    borderRadius: "12px",
    margin: "10px 0",
  });

  return (
    <>
      <style>{`
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 8px rgba(255, 215, 0, 0.4); }
          50% { box-shadow: 0 0 25px rgba(255, 215, 0, 0.9); }
          100% { box-shadow: 0 0 8px rgba(255, 215, 0, 0.4); }
        }

        .soft-hover {
          transition: transform 0.4s ease, filter 0.4s ease;
        }
        .soft-hover:hover {
          transform: scale(1.04);
          filter: brightness(1.1) saturate(1.2);
          animation: pulseGlow 2s infinite;
        }

        @keyframes popIn {
          0% { transform: scale(0.8); opacity: 0; }
          80% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); }
        }

        .pop-text {
          font-size: 2rem;
          font-weight: bold;
          animation: popIn 0.8s ease forwards;
        }

        @media (max-width: 768px) {
          .pop-text {
            font-size: 1.6rem; /* ✅ smaller for mobile */
          }
        }
      `}</style>

      <Container fluid style={{ padding: "10px" }}>
        <Row className="g-2">
          {Object.keys(images).map((key) => (
            <Col
              xs={12}
              key={key}
              className="soft-hover"
              style={columnStyle(images[key])}
              onClick={() => navigate(`/${key}`)}
            >
              <h2 className="pop-text">
                {typedText[key]}
                {completed[key] ? "" : <span className="blinking-cursor">|</span>}
              </h2>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;