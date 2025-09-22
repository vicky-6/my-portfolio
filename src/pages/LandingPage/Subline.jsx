import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser, FaCode, FaFileAlt, FaEnvelope } from "react-icons/fa";

const LandingPage = () => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState({});
  const [completed, setCompleted] = useState({});

  // Background images
  const images = {
    about: "/aboutme7.jpeg",
    projects: "/project.jpg",
    resume: "/resume3.jpg",
    contact: "/contact2.avif",
  };

  // Titles + Icons
  const titles = {
    about: { main: "About Me", sub: "Discover my journey", icon: <FaUser /> },
    projects: { main: "Projects", sub: "See what I've built", icon: <FaCode /> },
    resume: { main: "Resume", sub: "View my experience", icon: <FaFileAlt /> },
    contact: { main: "Contact", sub: "Let's connect", icon: <FaEnvelope /> },
  };

  // Typing effect
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
        }, 120);
      }, index * 700);
    });
  }, []);

  // Reusable styles
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
    borderRadius: "12px",
  });

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  // Button animation
  const buttonVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 90,
      },
    },
    hover: {
      scale: 1.08,
      background:
        "linear-gradient(135deg, rgba(255, 221, 87, 0.95), rgba(255, 153, 0, 0.95))",
      backdropFilter: "blur(10px)",
      boxShadow: "0 6px 20px rgba(255, 174, 66, 0.6)",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    tap: {
      scale: 0.93,
      boxShadow: "0 3px 12px rgba(255, 174, 66, 0.5)",
    },
  };

  // Icon animation
  const iconVariants = {
    initial: { x: 0, scale: 1 },
    hover: { x: 6, transition: { duration: 0.3, ease: "easeInOut" } },
    tap: {
      scale: [1, 1.3, 1], // pulse effect
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <Container fluid style={{ padding: 0 }}>
      <Row className="g-0 justify-content-center">
        {Object.keys(images).map((key, index) => (
          <Col
            key={key}
            xs={12}
            md={
              key === "about"
                ? 7
                : key === "projects"
                ? 5
                : key === "resume"
                ? 4
                : 8
            }
            className="p-2"
          >
            <motion.div
              style={columnStyle(images[key])}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              {/* Typing text */}
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {typedText[key]}
                {completed[key] ? "" : <span className="blinking-cursor">|</span>}
              </motion.h2>

              {/* Modern Button */}
              <motion.button
                className="btn btn-lg fw-bold border-0 text-white d-flex align-items-center gap-2"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 215, 0, 0.95), rgba(255, 153, 0, 0.95))",
                  borderRadius: "999px",
                  padding: "12px 32px",
                }}
                onClick={() => navigate(`/${key}`)}
                variants={buttonVariants}
                initial="hidden"
                animate={completed[key] ? "visible" : "hidden"}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.span
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="d-flex align-items-center"
                >
                  {titles[key].icon}
                </motion.span>
                {titles[key].sub}
              </motion.button>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LandingPage;
