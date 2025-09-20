import React from "react";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <CustomNavbar />
      <main><Outlet /></main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MainLayout;
