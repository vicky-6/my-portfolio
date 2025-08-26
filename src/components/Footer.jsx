import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#000', color: '#fff', padding: '10px 0' }}>
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs="12" md="4" className="text-center text-md-start mb-2 mb-md-0">
            <small>Designed and Developed by Vignesh s</small>
          </Col>
          <Col xs="12" md="4" className="text-center mb-2 mb-md-0">
            <small>&copy; 2025 Vignesh s</small>
          </Col>
          <Col xs="12" md="4" className="text-center text-md-end">
            {/* Social icons */}
            <a href="#" className="text-white mx-2" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white mx-2" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-white mx-2" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" className="text-white mx-2" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;