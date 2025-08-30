import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState({});
  const [completed, setCompleted] = useState({});

  // background images
  const images = {
    about: "/about.jpg",
    projects:
      "/project.jpg",
    resume: "/resume3.jpg",
    contact: "/contact2.avif",
  };

  // Titles + Subtext
  const titles = {
    about: { main: "About Me", sub: "Discover my journey" },
    projects: { main: "Projects", sub: "See what I've built" },
    resume: { main: "Resume", sub: "View my experience" },
    contact: { main: "Contact", sub: "Let's connect" },
  };

  useEffect(() => {
    Object.keys(titles).forEach((key, index) => {
      let i = 0;
      const fullText = titles[key].main;
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
        }, 120); // typing speed
      }, index * 700); // delay between sections
    });
  }, []);

  const columnStyle = (bgImage) => ({
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "300px",
    color: "white",
    textAlign: "center",
    padding: "20px",
    position: "relative",
    overflow: "hidden",
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

        .sub-btn {
          font-size: 0.95rem;
          margin-top: 12px;
          padding: 8px 18px;
          background: rgba(255, 215, 0, 0.9);
          border: none;
          border-radius: 25px;
          color: #000;
          font-weight: 500;
          cursor: pointer;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .sub-btn.show {
          opacity: 1;
          transform: translateY(0);
        }

        .sub-btn:hover {
          background: #ffd700;
          transform: scale(1.05);
        }

        .blinking-cursor {
          display: inline-block;
          margin-left: 2px;
          animation: blink 0.8s steps(1) infinite;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        /* ✅ Mobile: stack items one by one */
        @media (max-width: 768px) {
          .mobile-stack .col {
            flex: 0 0 100%;
            max-width: 100%;
            margin-bottom: 20px;
          }
          .pop-text {
            font-size: 1.6rem;
          }
          .sub-btn {
            font-size: 0.85rem;
            padding: 7px 15px;
          }
        }
      `}</style>

      <Container fluid style={{ padding: 0 }}>
        {/* ✅ Desktop / Tablet view (2x2 grid WITH sub-btn) */}
        <div className="d-none d-md-block">
          <Row className="g-0">
            {Object.keys(images).map((key) => (
              <Col
                key={key}
                md={key === "about" ? 7 : key === "projects" ? 5 : key === "resume" ? 4 : 8}
                className="soft-hover"
                style={columnStyle(images[key])}
              >
                <h2 className="pop-text">
                  {typedText[key]}
                  {completed[key] ? "" : <span className="blinking-cursor">|</span>}
                </h2>
                <button
                  className={`sub-btn ${completed[key] ? "show" : ""}`}
                  onClick={() => navigate(`/${key}`)}
                >
                  {titles[key].sub}
                </button>
              </Col>
            ))}
          </Row>
        </div>

        {/* ✅ Mobile view (stacked one by one with typing + clickable subtext button) */}
        <div className="d-block d-md-none mobile-stack">
          <Row>
            {Object.keys(images).map((key) => (
              <Col
                xs={12}
                key={key}
                className="soft-hover"
                style={columnStyle(images[key])}
              >
                <h2 className="pop-text">
                  {typedText[key]}
                  {completed[key] ? "" : <span className="blinking-cursor">|</span>}
                </h2>
                <button
                  className={`sub-btn ${completed[key] ? "show" : ""}`}
                  onClick={() => navigate(`/${key}`)}
                >
                  {titles[key].sub}
                </button>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default LandingPage;