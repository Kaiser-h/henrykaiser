import React from "react";
import "./Home.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import IMG_6536 from "../images/IMG_6536.jpg";
// import quote from "";

function Home(props) {
  return (
    <div id="home" className="home">
      <div className="bg-overlay">
        <div className="container home_container">
          <div className="row gx-5 justify-content-center home_row">
            <div className="col col-xs-12 col-xl-4 left">
            {/* <div className="equal"></div> */}
              <div>
                <img src="images/home.jpg" alt="" className="home_img" />
              </div>
            </div>
            <div className="col col-xs-12 col-xl-6 right">
              <h1>Hi, I'm a Research and Teaching Assistant</h1>
              <p>
                I am currently working as a research and teaching assistant at
                the Kwame Nkrumah University of Science and Technology. I am
                passionate about using statistical techniques to solve
                real-world problems and am always looking for new opportunities
                to learn and grow as a researcher.
              </p>
              <p>
                When I'm not working or coding, I enjoy reading, playing sports,
                and spending time with my friends and family.
              </p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/henry-agbi-kaiser/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="/path/to/github/profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
