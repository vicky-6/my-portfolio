// Contact.jsx
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/ffc.jpeg")', // space background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '50px 20px',
      }}
    >
      <Container style={{  padding: '80px', borderRadius: '15px' }}>
        <Row className="align-items-center">
          {/* Left Side - 3D Robot Image */}
          <Col md={6} className="text-center mb-4 mb-md-0">
            {/* <img
              src="" // Placeholder 3D robot image
              alt="3D Robot"
              style={{ width: '100%', maxWidth: '350px', borderRadius: '15px', boxShadow: '0 8px 16px rgba(0,0,0,0.3)' }}
            /> */}
          </Col>

          {/* Right Side - Contact Form */}
          <Col md={6} style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
            <h2 style={{ color: '#fff', marginBottom: '20px', paddingTop:"20px" }}>Feel free to <span style={{ color: 'lightgreen' }}>get in touch</span> anytime!</h2>
            <Form style={{ color: '#fff' }}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Control type="text" placeholder="Name" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff' }} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Control type="email" placeholder="Email" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff' }} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Control type="tel" placeholder="Phone Number" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff' }} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Control as="textarea" rows={4} placeholder="Your message" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff' }} />
              </Form.Group>
              <Button variant="success" type="submit" className="mt-3 mx-auto d-block w-50" >
                Submit
              </Button>
            </Form>
            {/* Contact Info */}
            <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-around', color: '#fff' }}>
              <div className="text-center">
                <i className="fas fa-map-marker-alt fa-2x mb-2"></i>
                <p>Theni, TamilNadu India</p>
              </div>
              <div className="text-center">
                <i className="fas fa-phone fa-2x mb-2"></i>
                <p>+91-8248429488</p>
              </div>
              <div className="text-center">
                <i className="fas fa-envelope fa-2x mb-2"></i>
                <p>VIGNESH S</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;