import React, { useEffect, useState } from "react";
import "./ViewDoc.css";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";


const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/',
};


function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight,window.innerWidth])
  useEffect(()=>{
    const handleResize = () =>{
      setSize([window.innerHeight, Window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
  },[]);
  return size;
}

function ViewDoc(props) {
  const location = useLocation();
  const [numPages, setNumPages] = useState(null);
  const [height, width] = useWindowSize();

  const navigate = useNavigate();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="viewdoc">
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Button variant="primary" onClick={() => navigate(-1)}>
            Back
          </Button>
        </Container>
      </Navbar>
      <Container className="co1">
        <p>{location.state.pdfurl}</p>
        <Document
          file={location.state.pdfurl}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              scale='0.8'
              width={width}
            />
          ))}
        </Document>
      {/* <iframe
        src={location.state.pdfurl}
        title={location.state.pdfurl}
        width="700"
        className="myiframe"
      /> */}
      </Container>
    </div>
  );
}

export default ViewDoc;
