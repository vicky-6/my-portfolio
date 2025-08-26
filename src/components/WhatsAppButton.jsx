import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = "918248429488"; // replace with your WhatsApp number
  const message = "Hello! I want to chat with you."; // optional default message

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
        zIndex: 1000,
        cursor: "pointer",
        fontSize: "30px",
      }}
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
