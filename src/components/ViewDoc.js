import React, { useState } from "react";
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


function ViewDoc(props) {
  const location = useLocation();
  const [numPages, setNumPages] = useState(null);
  const [file, setfile] = useState(location.state.pdfurl)

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
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
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
