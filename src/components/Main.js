import React from "react";
import Home from "./Home";
import Portfolio from "./Portfolio";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Main(props) {
  return (
    <div>
      <NavBar />
      <Home />
      <Portfolio />
      <Footer/>
    </div>
  );
}

export default Main;
