import React from "react";
import Home from "./Home";
import Portfolio from "./Portfolio";
// import Contact from "./Contact";
import NavBar from "./NavBar";

function Main(props) {
  return (
    <div>
      <NavBar />
      <Home />
      <Portfolio />
      {/* <Contact /> */}
    </div>
  );
}

export default Main;
