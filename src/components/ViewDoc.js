import React, { useState } from "react";
import "./ViewDoc.css";
import { useLocation } from "react-router-dom";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

function ViewDoc(props) {
  const location = useLocation();
  // const [numPages, setNumPages] = useState(null);

  const navigate = useNavigate();

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

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
        {/* <Document
          file={location.state.pdfurl}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width="800"
            />
          ))}
        </Document> */}
      </Container>
      {/* <iframe
        src={location.state.pdfurl}
        title={location.state.pdfurl}
        width="700"
        className="myiframe"
      /> */}
    </div>
  );
}

export default ViewDoc;
