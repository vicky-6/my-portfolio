import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const AboutWaveyvig = () => {
  const projectLink = "https://waveyvig-tech.vercel.app/";
  const githubLink = "https://github.com/vicky-6/WaveyvigTech";

  return (
    <Container className="my-5 py-5" style={{backgroundColor:"grey"}}>
      {/* Main content wrapper with styles */}
      <div className="content-wrapper p-4 rounded shadow-lg" >
        <Row className="justify-content-center py-5" xs={1} md={10} >
          <Col >
            <Card className="border-0 bg-white rounded-3 shadow-sm">
              <Card.Body>
                <h2 className="section-title mb-4 text-decoration-underline" style={{color:'green'}}>About WaveyVig</h2>
                <p className="section-text mb-3">
                  <strong style={{color:'#7CCD7C'}}>WaveyVig</strong> is a personal tech project designed to explore and demonstrate modern web development concepts. Built using <strong>Vite</strong>, <strong>React</strong>, <strong>React-Bootstrap</strong>, and <strong>CSS</strong>, this project serves as both a <strong>learning platform</strong> and a <strong>showcase of technology solutions</strong>.
                </p>
                <p className="section-text mb-3">
                  The goal of WaveyVig is to combine <strong>education and practical tech implementation</strong>. It features interactive interfaces, responsive design, and organized layouts to present information clearly and efficiently. Through this project, I aimed to practice and demonstrate skills in <strong>frontend development</strong>, <strong>UI design</strong>, and <strong>modern React workflows</strong>.
                </p>
                <p className="section-text mb-4">
                  WaveyVig is not a live company but a <strong>creative platform</strong> to experiment with ideas, improve coding skills, and explore <strong>technology-driven solutions</strong> in a structured and engaging way. Additionally, I have integrated features such as a <strong>chatbot</strong>, <strong>WhatsApp messaging</strong>, and <strong>email notifications</strong>, allowing users to interact with the platform and receive messages seamlessly.
                </p>

                <div className="button-group d-flex justify-content-center gap-3 mt-4">
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
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      {/* CSS inside JSX for hover effects and animations */}
      <style jsx>{`
        .content-wrapper {
          background-color: #fff;
          border-radius: 20px;
          max-width: 900px;
          margin: auto;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          color: #222;
        }

        .section-text {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #555;
        }

        /* Buttons hover effect */
        .custom-btn {
          border-radius: 50px;
          padding: 10px 30px;
          font-weight: 600;
          font-size: 1.1rem;
          transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
        }

        .custom-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        /* Container background and hover effects for card */
        .shadow-sm {
          transition: box-shadow 0.3s, transform 0.3s;
        }

        /* Optional: add hover effect to the entire card for interactivity */
        .shadow-sm:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </Container>
  );
};

export default AboutWaveyvig;