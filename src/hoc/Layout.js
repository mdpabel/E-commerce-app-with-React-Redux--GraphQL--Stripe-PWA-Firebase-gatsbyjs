import React from "react";

import Header from "../components/header/Header";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
