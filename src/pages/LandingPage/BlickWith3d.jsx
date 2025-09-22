import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaUser, FaCode, FaFileAlt, FaEnvelope } from "react-icons/fa";

const LandingPage = () => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState({});
  const [completed, setCompleted] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Motion values for tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

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

  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track scroll for parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Column style with optional parallax
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
    backgroundPositionY: isMobile ? `${scrollY * 0.2}px` : "center",
    perspective: 1000, // enable 3D effect
  });

  // Card animation with floating effect
  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    visible: (mobile) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: mobile ? 0.6 : 0.8,
        type: mobile ? "spring" : "tween",
        stiffness: mobile ? 120 : 60,
      },
    }),
    float: {
      y: [0, -10, 0],
      transition: { duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
    },
  };

  // Shadow/glow animation for floating cards
  const shadowVariants = {
    float: {
      boxShadow: [
        "0 8px 20px rgba(255, 215, 0, 0.2)",
        "0 12px 30px rgba(255, 215, 0, 0.35)",
        "0 8px 20px rgba(255, 215, 0, 0.2)",
      ],
      transition: { duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
    },
  };

  // Button animation
  const buttonVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: 0.2, duration: 0.5, type: "spring", stiffness: 90 },
    },
    hover: {
      scale: 1.08,
      background:
        "linear-gradient(135deg, rgba(255, 221, 87, 0.95), rgba(255, 153, 0, 0.95))",
      backdropFilter: "blur(10px)",
      boxShadow: "0 6px 20px rgba(255, 174, 66, 0.6)",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    tap: { scale: 0.93, boxShadow: "0 3px 12px rgba(255, 174, 66, 0.5)" },
  };

  // Icon animation
  const iconVariants = {
    initial: { x: 0, scale: 1 },
    hover: { x: 6, transition: { duration: 0.3, ease: "easeInOut" } },
    tap: { scale: [1, 1.3, 1], transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <>
      <style>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 1em;
          color: white;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }

        .ripple {
          position: relative;
          overflow: hidden;
        }
        .ripple::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          animation: rippleAnim 0.6s linear;
          transform: scale(0);
          opacity: 0;
          pointer-events: none;
        }
        .ripple:active::after {
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) scale(25);
          opacity: 1;
          transition: transform 0.6s, opacity 0.8s;
        }
        @keyframes rippleAnim { to { transform: scale(25); opacity: 0; } }
      `}</style>

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
                whileInView={["visible", "float"]}
                whileHover={!isMobile ? { rotateX, rotateY, scale: 1.03 } : {}}
                onMouseMove={(e) => {
                  if (!isMobile) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    x.set(e.clientX - rect.left - rect.width / 2);
                    y.set(e.clientY - rect.top - rect.height / 2);
                  }
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  variants={shadowVariants}
                  animate="float"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "12px",
                    zIndex: 0,
                  }}
                />
                <motion.h2
                  style={{ position: "relative", zIndex: 1 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {typedText[key]}
                  {completed[key] ? "" : <span className="blinking-cursor">|</span>}
                </motion.h2>

                <motion.button
                  className="btn btn-lg fw-bold border-0 text-white d-flex align-items-center gap-2 ripple"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 215, 0, 0.95), rgba(255, 153, 0, 0.95))",
                    borderRadius: "999px",
                    padding: "12px 32px",
                    position: "relative",
                    overflow: "hidden",
                    zIndex: 1,
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
    </>
  );
};

export default LandingPage;
