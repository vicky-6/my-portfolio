import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const AboutTattooShop = () => {
  const projectLink = "https://tattoo-shop-red.vercel.app/";
  const githubLink = "https://github.com/vicky-6/tattoo-shop";

  return (
    <Container className="my-5 " style={{backgroundColor:"grey",}}>
      {/* Container styling for modern look */}
      <div className="content-container px-6" style={{paddingRight:'100px'}}>
        <h1 className="title">Vicky's Tattoo Studio</h1>
        <Row className="align-items-center" xs={1} md={2} gap={4}>
          {/* Left Section */}
          <Col>
            <div className="description-text">
              <p>
                <strong>Vicky’s Tattoo Studio</strong> is a personal project created to design a professional and visually engaging website for a tattoo shop. Built with <strong>React</strong> and <strong>React-Bootstrap</strong>, it combines aesthetics and functionality to provide a user-friendly online experience.
              </p>
              <p>
                The project includes an <strong>attractive gallery</strong> to showcase tattoo designs and styles, helping potential customers explore and get inspired. Additionally, an <strong>online booking system</strong> was implemented to allow users to schedule appointments easily and efficiently.
              </p>
              <p>
                This project demonstrates my skills in <strong>frontend development</strong>, <strong>UI/UX design</strong>, and <strong>responsive, interactive web design</strong>. While not a live business site, it serves as a creative demonstration of building a customer-focused and modern web solution.
              </p>
            </div>
            <div className="button-group">
              <Button
                variant="primary"
                size="lg"
                className="custom-btn"
                onClick={() => window.open(projectLink, "_blank")}
              >
                Visit Project
              </Button>
              <Button
                variant="dark"
                size="lg"
                className="custom-btn"
                onClick={() => window.open(githubLink, "_blank")}
              >
                GitHub Repo
              </Button>
            </div>
          </Col>
          {/* Right Section */}
          <Col>
            <div className="image-wrapper">
              <a href={projectLink} target="_blank" rel="noopener noreferrer">
                <img
                  src="/tattooshop.JPG"
                  alt="Tattoo Studio"
                  className="hover-image"
                />
              </a>
            </div>
          </Col>
        </Row>
      </div>

      {/* CSS animations and hover effects inside JSX */}
      <style jsx>{`
        .content-container {
          padding: 40px;
          border-radius: 20px;
          background-color: #fff;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          text-align: center;
          color: green;
        }

        .description-text p {
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 1rem;
          color: #555;
        }

        .button-group {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-top: 20px;
        }

        .custom-btn {
          border-radius: 50px;
          padding: 12px 40px;
          font-weight: 600;
          font-size: 1.1rem;
          transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
        }

        /* Button hover effect */
        .custom-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        /* Image wrapper for hover scale effect */
        .image-wrapper {
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        /* Image hover scale effect */
        .hover-image {
          width: 100%;
          display: block;
          transition: transform 0.3s ease;
        }

        .image-wrapper:hover .hover-image {
          transform: scale(1.03);
        }
      `}</style>
    </Container>
  );
};

export default AboutTattooShop;