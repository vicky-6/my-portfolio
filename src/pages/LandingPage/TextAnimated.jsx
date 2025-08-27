import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  // background images
  const images = {
    about: '/aboutme8.jpg',
    projects:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.4&auto=format&fit=crop&w=1600&q=80',
    resume: '/resume3.jpg',
    contact: '/contact2.avif',
  };

  const [hovered, setHovered] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true); // trigger animations once on mount
  }, []);

  const handleMouseEnter = (key) => {
    setHovered((prev) => ({ ...prev, [key]: true }));
  };

  const handleMouseLeave = (key) => {
    setHovered((prev) => ({ ...prev, [key]: false }));
  };

  const columnStyle = (bgImage, isAnimated) => ({
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '300px',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '12px',
    transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
    transform: isAnimated
      ? 'scale(1.05) rotate3d(1, 1, 0, 8deg)'
      : 'scale(1) rotate3d(0, 0, 0, 0)',
    boxShadow: isAnimated
      ? '0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(255, 200, 100, 0.8)'
      : '0 5px 15px rgba(0,0,0,0.3)',
  });

  return (
    <>
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }

          @keyframes glowText {
            0% { text-shadow: 0 0 5px #fff, 0 0 10px #ffdf6c, 0 0 20px #ffdf6c; }
            50% { text-shadow: 0 0 20px #fff, 0 0 40px #ffdf6c, 0 0 60px #ffdf6c; }
            100% { text-shadow: 0 0 5px #fff, 0 0 10px #ffdf6c, 0 0 20px #ffdf6c; }
          }

          /* Entrance animation for cards */
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .fade-up {
            opacity: 0;
            animation: fadeUp 1s ease forwards;
          }

          .fade-delay-1 { animation-delay: 0.2s; }
          .fade-delay-2 { animation-delay: 0.4s; }
          .fade-delay-3 { animation-delay: 0.6s; }
          .fade-delay-4 { animation-delay: 0.8s; }

          /* New heading pop-in animation */
          @keyframes popIn {
            0% { opacity: 0; transform: scale(0.6) translateY(20px); }
            60% { opacity: 1; transform: scale(1.1) translateY(-4px); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
          }

          .pop-in {
            animation: popIn 0.8s ease forwards;
          }

          /* Overlay shimmer gradient */
          .soft-hover::after {
            content: "";
            position: absolute;
            top: 0; left: -100%; width: 200%; height: 100%;
            background: linear-gradient(
              120deg,
              rgba(255, 255, 255, 0) 30%,
              rgba(255, 255, 255, 0.3) 50%,
              rgba(255, 255, 255, 0) 70%
            );
            background-size: 200% 100%;
            transition: opacity 0.3s ease;
            opacity: 0;
          }

          .soft-hover:hover::after {
            opacity: 1;
            animation: shimmer 2s infinite;
          }

          /* Heading styling */
          .soft-hover h2 {
            font-size: 2.2rem;
            font-weight: 700;
            letter-spacing: 2px;
            z-index: 2;
            position: relative;
            transition: transform 0.4s ease, color 0.4s ease;
            opacity: 0; /* hidden before animation */
          }

          .soft-hover h2.show {
            opacity: 1;
          }

          .soft-hover:hover h2 {
            transform: translateY(-6px) scale(1.08);
            color: #ffdf6c;
            animation: glowText 2s infinite alternate;
          }
        `}
      </style>

      <Container fluid style={{ padding: 0 }}>
        {/* First Row */}
        <Row className="g-3">
          <Col
            md={7}
            className={`soft-hover ${loaded ? 'fade-up fade-delay-1' : ''}`}
            style={columnStyle(images.about, hovered['about'])}
            onClick={() => navigate('/about')}
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={() => handleMouseLeave('about')}
          >
            <h2 className={`${loaded ? 'pop-in show' : ''}`}>About Me</h2>
          </Col>

          <Col
            md={5}
            className={`soft-hover ${loaded ? 'fade-up fade-delay-2' : ''}`}
            style={columnStyle(images.projects, hovered['projects'])}
            onClick={() => navigate('/projects')}
            onMouseEnter={() => handleMouseEnter('projects')}
            onMouseLeave={() => handleMouseLeave('projects')}
          >
            <h2 className={`${loaded ? 'pop-in show' : ''}`}>Projects</h2>
          </Col>
        </Row>

        {/* Second Row */}
        <Row className="g-3">
          <Col
            md={4}
            className={`soft-hover ${loaded ? 'fade-up fade-delay-3' : ''}`}
            style={columnStyle(images.resume, hovered['resume'])}
            onClick={() => navigate('/resume')}
            onMouseEnter={() => handleMouseEnter('resume')}
            onMouseLeave={() => handleMouseLeave('resume')}
          >
            <h2 className={`${loaded ? 'pop-in show' : ''}`}>Resume</h2>
          </Col>

          <Col
            md={8}
            className={`soft-hover ${loaded ? 'fade-up fade-delay-4' : ''}`}
            style={columnStyle(images.contact, hovered['contact'])}
            onClick={() => navigate('/contact')}
            onMouseEnter={() => handleMouseEnter('contact')}
            onMouseLeave={() => handleMouseLeave('contact')}
          >
            <h2 className={`${loaded ? 'pop-in show' : ''}`}>Contact</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;