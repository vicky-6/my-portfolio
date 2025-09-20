import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TargetCursor from "../../reuseableComponent/TargetCursor";

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

  // Titles
  const titles = {
    about: { main: "About Me", sub: "Discover my journey" },
    projects: { main: "Projects", sub: "See what I've built" },
    resume: { main: "Resume", sub: "View my experience" },
    contact: { main: "Contact", sub: "Let's connect" },
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

  // Motion variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

 const buttonVariants = {
  hidden: { 
    opacity: 0, 
    y: 30, 
    scale: 0.9 
  },
  visible: { 
    opacity: 1,  
    y: 0, 
    scale: 1,
    backgroundColor: "#ffd700",
    transition: { 
      delay: 0.3, 
      duration: 0.6, 
      type: "spring", 
      stiffness: 120 
    } 
  },
  hover: { 
    scale: 1.12, 
    backgroundColor: "#ffd700",
    boxShadow: "0 0 20px rgba(255, 215, 0, 0.8)",
    transition: { 
      yoyo: Infinity, // keeps pulsing
      duration: 0.4 
    }
  },
  tap: { 
    scale: 0.95, 
    boxShadow: "0 0 8px rgba(255, 215, 0, 0.6)" 
  },
};


  return (
    <>
      {/* <TargetCursor /> */}
      <Container fluid style={{ padding: 0 }}>
        <Row className="g-0 justify-content-center">
          {Object.keys(images).map((key, index) => (
            <Col
              key={key}
              xs={12}
              md={key === "about" ? 7 : key === "projects" ? 5 : key === "resume" ? 4 : 8}
              className="p-2"
            >
              <motion.div
                className="soft-hover h-100"
                style={columnStyle(images[key])}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <motion.h2
                  className="pop-text"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {typedText[key]}
                  {completed[key] ? "" : <span className="blinking-cursor">|</span>}
                </motion.h2>

                <motion.button
                  className={`sub-btn ${completed[key] ? "show" : ""}`}
                  onClick={() => navigate(`/${key}`)}
                  variants={buttonVariants}
                  initial="hidden"
                  animate={completed[key] ? "visible" : "hidden"}
                  whileHover="hover"
                >
                  {titles[key].sub}
                </motion.button>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
