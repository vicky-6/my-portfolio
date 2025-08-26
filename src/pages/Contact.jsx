import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import { send } from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = "Name is required";
    if (!formData.email) errs.email = "Email is required";
    if (!formData.phone) errs.phone = "Phone number is required";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email))
      errs.email = "Invalid email format";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    console.log("Sending data:", {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    });

    emailjs
      .send(
        "service_pumplh6",
        "template_m6vk9nk",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "y2ueaxA8OnxIMywqj"
      )
      .then((response) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((err) => {
        alert("Failed to send message, please try again.");
        console.error("Failed email send:", err);
      });
  };

  return (
    <div
      style={{
        backgroundImage: 'url("/ffc.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "50px 20px",
      }}
    >
      <Container style={{ padding: "80px", borderRadius: "15px" }}>
        <Row className="align-items-center">
          {/* Left Side - 3D Robot Image */}
          <Col md={6} className="text-center mb-4 mb-md-0">
            {/* Placeholder for image */}
          </Col>

          {/* Right Side - Contact Form */}
          {/* Add a responsive wrapper for the form to control width on mobile only */}
          <Col
            md={6}
            className="mx-auto"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              padding: "20px",
              borderRadius: "10px",
              // Add maxWidth for mobile screens only
              maxWidth: "100%",
              width: "100%",
            }}
          >
            {/* Responsive container for form */}
            <div className="d-flex justify-content-center">
              <div
                className="w-100"
                style={{
                  maxWidth: "500px", // limit width on mobile
                }}
              >
                <h2
                  style={{
                    color: "#fff",
                    marginBottom: "20px",
                    paddingTop: "20px",
                  }}
                >
                  Feel free to{" "}
                  <span style={{ color: "lightgreen" }}>get in touch</span>{" "}
                  anytime!
                </h2>
                <Form
                  style={{ color: "#fff" }}
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        backgroundColor: "rgba(255,255,255,0.1)",
                        border: "none",
                        color: "#fff",
                      }}
                      required
                    />
                    {errors.name && (
                      <div style={{ color: "red" }}>{errors.name}</div>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        backgroundColor: "rgba(255,255,255,0.1)",
                        border: "none",
                        color: "#fff",
                      }}
                      required
                    />
                    {errors.email && (
                      <div style={{ color: "red" }}>{errors.email}</div>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Control
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        backgroundColor: "rgba(255,255,255,0.1)",
                        border: "none",
                        color: "#fff",
                      }}
                      required
                    />
                    {errors.phone && (
                      <div style={{ color: "red" }}>{errors.phone}</div>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="message">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      style={{
                        backgroundColor: "rgba(255,255,255,0.1)",
                        border: "none",
                        color: "#fff",
                      }}
                    />
                  </Form.Group>
                  <Button
                    variant="success"
                    type="submit"
                    className="mt-3 mx-auto d-block w-50"
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
            {/* Contact Info */}
            <div
              style={{
                marginTop: "40px",
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                color: "#fff",
              }}
            >
              <div
                className="text-center"
                style={{ minWidth: "120px", marginBottom: "10px" }}
              >
                <i className="fas fa-map-marker-alt fa-2x mb-2"></i>
                <p>Theni, TamilNadu India</p>
              </div>
              <div
                className="text-center"
                style={{ minWidth: "120px", marginBottom: "10px" }}
              >
                <i className="fas fa-phone fa-2x mb-2"></i>
                <p>+91-8248429488</p>
              </div>
              <div
                className="text-center"
                style={{ minWidth: "120px", marginBottom: "10px" }}
              >
                <i className="fas fa-envelope fa-2x mb-2"></i>
                <p>svickyvenkats@gmail.com</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
