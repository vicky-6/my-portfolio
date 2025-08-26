import React from "react";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({children}) => {
  return (
    <div className="main-layout">
      <CustomNavbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
