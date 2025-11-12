import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  FaWhatsapp,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaTimes,
  FaLinkedin
} from "react-icons/fa";
import emailjs from "emailjs-com"; // Make sure you install emailjs-com

// ===== Animations =====
const float = keyframes`
  0%, 100% { transform: translateY(0px);}
  50% { transform: translateY(-12px);}
`;

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(30px);}
  100% { opacity: 1; transform: translateY(0);}
`;

const glowPulse = keyframes`
  0% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #4a90e2;}
  50% { text-shadow: 0 0 15px #fff, 0 0 30px #4a90e2, 0 0 50px #4a90e2;}
  100% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #4a90e2;}
`;

const floatParticle = keyframes`
  0% { transform: translateY(0) translateX(0); opacity: 0.6; }
  50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
  100% { transform: translateY(0) translateX(0); opacity: 0.6; }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// ===== Styled Components =====
const ContactSection = styled.section`
  position: relative;
  padding: 120px 20px;
  text-align: center;
  color: #fff;
  overflow: hidden;
  background: linear-gradient(-45deg, #6a11cb, #2575fc, #ff6a00, #ff007a);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
`;

const Particle = styled.div`
  position: absolute;
  width: ${(props) => props.size || "6px"};
  height: ${(props) => props.size || "6px"};
  background: ${(props) => props.color || "rgba(255, 255, 255, 0.7)"};
  border-radius: 50%;
  top: ${(props) => props.top || "50%"};
  left: ${(props) => props.left || "50%"};
  animation: ${floatParticle} ${(props) => props.duration || "6s"} ease-in-out
    infinite;
  animation-delay: ${(props) => props.delay || "0s"};
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 60px;
  color: #fff;
  animation: ${fadeInUp} 1s ease forwards;
  position: relative;
  z-index: 2;
`;

const ContactGrid = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`;

const ContactCard = styled.button`
  position: relative;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  width: 140px;
  height: 140px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${float} 3s ease-in-out infinite, ${fadeInUp} 1s ease forwards;
  border: none;

  &:hover {
    transform: translateY(-15px) scale(1.15);
    box-shadow: 0 25px 50px rgba(255, 255, 255, 0.6);
  }

  svg {
    font-size: 2.8rem;
    margin-bottom: 12px;
    transition: all 0.3s ease;
  }

  &:hover svg {
    animation: ${glowPulse} 1.5s infinite;
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 30px 25px;
  width: 90%;
  max-width: 450px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  h3 {
    margin-bottom: 20px;
    color: #333;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 20px 15px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;

  input,
  textarea {
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 0.95rem;
    width: 100%;
  }

  textarea {
    resize: vertical;
  }

  button {
    padding: 10px;
    background: #2575fc;
    color: #fff;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  button:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  button:hover:not(:disabled) {
    background: #6a11cb;
  }
`;

// ===== Component =====
const ContactUs = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });

  const particles = Array.from({ length: 40 }).map(() => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    size: Math.random() * 6 + 4,
    color: "rgba(255,255,255,0.7)",
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        if (mouse.current.x && mouse.current.y) {
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,255,255,${1 - dist / 150})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.current.x, mouse.current.y);
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [particles]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid =
    formData.name && formData.phone && formData.email && formData.message;

  const handleSendMail = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setSending(true);
    try {
      await emailjs.send(
        "service_pumplh6", // Replace with your EmailJS service ID
        "template_m6vk9nk", // Replace with your template ID
        formData,
        "y2ueaxA8OnxIMywqj" // Replace with your EmailJS user ID
      );
      alert("Mail sent successfully!");
      setShowPopup(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to send mail. Please try again.");
    }
    setSending(false);
  };

  return (
    <ContactSection>
      <Canvas ref={canvasRef} />
      <Title>
        Feel free to <span style={{ color: "lightgreen" }}>get in touch</span>{" "}
        anytime!
      </Title>

      <ContactGrid>
        <ContactCard onClick={() => setShowPopup(true)}>
          <FaEnvelope />
          Mail
        </ContactCard>

        <ContactCard
          as="a"
          href="https://wa.me/8248429488"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <FaWhatsapp />
          WhatsApp
        </ContactCard>

        {/* <ContactCard
          as="a"
          href="https://instagram.com/vignesh_s_06"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
          Instagram
        </ContactCard> */}

        <ContactCard
          as="a"
          href="https://www.linkedin.com/in/vignesh-s-8ba306148/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <FaLinkedin />
          LinkedIn
        </ContactCard>

        git<ContactCard as="a" href="tel:+918248429488" style={{ textDecoration: "none" }}>
          <FaPhone />
          Call
        </ContactCard> 
      </ContactGrid>

      {showPopup && (
        <PopupOverlay>
          <PopupContent>
            <CloseButton onClick={() => setShowPopup(false)}>
              <FaTimes />
            </CloseButton>
            <h3>Send a Mail</h3>
            <Form onSubmit={handleSendMail}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                rows="4"
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" disabled={!isFormValid || sending}>
                {sending ? "Sending..." : "Send Mail"}
              </button>
            </Form>
          </PopupContent>
        </PopupOverlay>
      )}
    </ContactSection>
  );
};

export default ContactUs;
