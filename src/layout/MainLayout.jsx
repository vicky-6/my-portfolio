import React from "react";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const MainLayout = ({children}) => {
  return (
    <div className="main-layout">
      <CustomNavbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MainLayout;
